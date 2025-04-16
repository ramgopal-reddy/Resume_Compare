import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from './SkeletonText';
import HrLine from './HrLine';

const ResumeComparator = () => {
  const [resume1, setResume1] = useState(null);
  const [resume2, setResume2] = useState(null);
  const [resume1URL, setResume1URL] = useState('');
  const [resume2URL, setResume2URL] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Clean up URLs when files change or component unmounts
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(resume1URL);
      URL.revokeObjectURL(resume2URL);
    };
  }, [resume1URL, resume2URL]);

  const handleResume1Change = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume1(file);
      setResume1URL(URL.createObjectURL(file));
    }
    setError('');
    setComparisonResult('');
  };

  const handleResume2Change = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume2(file);
      setResume2URL(URL.createObjectURL(file));
    }
    setError('');
    setComparisonResult('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume1 || !resume2) {
      setError("Please upload both resumes.");
      return;
    }

    const formData = new FormData();
    formData.append('files', resume1);
    formData.append('files', resume2);

    try {
      setLoading(true);
      const response = await axios.post('https://testing-project-rupx.onrender.com/api/compare_resumes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setComparisonResult(response.data.comparison);
    } catch (err) {
      setError(err.response?.data?.detail || "An error occurred while comparing resumes.");
    } finally {
      setLoading(false);
    }
  };

  const formatComparisonText = (text) => {
    // Optional: Bold certain keywords for emphasis
    let formatted = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // if Gemini returns Markdown-style bold
      .replace(/Resume\s*\d:/gi, '<br/><br/><strong>$&</strong>') // Highlight Resume 1 / 2 sections
      .replace(/\n/g, '<br/>'); // Convert line breaks to <br>
  
    return formatted;
  };
  

  return (
    <div className="mt-20 flex flex-col items-center">

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-20 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl"
      >
        <div className="rounded-xl p-10 shadow-sm border border-white">
          <label className="form-label">Upload Resume 1:</label>
          <input
            type="file"
            onChange={handleResume1Change}
          />
          {resume1 && (
            <div className="mt-2 text-success">
              <strong>Selected:</strong> {resume1.name}
            </div>
          )}
        </div>

        <div className="rounded-xl p-10 shadow-sm border border-white">
          <label className="form-label">Upload Resume 2:</label>
          <input
            type="file"
            onChange={handleResume2Change}
          />
          {resume2 && (
            <div className="mt-2 text-success">
              <strong>Selected:</strong> {resume2.name}
            </div>
          )}
        </div>

        <div className="col-span-full">
          <button
            type="submit"
            className="w-full rounded-xl p-10 shadow-sm"
            disabled={loading}
          >
            {loading ? <Skeleton /> : "Compare Resumes"}
          </button>
        </div>
      </form>

      <HrLine />

      {error && (
        <div className="col-span-full alert alert-danger mt-3 text-center">
          {error}
        </div>
      )}

      {comparisonResult && (
        <div className="col-span-full mt-8 p-8 shadow-sm mt-20 sm:m-1 border border-white rounded-xl">
          <h5 className="text-left mb-8">Comparison Result:</h5>
          <div
            className="text-left sm:pl-2 lg:pl-10 xl:pl-16 text-gray-900 dark:text-white text-sm"
            style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}
            dangerouslySetInnerHTML={{ __html: formatComparisonText(comparisonResult) }}
          />
        </div>
      )}
    </div>
  );
};

export default ResumeComparator;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className="container mt-5">
      <h2 className="mb-4">Compare Two Resumes</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Upload Resume 1:</label>
          <input
            type="file"
            accept="application/pdf"
            className="form-control"
            onChange={handleResume1Change}
          />
          {resume1 && (
            <>
              <div className="mt-2 text-success">
                <strong>Selected:</strong> {resume1.name}
              </div>
            </>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label">Upload Resume 2:</label>
          <input
            type="file"
            accept="application/pdf"
            className="form-control"
            onChange={handleResume2Change}
          />
          {resume2 && (
            <>
              <div className="mt-2 text-success">
                <strong>Selected:</strong> {resume2.name}
              </div>
            </>
          )}
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? (
<div role="status" class="space-y-2.5 animate-pulse max-w-lg">
    <div class="flex items-center w-full">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div class="flex items-center w-full max-w-[480px]">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div class="flex items-center w-full max-w-[400px]">
        <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <div class="flex items-center w-full max-w-[480px]">
        <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
    </div>
    <div class="flex items-center w-full max-w-[440px]">
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
    </div>
    <div class="flex items-center w-full max-w-[360px]">
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
) : "Compare Resumes"}
        </button>
      </form>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {comparisonResult && (
        <div className="alert alert-success mt-4">
        <h5>Comparison Result:</h5>
        <div
          style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}
          dangerouslySetInnerHTML={{ __html: formatComparisonText(comparisonResult) }}
        />
      </div>
      )}
    </div>
  );
};

export default ResumeComparator;

import streamlit as st
import os
from io import BytesIO
from PyPDF2 import PdfReader
import google.generativeai as genai

# Configure Google AI
genai.configure(api_key=os.getenv("API_KEY"))
model = genai.GenerativeModel('gemini-2.0-flash')

# PDF text extractor
def extract_text_from_pdf(pdf_file: BytesIO) -> str:
    pdf_reader = PdfReader(pdf_file)
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text()
    return text

# Compare two resumes using Gemini
def compare_resumes(pdf1: BytesIO, pdf2: BytesIO) -> str:
    text1 = extract_text_from_pdf(pdf1)
    text2 = extract_text_from_pdf(pdf2)

    prompt = f"""
Compare the following two resumes. Analyze strengths, weaknesses, and unique qualities of each candidate. Provide which candidate is better for a software engineering position and give a 50-word valid reason for selection.

Resume 1:
{text1}

Resume 2:
{text2}
"""
    response = model.generate_content(prompt)
    return response.text

# Streamlit UI
st.title("Resume Comparison Tool (AI-Powered)")
st.markdown("Upload two PDF resumes to compare them for a software engineering role.")

uploaded_files = st.file_uploader("Upload exactly 2 PDF resumes", type="pdf", accept_multiple_files=True)

if uploaded_files and len(uploaded_files) == 2:
    if st.button("Compare Resumes"):
        try:
            with st.spinner("Analyzing resumes..."):
                result = compare_resumes(BytesIO(uploaded_files[0].read()), BytesIO(uploaded_files[1].read()))
            st.success("Comparison complete!")
            st.text_area("Result", result, height=300)
        except Exception as e:
            st.error(f"Error: {e}")
elif uploaded_files and len(uploaded_files) != 2:
    st.warning("Please upload exactly two PDF files.")

# 📄 Resume Compare

**Resume Compare** is a full-stack web application that allows users to upload **two resumes** and receive a detailed, AI-powered side-by-side comparison. It helps candidates optimize their resumes by highlighting strengths, weaknesses, and recommending the most suitable candidate for a **software engineering role**.

---

## ✨ Features

- 📄 **Resume Comparison**: Upload two resumes and get an intelligent comparison.
- ⚡ **Fast and Accurate**: Gemini-powered comparison engine delivers instant results.
- 🔒 **Secure**: Files are processed locally and never stored permanently.
- 💡 **AI-Powered Insights**: Uses Google's Gemini 2.0 Flash model.
- 📱 **Responsive UI**: Clean and modern design for both desktop and mobile.
- 🌑 **Dark Mode Support**: Tailwind CSS dark mode for a sleek experience.

---

## 🔧 Technologies Used

### 🖥 Frontend

- **React + Vite** – Lightning-fast UI
- **Tailwind CSS** – Utility-first styling with dark mode
- **Axios** – For HTTP communication with backend
- **Headless UI & Heroicons** – Accessible components and icons
- **Custom Animations** – Smooth transitions & pulse loaders

### ⚙️ Backend

- **FastAPI** – Python web framework
- **Google Generative AI SDK** – Gemini 2.0 Flash integration
- **PyPDF2** – PDF parsing and text extraction
- **CORS Middleware** – For cross-origin requests

---

# 🤖 Gemini Generative AI Integration

This module uses **Google's Gemini 2.0 Flash** model via the `google-generativeai` Python SDK to analyze and compare two resumes. It forms the core intelligence of the **Resume Compare** app by generating a detailed and structured comparison between two candidates based on their resumes.

---

## 🚀 Features

- Integrates with **Gemini 2.0 Flash** via `google-generativeai` SDK
- Dynamically generates comparison prompts based on uploaded PDF content
- Identifies:
  - Strengths and weaknesses of each candidate
  - Unique qualities
  - A recommended candidate for a software engineering role
  - A valid justification

---


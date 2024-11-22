import React, { useState } from "react";
import "./Form.css"; 

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    skills: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Data Scientist Job Application</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="github">GitHub Profile:</label>
        <input
          type="url"
          id="github"
          name="github"
          placeholder="Enter your GitHub profile URL"
          value={formData.github}
          onChange={handleChange}
          required
        />

        <label htmlFor="linkedin">LinkedIn Profile:</label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          placeholder="Enter your LinkedIn profile URL"
          value={formData.linkedin}
          onChange={handleChange}
          required
        />

        <label htmlFor="skills">Skills (comma-separated):</label>
        <input
          type="text"
          id="skills"
          name="skills"
          placeholder="e.g., Python, SQL, Machine Learning"
          value={formData.skills}
          onChange={handleChange}
          required
        />

        <label htmlFor="experience">Years of Experience:</label>
        <input
          type="number"
          id="experience"
          name="experience"
          placeholder="Enter your years of experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />

        <label htmlFor="resume">Upload Resume:</label>
        <input type="file" id="resume" name="resume" onChange={handleFileChange} required />

        <label htmlFor="coverLetter">Cover Letter:</label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          placeholder="Write your cover letter here..."
          value={formData.coverLetter}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default Form;

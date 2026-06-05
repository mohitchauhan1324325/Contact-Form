import { useState } from "react";

const ContactForm = ({ formData, handleChange, handleSubmit }) => {

  return (

    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
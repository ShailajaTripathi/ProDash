import React from "react";
import { Link } from "react-router-dom"; // Assuming you use react-router

const About = () => {
  const features = [
    {
      title:"State Management",
description: "Leveraged Redux Toolkit to manage a global cart state, implementing complex logic for adding items, quantity adjustments, and dynamic total calculations.Used multiple React hooks (useState) to manage a 'Master List' and a 'Display List' to avoid redundant API calls when resetting filters.",
  icon: "⚙️",

    },
    {
title:"Authentication & Persistence",
description:"Architected a user session system using React Context API and LocalStorage, ensuring persistent Login/Signup data and seamless user re-entry.",
icon:"🔑"
    },
    {
      title: "Dynamic Search",
      description: "Implemented a real-time category filtering system that allows users to find products by typing their category (e.g., Electronics, Jewelery).",
      icon: "🔍",
    },
    {
      title: "Top Rated Filter",
description:"Engineered a high-performance search system using a 'Master Data' pattern, allowing instant client-side category and rating ($>4.0$) filtering without redundant API calls.",
      icon: "⭐",
    },
    {
      title: "Form Integrity",
      description: "Developed Contact and Support modules with advanced Regex-based validation, providing real-time UI feedback and preventing invalid data submission.",
      icon: "📝",
    },
    {
      title: "Tailwind UI",
      description: "Designed a fully responsive, mobile-first interface with custom hover animations, line-clamping, and shadow transitions.",
      icon: "🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Back */}
        <Link to="/">
        <div className="mb-12">
           <button className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
             &larr; Back to Shop
           </button>
        </div>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
            About This <span className="text-indigo-600">Project</span>
          </h1>
          <p className="mt-4 text-xl text-slate-500">
            A high-performance product listing page built with React,Redux Toolkit, Tailwind CSS, and the FakeStore API.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Stack Section */}
        <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Technical Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["React.js", "Redux Toolkit", "Context API", "Tailwind CSS", "JavaScript (ES6+)", "REST API", "State Optimization"].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center text-slate-400 text-sm">
          <p>Production Listing Project &copy; 2026</p>
        </div>
      </div>
    </div>
  );
};

export default About;
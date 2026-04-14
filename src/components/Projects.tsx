"use client";

import React from "react";
import { ArrowUpRight, GraduationCap, Briefcase, Code2, Award } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Digital Library Management System",
    description: "Designed to bridge the gap between traditional manual library records and the modern digital era. Features a secure, 3D-inspired Neumorphic dashboard and utilizes MySQL Triggers to handle core business logic at the database level for exceptional reliability and speed.",
    url: "#" // can be updated if there's a link
  },
  {
    title: "Multimodal RAG System",
    description: "AI-Powered PDF & Image Chat. Upload documents, ask questions in natural language, and get instant answers. Uses advanced AI (Google Gemini + RAG) to search across documents, read text/images, and automatically generate beautifully formatted study notes.",
    url: "#"
  }
];

const skills = [
  "HTML", "CSS", "JAVASCRIPT", "JAVA", "PYTHON", "GIT", "GITHUB", "MySQL", "C", "C++" // Adding basic ones assuming from text
];

export default function Projects() {
  return (
    <section className="relative z-20 w-full min-h-screen bg-[#121212] pt-32 pb-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Experience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-gray-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Experience</h2>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">Junior Developer</h3>
                <h4 className="text-xl text-gray-400 mt-1">JB PORTALS</h4>
              </div>
              <span className="text-gray-500 mt-4 md:mt-0 font-mono">Mar 2023 - Jun 2023</span>
            </div>
            <p className="text-gray-300 leading-relaxed font-light">
              Actively contributed to multiple development projects involving research, data analysis, and project execution. Assisted in application development using Java, web technologies, and database systems to support organizational goals. Collaborated closely with team members during project planning and implementation, supported day-to-day development activities, and gained practical exposure to real-world software development processes.
            </p>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Code2 className="text-gray-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.a 
                href={project.url} 
                key={i}
                className="group relative block overflow-hidden rounded-3xl p-8 md:p-10 transition-all duration-500 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 backdrop-blur-md"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:bg-white/10">
                    <ArrowUpRight className="text-white/60 group-hover:text-white" size={20} />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-4">{project.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-light">{project.description}</p>
                </div>

                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-white/0 blur-2xl transition-all duration-700 group-hover:bg-white/10 pointer-events-none" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Core Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium tracking-wide">
                {skill}
              </span>
            ))}
            <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium tracking-wide">COMMUNICATION</span>
            <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium tracking-wide">PROBLEM SOLVING</span>
            <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium tracking-wide">MULTITASKING</span>
          </div>
        </motion.div>

        {/* Education & Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-gray-400" size={28} />
              <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">B.E in CSE</h3>
              <p className="text-gray-400 mb-4">(IoT and Cybersecurity Including Blockchain Technology)</p>
              <h4 className="text-lg text-gray-300">Cambridge Institute Of Technology, Bangalore</h4>
              <p className="text-gray-500 mt-6 font-mono text-sm">Expected Jun 2027</p>
            </div>
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-8">
              <Award className="text-gray-400" size={28} />
              <h2 className="text-3xl font-bold text-white tracking-tight">Achievements & Certifications</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex-1 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Highlights</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 font-light leading-relaxed">
                  <li>Maintained 8.93 CGPA throughout diploma</li>
                  <li>Successfully completed 16-week industrial training at JB Portals</li>
                </ul>
              </div>
              <div className="h-px w-full bg-white/10" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Certifications</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2 font-light leading-relaxed">
                  <li>Front End Web Developer — Infosys Springboard</li>
                  <li>Java Foundation Certification — Infosys Springboard</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

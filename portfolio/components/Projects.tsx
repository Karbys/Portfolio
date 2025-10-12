'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration for seamless online shopping experiences.',
      image: '/api/placeholder/400/300',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and project tracking.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: '📋'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: '🌤️'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, real-time transactions, and financial management tools.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'Firebase', 'Biometrics', 'REST API'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      icon: '🏦'
    },
    {
      id: 5,
      title: 'AI Chat Assistant',
      description: 'An intelligent chat assistant powered by machine learning with natural language processing and contextual understanding.',
      image: '/api/placeholder/400/300',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket'],
      category: 'ai',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: '🤖'
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics dashboard for social media performance tracking, insights, and engagement metrics.',
      image: '/api/placeholder/400/300',
      technologies: ['Vue.js', 'D3.js', 'Python', 'Redis'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      icon: '📊'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience 
              in different technologies and domains.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              {activeFilter === 'all' ? 'All Projects' : `${categories.find(c => c.id === activeFilter)?.name}`}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group flex flex-col h-full"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-5xl opacity-90 group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description with fixed height */}
                    <div className="flex-grow mb-4">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 h-16 flex items-start">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies with fixed height */}
                    <div className="flex flex-wrap gap-2 mb-6 min-h-[2.5rem] items-start">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons - Always at bottom */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                      >
                        🚀 Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 border-2 border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg text-sm font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
                      >
                        💻 GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-200"
            >
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

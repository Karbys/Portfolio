'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">3+</span>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Passionate Developer with Creative Vision
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a full-stack developer with over 3 years of experience building 
                web applications. I love creating user-friendly interfaces and 
                robust backend systems that solve real-world problems.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                My journey in programming started with curiosity and has evolved into 
                a passion for clean code, modern technologies, and continuous learning. 
                I believe in the power of technology to make a positive impact.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>

              {/* Download CV Button */}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </button>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              My Journey
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Senior Full Stack Developer
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">Company Name • 2022 - Present</p>
                  <p className="text-gray-600">
                    Leading development of scalable web applications using React, Node.js, and cloud technologies.
                    Mentoring junior developers and implementing best practices.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Full Stack Developer
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">Previous Company • 2020 - 2022</p>
                  <p className="text-gray-600">
                    Developed and maintained web applications using modern frameworks.
                    Collaborated with cross-functional teams to deliver high-quality products.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Frontend Developer
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">Startup Company • 2019 - 2020</p>
                  <p className="text-gray-600">
                    Built responsive user interfaces and implemented interactive features
                    using React and modern CSS frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

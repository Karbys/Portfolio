'use client';

export default function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'MongoDB', level: 65 },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading frontend development for multiple web applications using React and Next.js.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc.',
      period: '2020 - 2022',
      description: 'Developed full-stack web applications from concept to deployment.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: 'Created responsive websites and web applications for various clients.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm a passionate developer with over 5 years of experience in creating 
              digital experiences that are both beautiful and functional.
            </p>
          </div>

          {/* Grid Layout 2x2 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Top Left - My Story */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I started my journey as a developer in 2019, and since then I've been 
                  passionate about creating digital solutions that make a difference. 
                  I love working with modern technologies and staying up-to-date with 
                  the latest trends in web development.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with 
                  the developer community. I believe in continuous learning and 
                  always strive to improve my skills.
                </p>
                <p>
                  My goal is to create applications that not only meet the requirements 
                  but exceed expectations in terms of user experience, performance, 
                  and maintainability.
                </p>
              </div>
            </div>

            {/* Top Right - Skills & Technologies */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills & Technologies</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Left - Experience Timeline */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Right - Stats */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                  <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

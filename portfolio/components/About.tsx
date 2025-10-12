'use client';

import AnimationWrapper from './AnimationWrapper';

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
          <AnimationWrapper animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                I'm a passionate developer with over 5 years of experience in creating 
                digital experiences that are both beautiful and functional.
              </p>
            </div>
          </AnimationWrapper>

          {/* Grid Layout 2x2 */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Top Left - My Story */}
            <AnimationWrapper animation="fadeInLeft" delay={200}>
              <div className="lg:col-span-1 hover-lift">
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
            </AnimationWrapper>

            {/* Top Right - Skills & Technologies */}
            <AnimationWrapper animation="fadeInRight" delay={400}>
              <div className="lg:col-span-1 hover-lift">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills & Technologies</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse-glow"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>

            {/* Bottom Left - Experience Timeline */}
            <AnimationWrapper animation="fadeInLeft" delay={600}>
              <div className="lg:col-span-1 hover-lift">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-blue-200 group">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full animate-pulse-glow"></div>
                      <div className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{exp.title}</h4>
                        <p className="text-blue-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>

            {/* Bottom Right - Stats */}
            <AnimationWrapper animation="fadeInRight" delay={800}>
              <div className="lg:col-span-1 hover-lift">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Achievements</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '5+', label: 'Years Experience', color: 'blue', bg: 'bg-blue-50', hoverBg: 'hover:bg-blue-100' },
                    { number: '50+', label: 'Projects Completed', color: 'purple', bg: 'bg-purple-50', hoverBg: 'hover:bg-purple-100' },
                    { number: '30+', label: 'Happy Clients', color: 'green', bg: 'bg-green-50', hoverBg: 'hover:bg-green-100' },
                    { number: '24/7', label: 'Support', color: 'orange', bg: 'bg-orange-50', hoverBg: 'hover:bg-orange-100' }
                  ].map((stat, index) => (
                    <div key={index} className={`text-center p-6 ${stat.bg} rounded-lg ${stat.hoverBg} transition-all duration-300 hover-lift hover-glow group`}>
                      <div className={`text-3xl font-bold text-${stat.color}-600 mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-600 group-hover:text-gray-800 transition-colors">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

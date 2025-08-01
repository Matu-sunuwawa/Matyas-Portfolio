"use client"

import { Github, Linkedin, Mail, ExternalLink, Code, Server, Database, Globe } from 'lucide-react'

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg border border-slate-200 shadow-sm ${className || ''}`}>{children}</div>
)
const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => <div className={`p-6 ${className || ''}`}>{children}</div>
const CardTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => <h3 className={`text-lg font-semibold ${className || ''}`}>{children}</h3>
const CardDescription = ({ children, className }: { children: React.ReactNode; className?: string }) => <p className={`text-sm text-slate-500 ${className || ''}`}>{children}</p>
const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => <div className={`p-6 pt-0 ${className || ''}`}>{children}</div>
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${className || ''}`}>{children}</span>
)

export default function Portfolio() {
  const skills = [
    "Python", "Django", "JavaScript", "React", "Wagtail CMS", "Django REST Framework",
    "PostgreSQL", "Docker", "AWS", "DigitalOcean", "NGINX", "Ubuntu", "SSL Setup", "DevOps"
  ]

  const projects = [
    {
      title: "OllaTimirt",
      description: "A comprehensive mentorship platform connecting freelancers and parents. Features user authentication, payment integration, and admin panel management.",
      image: "/images/olla-timirt.jpg",
      tech: ["Django", "Python", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
      link: "#",
    },
    {
      title: "Django Server Management",
      description: "Multi-client server management tool for API keys and data loading with user management and standalone server instances for flexibility and security.",
      image: "/images/django-project-att.png",
      tech: ["Django", "HTML5", "CSS3", "Python"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">Matyas Sina</div>
          <nav className="hidden md:flex items-center space-x-6 text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <img src="/images/my-pic.jpg" alt="Matyas Sina" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Matyas Sina
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-6">
              Django/Wagtail Developer | DevOps | React Native | Entrepreneur
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              Full-stack developer with expertise in Python, Django, and cloud infrastructure. Passionate about building scalable web applications and mentoring others.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md">
                <Mail className="mr-2 h-5 w-5" /> Get In Touch
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-md">
                <Github className="mr-2 h-5 w-5" /> View Projects
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 mb-6">
                  I'm a passionate full-stack developer from Ethiopia, currently studying at Adama Science and Technology University. With over 246 hours of successful freelance work and a 100% job success rate on Upwork, I specialize in creating robust web applications using Django and modern web technologies.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  My expertise spans from backend development with Python and Django to cloud infrastructure management with AWS, DigitalOcean, and various DevOps tools. I'm committed to delivering high-performance, secure web applications.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/matyas-sina-5872b0275/" className="text-blue-600 hover:text-blue-800"><Linkedin className="h-6 w-6" /></a>
                  <a href="https://github.com/Matu-sunuwawa" className="text-slate-600 hover:text-slate-800"><Github className="h-6 w-6" /></a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="p-6 mt-2">
                    <Code className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <h3 className="font-semibold">4+ Projects</h3>
                    <p className="text-sm text-slate-500">Completed</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6 mt-2">
                    <Server className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <h3 className="font-semibold">100% Success</h3>
                    <p className="text-sm text-slate-500">Job Rate</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6 mt-2">
                    <Database className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <h3 className="font-semibold">246+ Hours</h3>
                    <p className="text-sm text-slate-500">Development</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6 mt-2">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                    <h3 className="font-semibold">$2K+ Earned</h3>
                    <p className="text-sm text-slate-500">Total Earnings</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="aspect-video overflow-hidden">
                    <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-blue-100 text-blue-800">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} className="text-sm py-2 px-4 bg-slate-100 text-slate-700 border border-slate-200 hover:bg-blue-100 hover:border-blue-300 hover:text-blue-800 transition-all duration-200 cursor-pointer">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Whether you need a full-stack web application or cloud infrastructure setup, let's connect!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="mailto:matyassinaadugna@gmail.com" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors shadow-lg w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" /> matyassinaadugna@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/matyas-sina-5872b0275/" className="inline-flex items-center justify-center px-8 py-3 border border-blue-300 text-base font-medium rounded-md text-white hover:bg-white/20 transition-colors w-full sm:w-auto">
                <Linkedin className="mr-2 h-5 w-5" /> View LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="container mx-auto text-center text-slate-400">
          <p>&copy; 2025 Matyas Sina. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
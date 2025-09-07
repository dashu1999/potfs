import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-xl font-semibold">DarshanKumar Thummar</div>
        <div className="space-x-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="/resume.pdf" className="ml-2 inline-block px-4 py-2 rounded-2xl border border-gray-300 hover:bg-gray-100">Resume</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Full Stack MERN Developer
            <span className="block text-indigo-600 mt-2">Building responsive web apps & delightful user experiences</span>
          </h1>

          <p className="mt-6 text-gray-700">I design and build production-ready web applications using React, Node.js, and MongoDB. I enjoy turning complex problems into elegant, performant solutions and mentoring teams to ship great software.</p>

          <div className="mt-6 flex items-center gap-3">
            <a href="/resume.pdf" className="px-6 py-3 rounded-full bg-indigo-600 text-white font-medium shadow">Download Resume</a>
            <a href="#projects" className="px-4 py-3 rounded-full border border-gray-300">View Projects</a>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
            <li><strong>Location:</strong> Birmingham, UK</li>
            <li><strong>Email:</strong> itdarshan1999@gmail.com</li>
            <li><strong>LinkedIn:</strong> /in/darshan-thummar</li>
            <li><strong>GitHub:</strong> /DarshanThummar</li>
          </ul>
        </motion.div>

        <motion.div className="p-6 rounded-2xl bg-white shadow" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h3 className="text-lg font-semibold">Skills & Tech</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div>
              <h4 className="font-medium">Frontend</h4>
              <p>React, JavaScript (ES6+), HTML5, CSS3, TailwindCSS, Bootstrap</p>
            </div>
            <div>
              <h4 className="font-medium">Backend</h4>
              <p>Node.js, Express.js, REST APIs, Authentication</p>
            </div>
            <div>
              <h4 className="font-medium">Databases</h4>
              <p>MongoDB, SQL</p>
            </div>
            <div>
              <h4 className="font-medium">Tools</h4>
              <p>Git, Postman, VS Code, AWS (basics)</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium">Professional Strengths</h4>
            <ul className="mt-2 text-sm list-disc list-inside text-gray-600">
              <li>Agile & Scrum</li>
              <li>Code reviews & mentoring</li>
              <li>Performance optimisation (improved speed by 35%)</li>
            </ul>
          </div>
        </motion.div>
      </header>

      {/* Projects */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section id="projects" className="mt-8">
          <h2 className="text-2xl font-bold">Selected Projects</h2>
          <p className="text-gray-600 mt-2">A few highlights showing the tech stack and the impact.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <article className="bg-white p-6 rounded-2xl shadow">
              <img src="/images/ecommerce.png" alt="E-commerce Platform" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-lg">E-commerce Platform</h3>
              <p className="text-sm text-gray-600 mt-2">React, Node.js, MongoDB — Built a full-featured e-commerce site with shopping cart, payment integration and admin panel.</p>
              <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                <li>Increased customer engagement by 40%</li>
                <li>Reduced checkout time by 25%</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a className="text-sm underline" href="https://ecommerce-demo.vercel.app" target="_blank">Live Demo</a>
                <a className="text-sm underline" href="https://github.com/DarshanThummar/ecommerce-platform" target="_blank">Source</a>
              </div>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow">
              <img src="/images/medical-stock.png" alt="Medical Stock Management System" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-lg">Medical Stock Management System</h3>
              <p className="text-sm text-gray-600 mt-2">Node.js, Express, MongoDB — Real-time inventory management with automated reporting and alerts.</p>
              <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                <li>Improved stock utilisation by 30%</li>
                <li>Automated reporting reduced manual work</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a className="text-sm underline" href="https://medicalstock-demo.vercel.app" target="_blank">Case Study</a>
                <a className="text-sm underline" href="https://github.com/DarshanThummar/medical-stock-management" target="_blank">Source</a>
              </div>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow">
              <img src="/images/portfolio.png" alt="Personal Portfolio UI" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-lg">Personal Portfolio UI (This Site)</h3>
              <p className="text-sm text-gray-600 mt-2">React, TailwindCSS — Responsive portfolio with project showcase and contact form.</p>
              <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                <li>Modular components for quick updates</li>
                <li>Designed for recruiter & client clarity</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a className="text-sm underline" href="https://portfolio-demo.vercel.app" target="_blank">Live</a>
                <a className="text-sm underline" href="https://github.com/DarshanThummar/portfolio-site" target="_blank">Source</a>
              </div>
            </article>

            <article className="bg-white p-6 rounded-2xl shadow">
              <img src="/images/mern-app.png" alt="Full Stack MERN App" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-lg">Full Stack MERN App</h3>
              <p className="text-sm text-gray-600 mt-2">Authentication, API integrations, secure data handling and deployment pipeline.</p>
              <ul className="mt-3 text-sm text-gray-600 list-disc list-inside">
                <li>Authentication & role-based access</li>
                <li>Deployed to cloud with CI/CD</li>
              </ul>
              <div className="mt-4 flex gap-3">
                <a className="text-sm underline" href="https://mernapp-demo.vercel.app" target="_blank">Live</a>
                <a className="text-sm underline" href="https://github.com/DarshanThummar/mern-fullstack-app" target="_blank">Source</a>
              </div>
            </article>
          </div>
        </section>

        {/* Experience & Contact sections */}
        <section id="experience" className="mt-14">
          <h2 className="text-2xl font-bold">Experience</h2>
          {/* Experience content */}
        </section>

        <section id="contact" className="mt-14 bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-gray-600 mt-2">I'm open to job opportunities and freelance projects. Reach out and let's build something great.</p>
          <form name="contact" method="POST" data-netlify="true" className="mt-6 grid md:grid-cols-2 gap-4">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" placeholder="Your name" className="p-3 border rounded" required />
            <input type="email" name="email" placeholder="Your email" className="p-3 border rounded" required />
            <input type="text" name="subject" placeholder="Subject" className="p-3 border rounded md:col-span-2" required />
            <textarea name="message" placeholder="Message" className="p-3 border rounded md:col-span-2 h-28" required />
            <button type="submit" className="md:col-span-2 py-3 rounded-2xl bg-indigo-600 text-white">Send Message</button>
          </form>
        </section>

        <footer className="mt-12 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} DarshanKumar Thummar — Built with React & TailwindCSS
        </footer>
      </main>
    </div>
  );
}

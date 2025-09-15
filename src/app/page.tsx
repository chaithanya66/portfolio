// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

// next code:::::

// "use client";
// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="max-w-6xl mx-auto p-6 space-y-24">
//       {/* Hero */}
//       <motion.section
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center space-y-6"
//       >
//         <h1 className="text-5xl font-bold text-yellow-500">
//           Chaithanya Neelam
//         </h1>
//         <p className="text-xl text-gray-600 dark:text-gray-300">
//           Frontend Developer | React | Next.js | Tailwind | SQL
//         </p>
//         <a
//           href="/projects"
//           className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow hover:scale-105 transition"
//         >
//           View My Work 🚀
//         </a>
//       </motion.section>

//       {/* About */}
//       <motion.section
//         initial={{ opacity: 0, x: -80 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="space-y-4"
//       >
//         <h2 className="text-3xl font-bold border-b-4 border-yellow-500 inline-block pb-1">
//           About Me
//         </h2>
//         <p>
//           I am a passionate developer with expertise in **Frontend Development**
//           and experience working on projects like Travel Planning Platform,
//           Retail Shop Management System, Task Management App, and more.
//         </p>
//         <p>
//           📚 Education: Bachelor’s in Computer Science 🎓 Certification: Oracle
//           Certified in SQL
//         </p>
//       </motion.section>
//     </div>
//   );
// }

// app/page.tsx

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import AnimeCharacter from "./components/AnimeCharacter";

// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
// };

// export default function Page() {
//   const tech = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React.js",
//     "Next.js",
//     "MySQL",
//     "Node.js",
//     "Express.js",
//     "Tailwind CSS",
//     "Python",
//   ];
//   const languages = ["Telugu", "English", "Tamil", "Hindi"];

//   return (
//     <div className="min-h-screen">
//       {/* NAV */}
//       <header className="fixed top-4 left-0 right-0 z-50">
//         <div className="max-w-6xl mx-auto px-6 flex items-center justify-between bg-white/60 backdrop-blur-md rounded-xl shadow-md py-3">
//           <a href="#hero" className="font-extrabold text-2xl text-purple-700">
//             Chaithanya
//           </a>
//           <nav className="space-x-6 hidden md:flex items-center">
//             {[
//               "about",
//               "education",
//               "certifications",
//               "projects",
//               "skills",
//               "contact",
//             ].map((s) => (
//               <a
//                 key={s}
//                 href={`#${s}`}
//                 className="text-slate-700 hover:text-purple-600 transition"
//               >
//                 {s.charAt(0).toUpperCase() + s.slice(1)}
//               </a>
//             ))}
//           </nav>
//           <div className="md:hidden">
//             {" "}
//             {/* mobile simple anchor */}
//             <a href="#about" className="text-slate-700">
//               Menu
//             </a>
//           </div>
//         </div>
//       </header>

//       {/* HERO */}
//       <section id="hero" className="relative min-h-[78vh] flex items-center">
//         {/* background pastel shapes */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute -left-28 -top-24 w-96 h-96 rounded-full bg-purple-200 opacity-30 blur-3xl animate-slowSpin"></div>
//           <div className="absolute right-[-80px] top-40 w-72 h-72 rounded-full bg-pink-200 opacity-20 blur-2xl"></div>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
//           <div className="flex-1">
//             <motion.h1
//               initial="hidden"
//               whileInView="show"
//               variants={fadeIn}
//               className="text-5xl md:text-6xl font-extrabold text-slate-900"
//             >
//               Hi, I’m <span className="text-purple-600">Chaithanya</span>
//             </motion.h1>
//             <motion.p
//               initial="hidden"
//               whileInView="show"
//               variants={fadeIn}
//               className="mt-4 text-lg text-slate-600 max-w-xl"
//             >
//               Full-stack developer building great experiences with{" "}
//               <span className="font-medium text-purple-600">
//                 React • Next.js • Node
//               </span>{" "}
//               and more.
//             </motion.p>

//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               variants={fadeIn}
//               className="mt-6 flex gap-4"
//             >
//               <a
//                 href="#projects"
//                 className="px-5 py-3 bg-purple-600 text-white rounded-lg shadow hover:scale-105 transition"
//               >
//                 See projects
//               </a>
//               <a
//                 href="#contact"
//                 className="px-5 py-3 border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition"
//               >
//                 Contact
//               </a>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               variants={fadeIn}
//               className="mt-6 flex gap-6"
//             >
//               <div>
//                 <div className="text-sm text-slate-500">Years experience</div>
//                 <div className="text-2xl font-bold">3+</div>
//               </div>
//               <div>
//                 <div className="text-sm text-slate-500">Projects</div>
//                 <div className="text-2xl font-bold">40+</div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Anime character in hero (interactive) */}
//           <div className="w-full md:w-[420px]">
//             <AnimeCharacter size={380} />
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section id="about" className="py-20">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.h2
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="text-3xl font-bold text-slate-900"
//           >
//             About
//           </motion.h2>
//           <motion.p
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="mt-4 text-slate-600"
//           >
//             I’m a full stack developer (HTML, CSS, JavaScript, React.js,
//             Next.js, MySQL, Node.js, Express.js, Tailwind.css, Python). I love
//             turning ideas into polished web apps and dashboards.
//           </motion.p>
//         </div>
//       </section>

//       {/* EDUCATION */}
//       <section id="education" className="py-12 bg-white/40">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.h3
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="text-2xl font-semibold"
//           >
//             Education
//           </motion.h3>
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="mt-4 p-6 bg-white rounded-lg shadow"
//           >
//             <div className="font-semibold">B.Tech — Computer Science</div>
//             <div className="text-sm text-slate-500">Year: 2020 - 2024</div>
//           </motion.div>
//         </div>
//       </section>

//       {/* CERTS */}
//       <section id="certifications" className="py-12">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.h3
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="text-2xl font-semibold"
//           >
//             Certifications
//           </motion.h3>
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="mt-4 p-6 bg-white rounded-lg shadow"
//           >
//             <div className="font-semibold">
//               Oracle — SQL Certified Associate (2024)
//             </div>
//             <div className="text-sm text-slate-500 mt-2">
//               Hands-on queries, design and analytics.
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* PROJECTS timeline */}
//       <section id="projects" className="py-16 bg-white/30">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.h2
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="text-3xl font-bold"
//           >
//             Projects
//           </motion.h2>
//           <div className="mt-8 relative">
//             <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-purple-300 h-full rounded"></div>

//             {[
//               {
//                 title: "Retail Shop Management",
//                 desc: "Inventory, sales, dashboard, POS.",
//               },
//               {
//                 title: "Travel Planner",
//                 desc: "Maps, plans and route optimization.",
//               },
//               {
//                 title: "Task Manager",
//                 desc: "Team tasks, deadlines and reminders.",
//               },
//             ].map((p, idx) => (
//               <motion.article
//                 initial="hidden"
//                 whileInView="show"
//                 key={idx}
//                 variants={fadeIn}
//                 className={`mb-12 w-1/2 ${
//                   idx % 2 === 0
//                     ? "ml-auto pr-8 text-right"
//                     : "mr-auto pl-8 text-left"
//                 }`}
//               >
//                 <div className="bg-white p-6 rounded-lg shadow">
//                   <div className="font-semibold text-lg text-slate-900">
//                     {p.title}
//                   </div>
//                   <div className="text-sm text-slate-600 mt-2">{p.desc}</div>
//                 </div>
//                 <div className="w-4 h-4 bg-purple-600 rounded-full absolute ${''} top-8 left-1/2 -translate-x-1/2"></div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SKILLS & Languages */}
//       <section id="skills" className="py-16">
//         <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
//           <div>
//             <motion.h3
//               initial="hidden"
//               whileInView="show"
//               variants={fadeIn}
//               className="text-2xl font-semibold"
//             >
//               Tech Stack
//             </motion.h3>
//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               variants={fadeIn}
//               className="mt-4 flex flex-wrap gap-3"
//             >
//               {tech.map((t) => (
//                 <span
//                   key={t}
//                   className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
//                 >
//                   {t}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//           <div>
//             <motion.h3
//               initial="hidden"
//               whileInView="show"
//               variants={fadeIn}
//               className="text-2xl font-semibold"
//             >
//               Languages
//             </motion.h3>
//             <motion.div
//               initial="hidden"
//               whileInView="show"
//               variants={fadeIn}
//               className="mt-4 flex flex-wrap gap-3"
//             >
//               {languages.map((l) => (
//                 <span
//                   key={l}
//                   className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
//                 >
//                   {l}
//                 </span>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section id="contact" className="py-16 bg-white/40">
//         <div className="max-w-5xl mx-auto px-6">
//           <motion.h2
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="text-3xl font-bold"
//           >
//             Contact
//           </motion.h2>
//           <motion.form
//             initial="hidden"
//             whileInView="show"
//             variants={fadeIn}
//             className="mt-6 grid gap-4 max-w-xl"
//           >
//             <input className="p-3 rounded border" placeholder="Name" />
//             <input className="p-3 rounded border" placeholder="Email" />
//             <textarea
//               className="p-3 rounded border"
//               rows={5}
//               placeholder="Message"
//             />
//             <button
//               type="button"
//               className="bg-purple-600 text-white px-4 py-2 rounded"
//             >
//               Send
//             </button>
//           </motion.form>
//         </div>
//       </section>

//       <footer className="py-8 text-center text-sm text-slate-600">
//         © {new Date().getFullYear()} Chaithanya — Full Stack Developer
//       </footer>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import AnimeCharacter from "./components/AnimeCharacter";

// const sections = [
//   { id: "home", label: "" },
//   { id: "about", label: "Intro" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full">
//       {/* 🌐 Navbar */}
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50">
//         <ul className="flex justify-center space-x-10 py-5 font-semibold text-gray-800">
//           {sections.map((section) => (
//             <li key={section.id}>
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-600 transition text-lg"
//               >
//                 {section.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 relative overflow-hidden"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
//             Chaithanya Neelam
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-700 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>

//         {/* Anime Character smaller and below */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//           className="mt-10"
//         >
//           <AnimeCharacter size={280} />
//         </motion.div>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-white"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-6xl font-bold mb-4"
//         >
//           Chaithanya Neelam
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-2xl text-gray-600"
//         >
//           MERN Stack Developer | Next.js Enthusiast 🚀
//         </motion.p>
//       </section>

//       {/* 📂 Projects Section */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-12 text-purple-700"
//         >
//           My Projects
//         </motion.h2>
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
//           {[
//             "Retail Shop Management",
//             "Travel Planning Platform",
//             "Task Manager",
//           ].map((project, idx) => (
//             <motion.div
//               key={project}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.3, duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
//             >
//               <h3 className="text-xl font-bold mb-2">{project}</h3>
//               <p className="text-gray-600">
//                 Description about {project} with features and tech stack.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 🛠 Skills Section */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-white"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8"
//         >
//           Tech Stack
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-6 justify-center max-w-2xl"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <span
//               key={skill}
//               className="px-6 py-3 bg-purple-100 text-purple-700 font-medium rounded-xl shadow"
//             >
//               {skill}
//             </span>
//           ))}
//         </motion.div>
//       </section>

//       {/* 🌍 Languages Section */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-blue-100"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8"
//         >
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="px-6 py-3 bg-white text-blue-700 rounded-xl shadow"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact Section */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-white"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8"
//         >
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import AnimeCharacter from "./components/AnimeCharacter";

// const sections = [
//   { id: "home", label: "" },
//   { id: "about", label: "Intro" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full font-sans">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-md">
//         <ul className="flex justify-center space-x-10 py-5 font-semibold text-gray-900">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//               className="transition"
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-600 transition text-lg"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 relative overflow-hidden"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
//             Chaithanya Neelam
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-700 font-medium z-10"
//         >
//           Full Stack Developer 🚀
//         </motion.p>

//         {/* Anime Character */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.2 }}
//           className="mt-10"
//         >
//           <AnimeCharacter size={280} />
//         </motion.div>

//         {/* Floating bubbles animation */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(10)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-8 h-8 bg-purple-400 rounded-full opacity-40"
//               initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 5 + 5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-100 via-white to-gray-200"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-6xl font-bold mb-4 text-purple-700"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-2xl text-gray-700 max-w-2xl text-center leading-relaxed"
//         >
//           I am a{" "}
//           <span className="font-bold text-purple-600">
//             Full Stack Developer
//           </span>{" "}
//           skilled in building scalable web applications using{" "}
//           <span className="font-semibold text-pink-500">
//             React.js, Next.js, Node.js, Express.js, and MySQL
//           </span>
//           . Passionate about crafting smooth UIs with{" "}
//           <span className="font-semibold text-blue-500">Tailwind CSS</span> and
//           exploring the power of{" "}
//           <span className="font-semibold text-indigo-600">Python</span>.
//         </motion.p>
//       </section>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import AnimeCharacter from "./components/AnimeCharacter";

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-10 py-5 font-semibold text-gray-300">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.2, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition text-lg"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya Neelam
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer 🚀
//         </motion.p>

//         {/* Anime Character */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className="mt-10"
//         >
//           <AnimeCharacter size={300} />
//         </motion.div>

//         {/* Floating glowing orbs */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-8 h-8 bg-purple-500 rounded-full opacity-20 blur-2xl"
//               initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 8 + 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-6xl font-bold mb-4 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a <span className="text-purple-400">Full Stack Developer</span>{" "}
//           skilled in building scalable apps with{" "}
//           <span className="text-pink-400">React.js, Next.js, Node.js</span> and
//           <span className="text-blue-400"> Express.js, MySQL</span>. I craft
//           smooth UIs with
//           <span className="text-indigo-400"> Tailwind CSS</span>.
//         </motion.p>
//       </section>

//       {/* 📂 Projects Section */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-12 text-purple-400"
//         >
//           My Projects
//         </motion.h2>
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
//           {[
//             "Retail Shop Management",
//             "Travel Planning Platform",
//             "Task Manager",
//           ].map((project, idx) => (
//             <motion.div
//               key={project}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.3, duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-purple-400 transition"
//             >
//               <h3 className="text-xl font-bold mb-2 text-purple-300">
//                 {project}
//               </h3>
//               <p className="text-gray-400">
//                 Description about {project} with features and tech stack.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 🛠 Skills Section */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Tech Stack
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-6 justify-center max-w-2xl"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{ scale: 1.2 }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </motion.div>
//       </section>

//       {/* 🌍 Languages Section */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact Section */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import AnimeCharacter from "./components/AnimeCharacter";

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-10 py-5 font-semibold text-gray-300">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.2, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition text-lg"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>

//         {/* Anime Character */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className="mt-10"
//         >
//           <AnimeCharacter size={280} />
//         </motion.div>

//         {/* Floating glowing bubbles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 x: Math.random() * window.innerWidth,
//                 scale: Math.random() * 0.8 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 10 + 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> with
//           skills in{" "}
//           <span className="text-pink-400">
//             React.js, Next.js, Node.js, Express.js
//           </span>{" "}
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and designing modern UIs.
//         </motion.p>
//       </section>

//       {/* 📂 Projects Timeline Section */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-16 text-purple-400"
//         >
//           My Projects
//         </motion.h2>

//         {/* Dotted line timeline */}
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>

//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "Task Manager",
//                 desc: "A team-based task manager with user authentication, task assignments, and notifications.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <h3 className="text-2xl font-bold text-purple-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills Section */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Tech Stack
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-6 justify-center max-w-3xl"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </motion.div>
//       </section>

//       {/* 🌍 Languages Section */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact Section */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// app/page.tsx

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// // Bubble background effect
// const Bubbles = () => {
//   const bubbles = Array.from({ length: 15 });
//   return (
//     <div className="absolute inset-0 overflow-hidden -z-10">
//       {bubbles.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-8 h-8 bg-purple-500/20 rounded-full"
//           animate={{
//             y: ["100vh", "-20vh"],
//             x: ["0vw", "100vw"],
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 15 + i * 2,
//             repeat: Infinity,
//             delay: i * 1.5,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Fade-in animation preset
// const fadeIn = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.8 },
//   }),
// };

// export default function PortfolioPage() {
//   return (
//     <main className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full flex justify-center space-x-8 py-4 backdrop-blur-md bg-black/30 z-50">
//         {["Home", "About", "Projects", "Skills", "Languages", "Contact"].map(
//           (section) => (
//             <a
//               key={section}
//               href={`#${section.toLowerCase()}`}
//               className="hover:text-purple-400 transition-colors"
//             >
//               {section}
//             </a>
//           )
//         )}
//       </nav>

//       {/* Home Section */}
//       <section
//         id="home"
//         className="flex flex-col items-center justify-center min-h-screen relative"
//       >
//         <Bubbles />
//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           custom={0}
//           variants={fadeIn}
//           className="text-6xl font-extrabold text-purple-400 mb-6"
//         >
//           Chaithanya Neelam
//         </motion.h1>
//         <motion.p
//           initial="hidden"
//           animate="visible"
//           custom={1}
//           variants={fadeIn}
//           className="text-2xl text-gray-300"
//         >
//           Full Stack Developer | MERN | Next.js
//         </motion.p>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-4"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="max-w-2xl text-gray-400 leading-relaxed"
//         >
//           I am a passionate Full Stack Developer skilled in building web apps
//           using HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js,
//           MySQL, and TailwindCSS. I also explore Python and love solving
//           real-world problems with code.
//         </motion.p>
//       </section>

//       {/* Projects Section */}
//       <section
//         id="projects"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-12"
//         >
//           Projects
//         </motion.h2>

//         <div className="relative border-l-2 border-dotted border-purple-500 pl-8 space-y-12 max-w-xl">
//           {[
//             {
//               title: "Retail Shop Management System",
//               link: "https://retail-shop-management-kbx5.vercel.app/login",
//             },
//             {
//               title: "Travel Planning Platform",
//               link: "https://routaviva.onrender.com/modules/signup/signup.html",
//             },
//             {
//               title: "URL Shortener",
//               link: "https://shorturl-826q.onrender.com/",
//             },
//           ].map((project, i) => (
//             <motion.div
//               key={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//               custom={i}
//               className="relative"
//             >
//               <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-purple-500"></div>
//               <Link
//                 href={project.link}
//                 target="_blank"
//                 className="block bg-gray-800 rounded-xl p-6 hover:bg-purple-600/20 transition-all shadow-lg"
//               >
//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                 <p className="text-gray-400 mt-2">Click to view project →</p>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section
//         id="skills"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-8"
//         >
//           Skills
//         </motion.h2>
//         <motion.ul
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "TailwindCSS",
//             "Python",
//           ].map((skill, i) => (
//             <li
//               key={i}
//               className="bg-gray-800 rounded-lg px-4 py-3 text-center hover:bg-purple-600/20 transition-all"
//             >
//               {skill}
//             </li>
//           ))}
//         </motion.ul>
//       </section>

//       {/* Languages Section */}
//       <section
//         id="languages"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-8"
//         >
//           Languages I Speak
//         </motion.h2>
//         <motion.ul
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="flex flex-wrap justify-center gap-6 text-gray-300"
//         >
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang, i) => (
//             <li
//               key={i}
//               className="bg-gray-800 rounded-lg px-6 py-3 hover:bg-purple-600/20 transition-all"
//             >
//               {lang}
//             </li>
//           ))}
//         </motion.ul>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-6"
//         >
//           Contact Me
//         </motion.h2>
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="text-gray-400 mb-6"
//         >
//           I’d love to connect! Reach me via email or LinkedIn.
//         </motion.p>
//         <div className="space-x-6">
//           <a
//             href="mailto:chaithanya7889@gmail.com"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             Email
//           </a>
//           <a
//             href="https://www.linkedin.com/in/chaithanya66/"
//             target="_blank"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

// app/page.tsx

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// // Bubble background effect
// const Bubbles = () => {
//   const bubbles = Array.from({ length: 15 });
//   return (
//     <div className="absolute inset-0 overflow-hidden -z-10">
//       {bubbles.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-8 h-8 bg-purple-500/20 rounded-full"
//           animate={{
//             y: ["100vh", "-20vh"],
//             x: ["0vw", "100vw"],
//             opacity: [0, 1, 0],
//           }}
//           transition={{
//             duration: 15 + i * 2,
//             repeat: Infinity,
//             delay: i * 1.5,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// // Fade-in animation preset
// const fadeIn = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.8 },
//   }),
// };

// export default function PortfolioPage() {
//   return (
//     <main className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full flex justify-center space-x-8 py-4 backdrop-blur-md bg-black/30 z-50">
//         {["Home", "About", "Projects", "Skills", "Languages", "Contact"].map(
//           (section) => (
//             <a
//               key={section}
//               href={`#${section.toLowerCase()}`}
//               className="hover:text-purple-400 transition-colors"
//             >
//               {section}
//             </a>
//           )
//         )}
//       </nav>

//       {/* Home Section */}
//       <section
//         id="home"
//         className="flex flex-col items-center justify-center min-h-screen relative text-center"
//       >
//         <Bubbles />

//         {/* Anime Character */}
//         <div className="absolute inset-0 flex justify-center items-center opacity-70">
//           <Image
//             src="/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png" // <- put your anime character image in public/
//             alt="Anime Character"
//             width={400}
//             height={400}
//             className="drop-shadow-lg"
//             priority
//           />
//         </div>

//         {/* Text */}
//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           custom={0}
//           variants={fadeIn}
//           className="text-6xl font-extrabold text-purple-400 mb-6 relative z-10"
//         >
//           Chaithanya Neelam
//         </motion.h1>
//         <motion.p
//           initial="hidden"
//           animate="visible"
//           custom={1}
//           variants={fadeIn}
//           className="text-2xl text-gray-300 relative z-10"
//         >
//           Full Stack Developer | MERN | Next.js
//         </motion.p>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-4"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="max-w-2xl text-gray-400 leading-relaxed"
//         >
//           I am a passionate Full Stack Developer skilled in building web apps
//           using HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js,
//           MySQL, and TailwindCSS. I also explore Python and love solving
//           real-world problems with code.
//         </motion.p>
//       </section>

//       {/* Projects Section */}
//       <section
//         id="projects"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-12"
//         >
//           Projects
//         </motion.h2>

//         <div className="relative border-l-2 border-dotted border-purple-500 pl-8 space-y-12 max-w-xl">
//           {[
//             {
//               title: "Retail Shop Management System",
//               link: "https://retail-shop-management-kbx5.vercel.app/login",
//             },
//             {
//               title: "Travel Planning Platform",
//               link: "https://routaviva.onrender.com/modules/signup/signup.html",
//             },
//             {
//               title: "URL Shortener",
//               link: "https://shorturl-826q.onrender.com/",
//             },
//           ].map((project, i) => (
//             <motion.div
//               key={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//               custom={i}
//               className="relative"
//             >
//               <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-purple-500"></div>
//               <Link
//                 href={project.link}
//                 target="_blank"
//                 className="block bg-gray-800 rounded-xl p-6 hover:bg-purple-600/20 transition-all shadow-lg"
//               >
//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                 <p className="text-gray-400 mt-2">Click to view project →</p>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section
//         id="skills"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-8"
//         >
//           Skills
//         </motion.h2>
//         <motion.ul
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "TailwindCSS",
//             "Python",
//           ].map((skill, i) => (
//             <li
//               key={i}
//               className="bg-gray-800 rounded-lg px-4 py-3 text-center hover:bg-purple-600/20 transition-all"
//             >
//               {skill}
//             </li>
//           ))}
//         </motion.ul>
//       </section>

//       {/* Languages Section */}
//       <section
//         id="languages"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-8"
//         >
//           Languages I Speak
//         </motion.h2>
//         <motion.ul
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="flex flex-wrap justify-center gap-6 text-gray-300"
//         >
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang, i) => (
//             <li
//               key={i}
//               className="bg-gray-800 rounded-lg px-6 py-3 hover:bg-purple-600/20 transition-all"
//             >
//               {lang}
//             </li>
//           ))}
//         </motion.ul>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-6"
//         >
//           Contact Me
//         </motion.h2>
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="text-gray-400 mb-6"
//         >
//           I’d love to connect! Reach me via email, LinkedIn, or GitHub.
//         </motion.p>
//         <div className="space-x-6">
//           <a
//             href="mailto:chaithanya7889@gmail.com"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             Email
//           </a>
//           <a
//             href="https://www.linkedin.com/in/chaithanya66/"
//             target="_blank"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             LinkedIn
//           </a>
//           <a
//             href="https://github.com/chaithanya66"
//             target="_blank"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             GitHub
//           </a>
//         </div>
//       </section>
//     </main>
//   );
// }

// "use client";

// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ================== ANIME CHARACTER ==================
// const AnimeCharacter = () => {
//   const characterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (characterRef.current) {
//         const { innerWidth, innerHeight } = window;
//         const x = (e.clientX / innerWidth - 0.5) * 30;
//         const y = (e.clientY / innerHeight - 0.5) * 30;
//         characterRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       ref={characterRef}
//       className="w-80 h-80 flex justify-center items-center transition-transform duration-200 ease-out"
//     >
//       <Image
//         src="/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png"
//         alt="Anime Character"
//         width={350}
//         height={350}
//         priority
//         className="drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
//       />
//     </div>
//   );
// };

// // ================== FADE ANIMATION ==================
// const fadeIn = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.8 },
//   }),
// };

// // ================== MAIN PAGE ==================
// export default function PortfolioPage() {
//   const bubbles = Array.from({ length: 20 }, (_, i) => i);

//   return (
//     <main className="bg-black text-white min-h-screen overflow-x-hidden">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full flex justify-center gap-8 py-4 bg-black/70 backdrop-blur-lg z-50 shadow-md">
//         {["Home", "About", "Projects", "Skills", "Languages", "Contact"].map(
//           (section) => (
//             <a
//               key={section}
//               href={`#${section.toLowerCase()}`}
//               className="hover:text-purple-400 transition-colors"
//             >
//               {section}
//             </a>
//           )
//         )}
//       </nav>

//       {/* Home Section */}
//       <section
//         id="home"
//         className="flex flex-col items-center justify-center min-h-screen relative"
//       >
//         {/* Bubble effect */}
//         <div className="absolute inset-0 overflow-hidden -z-10">
//           {bubbles.map((bubble) => (
//             <span
//               key={bubble}
//               className="absolute bg-white/20 rounded-full animate-bubble"
//               style={{
//                 width: `${Math.random() * 20 + 10}px`,
//                 height: `${Math.random() * 20 + 10}px`,
//                 left: `${Math.random() * 100}%`,
//                 animationDuration: `${Math.random() * 10 + 5}s`,
//                 animationDelay: `${Math.random() * 5}s`,
//               }}
//             ></span>
//           ))}
//         </div>

//         <AnimeCharacter />
//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           custom={0}
//           variants={fadeIn}
//           className="text-6xl font-extrabold text-purple-400 mt-6"
//         >
//           Chaithanya Neelam
//         </motion.h1>
//         <motion.p
//           initial="hidden"
//           animate="visible"
//           custom={1}
//           variants={fadeIn}
//           className="text-2xl text-gray-300"
//         >
//           Full Stack Developer | MERN | Next.js
//         </motion.p>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-4"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="max-w-2xl text-gray-400 leading-relaxed"
//         >
//           I am a passionate Full Stack Developer skilled in building web apps
//           using HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js,
//           MySQL, and TailwindCSS. I also explore Python and love solving
//           real-world problems with code.
//         </motion.p>
//       </section>

//       {/* Projects Section */}
//       <section
//         id="projects"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-12"
//         >
//           Projects
//         </motion.h2>

//         <div className="relative border-l-2 border-dotted border-purple-500 pl-8 space-y-12 max-w-xl">
//           {[
//             {
//               title: "Retail Shop Management System",
//               link: "https://retail-shop-management-kbx5.vercel.app/login",
//             },
//             {
//               title: "Travel Planning Platform",
//               link: "https://routaviva.onrender.com/modules/signup/signup.html",
//             },
//             {
//               title: "URL Shortener",
//               link: "https://shorturl-826q.onrender.com/",
//             },
//           ].map((project, i) => (
//             <motion.div
//               key={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//               custom={i}
//               className="relative"
//             >
//               <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-purple-500"></div>
//               <Link
//                 href={project.link}
//                 target="_blank"
//                 className="block bg-gray-800 rounded-xl p-6 hover:bg-purple-600/20 transition-all shadow-lg"
//               >
//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                 <p className="text-gray-400 mt-2">Click to view project →</p>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section
//         id="skills"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-8"
//         >
//           Skills
//         </motion.h2>
//         <motion.ul
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "TailwindCSS",
//             "Python",
//           ].map((skill, i) => (
//             <li
//               key={i}
//               className="bg-gray-800 rounded-lg px-4 py-3 text-center hover:bg-purple-600/20 transition-all"
//             >
//               {skill}
//             </li>
//           ))}
//         </motion.ul>
//       </section>

//       {/* Languages Section */}
//       <section
//         id="languages"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-8"
//         >
//           Languages I Speak
//         </motion.h2>
//         <motion.ul
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="flex flex-wrap justify-center gap-6 text-gray-300"
//         >
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang, i) => (
//             <li
//               key={i}
//               className="bg-gray-800 rounded-lg px-6 py-3 hover:bg-purple-600/20 transition-all"
//             >
//               {lang}
//             </li>
//           ))}
//         </motion.ul>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-6"
//         >
//           Contact Me
//         </motion.h2>
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="text-gray-400 mb-6"
//         >
//           I’d love to connect! Reach me via email or LinkedIn.
//         </motion.p>
//         <div className="space-x-6">
//           <a
//             href="mailto:chaithanya7889@gmail.com"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             Email
//           </a>
//           <a
//             href="https://www.linkedin.com/in/chaithanya66/"
//             target="_blank"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             LinkedIn
//           </a>
//         </div>
//         <p className="mt-6 text-gray-400">
//           GitHub:{" "}
//           <a
//             href="https://github.com/chaithanya66"
//             target="_blank"
//             className="text-blue-400 hover:underline"
//           >
//             @chaithanya66
//           </a>
//         </p>
//       </section>
//     </main>
//   );
// }

// "use client";

// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// // ================== ANIME CHARACTER ==================
// const AnimeCharacter = () => {
//   const characterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (characterRef.current) {
//         const { innerWidth, innerHeight } = window;
//         const x = (e.clientX / innerWidth - 0.5) * 30;
//         const y = (e.clientY / innerHeight - 0.5) * 30;
//         characterRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//       }
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       ref={characterRef}
//       className="w-80 h-80 flex justify-center items-center transition-transform duration-200 ease-out"
//     >
//       <Image
//         src="/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png"
//         alt="Anime Character"
//         width={350}
//         height={350}
//         priority
//         className="drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
//       />
//     </div>
//   );
// };

// // ================== FADE ANIMATION ==================
// const fadeIn = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.3, duration: 0.8 },
//   }),
// };

// // ================== MAIN PAGE ==================
// export default function PortfolioPage() {
//   const bubbles = Array.from({ length: 20 }, (_, i) => i);

//   return (
//     <main className="bg-black text-white min-h-screen overflow-x-hidden">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full flex justify-center gap-8 py-4 bg-black/70 backdrop-blur-lg z-50 shadow-md">
//         {["Home", "About", "Projects", "Skills", "Languages", "Contact"].map(
//           (section) => (
//             <a
//               key={section}
//               href={`#${section.toLowerCase()}`}
//               className="hover:text-purple-400 transition-colors"
//             >
//               {section}
//             </a>
//           )
//         )}
//       </nav>

//       {/* Home Section */}
//       <section
//         id="home"
//         className="flex flex-col items-center justify-center min-h-screen relative"
//       >
//         {/* Bubble effect */}
//         <div className="absolute inset-0 overflow-hidden -z-10">
//           {bubbles.map((bubble) => (
//             <span
//               key={bubble}
//               className="absolute bg-white/20 rounded-full animate-bubble"
//               style={{
//                 width: `${Math.random() * 20 + 10}px`,
//                 height: `${Math.random() * 20 + 10}px`,
//                 left: `${Math.random() * 100}%`,
//                 animationDuration: `${Math.random() * 10 + 5}s`,
//                 animationDelay: `${Math.random() * 5}s`,
//               }}
//             ></span>
//           ))}
//         </div>

//         <AnimeCharacter />
//         <motion.h1
//           initial="hidden"
//           animate="visible"
//           custom={0}
//           variants={fadeIn}
//           className="text-6xl font-extrabold text-purple-400 mt-6"
//         >
//           Chaithanya Neelam
//         </motion.h1>
//         <motion.p
//           initial="hidden"
//           animate="visible"
//           custom={1}
//           variants={fadeIn}
//           className="text-2xl text-gray-300"
//         >
//           Full Stack Developer | MERN | Next.js
//         </motion.p>
//       </section>

//       {/* About Section */}
//       <section
//         id="about"
//         className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-4"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="max-w-2xl text-gray-400 leading-relaxed"
//         >
//           I am a passionate Full Stack Developer skilled in building web apps
//           using HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js,
//           MySQL, and TailwindCSS. I also explore Python and love solving
//           real-world problems with code.
//         </motion.p>
//       </section>

//       {/* Projects Section */}
//       <section
//         id="projects"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-12"
//         >
//           Projects
//         </motion.h2>

//         <div className="relative border-l-2 border-dotted border-purple-500 pl-8 space-y-12 max-w-xl">
//           {[
//             {
//               title: "Retail Shop Management System",
//               link: "https://retail-shop-management-kbx5.vercel.app/login",
//             },
//             {
//               title: "Travel Planning Platform",
//               link: "https://routaviva.onrender.com/modules/signup/signup.html",
//             },
//             {
//               title: "URL Shortener",
//               link: "https://shorturl-826q.onrender.com/",
//             },
//           ].map((project, i) => (
//             <motion.div
//               key={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={fadeIn}
//               custom={i}
//               className="relative"
//             >
//               <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-purple-500"></div>
//               <Link
//                 href={project.link}
//                 target="_blank"
//                 className="block bg-gray-800 rounded-xl p-6 hover:bg-purple-600/20 transition-all shadow-lg"
//               >
//                 <h3 className="text-xl font-semibold">{project.title}</h3>
//                 <p className="text-gray-400 mt-2">Click to view project →</p>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section
//         id="skills"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-8"
//         >
//           Skills
//         </motion.h2>
//         <motion.ul
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "TailwindCSS",
//             "Python",
//           ].map((skill, i) => (
//             <li
//               key={i}
//               className="bg-gray-800 rounded-lg px-4 py-3 text-center hover:bg-purple-600/20 transition-all"
//             >
//               {skill}
//             </li>
//           ))}
//         </motion.ul>
//       </section>

//       {/* Languages Section */}
//       <section
//         id="languages"
//         className="flex flex-col items-center justify-center min-h-screen px-6"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-8"
//         >
//           Languages I Speak
//         </motion.h2>
//         <motion.ul
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="flex flex-wrap justify-center gap-6 text-gray-300"
//         >
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang, i) => (
//             <li
//               key={i}
//               className="bg-gray-800 rounded-lg px-6 py-3 hover:bg-purple-600/20 transition-all"
//             >
//               {lang}
//             </li>
//           ))}
//         </motion.ul>
//       </section>

//       {/* Contact Section */}
//       <section
//         id="contact"
//         className="flex flex-col items-center justify-center min-h-screen px-6 text-center"
//       >
//         <motion.h2
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={0}
//           className="text-4xl font-bold text-purple-400 mb-6"
//         >
//           Contact Me
//         </motion.h2>
//         <motion.p
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           custom={1}
//           className="text-gray-400 mb-6"
//         >
//           I’d love to connect! Reach me via email or LinkedIn.
//         </motion.p>
//         <div className="space-x-6">
//           <a
//             href="mailto:chaithanya7889@gmail.com"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             Email
//           </a>
//           <a
//             href="https://www.linkedin.com/in/chaithanya66/"
//             target="_blank"
//             className="px-6 py-3 bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all"
//           >
//             LinkedIn
//           </a>
//         </div>
//         <p className="mt-6 text-gray-400">
//           GitHub:{" "}
//           <a
//             href="https://github.com/chaithanya66"
//             target="_blank"
//             className="text-blue-400 hover:underline"
//           >
//             @chaithanya66
//           </a>
//         </p>
//       </section>

//       {/* Bubble Animation CSS */}
//       <style jsx>{`
//         @keyframes bubble {
//           0% {
//             transform: translateY(0) scale(1);
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100vh) scale(1.2);
//             opacity: 0;
//           }
//         }
//         .animate-bubble {
//           animation: bubble linear infinite;
//         }
//       `}</style>
//     </main>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import AnimeCharacter from "./components/AnimeCharacter";

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-10 py-5 font-semibold text-gray-300">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.2, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition text-lg"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya Neelam
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer 🚀
//         </motion.p>

//         {/* Anime Character */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className="mt-10"
//         >
//           <AnimeCharacter size={300} />
//         </motion.div>

//         {/* Floating glowing orbs */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(12)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-8 h-8 bg-purple-500 rounded-full opacity-20 blur-2xl"
//               initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 8 + 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-6xl font-bold mb-4 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a <span className="text-purple-400">Full Stack Developer</span>{" "}
//           skilled in building scalable apps with{" "}
//           <span className="text-pink-400">React.js, Next.js, Node.js</span> and
//           <span className="text-blue-400"> Express.js, MySQL</span>. I craft
//           smooth UIs with
//           <span className="text-indigo-400"> Tailwind CSS</span>.
//         </motion.p>
//       </section>

//       {/* 📂 Projects Section */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-12 text-purple-400"
//         >
//           My Projects
//         </motion.h2>
//         <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
//           {[
//             "Retail Shop Management",
//             "Travel Planning Platform",
//             "Task Manager",
//           ].map((project, idx) => (
//             <motion.div
//               key={project}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.3, duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-purple-400 transition"
//             >
//               <h3 className="text-xl font-bold mb-2 text-purple-300">
//                 {project}
//               </h3>
//               <p className="text-gray-400">
//                 Description about {project} with features and tech stack.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 🛠 Skills Section */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Tech Stack
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-6 justify-center max-w-2xl"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{ scale: 1.2 }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </motion.div>
//       </section>

//       {/* 🌍 Languages Section */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact Section */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import AnimeCharacter from "./components/AnimeCharacter";

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-10 py-5 font-semibold text-gray-300">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.2, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition text-lg"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>

//         {/* Anime Character */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className="mt-10"
//         >
//           <AnimeCharacter size={280} />
//         </motion.div>

//         {/* Floating glowing bubbles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 x: Math.random() * window.innerWidth,
//                 scale: Math.random() * 0.8 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 10 + 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> with
//           skills in{" "}
//           <span className="text-pink-400">
//             React.js, Next.js, Node.js, Express.js
//           </span>{" "}
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and designing modern UIs.
//         </motion.p>
//       </section>

//       {/* 📂 Projects Timeline Section */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-16 text-purple-400"
//         >
//           My Projects
//         </motion.h2>

//         {/* Dotted line timeline */}
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>

//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "Task Manager",
//                 desc: "A team-based task manager with user authentication, task assignments, and notifications.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <h3 className="text-2xl font-bold text-purple-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills Section */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Tech Stack
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-6 justify-center max-w-3xl"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </motion.div>
//       </section>

//       {/* 🌍 Languages Section */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact Section */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // ✨ Anime Character Component (rotates with cursor)
// const AnimeCharacter = ({ size = 250 }: { size?: number }) => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 30;
//       const y = (e.clientY / window.innerHeight - 0.5) * -30;
//       setRotation({ x, y });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.img
//       src="https://i.ibb.co/7yzjG5H/anime-character.png"
//       alt="Anime Character"
//       width={size}
//       height={size}
//       className="rounded-full shadow-lg"
//       style={{
//         transformStyle: "preserve-3d",
//       }}
//       animate={{
//         rotateX: rotation.y,
//         rotateY: rotation.x,
//       }}
//       transition={{ type: "spring", stiffness: 120, damping: 15 }}
//     />
//   );
// };

// // ✅ Sections for Navbar
// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-10 py-5 font-semibold text-gray-300">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.2, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition text-lg"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         {/* Floating glowing bubbles (only in home) */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(25)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 scale: Math.random() * 0.6 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 8 + 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>

//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>

//         {/* Anime Character */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className="mt-10 z-10"
//         >
//           <AnimeCharacter size={280} />
//         </motion.div>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> with
//           skills in{" "}
//           <span className="text-pink-400">
//             React.js, Next.js, Node.js, Express.js
//           </span>{" "}
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and designing modern UIs.
//         </motion.p>
//       </section>

//       {/* 📂 Projects Section */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-16 text-purple-400"
//         >
//           My Projects
//         </motion.h2>

//         {/* Timeline */}
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>

//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "Task Manager",
//                 desc: "A team-based task manager with user authentication, task assignments, and notifications.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <h3 className="text-2xl font-bold text-purple-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills Section */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Tech Stack
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-6 justify-center max-w-3xl"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </motion.div>
//       </section>

//       {/* 🌍 Languages Section */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact Section */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

//ok

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // ✨ Anime Character Component (rotates with cursor)
// const AnimeCharacter = ({ size = 250 }: { size?: number }) => {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = (e.clientX / window.innerWidth - 0.5) * 30;
//       const y = (e.clientY / window.innerHeight - 0.5) * -30;
//       setRotation({ x, y });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.img
//       // 👉 Replace this link with your own anime PNG
//       src="/anime-character.png"
//       alt="Anime Character"
//       width={size}
//       height={size}
//       className="rounded-full shadow-lg"
//       style={{
//         transformStyle: "preserve-3d",
//       }}
//       animate={{
//         rotateX: rotation.y,
//         rotateY: rotation.x,
//       }}
//       transition={{ type: "spring", stiffness: 120, damping: 15 }}
//     />
//   );
// };

// // ✅ Sections for Navbar
// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "education", label: "Education" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-10 py-5 font-semibold text-gray-300">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.2, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition text-lg"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         {/* Floating glowing bubbles (only in home) */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(25)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 scale: Math.random() * 0.6 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 8 + 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>

//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>

//         {/* Anime Character */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5 }}
//           className="mt-10 z-10"
//         >
//           <AnimeCharacter size={280} />
//         </motion.div>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> with
//           skills in{" "}
//           <span className="text-pink-400">
//             React.js, Next.js, Node.js, Express.js
//           </span>{" "}
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and designing modern UIs.
//         </motion.p>
//       </section>

//       {/* 🎓 Education Section */}
//       <section
//         id="education"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-900"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-12 text-purple-400"
//         >
//           Education
//         </motion.h2>
//         <div className="flex flex-col gap-8 w-full max-w-2xl">
//           {[
//             {
//               degree: "Bachelor of Technology (B.Tech) in Computer Science",
//               college: "XYZ University",
//               year: "2021 – 2025",
//             },
//             {
//               degree: "Intermediate (MPC)",
//               college: "ABC Junior College",
//               year: "2019 – 2021",
//             },
//             {
//               degree: "High School",
//               college: "DEF High School",
//               year: "2018 – 2019",
//             },
//           ].map((edu, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6"
//             >
//               <h3 className="text-2xl font-bold text-purple-300">
//                 {edu.degree}
//               </h3>
//               <p className="text-gray-400">{edu.college}</p>
//               <p className="text-gray-500">{edu.year}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* 📂 Projects Section */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-16 text-purple-400"
//         >
//           My Projects
//         </motion.h2>

//         {/* Timeline */}
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>

//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "Task Manager",
//                 desc: "A team-based task manager with user authentication, task assignments, and notifications.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <h3 className="text-2xl font-bold text-purple-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills Section */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Tech Stack
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//           className="flex flex-wrap gap-6 justify-center max-w-3xl"
//         >
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </motion.div>
//       </section>

//       {/* 🌍 Languages Section */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact Section */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-5xl font-bold mb-8 text-purple-400"
//         >
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// use if anything not workssssssss

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Fake anime character (replace with SVG/PNG)
// const AnimeCharacter = ({ size = 250, rotate = 0 }) => (
//   <motion.div
//     style={{
//       width: size,
//       height: size,
//       backgroundImage: "url('ChatGPT Image Sep 14, 2025, 07_46_23 PM.png')", // ✅ Replace with your own anime image
//       backgroundSize: "cover",
//       // borderRadius: "50%",
//     }}
//     animate={{ rotate }}
//     transition={{ type: "spring", stiffness: 50, damping: 20 }}
//   />
// );

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "education", label: "Education" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const x = e.clientX / window.innerWidth - 0.5;
//       setRotation(x * 40); // rotate character with cursor
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-6 py-3 font-medium text-gray-300 text-sm md:text-base">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.15, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         {/* Floating glowing bubbles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 x: Math.random() * window.innerWidth,
//                 scale: Math.random() * 0.8 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 10 + 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>

//         {/* Anime character behind name */}
//         <div className="absolute top-1/2 -translate-y-1/2 opacity-40">
//           <AnimeCharacter size={300} rotate={rotation} />
//         </div>

//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> skilled
//           in{" "}
//           <span className="text-pink-400">
//             React.js, Next.js, Node.js, Express.js
//           </span>{" "}
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and modern UIs.
//         </motion.p>
//       </section>

//       {/* 📂 Projects */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2 className="text-5xl font-bold mb-16 text-purple-400">
//           My Projects
//         </motion.h2>
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>
//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 link: "https://retail-shop-management-kbx5.vercel.app/login",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 link: "https://routaviva.onrender.com/modules/signup/signup.html",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "URL Shortener",
//                 link: "https://shorturl-826q.onrender.com/",
//                 desc: "A simple and fast URL shortener for quick sharing.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <h3 className="text-2xl font-bold text-purple-300">
//                     {project.title}
//                   </h3>
//                 </a>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Tech Stack
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 🎓 Education */}
//       <section
//         id="education"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Education
//         </motion.h2>
//         <div className="flex flex-col gap-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               Bachelor of Technology
//             </h3>
//             <p className="text-gray-400 mt-2">Computer Science & Engineering</p>
//             <p className="text-gray-500">XYZ University | 2021 - 2025</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🌍 Languages */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// looks decent

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// // Character image source (ensure this file is in your public/ directory)
// const IMAGE_SRC = "/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png";

// // Mouse-following anime character, full shape shown (not rounded)
// const AnimeCharacter = ({ size = 250 }) => {
//   const [mouse, setMouse] = useState({
//     x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
//     y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
//   });

//   useEffect(() => {
//     const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <motion.img
//       src={IMAGE_SRC}
//       alt="ChatGPT Character"
//       style={{
//         width: size,
//         height: "auto", // keeps aspect ratio
//         position: "fixed",
//         left: 0,
//         top: 0,
//         pointerEvents: "none", // doesn't block mouse
//         zIndex: 30,
//       }}
//       animate={{
//         x: mouse.x - size / 2,
//         y: mouse.y - size / 2,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 70,
//         damping: 11,
//         mass: 0.7,
//       }}
//     />
//   );
// };

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "education", label: "Education" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans relative">
//       {/* Character follows cursor globally */}
//       <AnimeCharacter size={300} />

//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-6 py-3 font-medium text-gray-300 text-sm md:text-base">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.15, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         {/* Floating glowing bubbles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 x: Math.random() * window.innerWidth,
//                 scale: Math.random() * 0.8 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 10 + 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> skilled
//           in{" "}
//           <span className="text-pink-400">
//             {" "}
//             React.js, Next.js, Node.js, Express.js{" "}
//           </span>
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and modern UIs.
//         </motion.p>
//       </section>

//       {/* 📂 Projects */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2 className="text-5xl font-bold mb-16 text-purple-400">
//           My Projects
//         </motion.h2>
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>
//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 link: "https://retail-shop-management-kbx5.vercel.app/login",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 link: "https://routaviva.onrender.com/modules/signup/signup.html",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "URL Shortener",
//                 link: "https://shorturl-826q.onrender.com/",
//                 desc: "A simple and fast URL shortener for quick sharing.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{
//                   opacity: 0,
//                   x: idx % 2 === 0 ? -100 : 100,
//                 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <h3 className="text-2xl font-bold text-purple-300">
//                     {project.title}
//                   </h3>
//                 </a>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Tech Stack
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 🎓 Education */}
//       <section
//         id="education"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Education
//         </motion.h2>
//         <div className="flex flex-col gap-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               Bachelor of Technology
//             </h3>
//             <p className="text-gray-400 mt-2">Computer Science & Engineering</p>
//             <p className="text-gray-500">XYZ University | 2021 - 2025</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">Intermediate</h3>
//             <p className="text-gray-400 mt-2">
//               MPC (Maths, Physics, Chemistry)
//             </p>
//             <p className="text-gray-500">ABC Junior College | 2019 - 2021</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               Secondary School Certificate (SSC)
//             </h3>
//             <p className="text-gray-400 mt-2">Board of Secondary Education</p>
//             <p className="text-gray-500">XYZ High School | 2018 - 2019</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🌍 Languages */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// works very well

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // --- Rotating anime character for Home section only ---

// const IMAGE_SRC = "/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png";

// const AnimeCharacter = ({ size = 300 }) => {
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const ref = useRef(null);
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (!ref.current) return;
//       const { innerWidth, innerHeight } = window;

//       // Normalize cursor position (-1 to 1)
//       const x = (e.clientX / innerWidth) * 2 - 1;
//       const y = (e.clientY / innerHeight) * 2 - 1;

//       // Apply a tilt range
//       const maxTilt = 40; // degrees
//       setTilt({
//         x: x * maxTilt,
//         y: -y * maxTilt,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.img
//       ref={ref}
//       src={IMAGE_SRC}
//       alt="Anime Character"
//       style={{
//         width: size,
//         height: "auto",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         // position: "absolute",
//         // left: "50%",
//         // top: "50%",
//         // transform: "translate(-50%, -50%)",
//         zIndex: 2,
//         pointerEvents: "none",
//       }}
//       animate={{
//         rotateX: tilt.y,
//         rotateY: tilt.x,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       }}
//     />
//   );
// };

// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "education", label: "Education" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans relative">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-6 py-3 font-medium text-gray-300 text-sm md:text-base">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.15, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         {/* Floating glowing bubbles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 x: Math.random() * window.innerWidth,
//                 scale: Math.random() * 0.8 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 10 + 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>
//         {/* Anime Character Centered and Rotating */}
//         <div
//           className="absolute top-1/2 left-1/2 w-[300px] h-[300px] pointer-events-none"
//           style={{ transform: "translate(-50%, -50%)" }}
//         >
//           <AnimeCharacter size={300} />
//         </div>
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> skilled
//           in{" "}
//           <span className="text-pink-400">
//             {" "}
//             React.js, Next.js, Node.js, Express.js{" "}
//           </span>
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and modern UIs.
//         </motion.p>
//       </section>

//       {/* 📂 Projects */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2 className="text-5xl font-bold mb-16 text-purple-400">
//           My Projects
//         </motion.h2>
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>
//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 link: "https://retail-shop-management-kbx5.vercel.app/login",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 link: "https://routaviva.onrender.com/modules/signup/signup.html",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "URL Shortener",
//                 link: "https://shorturl-826q.onrender.com/",
//                 desc: "A simple and fast URL shortener for quick sharing.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{
//                   opacity: 0,
//                   x: idx % 2 === 0 ? -100 : 100,
//                 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <h3 className="text-2xl font-bold text-purple-300">
//                     {project.title}
//                   </h3>
//                 </a>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Tech Stack
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 🎓 Education */}
//       <section
//         id="education"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Education
//         </motion.h2>
//         <div className="flex flex-col gap-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               Bachelor of Technology
//             </h3>
//             <p className="text-gray-400 mt-2">Computer Science & Engineering</p>
//             <p className="text-gray-500">XYZ University | 2021 - 2025</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">Intermediate</h3>
//             <p className="text-gray-400 mt-2">
//               MPC (Maths, Physics, Chemistry)
//             </p>
//             <p className="text-gray-500">ABC Junior College | 2019 - 2021</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               Secondary School Certificate (SSC)
//             </h3>
//             <p className="text-gray-400 mt-2">Board of Secondary Education</p>
//             <p className="text-gray-500">XYZ High School | 2018 - 2019</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🌍 Languages */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

// good working

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // Anime character component with tilt effect
// const IMAGE_SRC = "/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png";

// const AnimeCharacter = ({ size = 300 }) => {
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const x = (e.clientX / innerWidth) * 2 - 1;
//       const y = (e.clientY / innerHeight) * 2 - 1;
//       const maxTilt = 25;
//       setTilt({ x: x * maxTilt, y: -y * maxTilt });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.img
//       ref={ref}
//       src={IMAGE_SRC}
//       alt="Anime Character"
//       style={{
//         width: size,
//         height: "auto",
//         marginBottom: "2rem",
//         pointerEvents: "none",
//       }}
//       animate={{ rotateX: tilt.y, rotateY: tilt.x }}
//       transition={{ type: "spring", stiffness: 100, damping: 15 }}
//     />
//   );
// };

// // Navbar sections
// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "education", label: "Education" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans relative">
//       {/* 🌐 Navbar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-700">
//         <ul className="flex justify-center space-x-6 py-3 font-medium text-gray-300 text-sm md:text-base">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.15, color: "#a78bfa" }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         {/* Floating glowing bubbles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 x: Math.random() * window.innerWidth,
//                 scale: Math.random() * 0.8 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 10 + 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>

//         {/* Anime Character ABOVE the name */}
//         <AnimeCharacter size={280} />

//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> skilled
//           in{" "}
//           <span className="text-pink-400">
//             React.js, Next.js, Node.js, Express.js
//           </span>{" "}
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and modern UIs.
//         </motion.p>
//       </section>

//       {/* 📂 Projects */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2 className="text-5xl font-bold mb-16 text-purple-400">
//           My Projects
//         </motion.h2>
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>
//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 link: "https://retail-shop-management-kbx5.vercel.app/login",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 link: "https://routaviva.onrender.com/modules/signup/signup.html",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "URL Shortener",
//                 link: "https://shorturl-826q.onrender.com/",
//                 desc: "A simple and fast URL shortener for quick sharing.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="block hover:underline"
//                 >
//                   <h3 className="text-2xl font-bold text-purple-300">
//                     {project.title}
//                   </h3>
//                 </a>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Tech Stack
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 🎓 Education */}
//       <section
//         id="education"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Education
//         </motion.h2>
//         <div className="flex flex-col gap-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               B.Tech - Saveetha School of Engineering
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Computer Science & Engineering | 2023 - 2027
//             </p>
//             <p className="text-gray-500">Current Percentage: 85%</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               Intermediate - Sri Chaitanya Jr. College
//             </h3>
//             <p className="text-gray-400 mt-2">
//               MPC (Maths, Physics, Chemistry)
//             </p>
//             <p className="text-gray-500">2021 - 2023 | Percentage: 90%</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               School - Vedvyasa Vidyanikethan
//             </h3>
//             <p className="text-gray-400 mt-2">Secondary School Certificate</p>
//             <p className="text-gray-500">2020 - 2021 | CGPA: 10</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🌍 Languages */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Contact Me
//         </motion.h2>
//         <form className="flex flex-col gap-4 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </section>
//     </div>
//   );
// }

//perfect

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // Anime character component with tilt effect
// const IMAGE_SRC = "/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png";

// const AnimeCharacter = ({ size = 300 }) => {
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const x = (e.clientX / innerWidth) * 2 - 1;
//       const y = (e.clientY / innerHeight) * 2 - 1;
//       const maxTilt = 25;
//       setTilt({ x: x * maxTilt, y: -y * maxTilt });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.img
//       ref={ref}
//       src={IMAGE_SRC}
//       alt="Anime Character"
//       style={{
//         width: size,
//         height: "auto",
//         marginBottom: "2rem",
//         pointerEvents: "none",
//       }}
//       animate={{ rotateX: tilt.y, rotateY: tilt.x }}
//       transition={{ type: "spring", stiffness: 100, damping: 15 }}
//     />
//   );
// };

// // Navbar sections
// const sections = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "skills", label: "Skills" },
//   { id: "education", label: "Education" },
//   { id: "languages", label: "Languages" },
//   { id: "contact", label: "Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans relative">
//       {/* 🌐 Navbar (background removed) */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-gray-800">
//         <div className="max-w-6xl mx-auto px-4">
//           <ul className="flex justify-center space-x-6 py-3 text-sm md:text-base font-medium text-gray-300">
//             {sections.map((section) => (
//               <motion.li
//                 key={section.id}
//                 whileHover={{ scale: 1.15, color: "#a78bfa" }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <a
//                   href={`#${section.id}`}
//                   className="hover:text-purple-400 transition"
//                 >
//                   {section.label}
//                 </a>
//               </motion.li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* 🏠 Home Section */}
//       <section
//         id="home"
//         className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//       >
//         {/* Floating glowing bubbles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//               initial={{
//                 y: "100vh",
//                 x: Math.random() * window.innerWidth,
//                 scale: Math.random() * 0.8 + 0.4,
//               }}
//               animate={{ y: -100 }}
//               transition={{
//                 duration: Math.random() * 10 + 8,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               style={{ left: `${Math.random() * 100}%` }}
//             />
//           ))}
//         </div>

//         {/* Anime Character ABOVE the name */}
//         <AnimeCharacter size={280} />

//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//         >
//           Hi, I’m{" "}
//           <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//             Chaithanya
//           </span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//         >
//           Full Stack Developer
//         </motion.p>
//       </section>

//       {/* 👨‍💻 About Section */}
//       <section
//         id="about"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl font-bold mb-6 text-purple-400"
//         >
//           About Me
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed"
//         >
//           I am a passionate{" "}
//           <span className="text-purple-400">Full Stack Developer</span> skilled
//           in{" "}
//           <span className="text-pink-400">
//             React.js, Next.js, Node.js, Express.js
//           </span>{" "}
//           and <span className="text-blue-400">MySQL, Python</span>. I love
//           creating scalable apps and modern UIs.
//         </motion.p>
//       </section>

//       {/* 📂 Projects */}
//       <section
//         id="projects"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//       >
//         <motion.h2 className="text-5xl font-bold mb-16 text-purple-400">
//           My Projects
//         </motion.h2>
//         <div className="relative w-full max-w-3xl">
//           <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>
//           <div className="flex flex-col gap-16">
//             {[
//               {
//                 title: "Retail Shop Management",
//                 link: "https://retail-shop-management-kbx5.vercel.app/login",
//                 repo: "https://github.com/chatithanya66/retail-shop-management",
//                 desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//               },
//               {
//                 title: "Travel Planning Platform",
//                 link: "https://routaviva.onrender.com/modules/signup/signup.html",
//                 repo: "https://github.com/chatithanya66/routaviva",
//                 desc: "A web app for trip planning, routing, budget management, and weather integration.",
//               },
//               {
//                 title: "URL Shortener",
//                 link: "https://shorturl-826q.onrender.com/",
//                 repo: "https://github.com/chatithanya66/url-shortener",
//                 desc: "A simple and fast URL shortener for quick sharing.",
//               },
//             ].map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                   idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                 }`}
//               >
//                 <h3 className="text-2xl font-bold text-purple-300">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 mt-2">{project.desc}</p>
//                 <div className="flex gap-4 mt-4">
//                   <a
//                     href={project.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
//                   >
//                     View Project
//                   </a>
//                   <a
//                     href={project.repo}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 bg-gray-800 text-purple-300 border border-purple-500 rounded-lg hover:bg-gray-700 transition"
//                   >
//                     View Code
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 🛠 Skills */}
//       <section
//         id="skills"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Tech Stack
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
//           {[
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React.js",
//             "Next.js",
//             "Node.js",
//             "Express.js",
//             "MySQL",
//             "Tailwind CSS",
//             "Python",
//           ].map((skill) => (
//             <motion.span
//               key={skill}
//               whileHover={{
//                 scale: 1.2,
//                 backgroundColor: "#6d28d9",
//                 color: "#fff",
//               }}
//               className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//             >
//               {skill}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 🎓 Education */}
//       <section
//         id="education"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Education
//         </motion.h2>
//         <div className="flex flex-col gap-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               B.Tech - Saveetha School of Engineering
//             </h3>
//             <p className="text-gray-400 mt-2">
//               Computer Science & Engineering | 2023 - 2027
//             </p>
//             <p className="text-gray-500">Current Percentage: 85%</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               Intermediate - Sri Chaitanya Jr. College
//             </h3>
//             <p className="text-gray-400 mt-2">
//               MPC (Maths, Physics, Chemistry)
//             </p>
//             <p className="text-gray-500">2021 - 2023 | Percentage: 90%</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg"
//           >
//             <h3 className="text-2xl font-bold text-purple-300">
//               School - Vedvyasa Vidyanikethan
//             </h3>
//             <p className="text-gray-400 mt-2">Secondary School Certificate</p>
//             <p className="text-gray-500">2020 - 2021 | CGPA: 10</p>
//           </motion.div>
//         </div>
//       </section>

//       {/* 🌍 Languages */}
//       <section
//         id="languages"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Languages I Speak
//         </motion.h2>
//         <div className="flex flex-wrap gap-6 text-lg">
//           {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//             <motion.span
//               key={lang}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//             >
//               {lang}
//             </motion.span>
//           ))}
//         </div>
//       </section>

//       {/* 📞 Contact */}
//       <section
//         id="contact"
//         className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//       >
//         <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//           Contact Me
//         </motion.h2>
//         <form
//           className="flex flex-col gap-4 w-full max-w-md"
//           action="mailto:neelamchaithanya6@gmail.com"
//           method="post"
//           encType="text/plain"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             rows={4}
//             className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//           />
//           <motion.button
//             whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//           >
//             Send Message
//           </motion.button>
//         </form>

//         {/* Social Links */}
//         <div className="flex gap-6 mt-10">
//           <a
//             href="https://github.com/chatithanya66"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-purple-400 transition text-xl"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://linkedin.com/in/chatithanya66"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-400 hover:text-purple-400 transition text-xl"
//           >
//             LinkedIn
//           </a>
//         </div>

//         {/* ✅ Footer Email */}
//         <p className="mt-8 text-gray-400 text-sm">
//           📧 Email:{" "}
//           <a
//             href="mailto:neelamchaithanya6@gmail.com"
//             className="text-purple-400 hover:underline"
//           >
//             neelamchaithanya6@gmail.com
//           </a>
//         </p>
//       </section>
//     </div>
//   );
// }

// very well

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Anime character component with tilt effect
const IMAGE_SRC = "/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png";

const AnimeCharacter = ({ size = 300 }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      const maxTilt = 25;
      setTilt({ x: x * maxTilt, y: -y * maxTilt });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.img
      ref={ref}
      src={IMAGE_SRC}
      alt="Anime Character"
      style={{
        width: size,
        height: "auto",
        marginBottom: "2rem",
        pointerEvents: "none",
      }}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    />
  );
};

// Sidebar sections
const sections = [
  { id: "home", label: "🏠 Home" },
  { id: "about", label: "🙋 About" },
  { id: "projects", label: "📂 Projects" },
  { id: "skills", label: "🛠 Skills" },
  { id: "education", label: "🎓 Education" },
  { id: "languages", label: "🌍 Languages" },
  { id: "contact", label: "📞 Contact" },
];

export default function Portfolio() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans relative flex">
      {/* 📌 Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-48 bg-black/50 backdrop-blur-lg border-r border-gray-800 flex flex-col items-center py-10 space-y-8 z-50">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-bold text-purple-400"
        ></motion.h1>
        <ul className="flex flex-col space-y-6 text-sm md:text-base font-medium text-gray-300">
          {sections.map((section) => (
            <motion.li
              key={section.id}
              whileHover={{ scale: 1.15, color: "#a78bfa", x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={`#${section.id}`}
                className="hover:text-purple-400 transition flex items-center gap-2"
              >
                {section.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </aside>

      {/* 📄 Content shifted to right */}
      <main className="ml-48 w-full">
        {/* 🏠 Home Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
        >
          {/* Floating glowing bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
                initial={{
                  y: "100vh",
                  x: Math.random() * window.innerWidth,
                  scale: Math.random() * 0.8 + 0.4,
                }}
                animate={{ y: -100 }}
                transition={{
                  duration: Math.random() * 10 + 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>

          {/* Anime Character ABOVE the name */}
          <AnimeCharacter size={280} />

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Chaithanya
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
          >
            Full Stack Developer
          </motion.p>
        </section>

        {/* 👨‍💻 About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
        >
          <motion.h2 className="text-6xl font-bold mb-6 text-purple-400">
            About Me
          </motion.h2>
          <motion.p className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed">
            I am a passionate{" "}
            <span className="text-purple-400">Full Stack Developer</span>{" "}
            skilled in{" "}
            <span className="text-pink-400">
              React.js, Next.js, Node.js, Express.js
            </span>{" "}
            and <span className="text-blue-400">MySQL, Python</span>. I love
            creating scalable apps and modern UIs.
          </motion.p>
        </section>

        {/* 📂 Projects */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
        >
          <motion.h2 className="text-5xl font-bold mb-16 text-purple-400">
            My Projects
          </motion.h2>
          <div className="relative w-full max-w-3xl">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>
            <div className="flex flex-col gap-16">
              {[
                {
                  title: "Retail Shop Management",
                  link: "https://retail-shop-management-kbx5.vercel.app/login",
                  repo: "https://github.com/chatithanya66/retail-shop-management",
                  desc: "A shop management system with authentication, inventory tracking, and sales reports.",
                },
                {
                  title: "Travel Planning Platform",
                  link: "https://routaviva.onrender.com/modules/signup/signup.html",
                  repo: "https://github.com/chatithanya66/routaviva",
                  desc: "A web app for trip planning, routing, budget management, and weather integration.",
                },
                {
                  title: "URL Shortener",
                  link: "https://shorturl-826q.onrender.com/",
                  repo: "https://github.com/chatithanya66/url-shortener",
                  desc: "A simple and fast URL shortener for quick sharing.",
                },
              ].map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
                    idx % 2 === 0 ? "ml-auto" : "mr-auto"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-purple-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{project.desc}</p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                    >
                      View Project
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-800 text-purple-300 border border-purple-500 rounded-lg hover:bg-gray-700 transition"
                    >
                      View Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🛠 Skills */}
        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
            Tech Stack
          </motion.h2>
          <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "MySQL",
              "Tailwind CSS",
              "Python",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#6d28d9",
                  color: "#fff",
                }}
                className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* 🎓 Education */}
        <section
          id="education"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
            Education
          </motion.h2>
          <div className="flex flex-col gap-6 text-center">
            <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-300">
                B.Tech - Saveetha School of Engineering
              </h3>
              <p className="text-gray-400 mt-2">
                Computer Science & Engineering | 2023 - 2027
              </p>
              <p className="text-gray-500">Current Percentage: 85%</p>
            </motion.div>
            <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-300">
                Intermediate - Sri Chaitanya Jr. College
              </h3>
              <p className="text-gray-400 mt-2">
                MPC (Maths, Physics, Chemistry)
              </p>
              <p className="text-gray-500">2021 - 2023 | Percentage: 90%</p>
            </motion.div>
            <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-300">
                School - Vedvyasa Vidyanikethan
              </h3>
              <p className="text-gray-400 mt-2">Secondary School Certificate</p>
              <p className="text-gray-500">2020 - 2021 | CGPA: 10</p>
            </motion.div>
          </div>
        </section>

        {/* 🌍 Languages */}
        <section
          id="languages"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
            Languages I Speak
          </motion.h2>
          <div className="flex flex-wrap gap-6 text-lg">
            {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
              <motion.span
                key={lang}
                className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </section>

        {/* 📞 Contact */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
            Contact Me
          </motion.h2>
          <form
            className="flex flex-col gap-4 w-full max-w-md"
            action="mailto:neelamchaithanya6@gmail.com"
            method="post"
            encType="text/plain"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
            >
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/chatithanya66"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 transition text-xl"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/chatithanya66"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 transition text-xl"
            >
              LinkedIn
            </a>
          </div>

          {/* ✅ Footer Email */}
          <p className="mt-8 text-gray-400 text-sm">
            📧 Email:{" "}
            <a
              href="mailto:neelamchaithanya6@gmail.com"
              className="text-purple-400 hover:underline"
            >
              neelamchaithanya6@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

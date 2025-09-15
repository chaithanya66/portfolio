// // app/layout.tsx
// // import "./globals.css";
// // import { ReactNode } from "react";

// // export const metadata = {
// //   title: "Your Name — Portfolio",
// //   description: "A modern, animated portfolio",
// // };

// // export default function RootLayout({ children }: { children: ReactNode }) {
// //   return (
// //     <html lang="en">
// //       <body className="bg-gradient-to-br from-[#0f172a] via-[#050816] to-[#0b1220] text-white antialiased">
// //         {children}
// //       </body>
// //     </html>
// //   );
// // }
// "use client";
// import "./globals.css";
// import { useState, useEffect } from "react";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [dark, setDark] = useState(true);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [dark]);

//   return (
//     <html lang="en">
//       <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
//         {/* Navbar */}
//         <header className="fixed top-0 w-full z-50 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg shadow-md">
//           <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
//             <h1 className="font-bold text-xl text-yellow-500">MyPortfolio</h1>
//             <nav className="flex gap-6">
//               <a href="/" className="hover:text-yellow-400">
//                 Home
//               </a>
//               <a href="/projects" className="hover:text-yellow-400">
//                 Projects
//               </a>
//               <a href="/techstack" className="hover:text-yellow-400">
//                 Tech Stack
//               </a>
//               <a href="/languages" className="hover:text-yellow-400">
//                 Languages
//               </a>
//               <a href="/contact" className="hover:text-yellow-400">
//                 Contact
//               </a>
//             </nav>
//             <button
//               onClick={() => setDark(!dark)}
//               className="px-3 py-1 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition"
//             >
//               {dark ? "☀️" : "🌙"}
//             </button>
//           </div>
//         </header>

//         <main className="pt-20">{children}</main>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Chaithanya — Portfolio",
  description: "Full stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-50 via-white to-pink-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

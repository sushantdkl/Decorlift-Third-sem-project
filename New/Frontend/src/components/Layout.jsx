// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { User } from 'lucide-react';

// const Layout = ({ children }) => {
//   const location = useLocation();
  
//   // Check if current page is an auth page
//   const isAuthPage = ['/login', '/signup', '/security-questions', '/security-setup'].includes(location.pathname);

//   return (
//     <div className="min-h-screen relative">
//       {/* Navigation */}
//       <nav className={`absolute top-0 left-0 right-0 z-50 ${isAuthPage ? 'bg-black/20 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-2">
//               <div className={`w-12 h-12 ${isAuthPage ? 'bg-white/20' : 'bg-gray-100'} rounded-full overflow-hidden flex items-center justify-center`}>
//                 <img 
//                   src="src/public/Newlogo.jpg.png" // Replace with your logo URL
//                   alt="Logo"
//                   className="w-9 h-10 object-contain"
//                 />
//               </div>
//               <span className={`text-xl font-bold tracking-wider ${isAuthPage ? 'text-white' : 'text-gray-800'}`}></span>
//             </Link>

//             {/* Navigation Links */}
//             <div className="hidden md:flex items-center space-x-8">
//               <Link 
//                 to="/" 
//                 className={`${isAuthPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200 font-medium`}
//               >
//                 Home
//               </Link>
//               <Link 
//                 to="/about" 
//                 className={`${isAuthPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200 font-medium`}
//               >
//                 About Us
//               </Link>
//               <Link 
//                 to="/projects" 
//                 className={`${isAuthPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200 font-medium`}
//               >
//                 Gallery
//               </Link>
//               <Link 
//                 to="/services" 
//                 className={`${isAuthPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200 font-medium`}
//               >
//                 Our Services
//               </Link>
//               <Link 
//                 to="/contact" 
//                 className={`${isAuthPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200 font-medium`}
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* User Icon */}
//             <div className="flex items-center">
//               <Link 
//                 to="/login" 
//                 className={`${isAuthPage ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-800'} transition-colors duration-200`}
//               >
//                 <User  className="w-6 h-6" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="relative">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default Layout;

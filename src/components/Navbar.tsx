import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, BookOpen, Users, GraduationCap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 premium-gradient rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-display font-extrabold tracking-tight bg-clip-text text-transparent premium-gradient">
                MasteryEd
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/courses" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Courses</Link>
            <Link to="/coaching" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Coaching</Link>
            <Link to="/success-stories" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Success Stories</Link>
            <Link to="/login" className="text-sm font-medium text-slate-900 hover:text-brand-primary transition-colors">Sign In</Link>
            <Link 
              to="/signup" 
              className="px-6 py-2.5 rounded-full premium-gradient text-white text-sm font-semibold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link to="/courses" className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors rounded-xl">Courses</Link>
              <Link to="/coaching" className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors rounded-xl">Coaching</Link>
              <Link to="/success-stories" className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors rounded-xl">Success Stories</Link>
              <Link to="/signup" className="block px-3 py-4 text-center mt-4 rounded-xl premium-gradient text-white font-bold">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

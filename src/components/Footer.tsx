import { GraduationCap, Github, Twitter, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 premium-gradient rounded-lg flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tight text-white">
                MasteryEd
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Empowering the next generation of digital leaders through world-class courses and expert-led coaching roadmaps.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Github className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/courses" className="hover:text-white transition-colors">Course Library</Link></li>
              <li><Link to="/coaching" className="hover:text-white transition-colors">Personal Coaching</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">Global Community</Link></li>
              <li><Link to="/pro" className="hover:text-white transition-colors">MasteryEd Pro</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Join the Team</Link></li>
              <li><Link to="/press" className="hover:text-white transition-colors">Press & Media</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-4">Get the latest insights on digital mastery delivered to your inbox.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 h-7 w-7 rounded-lg premium-gradient flex items-center justify-center shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 MasteryEd Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

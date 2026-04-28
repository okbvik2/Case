import { motion } from 'motion/react';
import { ChevronRight, Play, Star, ShieldCheck, Zap, Award, Users, BookOpen } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const stats = [
  { label: 'Active Students', value: '45,000+', icon: Users },
  { label: 'Courses Available', value: '180+', icon: BookOpen },
  { label: 'Expert Mentors', value: '50+', icon: Award },
];

const features = [
  {
    title: 'Adaptive Learning Path',
    description: 'Our AI-driven curriculum adjusts to your pace and learning style for maximum retention.',
    icon: Zap,
    color: 'bg-amber-100 text-amber-600'
  },
  {
    title: 'Expert-Led Coaching',
    description: 'Get direct feedback and 1-on-1 sessions from industry leaders at Fortune 500 companies.',
    icon: ShieldCheck,
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    title: 'Recognized Certificates',
    description: 'Earn digital credentials that are highly valued and verified by top global employers.',
    icon: Award,
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export default function LandingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span className="text-sm font-semibold text-brand-primary uppercase tracking-wider">New Fall Intake Open</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] mb-8">
              Master the Skills That <br className="hidden md:block" />
              <span className="premium-gradient bg-clip-text text-transparent">Shape the Future</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
              Join 45,000+ professionals learning high-demand skills through world-class courses, expert coaching, and a supportive global community.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full premium-gradient text-white font-bold text-lg shadow-xl shadow-indigo-200 hover:shadow-indigo-400 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Explore All Courses <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Play className="w-4 h-4 text-brand-primary ml-0.5" />
                </div>
                See How It Works
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale opacity-60">
              <span className="text-2xl font-display font-black tracking-tighter">TECHLEAP</span>
              <span className="text-2xl font-display font-black tracking-tighter">STRIVE</span>
              <span className="text-2xl font-display font-black tracking-tighter">NEXUS</span>
              <span className="text-2xl font-display font-black tracking-tighter">VELOCITY</span>
              <span className="text-2xl font-display font-black tracking-tighter">HORIZON</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white glass-card rounded-3xl p-10 md:p-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-display font-extrabold text-slate-900 mb-2">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">The MasteryEd Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">Designed for Professionals, Built for Excellence</h3>
            <p className="text-lg text-slate-600">We dont just teach skills. We build career-ready experts who are prepared to lead in their respective fields.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-8`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-display font-bold text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Teaser */}
      <section className="py-32 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 px-4">
            <div className="max-w-2xl">
              <h2 className="text-base font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Hot & Trending</h2>
              <h3 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900">Start Your Transition Today</h3>
            </div>
            <button className="flex items-center gap-2 text-brand-primary font-bold hover:gap-4 transition-all">
              View All Courses <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
             {[1, 2, 3].map((i) => (
                <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img 
                      src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop`} 
                      alt="Course Thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-slate-900">Featured</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-amber-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-xs font-semibold text-slate-500 font-sans mt-0.5">(4.9 • 2.5k reviews)</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">Digital Product Design Mastery {i}</h4>
                    <p className="text-slate-500 text-sm mb-6 flex-1">Learn to create premium digital experiences from scratch using industry-standard tools and methodologies.</p>
                    <div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto">
                      <span className="text-2xl font-display font-black text-slate-900">$199.00</span>
                      <button className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 group-hover:bg-brand-primary group-hover:text-white transition-all flex items-center justify-center">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto rounded-[3rem] premium-gradient p-12 md:p-24 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-white blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-400 blur-[130px] rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-8 leading-tight">Ready to Advance Your <br />Professional Career?</h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              Join thousands of students who have already transformed their lives through MasteryEd education.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-brand-primary font-bold text-lg shadow-2xl shadow-indigo-900/40 hover:-translate-y-1 transition-all">
                Join MasteryEd Pro
              </button>
              <button className="w-full sm:w-auto text-white/90 font-bold text-lg hover:text-white transition-colors flex items-center gap-2">
                Talk to an Advisor <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

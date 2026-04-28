import { motion } from 'motion/react';
import { CheckCircle2, Circle, ArrowRight, User, Calendar, Video, MessageSquare, Briefcase, GraduationCap } from 'lucide-react';

const roadmapSteps = [
  {
    id: 1,
    title: "Discovery & Goal Setting",
    description: "Initial 1-on-1 session to define your career objectives and audit your current skill set.",
    status: "completed",
    icon: User,
    date: "Oct 12, 2024"
  },
  {
    id: 2,
    title: "Skill Acquisition Phase",
    description: "Deep dive into specialized coursework with personalized feedback cycles.",
    status: "current",
    icon: GraduationCap,
    date: "In progress"
  },
  {
    id: 3,
    title: "Project Portfolio Build",
    description: "Developing a world-class case study under the guidance of your mentor.",
    status: "upcoming",
    icon: Briefcase,
    date: "Starts Nov 5"
  },
  {
    id: 4,
    title: "Interview Prep & Placement",
    description: "Mock interviews and placement assistance with our network of hiring partners.",
    status: "upcoming",
    icon: CheckCircle2,
    date: "Dec 2024"
  }
];

export default function CoachingPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Sidebar info */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm sticky top-28"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl premium-gradient flex items-center justify-center shadow-lg">
                    <User className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-extrabold text-slate-900">Your Mentor</h2>
                    <p className="text-brand-primary font-bold text-sm">Marcus Aurelius</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-3 rounded-xl transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-brand-primary">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next Session</p>
                      <p className="text-sm font-bold text-slate-900">Tomorrow at 10:00 AM</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 ml-auto group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div className="flex items-center gap-4 group cursor-pointer hover:bg-slate-50 p-3 rounded-xl transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Meet Link</p>
                      <p className="text-sm font-bold text-slate-900">meet.masteryed.pro/...</p>
                    </div>
                  </div>

                  <button className="w-full py-4 mt-4 rounded-xl premium-gradient text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-indigo-100">
                    <MessageSquare className="w-5 h-5" /> Send Message
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Main Roadmap */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h1 className="text-4xl font-display font-extrabold text-slate-900 mb-4">Your Success Roadmap</h1>
                <p className="text-lg text-slate-600">Track your progress toward digital mastery. Complete each phase to unlock the next level of your career.</p>
              </motion.div>

              <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-slate-200 -z-10" />

                {roadmapSteps.map((step, idx) => (
                  <motion.div 
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex gap-8 relative p-6 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all ${
                      step.status === 'current' ? 'ring-2 ring-brand-primary shadow-xl scale-[1.02]' : ''
                    }`}
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${
                        step.status === 'completed' ? 'bg-emerald-100 text-emerald-600' : 
                        step.status === 'current' ? 'premium-gradient text-white shadow-brand-primary/20' : 
                        'bg-slate-100 text-slate-400'
                      }`}>
                        <step.icon className="w-7 h-7" />
                      </div>
                    </div>

                    <div className="flex-grow pt-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className={`text-xl font-display font-extrabold ${
                          step.status === 'upcoming' ? 'text-slate-400' : 'text-slate-900'
                        }`}>
                          {step.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          step.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 
                          step.status === 'current' ? 'bg-indigo-50 text-brand-primary animate-pulse' : 
                          'bg-slate-100 text-slate-500'
                        }`}>
                          {step.status}
                        </span>
                      </div>
                      <p className={`mb-6 text-sm leading-relaxed ${
                        step.status === 'upcoming' ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {step.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                         <span className="text-xs font-bold text-slate-400">{step.date}</span>
                         {step.status === 'current' && (
                           <button className="text-brand-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                             Resume Work <ArrowRight className="w-4 h-4" />
                           </button>
                         )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

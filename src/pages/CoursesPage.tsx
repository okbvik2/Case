import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Star, Clock, Users, ChevronRight, LayoutGrid, List } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Advanced UI/UX Systems",
    category: "Design",
    instructor: "Sarah Jenkins",
    price: 199,
    rating: 4.9,
    students: 1240,
    duration: "12h 45m",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Full-Stack Web Engineering",
    category: "Development",
    instructor: "David Chen",
    price: 249,
    rating: 4.8,
    students: 3100,
    duration: "24h 20m",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Digital Growth Strategies",
    category: "Marketing",
    instructor: "Marcus Aurelius",
    price: 149,
    rating: 5.0,
    students: 850,
    duration: "8h 15m",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "AI & Machine Learning Basics",
    category: "Data Science",
    instructor: "Dr. Elena Vance",
    price: 299,
    rating: 4.7,
    students: 2100,
    duration: "18h 30m",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Leadership for Creative Tech",
    category: "Management",
    instructor: "James Wilson",
    price: 179,
    rating: 4.9,
    students: 1560,
    duration: "10h 00m",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Brand Storytelling Masterclass",
    category: "Marketing",
    instructor: "Sophie Turner",
    price: 129,
    rating: 4.9,
    students: 1900,
    duration: "6h 45m",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  }
];

const categories = ["All", "Design", "Development", "Marketing", "Data Science", "Management"];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen">
      {/* Header section */}
      <section className="bg-slate-900 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center md:text-left lg:max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-6">Expert-Led Courses <br /><span className="premium-gradient bg-clip-text text-transparent">For Future Leaders</span></h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10">
              Browse our curated selection of high-end educational programs designed to give you a competitive edge in the modern digital economy.
            </p>
            
            <div className="relative max-w-2xl group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5 group-focus-within:text-brand-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search courses, instructors, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-white pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all font-medium"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            {/* Category selection */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat 
                      ? "premium-gradient text-white shadow-lg shadow-indigo-100" 
                      : "bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Layout controls */}
            <div className="flex items-center gap-4 bg-white p-1 rounded-xl border border-slate-200">
              <button className="p-2 rounded-lg bg-indigo-50 text-brand-primary">
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-brand-primary shadow-sm">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-amber-400 fill-current" />
                      <span className="text-xs font-bold text-slate-900">{course.rating}</span>
                      <span className="text-xs font-medium text-slate-400">({course.students}+)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-xs font-medium">{course.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-extrabold text-slate-900 mb-3 group-hover:text-brand-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    Professional curriculum led by {course.instructor}, focusing on industry-standard techniques and high-level strategy.
                  </p>

                  <div className="pt-6 border-t border-slate-100 flex justify-between items-center mt-auto">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tuition</span>
                      <span className="text-2xl font-display font-black text-slate-900">${course.price}</span>
                    </div>
                    <button className="flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-50 text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-32 bg-white rounded-3xl border border-dashed border-slate-300">
              <Search className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-xl font-display font-bold text-slate-900">No courses found</h3>
              <p className="text-slate-500">Try adjusting your filters or search keywords.</p>
              <button 
                onClick={() => {setActiveCategory("All"); setSearchQuery("");}}
                className="mt-6 text-brand-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { ArrowRight, Code, GraduationCap, BookOpen, LayoutDashboard, Database, Shield, Users, ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="flex flex-1 justify-center py-10 md:py-20 bg-[#f6f8f7]">
        <div className="max-w-[1280px] w-full px-6 lg:px-10">
          <div className="flex flex-col gap-10 lg:flex-row items-center">
            <div className="flex flex-col gap-6 lg:w-1/2">
              <div className="flex flex-col gap-4">
                <span className="text-[#07503d] font-bold tracking-widest text-sm uppercase">Innovation in Education</span>
                <h1 className="text-[#111816] text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Empowering Future through Tech & Education
                </h1>
                <p className="text-slate-600 text-lg md:text-xl font-normal leading-relaxed">
                  Bridging the gap between learning and industry with innovative software and digital-first curriculum tailored for the next generation of leaders.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-[#07503d] text-white text-base font-bold shadow-lg shadow-[#07503d]/20 hover:translate-y-[-2px] transition-all">
                  Get Started
                </button>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 border-2 border-[#07503d] text-[#07503d] text-base font-bold hover:bg-[#07503d]/5 transition-all">
                  Our Products
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="w-full aspect-[4/3] bg-[#07503d]/5 rounded-3xl relative overflow-hidden flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#07503d]/20 to-transparent"></div>
                {/* Abstract UI Representation */}
                <div className="relative w-4/5 h-4/5 bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                  <div className="h-8 bg-slate-100 flex items-center px-4 gap-2">
                    <div className="size-2 rounded-full bg-red-400"></div>
                    <div className="size-2 rounded-full bg-yellow-400"></div>
                    <div className="size-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="p-6 grid grid-cols-12 gap-4">
                    <div className="col-span-4 h-32 bg-[#07503d]/10 rounded-lg"></div>
                    <div className="col-span-8 flex flex-col gap-3">
                      <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-20 bg-slate-100 rounded-lg mt-2"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 size-48 bg-[#07503d] rounded-full blur-3xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-4 mb-12">
            <h2 className="text-[#07503d] font-bold text-sm tracking-widest uppercase">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#111816]">Tailored Solutions for Growth</h3>
            <p className="text-slate-600 max-w-2xl">We provide end-to-end expertise in digital transformation, ensuring institutions and enterprises stay ahead in the rapidly evolving technological landscape.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-[#dbe6e3] bg-white p-8 hover:shadow-xl hover:border-[#07503d]/30 transition-all">
              <div className="size-14 rounded-xl bg-[#07503d]/10 flex items-center justify-center text-[#07503d] group-hover:bg-[#07503d] group-hover:text-white transition-all">
                <Code size={28} />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold leading-tight">Software Development</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Custom enterprise solutions built for scale. From cloud architecture to seamless user experiences.</p>
              </div>
              <a className="mt-auto flex items-center gap-2 text-[#07503d] font-bold text-sm group-hover:gap-3 transition-all" href="#">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
            {/* Service 2 */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-[#dbe6e3] bg-white p-8 hover:shadow-xl hover:border-[#07503d]/30 transition-all">
              <div className="size-14 rounded-xl bg-[#07503d]/10 flex items-center justify-center text-[#07503d] group-hover:bg-[#07503d] group-hover:text-white transition-all">
                <GraduationCap size={28} />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold leading-tight">Online Training</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Digital-first curriculum designed for modern learners. Interactive platforms for global reach.</p>
              </div>
              <a className="mt-auto flex items-center gap-2 text-[#07503d] font-bold text-sm group-hover:gap-3 transition-all" href="#">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
            {/* Service 3 */}
            <div className="group flex flex-col gap-6 rounded-2xl border border-[#dbe6e3] bg-white p-8 hover:shadow-xl hover:border-[#07503d]/30 transition-all">
              <div className="size-14 rounded-xl bg-[#07503d]/10 flex items-center justify-center text-[#07503d] group-hover:bg-[#07503d] group-hover:text-white transition-all">
                <BookOpen size={28} />
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-xl font-bold leading-tight">Educational Solutions</h4>
                <p className="text-slate-600 text-sm leading-relaxed">End-to-end LMS and digital infrastructure for schools and higher education institutions.</p>
              </div>
              <a className="mt-auto flex items-center gap-2 text-[#07503d] font-bold text-sm group-hover:gap-3 transition-all" href="#">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-[#f6f8f7]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {/* Analytics Block */}
                <div className="aspect-square bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-[#07503d]/10 to-transparent flex flex-col p-4">
                    <LayoutDashboard className="text-[#07503d] mb-2" />
                    <span className="font-bold text-xs uppercase tracking-tighter opacity-50">Analytics</span>
                    <div className="mt-auto flex items-end gap-1">
                      <div className="w-2 bg-[#07503d] h-8 rounded-t"></div>
                      <div className="w-2 bg-[#07503d]/40 h-12 rounded-t"></div>
                      <div className="w-2 bg-[#07503d]/60 h-6 rounded-t"></div>
                    </div>
                  </div>
                </div>
                {/* Integration Block */}
                <div className="aspect-square bg-white rounded-2xl p-4 shadow-lg border border-slate-100 mt-8">
                  <div className="h-full w-full rounded-xl bg-[#07503d] flex flex-col p-4 text-white">
                    <Database className="mb-2" />
                    <span className="font-bold text-xs uppercase tracking-tighter opacity-70">Integration</span>
                    <div className="mt-auto flex items-center justify-center">
                      <div className="animate-spin duration-[3000ms]">
                         <ArrowRight className="rotate-90" size={32}/>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Secure Block */}
                <div className="aspect-square bg-white rounded-2xl p-4 shadow-lg border border-slate-100 -mt-8">
                  <div className="h-full w-full rounded-xl bg-slate-50 flex flex-col p-4">
                    <Shield className="text-slate-400 mb-2" />
                    <span className="font-bold text-xs uppercase tracking-tighter opacity-50">Secure</span>
                    <div className="mt-auto">
                      <div className="h-1 w-full bg-slate-200 rounded-full mb-1"></div>
                      <div className="h-1 w-3/4 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Collaborative Block */}
                <div className="aspect-square bg-white rounded-2xl p-4 shadow-lg border border-slate-100">
                  <div className="h-full w-full rounded-xl bg-[#07503d]/10 flex flex-col p-4">
                    <Users className="text-[#07503d] mb-2" />
                    <span className="font-bold text-xs uppercase tracking-tighter opacity-50">Collaborative</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="flex flex-col gap-6">
                <h2 className="text-[#07503d] font-bold text-sm tracking-widest uppercase">Product Showcase</h2>
                <h3 className="text-3xl md:text-5xl font-black text-[#111816] leading-tight">Advanced Software for Modern Institutions</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our platform provides a comprehensive suite of tools designed to streamline administrative workflows, enhance student engagement, and provide data-driven insights.
                </p>
                <ul className="flex flex-col gap-4">
                  {['Intuitive LMS Dashboards', 'Real-time Performance Analytics', 'Secure Enterprise Cloud Storage'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="size-6 rounded-full bg-[#07503d]/20 flex items-center justify-center text-[#07503d]">
                        <ArrowRight size={14} />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <button className="bg-[#07503d] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#07503d]/20 hover:scale-105 transition-transform">
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-end mb-12">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#07503d] font-bold text-sm tracking-widest uppercase">Latest Insights</h2>
              <h3 className="text-3xl md:text-4xl font-black text-[#111816]">Knowledge for the Future</h3>
            </div>
            <button className="hidden md:flex items-center gap-2 text-[#07503d] font-bold hover:underline">
              View all articles <ArrowUpRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "The Rise of AI in Personalized Learning", category: "Trends", img: "https://picsum.photos/600/400?random=1", desc: "How machine learning models are reshaping the way we deliver content to diverse student populations..." },
              { title: "Scaling Enterprise LMS Platforms", category: "Architecture", img: "https://picsum.photos/600/400?random=2", desc: "Best practices for building robust, multi-tenant educational platforms that can handle millions of concurrent users..." },
              { title: "Bridging the Industry Skill Gap", category: "Education", img: "https://picsum.photos/600/400?random=3", desc: "Why vocational training and digital literacy are more important now than ever for the modern workforce..." }
            ].map((article, idx) => (
              <article key={idx} className="flex flex-col gap-4 group cursor-pointer">
                <div className="aspect-video w-full rounded-xl bg-slate-200 overflow-hidden relative">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#07503d]/0 group-hover:bg-[#07503d]/20 transition-all duration-300"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-[#07503d] uppercase">{article.category}</span>
                  <h4 className="text-xl font-bold leading-tight group-hover:text-[#07503d] transition-colors">{article.title}</h4>
                  <p className="text-slate-500 text-sm line-clamp-2">{article.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Check, Calendar, MessageCircle, BarChart2, ShieldCheck, Download, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TEDU LMS Pro | Product Details',
  description: 'The most advanced Learning Management System for forward-thinking institutions. Manage classes, track performance, and engage students.',
};

export default function ProductDetailPage() {
  return (
    <div className="font-sans bg-[#10221d] text-white">
      {/* Product Hero */}
      <section className="pt-20 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#12edb6] opacity-10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#12edb6]/30 text-[#12edb6] text-xs font-mono w-fit bg-[#12edb6]/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12edb6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#12edb6]"></span>
                </span>
                Live Version 4.2
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                TEDU <span className="text-[#12edb6]">LMS Pro</span>
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed">
                The most advanced Learning Management System for forward-thinking institutions. Seamlessly manage classes, track performance, and engage students in one unified platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="h-14 px-8 rounded-xl bg-[#12edb6] text-[#10221d] font-bold text-lg hover:shadow-[0_0_20px_rgba(18,237,182,0.4)] transition-shadow">
                  Request Demo
                </button>
                <button className="h-14 px-8 rounded-xl border border-slate-700 text-white font-bold text-lg hover:bg-white/5 transition-colors flex items-center gap-2">
                  <Download size={20} /> Download Brochure
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl bg-[#1a2e28] border border-slate-700 p-2 shadow-2xl shadow-black/50">
                <div className="bg-[#10221d] rounded-xl overflow-hidden aspect-[16/10] relative">
                  {/* Mock UI */}
                  <div className="absolute top-0 left-0 w-16 h-full border-r border-slate-800 bg-[#0c1a16] flex flex-col items-center py-4 gap-6">
                    <div className="size-8 rounded bg-[#12edb6]"></div>
                    <div className="size-6 rounded bg-slate-800"></div>
                    <div className="size-6 rounded bg-slate-800"></div>
                    <div className="size-6 rounded bg-slate-800"></div>
                  </div>
                  <div className="pl-16 pt-4 pr-4 h-full flex flex-col gap-4">
                    <div className="h-8 w-full border-b border-slate-800 flex items-center justify-between mb-2">
                       <div className="h-4 w-32 bg-slate-800 rounded"></div>
                       <div className="flex gap-2">
                          <div className="size-6 rounded-full bg-slate-700"></div>
                       </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 h-full">
                       <div className="col-span-2 bg-[#1a2e28] rounded-lg p-4">
                          <div className="h-32 bg-gradient-to-r from-[#12edb6]/20 to-transparent rounded mb-4"></div>
                          <div className="h-4 w-full bg-slate-800 rounded mb-2"></div>
                          <div className="h-4 w-2/3 bg-slate-800 rounded"></div>
                       </div>
                       <div className="col-span-1 bg-[#1a2e28] rounded-lg p-4 flex flex-col gap-2">
                          <div className="h-8 w-full bg-slate-800 rounded"></div>
                          <div className="h-8 w-full bg-slate-800 rounded"></div>
                          <div className="h-8 w-full bg-slate-800 rounded"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Grid */}
      <section className="py-10 border-y border-slate-800 bg-[#0d1c18]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-1">
               <span className="text-3xl font-bold text-white">99.9%</span>
               <span className="text-sm text-slate-500 uppercase tracking-wider">Uptime SLA</span>
            </div>
            <div className="flex flex-col gap-1">
               <span className="text-3xl font-bold text-white">50k+</span>
               <span className="text-sm text-slate-500 uppercase tracking-wider">Concurrent Users</span>
            </div>
            <div className="flex flex-col gap-1">
               <span className="text-3xl font-bold text-white">&lt;100ms</span>
               <span className="text-sm text-slate-500 uppercase tracking-wider">Latency</span>
            </div>
            <div className="flex flex-col gap-1">
               <span className="text-3xl font-bold text-white">ISO 27001</span>
               <span className="text-sm text-slate-500 uppercase tracking-wider">Certified Security</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-[#12edb6] font-bold tracking-widest text-sm uppercase mb-4">System Capabilities</h2>
            <h3 className="text-3xl md:text-5xl font-black">Everything you need to run a digital campus</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#1a2e28] hover:bg-[#1f3630] transition-colors border border-slate-800">
               <div className="size-14 rounded-full bg-[#12edb6]/10 flex items-center justify-center text-[#12edb6] mb-6">
                 <Calendar size={28} />
               </div>
               <h4 className="text-xl font-bold mb-4">Smart Scheduling</h4>
               <p className="text-slate-400 leading-relaxed">Automated timetable generation with conflict detection for students, teachers, and room resources.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#1a2e28] hover:bg-[#1f3630] transition-colors border border-slate-800">
               <div className="size-14 rounded-full bg-[#12edb6]/10 flex items-center justify-center text-[#12edb6] mb-6">
                 <BarChart2 size={28} />
               </div>
               <h4 className="text-xl font-bold mb-4">Performance AI</h4>
               <p className="text-slate-400 leading-relaxed">Predictive analytics that identify at-risk students early and suggest personalized learning paths.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#1a2e28] hover:bg-[#1f3630] transition-colors border border-slate-800">
               <div className="size-14 rounded-full bg-[#12edb6]/10 flex items-center justify-center text-[#12edb6] mb-6">
                 <MessageCircle size={28} />
               </div>
               <h4 className="text-xl font-bold mb-4">Unified Comm</h4>
               <p className="text-slate-400 leading-relaxed">Integrated chat, forums, and announcement systems to keep the entire campus connected.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#1a2e28] hover:bg-[#1f3630] transition-colors border border-slate-800">
               <div className="size-14 rounded-full bg-[#12edb6]/10 flex items-center justify-center text-[#12edb6] mb-6">
                 <ShieldCheck size={28} />
               </div>
               <h4 className="text-xl font-bold mb-4">Exam Security</h4>
               <p className="text-slate-400 leading-relaxed">Browser lockdown features and AI proctoring to ensure integrity during online assessments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration CTA */}
      <section className="py-20 bg-[#12edb6] text-[#10221d]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to transform your institution?</h2>
             <p className="font-medium opacity-80 text-lg">Join 500+ schools and universities using TEDU LMS Pro today.</p>
           </div>
           <button className="h-14 px-8 bg-[#10221d] text-white rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
             Schedule Consultation <ChevronRight />
           </button>
        </div>
      </section>
    </div>
  );
}

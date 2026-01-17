import React from 'react';
import { Terminal, Cpu, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | TEDU',
  description: 'Comprehensive digital services for educational growth including custom software development, IT infrastructure, and curriculum design.',
};

export default function ServicesPage() {
  return (
    <div className="font-sans bg-[#10221d] min-h-screen text-white">
       {/* Hero */}
       <section className="py-20 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
          <span className="text-[#12edb6] font-bold tracking-widest text-sm uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight max-w-4xl mx-auto">
            Comprehensive <span className="text-[#12edb6]">Digital Services</span> for Educational Growth
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don't just build software. We build the future infrastructure of education through consultancy, custom development, and training.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col gap-24">
          
          {/* Service 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-[#12edb6] flex items-center justify-center text-[#10221d]">
                  <Terminal size={24} />
                </div>
                <h2 className="text-3xl font-bold">Custom Software Development</h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Every institution has unique needs. Our engineering team builds bespoke solutions tailored to your specific workflows, from admissions portals to alumni management systems.
              </p>
              <ul className="space-y-4 mb-8">
                {['React & Node.js Architecture', 'Cloud-Native Scalability', 'Legacy System Migration'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-[#12edb6]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#12edb6] font-bold hover:gap-3 transition-all">
                Discuss a Project <ArrowRight size={20} />
              </button>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="aspect-[4/3] bg-[#1a2e28] rounded-3xl border border-slate-800 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#12edb6] opacity-10 blur-[80px] rounded-full"></div>
                {/* Code UI Mockup */}
                <div className="bg-[#10221d] rounded-xl border border-slate-700 p-4 h-full font-mono text-xs text-slate-400">
                  <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                    <div className="size-3 rounded-full bg-red-500"></div>
                    <div className="size-3 rounded-full bg-yellow-500"></div>
                    <div className="size-3 rounded-full bg-green-500"></div>
                  </div>
                  <p><span className="text-[#12edb6]">const</span> <span className="text-yellow-400">transformEducation</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}</p>
                  <p className="pl-4"><span className="text-[#12edb6]">await</span> deployInfrastructure();</p>
                  <p className="pl-4"><span className="text-[#12edb6]">return</span> <span className="text-green-400">"Future Ready"</span>;</p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-[#1a2e28] rounded-3xl border border-slate-800 p-8 relative overflow-hidden flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="bg-[#10221d] p-4 rounded-xl border border-slate-700 h-32"></div>
                    <div className="bg-[#12edb6] p-4 rounded-xl h-32 opacity-20 translate-y-8"></div>
                    <div className="bg-[#10221d] p-4 rounded-xl border border-slate-700 h-32 -translate-y-8"></div>
                    <div className="bg-[#10221d] p-4 rounded-xl border border-slate-700 h-32"></div>
                 </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-[#12edb6] flex items-center justify-center text-[#10221d]">
                  <Cpu size={24} />
                </div>
                <h2 className="text-3xl font-bold">IT Infrastructure & IoT</h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Modernizing the physical and digital backbone of schools. We implement smart classroom technologies, secure Wi-Fi networks, and server management.
              </p>
              <ul className="space-y-4 mb-8">
                {['Smart Classroom Setup', 'Network Security Audits', 'Hardware Procurement'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-[#12edb6]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#12edb6] font-bold hover:gap-3 transition-all">
                Learn about Infra <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-[#12edb6] flex items-center justify-center text-[#10221d]">
                  <PenTool size={24} />
                </div>
                <h2 className="text-3xl font-bold">Curriculum Design</h2>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Our educational experts work with your faculty to digitize curriculum, creating interactive content that engages students and improves retention rates.
              </p>
              <ul className="space-y-4 mb-8">
                {['E-Learning Content Creation', 'Instructional Design', 'Teacher Training Workshops'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-[#12edb6]" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="flex items-center gap-2 text-[#12edb6] font-bold hover:gap-3 transition-all">
                See Examples <ArrowRight size={20} />
              </button>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="aspect-[4/3] bg-[#1a2e28] rounded-3xl border border-slate-800 p-8 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#12edb6]/10 to-transparent"></div>
                <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-2xl rotate-3 flex flex-col overflow-hidden">
                  <div className="h-40 bg-slate-200"></div>
                  <div className="p-4 flex flex-col gap-2">
                    <div className="h-4 bg-slate-200 w-3/4 rounded"></div>
                    <div className="h-4 bg-slate-100 w-1/2 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

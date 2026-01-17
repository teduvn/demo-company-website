import React from 'react';
import { Target, Eye, Lightbulb, Handshake, Users, Award, Briefcase, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | TEDU',
  description: 'Learn about TEDU\'s mission to empower the next generation of tech leaders through innovative education and software solutions.',
};

export default function AboutPage() {
  return (
    <div className="font-sans text-[#111816]">
      {/* Hero Section */}
      <section className="pt-10 pb-16 bg-[#f6f8f8]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-12 lg:py-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#07503d]/10 text-[#07503d] text-xs font-bold uppercase tracking-wider w-fit">
                Our Mission
              </div>
              <h1 className="text-[#111816] text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.03em]">
                Empowering the Next Generation of Tech Leaders
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                TEDU is a tech and education company dedicated to bridging the gap between learning and industry-leading expertise. We believe in democratizing knowledge for the digital age.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="rounded-2xl object-cover h-64 w-full" />
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Working together" className="rounded-2xl object-cover h-64 w-full mt-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-1 p-8 bg-[#07503d] rounded-3xl text-white relative overflow-hidden">
              <Target className="mb-4 text-[#12edb6]" size={40} />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-slate-200 leading-relaxed">
                To provide accessible, high-quality technology education and software solutions that empower individuals and organizations to thrive in a digital world.
              </p>
              <div className="absolute -bottom-10 -right-10 size-40 bg-[#12edb6] rounded-full blur-3xl opacity-20"></div>
            </div>
            <div className="flex-1 p-8 bg-[#f6f8f8] rounded-3xl text-[#111816] border border-slate-100">
              <Eye className="mb-4 text-[#07503d]" size={40} />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the global standard for educational technology, creating a future where technology amplifies human potential without barriers.
              </p>
            </div>
            <div className="flex-1 p-8 bg-[#f6f8f8] rounded-3xl text-[#111816] border border-slate-100">
              <Lightbulb className="mb-4 text-[#07503d]" size={40} />
              <h3 className="text-2xl font-bold mb-4">Core Values</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-[#07503d]"></div> Innovation First</li>
                <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-[#07503d]"></div> Student Centric</li>
                <li className="flex items-center gap-2"><div className="size-1.5 rounded-full bg-[#07503d]"></div> Integrity & Trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#07503d] text-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-[#12edb6]">10+</span>
              <span className="text-sm font-medium tracking-widest uppercase opacity-80">Years Experience</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-[#12edb6]">500+</span>
              <span className="text-sm font-medium tracking-widest uppercase opacity-80">Enterprise Partners</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-[#12edb6]">1M+</span>
              <span className="text-sm font-medium tracking-widest uppercase opacity-80">Students Impacted</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl md:text-5xl font-black text-[#12edb6]">24/7</span>
              <span className="text-sm font-medium tracking-widest uppercase opacity-80">Global Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
             <h2 className="text-[#07503d] font-bold text-sm tracking-widest uppercase mb-3">The Minds Behind TEDU</h2>
             <h3 className="text-3xl md:text-4xl font-black text-[#111816]">Meet Our Leadership</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "David Chen", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
              { name: "Elena Rodriguez", role: "Head of Education", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ].map((member, idx) => (
              <div key={idx} className="group">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h4 className="text-xl font-bold text-[#111816]">{member.name}</h4>
                <p className="text-[#07503d] font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

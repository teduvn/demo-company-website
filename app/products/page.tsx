'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Box, Monitor, Smartphone, Cloud, Lock, BarChart } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="font-sans bg-[#10221d] min-h-screen text-white">
      {/* Header */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#12edb6] opacity-5 blur-[120px] rounded-full"></div>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
          <span className="text-[#12edb6] font-bold tracking-widest text-sm uppercase mb-4 block">Product Catalog</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Tools for the <span className="text-[#12edb6]">Digital Era</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Explore our ecosystem of educational platforms, management systems, and enterprise tools designed to streamline operations and enhance learning outcomes.
          </p>
        </div>
      </section>

      {/* Filter Tabs (Visual Only for UI) */}
      <section className="pb-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
            <button className="px-6 py-2 rounded-full bg-[#12edb6] text-[#10221d] font-bold text-sm whitespace-nowrap">All Products</button>
            <button className="px-6 py-2 rounded-full border border-slate-700 text-slate-300 font-medium text-sm whitespace-nowrap hover:border-[#12edb6] hover:text-[#12edb6] transition-colors">LMS Platforms</button>
            <button className="px-6 py-2 rounded-full border border-slate-700 text-slate-300 font-medium text-sm whitespace-nowrap hover:border-[#12edb6] hover:text-[#12edb6] transition-colors">Enterprise Tools</button>
            <button className="px-6 py-2 rounded-full border border-slate-700 text-slate-300 font-medium text-sm whitespace-nowrap hover:border-[#12edb6] hover:text-[#12edb6] transition-colors">Infrastructure</button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Product */}
            <Link href="/products/lms-pro" className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-[#1a2e28] border border-slate-800 p-8 flex flex-col md:flex-row gap-8 hover:border-[#12edb6]/50 transition-all group cursor-pointer">
              <div className="flex flex-col gap-4 flex-1">
                <div className="size-12 rounded-xl bg-[#12edb6] flex items-center justify-center text-[#10221d]">
                  <Monitor size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">TEDU LMS Pro</h3>
                <p className="text-slate-400 leading-relaxed">
                  Our flagship Learning Management System. A complete digital campus solution featuring live classes, assignment tracking, and AI-driven student analytics.
                </p>
                <div className="mt-auto pt-4 flex gap-2">
                  <span className="px-3 py-1 rounded bg-black/30 text-xs text-[#12edb6] font-mono">v4.2.0</span>
                  <span className="px-3 py-1 rounded bg-black/30 text-xs text-slate-400 font-mono">Enterprise</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 bg-[#10221d] rounded-xl overflow-hidden relative border border-slate-800">
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-[#12edb6]/10 transition-colors">
                  <div className="text-[#12edb6] font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    View Details <ArrowRight size={18} />
                  </div>
                </div>
                {/* Abstract dashboard UI */}
                <div className="p-4 opacity-60">
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/4 h-32 bg-slate-800 rounded"></div>
                    <div className="w-3/4 h-32 bg-slate-800 rounded"></div>
                  </div>
                  <div className="w-full h-4 bg-slate-800 rounded mb-2"></div>
                  <div className="w-2/3 h-4 bg-slate-800 rounded"></div>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <div className="rounded-3xl bg-[#1a2e28] border border-slate-800 p-8 flex flex-col gap-6 hover:border-[#12edb6]/50 transition-all hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-[#12edb6]/10 flex items-center justify-center text-[#12edb6]">
                <Smartphone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">TEDU Mobile Connect</h3>
                <p className="text-slate-400 text-sm">Student and parent portal mobile application for real-time updates.</p>
              </div>
              <button className="mt-auto w-full py-3 rounded-xl border border-slate-700 hover:bg-[#12edb6] hover:text-[#10221d] hover:border-[#12edb6] font-bold transition-all">Learn More</button>
            </div>

            {/* Product 3 */}
            <div className="rounded-3xl bg-[#1a2e28] border border-slate-800 p-8 flex flex-col gap-6 hover:border-[#12edb6]/50 transition-all hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-[#12edb6]/10 flex items-center justify-center text-[#12edb6]">
                <Cloud size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Cloud Archive</h3>
                <p className="text-slate-400 text-sm">Secure, scalable document storage and digitalization for institutions.</p>
              </div>
              <button className="mt-auto w-full py-3 rounded-xl border border-slate-700 hover:bg-[#12edb6] hover:text-[#10221d] hover:border-[#12edb6] font-bold transition-all">Learn More</button>
            </div>

            {/* Product 4 */}
            <div className="rounded-3xl bg-[#1a2e28] border border-slate-800 p-8 flex flex-col gap-6 hover:border-[#12edb6]/50 transition-all hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-[#12edb6]/10 flex items-center justify-center text-[#12edb6]">
                <BarChart size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">EduAnalytics</h3>
                <p className="text-slate-400 text-sm">Data visualization tools for performance tracking and forecasting.</p>
              </div>
              <button className="mt-auto w-full py-3 rounded-xl border border-slate-700 hover:bg-[#12edb6] hover:text-[#10221d] hover:border-[#12edb6] font-bold transition-all">Learn More</button>
            </div>

            {/* Product 5 */}
            <div className="rounded-3xl bg-[#1a2e28] border border-slate-800 p-8 flex flex-col gap-6 hover:border-[#12edb6]/50 transition-all hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-[#12edb6]/10 flex items-center justify-center text-[#12edb6]">
                <Lock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">GateKeeper ID</h3>
                <p className="text-slate-400 text-sm">Biometric and RFID access control systems integrated with attendance.</p>
              </div>
              <button className="mt-auto w-full py-3 rounded-xl border border-slate-700 hover:bg-[#12edb6] hover:text-[#10221d] hover:border-[#12edb6] font-bold transition-all">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

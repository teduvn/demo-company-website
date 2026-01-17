'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Có lỗi xảy ra. Vui lòng thử lại.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Không thể kết nối đến server. Vui lòng thử lại.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f3] to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#07503d] to-[#0a6b4f] text-white py-20 px-6">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h1>
          <p className="text-lg md:text-xl text-white/90">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#111816] mb-6">
              Thông Tin Liên Hệ
            </h2>
            <p className="text-gray-600 mb-8">
              Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#07503d] text-white p-3 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111816] mb-1">Email</h3>
                  <p className="text-gray-600">contact@tedu.com</p>
                  <p className="text-gray-600">support@tedu.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#07503d] text-white p-3 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111816] mb-1">Điện Thoại</h3>
                  <p className="text-gray-600">+84 123 456 789</p>
                  <p className="text-gray-600">+84 987 654 321</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#07503d] text-white p-3 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#111816] mb-1">Địa Chỉ</h3>
                  <p className="text-gray-600">
                    123 Đường ABC, Quận 1<br />
                    Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-[#111816] mb-3">Giờ Làm Việc</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Thứ 2 - Thứ 6:</span>
                  <span className="font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Thứ 7:</span>
                  <span className="font-medium">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Chủ Nhật:</span>
                  <span className="font-medium">Nghỉ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-[#111816] mb-6">
              Gửi Tin Nhắn
            </h2>

            {submitStatus.type && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Họ và Tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07503d] focus:border-transparent outline-none transition"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07503d] focus:border-transparent outline-none transition"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Số Điện Thoại
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07503d] focus:border-transparent outline-none transition"
                  placeholder="0123 456 789"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tin Nhắn <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07503d] focus:border-transparent outline-none transition resize-none"
                  placeholder="Nhập tin nhắn của bạn..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#07503d] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#05402f] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Gửi Tin Nhắn
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

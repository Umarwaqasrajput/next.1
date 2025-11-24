'use client';

import { Mail, Phone, X } from 'lucide-react';
import { useState } from 'react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSendEmail = () => {
    const emailBody = encodeURIComponent(message);
    const emailSubject = encodeURIComponent(subject || 'Property Inquiry');
    window.open(`mailto:amiraloneboy92@gmail.com?subject=${emailSubject}&body=${emailBody}`);
    onClose();
    setMessage('');
    setSubject('');
  };

  const handleSendWhatsApp = () => {
    const whatsappMessage = encodeURIComponent(`Subject: ${subject || 'Property Inquiry'}\n\n${message}`);
    window.open(`https://wa.me/923066120708?text=${whatsappMessage}`);
    onClose();
    setMessage('');
    setSubject('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Send Message</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Property Inquiry"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={handleSendEmail}
              disabled={!message.trim()}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </button>
            <button
              onClick={handleSendWhatsApp}
              disabled={!message.trim()}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
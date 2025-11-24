'use client';

import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import EmailModal from '../ui/EmailModal';

export default function Footer() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <button 
                  onClick={() => setShowEmailModal(true)}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  amiraloneboy92@gmail.com
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:03066120708" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  0306 6120708
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <a 
                  href="https://wa.me/923066120708" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  WhatsApp Chat
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-gray-300">Faisalabad, Pakistan</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-300">Property Consultation</p>
              <p className="text-gray-300">Market Analysis</p>
              <p className="text-gray-300">Legal Documentation</p>
              <p className="text-gray-300">Property Valuation</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Rajput Real Estate. All rights reserved.
          </p>
        </div>
      </div>

      <EmailModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
      />
    </footer>
  );
}
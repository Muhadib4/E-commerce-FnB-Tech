import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

type Page = 
  | 'home' 
  | 'kopi-luwak' 
  | 'business' 
  | 'about' 
  | 'product' 
  | 'agritech' 
  | 'fishery' 
  | 'farm' 
  | 'wholesale' 
  | 'oem';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#006E29] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#006E29]">FnB</span>
              </div>
              <span>FnB.tech</span>
            </div>
            <p className="text-white/80 mb-4">
              Your trusted partner in coffee, agritech, fishery, and farm solutions.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('kopi-luwak')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Kopi Luwak Coffee
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('agritech')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FnB Agritech
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('fishery')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FnB Fishery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('farm')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  FnB Farm
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('wholesale')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Wholesale Green Coffee
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('business')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Business Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('oem')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  OEM/Private Label
                </button>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button className="text-white/80 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-white/80">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@fnb.tech</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+62 xxx xxxx xxxx</span>
              </li>
              <li className="flex gap-3 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-center md:text-left">
            © 2025 FnB.tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/60">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

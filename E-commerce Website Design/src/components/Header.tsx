import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

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

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-[#006E29] rounded-lg flex items-center justify-center">
              <span className="text-white">FnB</span>
            </div>
            <span className="text-[#006E29]">FnB.tech</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-[#006E29]' : 'text-gray-600 hover:text-[#006E29]'
              }`}
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
                className="flex items-center gap-1 text-gray-600 hover:text-[#006E29] transition-colors"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {productsDropdownOpen && (
                <div 
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2"
                >
                  <button
                    onClick={() => {
                      onNavigate('kopi-luwak');
                      setProductsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-[#006E29] transition-colors"
                  >
                    Kopi Luwak
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('agritech');
                      setProductsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-[#006E29] transition-colors"
                  >
                    FnB Agritech
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('fishery');
                      setProductsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-[#006E29] transition-colors"
                  >
                    FnB Fishery
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('farm');
                      setProductsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-[#006E29] transition-colors"
                  >
                    FnB Farm
                  </button>
                  <button
                    onClick={() => {
                      onNavigate('wholesale');
                      setProductsDropdownOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-[#006E29] transition-colors"
                  >
                    Wholesale Green Coffee
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('business')}
              className={`transition-colors ${
                currentPage === 'business' ? 'text-[#006E29]' : 'text-gray-600 hover:text-[#006E29]'
              }`}
            >
              Business
            </button>

            <button
              onClick={() => onNavigate('oem')}
              className={`transition-colors ${
                currentPage === 'oem' ? 'text-[#006E29]' : 'text-gray-600 hover:text-[#006E29]'
              }`}
            >
              OEM/Private Label
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`transition-colors ${
                currentPage === 'about' ? 'text-[#006E29]' : 'text-gray-600 hover:text-[#006E29]'
              }`}
            >
              About
            </button>
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:block px-6 py-2.5 bg-[#006E29] text-white rounded-lg hover:bg-[#005520] transition-colors">
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('kopi-luwak');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                Kopi Luwak
              </button>
              <button
                onClick={() => {
                  onNavigate('agritech');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                FnB Agritech
              </button>
              <button
                onClick={() => {
                  onNavigate('fishery');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                FnB Fishery
              </button>
              <button
                onClick={() => {
                  onNavigate('farm');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                FnB Farm
              </button>
              <button
                onClick={() => {
                  onNavigate('business');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                Business
              </button>
              <button
                onClick={() => {
                  onNavigate('wholesale');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                Wholesale Green Coffee
              </button>
              <button
                onClick={() => {
                  onNavigate('oem');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                OEM/Private Label
              </button>
              <button
                onClick={() => {
                  onNavigate('about');
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-gray-700 hover:text-[#006E29]"
              >
                About
              </button>
              <button className="mx-4 px-6 py-2.5 bg-[#006E29] text-white rounded-lg hover:bg-[#005520] transition-colors">
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

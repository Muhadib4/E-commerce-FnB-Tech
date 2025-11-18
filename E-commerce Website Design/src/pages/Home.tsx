import { ArrowRight, Coffee, Sprout, Fish, Wheat, CheckCircle, Users, Globe, Award } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

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

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const categories = [
    {
      icon: Coffee,
      title: 'Coffee Solutions',
      description: 'Premium coffee beans and specialty coffee products',
      page: 'kopi-luwak' as Page,
      color: '#006E29'
    },
    {
      icon: Sprout,
      title: 'Agritech',
      description: 'Modern agricultural technology and solutions',
      page: 'agritech' as Page,
      color: '#95C93A'
    },
    {
      icon: Fish,
      title: 'Fishery',
      description: 'Sustainable aquaculture and fishery products',
      page: 'fishery' as Page,
      color: '#006E29'
    },
    {
      icon: Wheat,
      title: 'Farm',
      description: 'Quality farm products and equipment',
      page: 'farm' as Page,
      color: '#95C93A'
    }
  ];

  const brands = [
    'FnB Coffee',
    'Specialtycoffee.id',
    'Kopiluwak.coffee',
    'Originalluwak.com',
    'Kopi.online',
    'Specialtycoffee.shop'
  ];

  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Customers' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: CheckCircle, value: '100%', label: 'Quality Guaranteed' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006E29] to-[#004d1d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#95C93A] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#95C93A] rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <span className="text-[#95C93A]">Leading Agribusiness Platform</span>
              </div>
              
              <h1 className="text-white">
                Your Trusted Partner in Coffee, Agritech & Beyond
              </h1>
              
              <p className="text-white/90 text-lg lg:text-xl">
                FnB.tech is a holding company connecting premium brands in coffee, agriculture, fishery, and farm solutions. Experience quality, innovation, and sustainability in one platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => onNavigate('product')}
                  className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('business')}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Business Solutions
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1661669061302-307c750f6faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHNwZWNpYWx0eXxlbnwxfHx8fDE3NjMzNzE5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Specialty Coffee Beans"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#006E29]/10 rounded-lg mb-4">
                  <stat.icon className="w-6 h-6 text-[#006E29]" />
                </div>
                <div className="text-[#006E29]">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our comprehensive range of premium products and solutions across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => onNavigate(category.page)}
                className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#006E29] hover:shadow-lg transition-all text-left"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon 
                    className="w-7 h-7"
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-[#006E29]">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Brands</h2>
            <p className="text-gray-600 text-lg">
              Trusted brands under the FnB.tech umbrella
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 flex items-center justify-center hover:border-[#006E29] hover:shadow-md transition-all"
              >
                <span className="text-gray-700 text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-600 text-lg">
                Our most popular products across all categories
              </p>
            </div>
            <button 
              onClick={() => onNavigate('product')}
              className="hidden lg:flex items-center gap-2 text-[#006E29] hover:gap-4 transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Kopi Luwak Premium',
                category: 'Coffee',
                price: 'Contact for pricing',
                image: 'https://images.unsplash.com/photo-1733938941418-df8bf946c6aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXdhayUyMGNpdmV0JTIwY29mZmVlfGVufDF8fHx8MTc2MzI3NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              {
                title: 'Green Coffee Beans',
                category: 'Coffee',
                price: 'From $12/kg',
                image: 'https://images.unsplash.com/photo-1561986845-fbeb7f7913d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MzI3NzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              {
                title: 'Agritech Solutions',
                category: 'Technology',
                price: 'Custom Solutions',
                image: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjk0ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              }
            ].map((product, index) => (
              <button
                key={index}
                onClick={() => onNavigate('product')}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all text-left"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#006E29] mb-2">{product.category}</div>
                  <h3 className="text-gray-900 mb-2">{product.title}</h3>
                  <div className="text-gray-700">{product.price}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:hidden flex justify-center mt-8">
            <button 
              onClick={() => onNavigate('product')}
              className="flex items-center gap-2 text-[#006E29]"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Get Started?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust FnB.tech for their coffee, agritech, fishery, and farm needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('business')}
              className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Business
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

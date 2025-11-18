import { ArrowRight, Wheat, Tractor, Leaf, Award, CheckCircle, Users } from 'lucide-react';
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

interface FarmProps {
  onNavigate: (page: Page) => void;
}

export function Farm({ onNavigate }: FarmProps) {
  const categories = [
    {
      icon: Wheat,
      title: 'Livestock Solutions',
      description: 'Complete solutions for cattle, poultry, and livestock farming',
      features: ['Feed management', 'Health monitoring', 'Housing systems', 'Breeding programs']
    },
    {
      icon: Tractor,
      title: 'Farm Equipment',
      description: 'Quality machinery and tools for efficient farm operations',
      features: ['Tractors & tillers', 'Harvesters', 'Irrigation equipment', 'Processing tools']
    },
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: 'Sustainable and organic farming solutions',
      features: ['Organic fertilizers', 'Pest control', 'Composting systems', 'Certification support']
    },
    {
      icon: Users,
      title: 'Farm Management',
      description: 'Software and consulting for farm business optimization',
      features: ['Farm planning', 'Inventory management', 'Financial tracking', 'Market access']
    }
  ];

  const products = [
    {
      name: 'Livestock Feed Solutions',
      category: 'Animal Nutrition',
      description: 'Premium feed formulations for optimal animal health and growth',
      image: 'https://images.unsplash.com/photo-1658881070511-c5aa3a883a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBjYXR0bGUlMjBmYXJtfGVufDF8fHx8MTc2MzI3NTIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Farm Equipment Package',
      category: 'Machinery',
      description: 'Essential equipment for small to medium-scale farming',
      image: 'https://images.unsplash.com/photo-1593701635836-7fd2cd40a35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGZpZWxkfGVufDF8fHx8MTc2MzM1NTAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Organic Fertilizer System',
      category: 'Sustainability',
      description: 'Complete organic farming and composting solutions',
      image: 'https://images.unsplash.com/photo-1593701635836-7fd2cd40a35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGZpZWxkfGVufDF8fHx8MTc2MzM1NTAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const services = [
    {
      title: 'Farm Consultation',
      description: 'Expert guidance on farm setup, management, and optimization',
      points: ['Site assessment', 'Business planning', 'Technology integration', 'Sustainability practices']
    },
    {
      title: 'Training Programs',
      description: 'Comprehensive training for farmers and farm workers',
      points: ['Best practices', 'Equipment operation', 'Safety protocols', 'Modern techniques']
    },
    {
      title: 'Supply Chain Support',
      description: 'Connecting farmers with markets and buyers',
      points: ['Market linkages', 'Price information', 'Quality standards', 'Distribution support']
    }
  ];

  const benefits = [
    'Improve farm productivity and yields',
    'Access to quality inputs and equipment',
    'Expert guidance and technical support',
    'Sustainable farming practices',
    'Market access and fair pricing',
    'Community of farmers for knowledge sharing'
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
                <span className="text-[#95C93A]">Comprehensive Farm Solutions</span>
              </div>

              <h1 className="text-white">
                FnB Farm
              </h1>

              <p className="text-white/90 text-lg lg:text-xl">
                Complete farming solutions for livestock, crops, and sustainable agriculture. From equipment to expertise, we support farmers at every scale with quality products and professional guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('business')}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Get Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1593701635836-7fd2cd40a35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGZpZWxkfGVufDF8fHx8MTc2MzM1NTAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Organic Farm Field"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Farm Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive products and services for successful farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-[#95C93A]/10 rounded-xl flex items-center justify-center mb-6">
                  <category.icon className="w-7 h-7 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#95C93A] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Quality products for modern farming operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => onNavigate('product')}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all text-left"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#006E29] mb-2">{product.category}</div>
                  <h3 className="text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center gap-2 text-[#006E29]">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Beyond products - we provide comprehensive support services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1658881070511-c5aa3a883a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlc3RvY2slMjBjYXR0bGUlMjBmYXJtfGVufDF8fHx8MTc2MzI3NTIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Livestock Farm"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">Why Partner With Us</h2>
              <p className="text-gray-600 text-lg mb-8">
                We're committed to supporting farmers with quality products, expert guidance, and sustainable practices that improve both productivity and profitability.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#006E29] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Our Impact</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Supporting farmers and farming communities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '1,000+', label: 'Farmers Supported' },
              { value: '50K+', label: 'Hectares Farmed' },
              { value: '35%', label: 'Yield Improvement' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Farmer Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The livestock feed solutions have significantly improved our cattle health and milk production. Highly recommended!",
                name: "Budi Santoso",
                farm: "Dairy Farm, Central Java"
              },
              {
                quote: "Their farm equipment package was exactly what we needed to modernize our operations. Great value and quality.",
                name: "Siti Rahayu",
                farm: "Rice Farm, East Java"
              },
              {
                quote: "The organic farming consultation helped us transition smoothly and achieve certification. Their support is excellent.",
                name: "Ahmad Hidayat",
                farm: "Organic Vegetables, Bali"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Award key={i} className="w-5 h-5 fill-[#95C93A] text-[#95C93A]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.farm}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">Ready to Transform Your Farm?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Get in touch with our farm experts to discuss your needs and discover how we can help improve your farming operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#006E29] text-white rounded-lg hover:bg-[#005520] transition-colors">
              Contact Our Team
            </button>
            <button 
              onClick={() => onNavigate('business')}
              className="px-8 py-3 bg-transparent border-2 border-[#006E29] text-[#006E29] rounded-lg hover:bg-[#006E29]/5 transition-colors"
            >
              Business Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

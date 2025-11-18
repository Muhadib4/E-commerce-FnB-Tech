import { ArrowRight, Sprout, TrendingUp, Cpu, Droplets, Sun, Wind, CheckCircle } from 'lucide-react';
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

interface AgritechProps {
  onNavigate: (page: Page) => void;
}

export function Agritech({ onNavigate }: AgritechProps) {
  const solutions = [
    {
      icon: Cpu,
      title: 'Smart Farming Technology',
      description: 'IoT sensors and monitoring systems for precision agriculture',
      features: ['Soil monitoring', 'Weather stations', 'Crop analytics', 'Automated irrigation']
    },
    {
      icon: Droplets,
      title: 'Irrigation Systems',
      description: 'Water-efficient irrigation solutions for optimal crop growth',
      features: ['Drip irrigation', 'Sprinkler systems', 'Smart water management', 'Remote control']
    },
    {
      icon: Sun,
      title: 'Greenhouse Solutions',
      description: 'Modern greenhouse technology for controlled environment farming',
      features: ['Climate control', 'Automated ventilation', 'Light management', 'Hydroponics']
    },
    {
      icon: Wind,
      title: 'Crop Protection',
      description: 'Sustainable pest management and crop protection systems',
      features: ['Organic pesticides', 'Monitoring tools', 'Disease detection', 'Prevention systems']
    }
  ];

  const products = [
    {
      name: 'Agricultural Drone System',
      category: 'Precision Farming',
      description: 'Advanced drone technology for crop monitoring and spraying',
      image: 'https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzcyMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Smart Irrigation Controller',
      category: 'Water Management',
      description: 'IoT-enabled irrigation system with weather-based scheduling',
      image: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjk0ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Soil Sensor Kit',
      category: 'Monitoring',
      description: 'Real-time soil moisture, pH, and nutrient monitoring',
      image: 'https://images.unsplash.com/photo-1593701635836-7fd2cd40a35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGZpZWxkfGVufDF8fHx8MTc2MzM1NTAxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const benefits = [
    'Increase crop yields by up to 30%',
    'Reduce water consumption by 40%',
    'Lower operational costs',
    'Real-time monitoring and alerts',
    'Data-driven decision making',
    'Sustainable farming practices'
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
                <span className="text-[#95C93A]">Modern Agriculture Solutions</span>
              </div>

              <h1 className="text-white">
                FnB Agritech
              </h1>

              <p className="text-white/90 text-lg lg:text-xl">
                Transform your farming operations with cutting-edge agricultural technology. From smart irrigation to precision farming, we provide comprehensive solutions for modern agriculture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Explore Solutions
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
                  src="https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjk0ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern Agriculture Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Agritech Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions for modern farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-[#95C93A]/10 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
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

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1720071702672-d18c69cb475c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMzcyMTk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Agricultural Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">Why Choose Our Agritech Solutions</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our technology-driven approach helps farmers maximize productivity while minimizing resource consumption and environmental impact.
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

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our range of agricultural technology products
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

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Proven Results</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our agritech solutions deliver measurable improvements
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '30%', label: 'Yield Increase' },
              { value: '40%', label: 'Water Savings' },
              { value: '500+', label: 'Farms Served' },
              { value: '25%', label: 'Cost Reduction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">Ready to Modernize Your Farm?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Contact our agritech experts to discuss how our solutions can help increase your farm's productivity and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#006E29] text-white rounded-lg hover:bg-[#005520] transition-colors">
              Schedule Consultation
            </button>
            <button 
              onClick={() => onNavigate('business')}
              className="px-8 py-3 bg-transparent border-2 border-[#006E29] text-[#006E29] rounded-lg hover:bg-[#006E29]/5 transition-colors"
            >
              View Business Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

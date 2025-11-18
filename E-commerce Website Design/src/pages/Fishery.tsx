import { ArrowRight, Fish, Waves, Thermometer, Activity, CheckCircle, Settings } from 'lucide-react';
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

interface FisheryProps {
  onNavigate: (page: Page) => void;
}

export function Fishery({ onNavigate }: FisheryProps) {
  const solutions = [
    {
      icon: Waves,
      title: 'Aquaculture Systems',
      description: 'Complete solutions for modern fish farming operations',
      features: ['Recirculating systems', 'Pond management', 'Biofloc technology', 'Water treatment']
    },
    {
      icon: Thermometer,
      title: 'Water Quality Management',
      description: 'Advanced monitoring and control systems for optimal conditions',
      features: ['pH monitoring', 'Temperature control', 'Oxygen levels', 'Ammonia detection']
    },
    {
      icon: Activity,
      title: 'Feed Management',
      description: 'Automated feeding systems and nutrition solutions',
      features: ['Auto feeders', 'Feed optimization', 'Growth tracking', 'Feed conversion ratio']
    },
    {
      icon: Settings,
      title: 'Equipment & Infrastructure',
      description: 'Quality equipment for efficient fishery operations',
      features: ['Aeration systems', 'Pumps & filters', 'Nets & cages', 'Harvesting tools']
    }
  ];

  const products = [
    {
      name: 'Smart Aquaculture System',
      category: 'Technology',
      description: 'IoT-enabled system for monitoring and controlling water parameters',
      image: 'https://images.unsplash.com/photo-1686426575720-99714548a7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybWluZyUyMGFxdWFjdWx0dXJlfGVufDF8fHx8MTc2MzI3NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Water Quality Monitor',
      category: 'Monitoring',
      description: 'Real-time water quality testing and alert system',
      image: 'https://images.unsplash.com/photo-1759271082074-6cde09f86550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwcG9uZCUyMGFxdWFjdWx0dXJlfGVufDF8fHx8MTc2MzM3MjE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Automated Feeding System',
      category: 'Automation',
      description: 'Programmable feeding system with portion control',
      image: 'https://images.unsplash.com/photo-1686426575720-99714548a7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybWluZyUyMGFxdWFjdWx0dXJlfGVufDF8fHx8MTc2MzI3NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const benefits = [
    'Increase fish survival rates by 25%',
    'Optimize feed conversion ratios',
    'Reduce labor costs through automation',
    'Early disease detection and prevention',
    'Improve water quality management',
    'Maximize stocking density'
  ];

  const species = [
    { name: 'Tilapia', type: 'Freshwater' },
    { name: 'Catfish', type: 'Freshwater' },
    { name: 'Shrimp', type: 'Brackish/Marine' },
    { name: 'Barramundi', type: 'Freshwater/Brackish' },
    { name: 'Grouper', type: 'Marine' },
    { name: 'Salmon', type: 'Marine' }
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
                <span className="text-[#95C93A]">Sustainable Aquaculture Solutions</span>
              </div>

              <h1 className="text-white">
                FnB Fishery
              </h1>

              <p className="text-white/90 text-lg lg:text-xl">
                Advanced fishery and aquaculture solutions for sustainable fish farming. From water quality management to automated feeding systems, we support your aquaculture success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  View Products
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
                  src="https://images.unsplash.com/photo-1686426575720-99714548a7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybWluZyUyMGFxdWFjdWx0dXJlfGVufDF8fHx8MTc2MzI3NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Fish Farming Aquaculture"
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
            <h2 className="text-gray-900 mb-4">Our Fishery Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for successful aquaculture operations
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

      {/* Species We Support */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Species We Support</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our solutions cater to various aquaculture species
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {species.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:border-[#006E29] hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-[#006E29]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Fish className="w-6 h-6 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Benefits of Our Fishery Solutions</h2>
              <p className="text-gray-600 text-lg mb-8">
                Our integrated approach to aquaculture management helps maximize productivity while ensuring fish health and environmental sustainability.
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1759271082074-6cde09f86550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwcG9uZCUyMGFxdWFjdWx0dXJlfGVufDF8fHx8MTc2MzM3MjE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fish Pond Aquaculture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our range of fishery technology and equipment
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
            <h2 className="text-white mb-4">Proven Track Record</h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our fishery solutions deliver measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '25%', label: 'Better Survival Rate' },
              { value: '35%', label: 'Faster Growth' },
              { value: '200+', label: 'Farms Equipped' },
              { value: '30%', label: 'Cost Savings' }
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
          <h2 className="text-gray-900 mb-6">Start Your Aquaculture Journey</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Contact our fishery experts to learn how our solutions can help improve your aquaculture operations and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#006E29] text-white rounded-lg hover:bg-[#005520] transition-colors">
              Request Consultation
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

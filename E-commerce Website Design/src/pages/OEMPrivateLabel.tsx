import { ArrowRight, Package, Palette, Scale, Truck, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
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

interface OEMPrivateLabelProps {
  onNavigate: (page: Page) => void;
}

export function OEMPrivateLabel({ onNavigate }: OEMPrivateLabelProps) {
  const services = [
    {
      icon: Palette,
      title: 'Brand Development',
      description: 'Complete branding services from concept to execution',
      features: [
        'Logo design consultation',
        'Packaging design',
        'Brand strategy',
        'Marketing materials'
      ]
    },
    {
      icon: Package,
      title: 'Custom Blending',
      description: 'Expert coffee blending tailored to your specifications',
      features: [
        'Recipe development',
        'Taste profiling',
        'Quality consistency',
        'Sample iterations'
      ]
    },
    {
      icon: Scale,
      title: 'Production & Processing',
      description: 'Full-service production with quality control',
      features: [
        'Roasting services',
        'Grinding options',
        'Packaging solutions',
        'Quality testing'
      ]
    },
    {
      icon: Truck,
      title: 'Logistics & Distribution',
      description: 'End-to-end supply chain management',
      features: [
        'Warehousing',
        'Order fulfillment',
        'International shipping',
        'Inventory management'
      ]
    }
  ];

  const packages = [
    {
      name: 'Starter Package',
      moq: '100-500 kg',
      description: 'Perfect for new brands testing the market',
      includes: [
        'Single origin or house blend',
        'Basic packaging design',
        'Standard label printing',
        'Quality certification',
        'Flexible delivery schedule'
      ],
      price: 'Custom Quote'
    },
    {
      name: 'Professional Package',
      moq: '500-2,000 kg',
      description: 'Ideal for established brands scaling up',
      includes: [
        'Custom blend development',
        'Premium packaging options',
        'Brand consultation',
        'Marketing support',
        'Dedicated account manager',
        'Priority production'
      ],
      price: 'Custom Quote',
      highlighted: true
    },
    {
      name: 'Enterprise Package',
      moq: '2,000+ kg',
      description: 'For large-scale operations and distributors',
      includes: [
        'Exclusive blend recipes',
        'Full branding services',
        'Custom packaging design',
        'Market research support',
        'Warehousing solutions',
        'White-label platform',
        'International distribution'
      ],
      price: 'Custom Quote'
    }
  ];

  const products = [
    {
      category: 'Roasted Coffee',
      options: ['Whole bean', 'Ground coffee', 'Single origin', 'Blends', 'Specialty grades']
    },
    {
      category: 'Green Coffee',
      options: ['Arabica varieties', 'Robusta varieties', 'Specialty lots', 'Commercial grades', 'Custom sourcing']
    },
    {
      category: 'Coffee Products',
      options: ['Drip bags', 'Coffee pods', 'Instant coffee', 'Cold brew concentrate', 'RTD beverages']
    },
    {
      category: 'Packaging',
      options: ['Kraft bags', 'Foil bags', 'Valve bags', 'Tins & jars', 'Custom sizes']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Discuss your brand vision, target market, and product requirements'
    },
    {
      step: '02',
      title: 'Product Development',
      description: 'Create custom blends and develop packaging design concepts'
    },
    {
      step: '03',
      title: 'Sample Approval',
      description: 'Review samples, make adjustments, and finalize specifications'
    },
    {
      step: '04',
      title: 'Production & Delivery',
      description: 'Full-scale production with quality control and timely delivery'
    }
  ];

  const benefits = [
    'Low minimum order quantities',
    'Fast turnaround times',
    'Complete quality control',
    'Flexible packaging options',
    'Competitive pricing',
    'Expert guidance and support',
    'Scalable solutions',
    'International shipping'
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
                <span className="text-[#95C93A]">Build Your Coffee Brand</span>
              </div>

              <h1 className="text-white">
                OEM & Private Label Solutions
              </h1>

              <p className="text-white/90 text-lg lg:text-xl">
                Launch your own coffee brand with our comprehensive OEM and private label services. From sourcing to packaging, we handle everything so you can focus on growing your brand.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Start Your Brand
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                  Request Samples
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-white mb-1">100kg</div>
                  <div className="text-white/70">Min Order</div>
                </div>
                <div>
                  <div className="text-white mb-1">7-14</div>
                  <div className="text-white/70">Days Lead Time</div>
                </div>
                <div>
                  <div className="text-white mb-1">100+</div>
                  <div className="text-white/70">Brands Launched</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1570936449881-998bb07d3dfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGVyJTIwd2hvbGVzYWxlfGVufDF8fHx8MTc2MzM3MjE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coffee Roaster"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our OEM Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end solutions for launching your coffee brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-[#95C93A]/10 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
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

      {/* Packages Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">OEM Packages</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible packages to match your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-br from-[#006E29] to-[#004d1d] text-white border-2 border-[#95C93A] relative'
                    : 'bg-white border border-gray-100'
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#95C93A] text-white rounded-full text-sm">
                    Recommended
                  </div>
                )}
                
                <h3 className={pkg.highlighted ? 'text-white mb-2' : 'text-gray-900 mb-2'}>
                  {pkg.name}
                </h3>
                <div className={`mb-2 ${pkg.highlighted ? 'text-[#95C93A]' : 'text-[#006E29]'}`}>
                  MOQ: {pkg.moq}
                </div>
                <p className={`mb-6 ${pkg.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {pkg.description}
                </p>
                
                <div className="mb-6">
                  <div className={`mb-4 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    Includes:
                  </div>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? 'text-[#95C93A]' : 'text-[#006E29]'
                        }`} />
                        <span className={pkg.highlighted ? 'text-white' : 'text-gray-700'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`mb-6 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.price}
                </div>

                <button className={`w-full px-6 py-3 rounded-lg transition-colors ${
                  pkg.highlighted
                    ? 'bg-white text-[#006E29] hover:bg-gray-100'
                    : 'bg-[#006E29] text-white hover:bg-[#005520]'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Offer */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Products We Can Produce</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Wide range of coffee products for your private label brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8">
                <h3 className="text-gray-900 mb-4">{product.category}</h3>
                <ul className="space-y-2">
                  {product.options.map((option, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#006E29] flex-shrink-0" />
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple 4-step process to launch your coffee brand
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 h-full">
                  <div className="text-[#95C93A] mb-4">{item.step}</div>
                  <h3 className="text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#95C93A]/30" />
                )}
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
              <h2 className="text-gray-900 mb-6">Why Choose Our OEM Services</h2>
              <p className="text-gray-600 text-lg mb-8">
                We make it easy and affordable to launch your own coffee brand with our comprehensive support and expertise.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1644754889084-0a3d4e923d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYzMjk0ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee Roasting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Brands we've helped launch and grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                brandName: 'Urban Brew Co.',
                industry: 'Specialty Coffee Shop',
                result: '3 locations in first year'
              },
              {
                brandName: 'Mountain Peak Coffee',
                industry: 'E-commerce Brand',
                result: '$500K revenue in 6 months'
              },
              {
                brandName: 'Café Deluxe',
                industry: 'Hotel Chain',
                result: '20 properties supplied'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100">
                <Award className="w-10 h-10 text-[#006E29] mb-4" />
                <h3 className="text-gray-900 mb-2">{story.brandName}</h3>
                <div className="text-gray-600 mb-4">{story.industry}</div>
                <div className="flex items-center gap-2 text-[#006E29]">
                  <TrendingUp className="w-5 h-5" />
                  <span>{story.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Launch Your Coffee Brand?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Contact our OEM team today to discuss your project and receive a customized proposal for your private label coffee brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button 
              onClick={() => onNavigate('business')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              View Other Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

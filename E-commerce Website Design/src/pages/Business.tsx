import { ArrowRight, Building2, Users, Boxes, TrendingUp, CheckCircle, Globe, Award, HeadphonesIcon } from 'lucide-react';
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

interface BusinessProps {
  onNavigate: (page: Page) => void;
}

export function Business({ onNavigate }: BusinessProps) {
  const solutions = [
    {
      icon: Building2,
      title: 'B2B Distribution',
      description: 'Reliable supply chain solutions for importers, distributors, and retailers worldwide',
      benefits: [
        'Consistent quality and supply',
        'Competitive wholesale pricing',
        'Flexible delivery schedules',
        'Dedicated account management'
      ]
    },
    {
      icon: Boxes,
      title: 'Bulk Orders',
      description: 'Large-scale procurement for roasters, cafes, and commercial operations',
      benefits: [
        'Volume-based discounts',
        'Custom packaging options',
        'Quality assurance',
        'Direct from source pricing'
      ]
    },
    {
      icon: Users,
      title: 'Partnership Programs',
      description: 'Collaborative opportunities for long-term business relationships',
      benefits: [
        'Exclusive product access',
        'Joint marketing support',
        'Training and education',
        'Priority customer service'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Private Label & OEM',
      description: 'Build your brand with our premium products and expertise',
      benefits: [
        'Custom blending services',
        'Brand development support',
        'Flexible MOQ options',
        'End-to-end solutions'
      ]
    }
  ];

  const industries = [
    {
      title: 'Coffee Importers',
      description: 'Direct access to premium Indonesian coffee beans with full traceability',
      image: 'https://images.unsplash.com/photo-1661669061302-307c750f6faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHNwZWNpYWx0eXxlbnwxfHx8fDE3NjMzNzE5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Roasters & Cafes',
      description: 'Quality green beans and specialty coffee for your roasting needs',
      image: 'https://images.unsplash.com/photo-1644754889084-0a3d4e923d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYzMjk0ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Agricultural Enterprises',
      description: 'Modern farming solutions and technology for improved yields',
      image: 'https://images.unsplash.com/photo-1761839257144-297ce252742e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzMjk0ODg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Farm & Fishery Operations',
      description: 'Comprehensive solutions for sustainable farming and aquaculture',
      image: 'https://images.unsplash.com/photo-1686426575720-99714548a7e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybWluZyUyMGFxdWFjdWx0dXJlfGVufDF8fHx8MTc2MzI3NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const whyChooseUs = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving customers in 25+ countries with reliable international shipping'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Certified products with rigorous quality control standards'
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: 'Expert team providing personalized service and consultation'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Direct sourcing enables cost-effective pricing for bulk orders'
    }
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
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm mb-6">
              <span className="text-[#95C93A]">B2B Solutions</span>
            </div>

            <h1 className="text-white mb-6">
              Business Solutions for Every Scale
            </h1>

            <p className="text-white/90 text-lg lg:text-xl mb-8">
              Partner with FnB.tech for reliable, scalable business solutions in coffee, agritech, fishery, and farm products. From small roasters to large enterprises, we deliver quality and consistency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Business Solutions</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-[#006E29]/10 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by businesses across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-gray-900 mb-3">{industry.title}</h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Why Choose FnB.tech</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your trusted partner for business growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006E29]/10 rounded-2xl mb-4">
                  <item.icon className="w-8 h-8 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple process to get started with FnB.tech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Discuss your business needs and requirements with our team'
              },
              {
                step: '02',
                title: 'Custom Proposal',
                description: 'Receive tailored solutions and competitive pricing'
              },
              {
                step: '03',
                title: 'Sample & Testing',
                description: 'Review product samples and verify quality standards'
              },
              {
                step: '04',
                title: 'Partnership & Growth',
                description: 'Begin partnership with ongoing support and optimization'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 h-full">
                  <div className="text-[#95C93A] mb-4">{item.step}</div>
                  <h3 className="text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#95C93A]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-white mb-4">Ready to Grow Your Business?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join hundreds of successful partners who trust FnB.tech for their supply needs. Get started today with a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors">
                  Request Quote
                </button>
                <button 
                  onClick={() => onNavigate('oem')}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Explore OEM/Private Label
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <input 
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <input 
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <textarea 
                  placeholder="Tell us about your business needs"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                />
                <button className="w-full px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

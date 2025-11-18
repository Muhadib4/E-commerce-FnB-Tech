import { Target, Eye, Award, Users, TrendingUp, Globe, Heart, Leaf } from 'lucide-react';
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

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering only the finest products with rigorous quality standards'
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Promoting eco-friendly practices and supporting sustainable agriculture'
    },
    {
      icon: Heart,
      title: 'Ethical Sourcing',
      description: 'Ensuring fair trade and ethical practices throughout our supply chain'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Embracing modern technology and innovative solutions in agribusiness'
    }
  ];

  const brands = [
    {
      name: 'FnB Coffee',
      description: 'Premium coffee solutions for roasters and distributors',
      focus: 'Coffee Trading'
    },
    {
      name: 'Specialtycoffee.id',
      description: 'Indonesian specialty coffee platform',
      focus: 'Specialty Coffee'
    },
    {
      name: 'Kopiluwak.coffee',
      description: 'Authentic Kopi Luwak direct from source',
      focus: 'Premium Coffee'
    },
    {
      name: 'Originalluwak.com',
      description: 'Certified authentic Kopi Luwak products',
      focus: 'Luxury Coffee'
    },
    {
      name: 'Kopi.online',
      description: 'Online coffee marketplace and distribution',
      focus: 'E-Commerce'
    },
    {
      name: 'Specialtycoffee.shop',
      description: 'Retail platform for specialty coffee enthusiasts',
      focus: 'Retail'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started as a small coffee trading company in Indonesia'
    },
    {
      year: '2015',
      title: 'Expansion to Agritech',
      description: 'Diversified into agricultural technology and solutions'
    },
    {
      year: '2018',
      title: 'International Growth',
      description: 'Expanded operations to serve 25+ countries worldwide'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched FnB.tech platform connecting all brands'
    },
    {
      year: '2023',
      title: 'Sustainability Initiative',
      description: 'Implemented comprehensive sustainable sourcing program'
    },
    {
      year: '2025',
      title: 'Industry Leadership',
      description: 'Recognized as leading agribusiness platform in Southeast Asia'
    }
  ];

  const team = [
    {
      role: 'Leadership',
      description: 'Experienced executives with deep industry knowledge',
      count: '15+'
    },
    {
      role: 'Operations',
      description: 'Dedicated team ensuring smooth supply chain',
      count: '50+'
    },
    {
      role: 'Quality Control',
      description: 'Experts maintaining our high standards',
      count: '20+'
    },
    {
      role: 'Customer Support',
      description: 'Available to assist with your needs',
      count: '24/7'
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-6">
              About FnB.tech
            </h1>

            <p className="text-white/90 text-lg lg:text-xl mb-8">
              We are a leading holding company connecting premium brands in coffee, agritech, fishery, and farm solutions. Our mission is to bridge quality products with global markets through innovation and sustainability.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-white mb-2">15+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
              <div>
                <div className="text-white mb-2">25+</div>
                <div className="text-white/70">Countries</div>
              </div>
              <div>
                <div className="text-white mb-2">10K+</div>
                <div className="text-white/70">Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#006E29] to-[#004d1d] text-white p-12 rounded-3xl">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#95C93A]" />
              </div>
              <h2 className="text-white mb-4">Our Mission</h2>
              <p className="text-white/90 text-lg">
                To connect the world with Indonesia's finest agricultural products while empowering local farmers and promoting sustainable practices. We strive to deliver excellence in quality, service, and innovation across all our brands.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#95C93A] to-[#7ab82f] text-white p-12 rounded-3xl">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-white mb-4">Our Vision</h2>
              <p className="text-white/90 text-lg">
                To become the leading global platform for premium agricultural products, recognized for quality, sustainability, and innovation. We envision a future where technology and tradition unite to create lasting value for all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006E29]/10 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Brand Portfolio</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Six specialized brands serving different market segments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#006E29] hover:shadow-lg transition-all">
                <div className="inline-block px-3 py-1 bg-[#006E29]/10 text-[#006E29] rounded-full text-sm mb-4">
                  {brand.focus}
                </div>
                <h3 className="text-gray-900 mb-3">{brand.name}</h3>
                <p className="text-gray-600">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100">
                <div className="text-[#95C93A] mb-4">{milestone.year}</div>
                <h3 className="text-gray-900 mb-3">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate professionals dedicated to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#006E29]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-[#006E29]" />
                </div>
                <div className="text-[#006E29] mb-2">{item.count}</div>
                <h3 className="text-gray-900 mb-2">{item.role}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1624935920936-f09b9803faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2MzM3MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Coffee Plantation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">From Local Roots to Global Reach</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  FnB.tech began as a small coffee trading company in Indonesia, driven by a passion for sharing our nation's finest agricultural products with the world.
                </p>
                <p>
                  Over 15 years, we've grown into a comprehensive agribusiness platform, expanding beyond coffee into agritech, fishery, and farm solutions while maintaining our commitment to quality and sustainability.
                </p>
                <p>
                  Today, we proudly serve customers in over 25 countries, connecting local farmers with global markets and supporting sustainable agricultural practices across Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Join Our Journey</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Whether you're a customer, partner, or investor, we'd love to connect with you and explore opportunities for collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('business')}
              className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors"
            >
              Become a Partner
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, MapPin, Award, Scale, Package, CheckCircle, Coffee, TrendingUp } from 'lucide-react';
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

interface WholesaleGreenCoffeeProps {
  onNavigate: (page: Page) => void;
}

export function WholesaleGreenCoffee({ onNavigate }: WholesaleGreenCoffeeProps) {
  const origins = [
    {
      region: 'Aceh - Gayo',
      variety: 'Arabica',
      altitude: '1,200-1,800m',
      process: 'Washed, Natural, Honey',
      notes: 'Earthy, Chocolate, Herbal',
      image: 'https://images.unsplash.com/photo-1624935920936-f09b9803faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2MzM3MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      region: 'Sumatra - Mandheling',
      variety: 'Arabica',
      altitude: '1,000-1,500m',
      process: 'Semi-washed',
      notes: 'Full-bodied, Earthy, Complex',
      image: 'https://images.unsplash.com/photo-1561986845-fbeb7f7913d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MzI3NzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      region: 'Java - Ijen',
      variety: 'Arabica',
      altitude: '1,400-1,800m',
      process: 'Washed',
      notes: 'Bright, Clean, Floral',
      image: 'https://images.unsplash.com/photo-1661669061302-307c750f6faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHNwZWNpYWx0eXxlbnwxfHx8fDE3NjMzNzE5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      region: 'Bali - Kintamani',
      variety: 'Arabica',
      altitude: '1,200-1,600m',
      process: 'Washed',
      notes: 'Citrus, Spicy, Clean',
      image: 'https://images.unsplash.com/photo-1624935920936-f09b9803faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2MzM3MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      region: 'Flores',
      variety: 'Arabica',
      altitude: '1,300-1,700m',
      process: 'Semi-washed',
      notes: 'Sweet, Fruity, Balanced',
      image: 'https://images.unsplash.com/photo-1661669061302-307c750f6faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHNwZWNpYWx0eXxlbnwxfHx8fDE3NjMzNzE5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      region: 'Papua',
      variety: 'Arabica',
      altitude: '1,400-1,900m',
      process: 'Washed, Natural',
      notes: 'Tropical Fruit, Floral, Complex',
      image: 'https://images.unsplash.com/photo-1561986845-fbeb7f7913d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MzI3NzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const services = [
    {
      icon: Coffee,
      title: 'Direct Sourcing',
      description: 'Direct relationships with farmers and cooperatives ensuring quality and traceability'
    },
    {
      icon: Award,
      title: 'Quality Control',
      description: 'Rigorous cupping and grading process for consistent quality standards'
    },
    {
      icon: Package,
      title: 'Custom Packaging',
      description: 'Flexible packaging options from jute bags to vacuum-sealed containers'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Regular updates on pricing, availability, and market trends'
    }
  ];

  const pricing = [
    {
      tier: 'Starter',
      moq: '50-300 kg',
      description: 'Perfect for small roasters and cafes starting out',
      benefits: ['Standard pricing', 'Quality guarantee', 'Flexible delivery', 'Basic support']
    },
    {
      tier: 'Professional',
      moq: '300-1,000 kg',
      description: 'Ideal for established roasters with regular demand',
      benefits: ['Volume discount', 'Priority processing', 'Custom packaging', 'Dedicated support'],
      highlighted: true
    },
    {
      tier: 'Enterprise',
      moq: '1,000+ kg',
      description: 'For large-scale importers and distributors',
      benefits: ['Best pricing', 'Custom contracts', 'Exclusive origins', 'Account manager']
    }
  ];

  const certifications = [
    'Direct Trade Verified',
    'Organic Certified (Selected Origins)',
    'Rainforest Alliance',
    'UTZ Certified',
    'Fair Trade',
    'ISO 22000'
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
                <span className="text-[#95C93A]">Premium Indonesian Coffee</span>
              </div>

              <h1 className="text-white">
                Wholesale Green Coffee Beans
              </h1>

              <p className="text-white/90 text-lg lg:text-xl">
                Source premium green coffee beans directly from Indonesia's finest coffee-growing regions. Quality assured, competitively priced, and delivered with complete traceability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  Request Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                  View Sample Report
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-white mb-1">6+</div>
                  <div className="text-white/70">Origins</div>
                </div>
                <div>
                  <div className="text-white mb-1">From $12</div>
                  <div className="text-white/70">Per Kilogram</div>
                </div>
                <div>
                  <div className="text-white mb-1">25+</div>
                  <div className="text-white/70">Countries</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1561986845-fbeb7f7913d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MzI3NzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Green Coffee Beans"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Indonesian Coffee Origins</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our diverse selection of premium green coffee beans from Indonesia's finest regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {origins.map((origin, index) => (
              <button
                key={index}
                onClick={() => onNavigate('product')}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all text-left"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={origin.image}
                    alt={origin.region}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#006E29]" />
                    <span className="text-[#006E29]">{origin.region}</span>
                  </div>
                  <h3 className="text-gray-900 mb-4">{origin.variety}</h3>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div><strong>Altitude:</strong> {origin.altitude}</div>
                    <div><strong>Process:</strong> {origin.process}</div>
                    <div><strong>Notes:</strong> {origin.notes}</div>
                  </div>
                  <div className="flex items-center gap-2 text-[#006E29]">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your trusted partner for wholesale green coffee beans
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#006E29]/10 rounded-xl mb-4">
                  <service.icon className="w-7 h-7 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Wholesale Pricing Tiers</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible pricing based on order volume
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((tier, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 ${
                  tier.highlighted 
                    ? 'bg-gradient-to-br from-[#006E29] to-[#004d1d] text-white border-2 border-[#95C93A]' 
                    : 'bg-white border border-gray-100'
                }`}
              >
                {tier.highlighted && (
                  <div className="inline-block px-3 py-1 bg-[#95C93A] text-white rounded-full text-sm mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className={tier.highlighted ? 'text-white mb-2' : 'text-gray-900 mb-2'}>
                  {tier.tier}
                </h3>
                <div className={`mb-4 ${tier.highlighted ? 'text-[#95C93A]' : 'text-[#006E29]'}`}>
                  MOQ: {tier.moq}
                </div>
                <p className={`mb-6 ${tier.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        tier.highlighted ? 'text-[#95C93A]' : 'text-[#006E29]'
                      }`} />
                      <span className={tier.highlighted ? 'text-white' : 'text-gray-700'}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 rounded-lg transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-[#006E29] hover:bg-gray-100'
                    : 'bg-[#006E29] text-white hover:bg-[#005520]'
                }`}>
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
              We maintain the highest quality and ethical standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 flex items-center justify-center text-center">
                <div>
                  <Award className="w-8 h-8 text-[#006E29] mx-auto mb-2" />
                  <span className="text-gray-700 text-sm">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple process to source your green coffee beans
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Request Quote', description: 'Tell us your requirements and desired origins' },
              { step: '02', title: 'Sample Review', description: 'Receive samples and cupping reports' },
              { step: '03', title: 'Place Order', description: 'Confirm your order with flexible payment terms' },
              { step: '04', title: 'Delivery', description: 'Receive your coffee with complete documentation' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 h-full">
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Source Premium Green Coffee?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Contact our team to discuss your requirements and receive a customized quote for wholesale green coffee beans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors">
              Request Quote Now
            </button>
            <button 
              onClick={() => onNavigate('business')}
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Business Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

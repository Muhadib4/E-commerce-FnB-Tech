import { ArrowRight, Star, Award, Leaf, Shield, CheckCircle } from 'lucide-react';
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

interface KopiLuwakLandingProps {
  onNavigate: (page: Page) => void;
}

export function KopiLuwakLanding({ onNavigate }: KopiLuwakLandingProps) {
  const features = [
    {
      icon: Award,
      title: 'World\'s Rarest Coffee',
      description: 'Authentic Kopi Luwak from certified Indonesian plantations'
    },
    {
      icon: Leaf,
      title: 'Ethically Sourced',
      description: 'Wild-sourced beans ensuring animal welfare and sustainability'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: '100% authentic with certification and traceability'
    },
    {
      icon: Star,
      title: 'Premium Grade',
      description: 'Hand-selected beans with exceptional flavor profile'
    }
  ];

  const products = [
    {
      name: 'Wild Kopi Luwak - Arabica',
      origin: 'Aceh, Indonesia',
      grade: 'Premium',
      price: 'Contact for pricing',
      notes: ['Chocolate', 'Caramel', 'Earthy'],
      image: 'https://images.unsplash.com/photo-1733938941418-df8bf946c6aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXdhayUyMGNpdmV0JTIwY29mZmVlfGVufDF8fHx8MTc2MzI3NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Wild Kopi Luwak - Robusta',
      origin: 'Java, Indonesia',
      grade: 'Premium',
      price: 'Contact for pricing',
      notes: ['Bold', 'Nutty', 'Smooth'],
      image: 'https://images.unsplash.com/photo-1661669061302-307c750f6faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHNwZWNpYWx0eXxlbnwxfHx8fDE3NjMzNzE5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Kopi Luwak Gift Set',
      origin: 'Premium Selection',
      grade: 'Gift Package',
      price: 'From $199',
      notes: ['Mixed Origins', 'Premium Box', 'Certificate'],
      image: 'https://images.unsplash.com/photo-1561986845-fbeb7f7913d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MzI3NzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Natural Selection',
      description: 'Wild civets naturally select the ripest coffee cherries'
    },
    {
      step: '02',
      title: 'Natural Fermentation',
      description: 'Enzymatic process in civet\'s digestive system enhances flavors'
    },
    {
      step: '03',
      title: 'Collection & Cleaning',
      description: 'Beans are carefully collected and thoroughly cleaned'
    },
    {
      step: '04',
      title: 'Roasting & Quality Control',
      description: 'Expert roasting and strict quality checks ensure premium grade'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#006E29] to-[#004d1d] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#95C93A] rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#95C93A] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#95C93A]/20 rounded-full backdrop-blur-sm border border-[#95C93A]/30">
                <span className="text-[#95C93A]">World's Most Exclusive Coffee</span>
              </div>

              <h1 className="text-white">
                Kopi Luwak Coffee
              </h1>

              <p className="text-white/90 text-lg lg:text-xl">
                Experience the world's rarest and most sought-after coffee. Our authentic Kopi Luwak is ethically sourced from wild civets in Indonesia's finest coffee regions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => onNavigate('product')}
                  className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
                >
                  View Products
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => onNavigate('wholesale')}
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
                >
                  Wholesale Inquiry
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-white mb-1">100%</div>
                  <div className="text-white/70">Authentic</div>
                </div>
                <div>
                  <div className="text-white mb-1">Wild</div>
                  <div className="text-white/70">Sourced</div>
                </div>
                <div>
                  <div className="text-white mb-1">Certified</div>
                  <div className="text-white/70">Quality</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1733938941418-df8bf946c6aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXdhayUyMGNpdmV0JTIwY29mZmVlfGVufDF8fHx8MTc2MzI3NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Kopi Luwak Coffee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#006E29]/10 rounded-2xl mb-4">
                  <feature.icon className="w-8 h-8 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">The Unique Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover what makes Kopi Luwak the world's most exclusive coffee
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 h-full">
                  <div className="text-[#95C93A] mb-4">{item.step}</div>
                  <h3 className="text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#95C93A]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-gray-900 mb-4">Our Kopi Luwak Collection</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Premium selection of authentic Kopi Luwak coffee beans
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
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#006E29]/10 text-[#006E29] rounded-full text-sm">
                      {product.grade}
                    </span>
                  </div>
                  <h3 className="text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.origin}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.notes.map((note, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {note}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900">{product.price}</span>
                    <ArrowRight className="w-5 h-5 text-[#006E29] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-gray-900 mb-6">Certified Authenticity</h2>
                <p className="text-gray-600 text-lg mb-8">
                  Every batch of our Kopi Luwak comes with complete certification and traceability documentation, ensuring you receive only the finest, authentic product.
                </p>
                <div className="space-y-4">
                  {[
                    'Certificate of Authenticity',
                    'Origin Traceability',
                    'Quality Assurance Reports',
                    'Ethical Sourcing Verification'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1624935920936-f09b9803faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2MzM3MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Coffee Plantation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Experience Kopi Luwak?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Contact us for pricing, wholesale inquiries, or to learn more about our authentic Kopi Luwak collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('product')}
              className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Products
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

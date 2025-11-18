import { ArrowRight, Star, Shield, Truck, CheckCircle, Award, Package, Leaf } from 'lucide-react';
import { useState } from 'react';
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

interface SingleProductProps {
  onNavigate: (page: Page) => void;
}

export function SingleProduct({ onNavigate }: SingleProductProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    'https://images.unsplash.com/photo-1733938941418-df8bf946c6aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXdhayUyMGNpdmV0JTIwY29mZmVlfGVufDF8fHx8MTc2MzI3NzU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1661669061302-307c750f6faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHNwZWNpYWx0eXxlbnwxfHx8fDE3NjMzNzE5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1561986845-fbeb7f7913d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MzI3NzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  const features = [
    {
      icon: Award,
      title: '100% Authentic',
      description: 'Certified genuine Kopi Luwak with full traceability'
    },
    {
      icon: Leaf,
      title: 'Wild Sourced',
      description: 'Ethically collected from wild civets'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous quality control and testing'
    },
    {
      icon: Package,
      title: 'Secure Packaging',
      description: 'Premium packaging to preserve freshness'
    }
  ];

  const relatedProducts = [
    {
      name: 'Green Coffee Beans - Arabica',
      price: 'From $12/kg',
      image: 'https://images.unsplash.com/photo-1561986845-fbeb7f7913d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGNvZmZlZSUyMGJlYW5zfGVufDF8fHx8MTc2MzI3NzU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Specialty Coffee Beans',
      price: 'From $15/kg',
      image: 'https://images.unsplash.com/photo-1661669061302-307c750f6faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFucyUyMHNwZWNpYWx0eXxlbnwxfHx8fDE3NjMzNzE5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Coffee Gift Set',
      price: '$89',
      image: 'https://images.unsplash.com/photo-1624935920936-f09b9803faf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2MzM3MTkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <button onClick={() => onNavigate('home')} className="hover:text-[#006E29]">Home</button>
            <span>/</span>
            <button onClick={() => onNavigate('kopi-luwak')} className="hover:text-[#006E29]">Coffee</button>
            <span>/</span>
            <span className="text-gray-900">Kopi Luwak Premium Arabica</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <ImageWithFallback 
                  src={images[selectedImage]}
                  alt="Kopi Luwak Premium Arabica"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-[#006E29]' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <ImageWithFallback 
                      src={image}
                      alt={`Product view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-[#006E29]/10 text-[#006E29] rounded-full text-sm">
                    Premium Grade
                  </span>
                  <span className="px-3 py-1 bg-[#95C93A]/10 text-[#006E29] rounded-full text-sm">
                    In Stock
                  </span>
                </div>
                <h1 className="text-gray-900 mb-4">
                  Kopi Luwak Premium Arabica
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#95C93A] text-[#95C93A]" />
                    ))}
                  </div>
                  <span className="text-gray-600">(24 reviews)</span>
                </div>
                <div className="text-gray-700 text-sm mb-6">
                  SKU: KL-PREM-ARB-001
                </div>
              </div>

              <div>
                <div className="text-gray-900 mb-2">Price</div>
                <p className="text-gray-600 mb-2">
                  Contact us for current pricing and availability
                </p>
                <button 
                  onClick={() => onNavigate('wholesale')}
                  className="text-[#006E29] hover:underline flex items-center gap-1"
                >
                  View wholesale pricing
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-gray-900 mb-4">Product Description</h3>
                <p className="text-gray-600 mb-4">
                  Experience the world's most exclusive coffee with our Premium Kopi Luwak Arabica. Sourced from wild civets in the pristine coffee regions of Aceh, Indonesia, each bean undergoes a unique natural fermentation process that creates an exceptional flavor profile.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong>Origin:</strong> Aceh, Indonesia</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong>Variety:</strong> Arabica</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong>Process:</strong> Wild Civet Fermented</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong>Flavor Notes:</strong> Chocolate, Caramel, Earthy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-[#006E29] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600"><strong>Roast Level:</strong> Medium to Dark</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-gray-200 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-50"
                    >
                      -
                    </button>
                    <span className="px-6 py-2 border-x border-gray-200">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-gray-600">kg</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-8 py-3 bg-[#006E29] text-white rounded-lg hover:bg-[#005520] transition-colors">
                    Request Quote
                  </button>
                  <button className="flex-1 px-8 py-3 bg-transparent border-2 border-[#006E29] text-[#006E29] rounded-lg hover:bg-[#006E29]/5 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#006E29]" />
                  <span className="text-gray-700">100% Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-[#006E29]" />
                  <span className="text-gray-700">International Shipping Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#006E29]" />
                  <span className="text-gray-700">Certified with Full Traceability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Product Features</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#006E29]/10 rounded-xl mb-4">
                  <feature.icon className="w-7 h-7 text-[#006E29]" />
                </div>
                <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-gray-900 mb-2">Related Products</h2>
              <p className="text-gray-600">You might also be interested in</p>
            </div>
            <button className="hidden lg:flex items-center gap-2 text-[#006E29] hover:gap-4 transition-all">
              View All
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <button
                key={index}
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
                  <h3 className="text-gray-900 mb-2">{product.name}</h3>
                  <div className="text-gray-700">{product.price}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#006E29] to-[#95C93A] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Have Questions About This Product?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Our team of coffee experts is ready to assist you with product information, pricing, and ordering.
          </p>
          <button className="px-8 py-3 bg-white text-[#006E29] rounded-lg hover:bg-gray-100 transition-colors">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
}

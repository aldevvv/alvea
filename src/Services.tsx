import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Share2, Globe, ArrowRight, CheckCircle, TrendingUp, Users, BarChart3, Monitor, Smartphone, Zap } from 'lucide-react'
import Navbar from './components/Navbar'
import AlveaMaroonLogo from './assets/AlveaMaroon.png'

function Services() {
  const [isEnglish, setIsEnglish] = useState(true)

  const content = {
    en: {
      title: 'Our Services',
      subtitle: 'Comprehensive creative solutions for fashion brands',
      services: [
        {
          id: 'fashion-photography',
          title: 'Fashion Photography & Visual Production',
          intro: 'Strong visual concepts that fit your brand character, from lookbook to campaign.',
          icon: Camera,
          image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          scope: {
            title: 'Scope',
            items: [
              'Studio & on-location shoots',
              'Campaign/lookbook',
              'Product shots',
              'Retouching',
              'Art direction & moodboards'
            ]
          },
          process: {
            title: 'Process',
            steps: ['Brief', 'Concept', 'Shoot', 'Post', 'Delivery']
          },
          deliverables: {
            title: 'Deliverables',
            items: [
              'Hi-res images',
              'Social-ready cut-downs',
              'Usage rights guidance'
            ]
          },
          cta: 'See Related Work'
        },
        {
          id: 'social-media',
          title: 'Social Media Management',
          intro: 'Creative content + precise engagement to grow the right audience.',
          icon: Share2,
          image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          scope: {
            title: 'Scope',
            items: [
              'Content planning',
              'EN/ID copywriting',
              'Reels/editorials',
              'Influencer collaboration',
              'Ad-ready assets',
              'Community management'
            ]
          },
          kpi: {
            title: 'KPI Highlights',
            description: 'Aligned with "engagement growth & brand sales"',
            metrics: [
              { icon: TrendingUp, label: 'Engagement rate' },
              { icon: Users, label: 'Reach' },
              { icon: BarChart3, label: 'Saves' },
              { icon: ArrowRight, label: 'Clicks' },
              { icon: CheckCircle, label: 'Assisted sales' }
            ]
          },
          cta: 'Request Strategy Call'
        },
        {
          id: 'website-development',
          title: 'Website Development',
          intro: 'Responsive, easy-to-use, brand-centric websites that convert.',
          icon: Globe,
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          scope: {
            title: 'Scope',
            items: [
              'Lookbook & campaign microsites',
              'Product catalog',
              'Checkout readiness',
              'Speed & accessibility best-practices'
            ]
          },
          process: {
            title: 'Process',
            steps: ['Planning', 'Design', 'Develop', 'Test', 'Launch']
          },
          deliverables: {
            title: 'Deliverables',
            items: [
              'Design system',
              'CMS training',
              'Launch support'
            ]
          },
          features: [
            { icon: Monitor, label: 'Desktop Optimized' },
            { icon: Smartphone, label: 'Mobile First' },
            { icon: Zap, label: 'Fast Loading' }
          ],
          cta: 'See Web Projects'
        }
      ]
    },
    id: {
      title: 'Layanan Kami',
      subtitle: 'Solusi kreatif komprehensif untuk merek fashion',
      services: [
        {
          id: 'fashion-photography',
          title: 'Fotografi Fashion & Produksi Visual',
          intro: 'Konsep visual kuat sesuai karakter brand, dari lookbook hingga campaign.',
          icon: Camera,
          image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          scope: {
            title: 'Cakupan Layanan',
            items: [
              'Pemotretan studio & lokasi',
              'Campaign & lookbook',
              'Foto produk',
              'Retouching',
              'Art direction & moodboard'
            ]
          },
          process: {
            title: 'Proses',
            steps: ['Brief', 'Konsep', 'Pemotretan', 'Editing', 'Pengiriman']
          },
          deliverables: {
            title: 'Yang Anda Dapatkan',
            items: [
              'Gambar resolusi tinggi',
              'Format siap media sosial',
              'Panduan hak penggunaan'
            ]
          },
          cta: 'Lihat Proyek Terkait'
        },
        {
          id: 'social-media',
          title: 'Manajemen Media Sosial',
          intro: 'Konten kreatif + engagement presisi untuk audiens yang tepat.',
          icon: Share2,
          image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          scope: {
            title: 'Cakupan Layanan',
            items: [
              'Perencanaan konten',
              'Copywriting EN/ID',
              'Reels & editorial',
              'Kolaborasi influencer',
              'Aset siap iklan',
              'Manajemen komunitas'
            ]
          },
          kpi: {
            title: 'Indikator Keberhasilan',
            description: 'Selaras "pertumbuhan engagement & penjualan brand"',
            metrics: [
              { icon: TrendingUp, label: 'Tingkat engagement' },
              { icon: Users, label: 'Jangkauan' },
              { icon: BarChart3, label: 'Saves' },
              { icon: ArrowRight, label: 'Klik' },
              { icon: CheckCircle, label: 'Penjualan terbantu' }
            ]
          },
          cta: 'Minta Sesi Strategi'
        },
        {
          id: 'website-development',
          title: 'Pengembangan Website',
          intro: 'Website responsif, mudah digunakan, dan selaras identitas brand untuk konversi.',
          icon: Globe,
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          scope: {
            title: 'Cakupan Layanan',
            items: [
              'Lookbook & microsite campaign',
              'Katalog produk',
              'Kesiapan checkout',
              'Praktik terbaik kecepatan & aksesibilitas'
            ]
          },
          process: {
            title: 'Proses',
            steps: ['Perencanaan', 'Desain', 'Pengembangan', 'Testing', 'Peluncuran']
          },
          deliverables: {
            title: 'Yang Anda Dapatkan',
            items: [
              'Sistem desain',
              'Pelatihan CMS',
              'Dukungan peluncuran'
            ]
          },
          features: [
            { icon: Monitor, label: 'Optimal Desktop' },
            { icon: Smartphone, label: 'Mobile First' },
            { icon: Zap, label: 'Loading Cepat' }
          ],
          cta: 'Lihat Proyek Web'
        }
      ]
    }
  }

  const t = content[isEnglish ? 'en' : 'id']

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar 
        isEnglish={isEnglish} 
        setIsEnglish={setIsEnglish} 
        currentPage="services"
      />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Alvea Brand Mark */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <img
                src={AlveaMaroonLogo}
                alt="Alvea"
                className="h-16 w-auto mx-auto mb-8"
              />
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
            </motion.div>

            {/* Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-20"
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-8 leading-tight">
                {t.title}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-20 right-10 w-24 h-24 border-2 border-gold/30 rounded-full"
          />
          <motion.div 
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 left-10 w-32 h-32 bg-maroon/10 rounded-full blur-sm"
          />
        </section>

        {/* Services */}
        {t.services.map((service, index) => (
          <section key={service.id} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Service Header */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-maroon rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon mb-8 leading-tight">
                  {service.title}
                </h2>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                  {service.intro}
                </p>

                {/* Service Image */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="aspect-[16/9] bg-gradient-to-br from-maroon/10 to-gold/10 rounded-3xl mb-16 overflow-hidden relative"
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/30 via-transparent to-transparent"></div>
                </motion.div>
              </motion.div>

              {/* Service Details */}
              <div className="grid lg:grid-cols-3 gap-12 mb-16">
                {/* Scope */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <h3 className="font-display text-2xl font-semibold text-maroon mb-6">{service.scope.title}</h3>
                  <div className="w-16 h-px bg-gold mb-6"></div>
                  <ul className="space-y-4">
                    {service.scope.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Process or KPI */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  {service.process ? (
                    <>
                      <h3 className="font-display text-2xl font-semibold text-maroon mb-6">{service.process.title}</h3>
                      <div className="w-16 h-px bg-gold mb-6"></div>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        {service.process.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex flex-col items-center">
                            <div className="w-10 h-10 bg-maroon rounded-full flex items-center justify-center text-white font-semibold text-sm mb-2">
                              {stepIndex + 1}
                            </div>
                            <span className="text-sm text-gray-600 text-center">{step}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : service.kpi ? (
                    <>
                      <h3 className="font-display text-2xl font-semibold text-maroon mb-2">{service.kpi.title}</h3>
                      <p className="text-sm text-gold font-medium mb-6">({service.kpi.description})</p>
                      <div className="w-16 h-px bg-gold mb-6"></div>
                      <div className="grid grid-cols-2 gap-4">
                        {service.kpi.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 p-4 rounded-xl text-center group cursor-pointer hover:bg-maroon/5 transition-all duration-300"
                          >
                            <metric.icon className="w-6 h-6 text-maroon mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                            <p className="text-sm font-medium text-gray-700 group-hover:text-maroon transition-colors duration-300">
                              {metric.label}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </motion.div>

                {/* Deliverables or Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  {service.deliverables ? (
                    <>
                      <h3 className="font-display text-2xl font-semibold text-maroon mb-6">{service.deliverables.title}</h3>
                      <div className="w-16 h-px bg-gold mb-6"></div>
                      <ul className="space-y-4">
                        {service.deliverables.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (service as any).features ? (
                    <>
                      <h3 className="font-display text-2xl font-semibold text-maroon mb-6">
                        {isEnglish ? 'Features' : 'Fitur'}
                      </h3>
                      <div className="w-16 h-px bg-gold mb-6"></div>
                      <div className="space-y-4">
                        {(service as any).features.map((feature: any, featureIndex: number) => (
                          <motion.div
                            key={featureIndex}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl group cursor-pointer hover:bg-maroon/5 transition-all duration-300"
                          >
                            <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center group-hover:bg-maroon group-hover:scale-110 transition-all duration-300">
                              <feature.icon className="w-6 h-6 text-maroon group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="font-medium text-gray-700 group-hover:text-maroon transition-colors duration-300">
                              {feature.label}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="font-display text-2xl font-semibold text-maroon mb-6">
                        {isEnglish ? 'Additional Services' : 'Layanan Tambahan'}
                      </h3>
                      <div className="w-16 h-px bg-gold mb-6"></div>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">
                            {isEnglish ? 'Custom consultation' : 'Konsultasi custom'}
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">
                            {isEnglish ? 'Ongoing support' : 'Dukungan berkelanjutan'}
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">
                            {isEnglish ? 'Strategic guidance' : 'Panduan strategis'}
                          </span>
                        </li>
                      </ul>
                    </>
                  )}
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
                
                <motion.a
                  href={service.id === 'social-media' ? "https://wa.me/6285349905538" : "/portfolio"}
                  target={service.id === 'social-media' ? "_blank" : undefined}
                  rel={service.id === 'social-media' ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-maroon text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-maroon-600 transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
                >
                  {service.cta}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>
          </section>
        ))}

        {/* Alvea Brand Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-8xl font-bold text-maroon/10 mb-8"
            >
              Alvea
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Services
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MessageCircle, ArrowRight, Clock, MapPin, Mail, Phone, CheckCircle, Users, Award, Zap } from 'lucide-react'
import { useForm } from 'react-hook-form'
import Navbar from './components/Navbar'
import AlveaMaroonLogo from './assets/AlveaMaroon.png'

function Contact() {
  const [isEnglish, setIsEnglish] = useState(true)
  const [showToast, setShowToast] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
    setShowToast(true)
    reset()
    setTimeout(() => setShowToast(false), 3000)
  }

  const content = {
    en: {
      title: 'Start Your Journey',
      leadText: "Let's build a premium brand that performs.",
      subtitle: 'Two ways to connect with our creative team in Makassar',
      
      form: {
        title: 'Tell Us About Your Project',
        fields: {
          name: 'Your Name',
          email: 'Email Address', 
          brand: 'Brand/Company Name',
          needs: 'What you need'
        },
        needsOptions: [
          'Fashion Photography & Production',
          'Social Media Strategy & Management', 
          'Website Design & Development',
          'Complete Brand Package',
          'Consultation & Strategy Session',
          'Other (please specify)'
        ],
        submit: 'Send Project Details'
      },

      ctas: {
        discovery: {
          title: 'Book a Discovery Call',
          subtitle: 'Free 30-minute consultation to explore your vision',
          description: 'Perfect for brands ready to dive deep into strategy, planning, and creative direction. We\'ll assess your current position and chart a path forward.',
          features: [
            'Comprehensive brand audit discussion',
            'Creative strategy exploration', 
            'Market positioning insights',
            'Custom proposal development'
          ],
          button: 'Book Discovery Call',
          duration: '30 min',
          type: 'Free Consultation'
        },
        whatsapp: {
          title: 'WhatsApp Us',
          subtitle: 'Quick questions and immediate support',
          description: 'Ideal for quick inquiries, project updates, or when you need immediate assistance. Our team is always ready to help via WhatsApp.',
          features: [
            'Instant response during business hours',
            'Project status updates',
            'Quick creative consultations',
            'Scheduling and coordination'
          ],
          button: 'Message on WhatsApp',
          availability: '9 AM - 6 PM',
          type: 'Instant Support'
        }
      },

      location: {
        title: 'Makassar Creative Hub',
        address: 'Makassar, South Sulawesi, Indonesia',
        description: 'Our strategic location in Indonesia\'s creative corridor allows us to blend local cultural insights with international fashion trends.',
        highlights: [
          'Gateway to Southeast Asian fashion markets',
          'Rich cultural heritage inspiring creativity',
          'Growing fashion and creative industry hub',
          'Strategic timezone for APAC collaboration'
        ]
      },

      sla: {
        title: 'Response Time',
        note: 'We typically reply within 1–2 business days.',
        details: 'Our team reviews every inquiry carefully to provide you with the most relevant insights and next steps for your project.',
        businessHours: 'Monday - Friday, 9:00 AM - 6:00 PM (WITA)'
      },

      toast: {
        success: 'Thank you! We\'ll be in touch within 1-2 business days.'
      }
    },
    
    id: {
      title: 'Mulai Perjalanan Anda',
      leadText: 'Yuk bangun brand yang premium dan perform.',
      subtitle: 'Dua cara untuk terhubung dengan tim kreatif kami di Makassar',
      
      form: {
        title: 'Ceritakan Tentang Proyek Anda',
        fields: {
          name: 'Nama Anda',
          email: 'Alamat Email',
          brand: 'Nama Brand/Perusahaan',
          needs: 'Yang Anda butuhkan'
        },
        needsOptions: [
          'Fotografi Fashion & Produksi',
          'Strategi & Manajemen Media Sosial',
          'Desain & Pengembangan Website', 
          'Paket Brand Lengkap',
          'Sesi Konsultasi & Strategi',
          'Lainnya (harap sebutkan)'
        ],
        submit: 'Kirim Detail Proyek'
      },

      ctas: {
        discovery: {
          title: 'Konsultasi Gratis',
          subtitle: 'Konsultasi gratis 30 menit untuk mengeksplorasi visi Anda',
          description: 'Cocok untuk brand yang siap mendalami strategi, perencanaan, dan arah kreatif. Kami akan menilai posisi Anda saat ini dan memetakan jalan ke depan.',
          features: [
            'Diskusi audit brand menyeluruh',
            'Eksplorasi strategi kreatif',
            'Insight positioning pasar', 
            'Pengembangan proposal custom'
          ],
          button: 'Book Discovery Call',
          duration: '30 menit',
          type: 'Konsultasi Gratis'
        },
        whatsapp: {
          title: 'WhatsApp Kami',
          subtitle: 'Pertanyaan cepat dan dukungan langsung',
          description: 'Ideal untuk inquiry cepat, update proyek, atau ketika Anda butuh bantuan langsung. Tim kami selalu siap membantu via WhatsApp.',
          features: [
            'Respon instan selama jam kerja',
            'Update status proyek',
            'Konsultasi kreatif cepat',
            'Penjadwalan dan koordinasi'
          ],
          button: 'Pesan di WhatsApp',
          availability: '9 Pagi - 6 Sore',
          type: 'Dukungan Instan'
        }
      },

      location: {
        title: 'Hub Kreatif Makassar',
        address: 'Makassar, Sulawesi Selatan, Indonesia',
        description: 'Lokasi strategis kami di koridor kreatif Indonesia memungkinkan kami memadukan wawasan budaya lokal dengan tren fashion internasional.',
        highlights: [
          'Pintu gerbang pasar fashion Asia Tenggara',
          'Warisan budaya kaya yang menginspirasi kreativitas',
          'Hub industri fashion dan kreatif yang berkembang',
          'Timezone strategis untuk kolaborasi APAC'
        ]
      },

      sla: {
        title: 'Waktu Respon',
        note: 'Biasanya balas dalam 1–2 hari kerja.',
        details: 'Tim kami meninjau setiap inquiry dengan cermat untuk memberikan insight dan langkah selanjutnya yang paling relevan untuk proyek Anda.',
        businessHours: 'Senin - Jumat, 9:00 - 18:00 (WITA)'
      },

      toast: {
        success: 'Terima kasih! Kami akan menghubungi dalam 1-2 hari kerja.'
      }
    }
  }

  const t = content[isEnglish ? 'en' : 'id']

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          <span>{t.toast.success}</span>
        </motion.div>
      )}

      <Navbar 
        isEnglish={isEnglish} 
        setIsEnglish={setIsEnglish} 
        currentPage="contact"
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
              
              <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 font-light">
                {t.leadText}
              </p>

              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
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

        {/* Dual CTAs Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Discovery Call CTA */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center group-hover:bg-maroon group-hover:scale-110 transition-all duration-300">
                    <Calendar className="w-8 h-8 text-maroon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-maroon">{t.ctas.discovery.title}</h3>
                    <p className="text-sm text-gold font-medium">{t.ctas.discovery.type}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{t.ctas.discovery.subtitle}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">{t.ctas.discovery.description}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {t.ctas.discovery.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{t.ctas.discovery.duration}</span>
                  </div>
                </div>

                {/* Scheduler Embed Area */}
                <div className="bg-gray-50 p-6 rounded-2xl mb-6 border-2 border-dashed border-gray-200">
                  <div className="text-center text-gray-500">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="font-medium mb-2">Scheduler Integration</p>
                    <p className="text-sm">Calendly/Cal.com embed will be placed here</p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-maroon text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-maroon-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  {t.ctas.discovery.button}
                  <Calendar size={20} />
                </motion.button>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                    <MessageCircle className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-maroon">{t.ctas.whatsapp.title}</h3>
                    <p className="text-sm text-gold font-medium">{t.ctas.whatsapp.type}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-4">{t.ctas.whatsapp.subtitle}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">{t.ctas.whatsapp.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {t.ctas.whatsapp.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{t.ctas.whatsapp.availability}</span>
                  </div>
                </div>

                <motion.a
                  href="https://wa.me/6285349905538"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  {t.ctas.whatsapp.button}
                  <MessageCircle size={20} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-4xl font-bold text-maroon mb-4">
                {t.form.title}
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-3xl shadow-lg space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder={t.form.fields.name}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon focus:border-transparent transition-all bg-white"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                </div>
                <div>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    placeholder={t.form.fields.email}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon focus:border-transparent transition-all bg-white"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
                </div>
              </div>
              
              <div>
                <input
                  {...register("brand")}
                  type="text"
                  placeholder={t.form.fields.brand}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon focus:border-transparent transition-all bg-white"
                />
              </div>

              <div>
                <select
                  {...register("needs", { required: true })}
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon focus:border-transparent transition-all bg-white"
                >
                  <option value="">{t.form.fields.needs}</option>
                  {t.form.needsOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
                {errors.needs && <p className="text-red-500 text-sm mt-1">Please select what you need</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-maroon text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-maroon-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                {t.form.submit}
                <ArrowRight size={20} />
              </motion.button>
            </motion.form>
          </div>
        </section>

        {/* Location & SLA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-maroon" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-maroon">{t.location.title}</h3>
                </div>
                
                <p className="text-gray-600 font-medium mb-4">{t.location.address}</p>
                <p className="text-gray-600 leading-relaxed mb-8">{t.location.description}</p>
                
                <ul className="space-y-3">
                  {t.location.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* SLA & Response Time */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center">
                    <Clock className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-maroon">{t.sla.title}</h3>
                </div>
                
                <div className="bg-maroon/5 p-6 rounded-2xl mb-6">
                  <p className="font-semibold text-maroon text-lg mb-2">{t.sla.note}</p>
                  <p className="text-gray-600 leading-relaxed">{t.sla.details}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-maroon" />
                    <span className="text-gray-600">support@alvea.web.id</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-maroon" />
                    <span className="text-gray-600">+62 853-4990-5538</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-maroon" />
                    <span className="text-gray-600">{t.sla.businessHours}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Alvea */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl font-bold text-maroon mb-4">
                {isEnglish ? 'Why Fashion Brands Choose Alvea' : 'Mengapa Brand Fashion Memilih Alvea'}
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: isEnglish ? 'Premium Results' : 'Hasil Premium',
                  description: isEnglish 
                    ? 'Award-winning creative work that elevates your brand above the competition'
                    : 'Karya kreatif pemenang penghargaan yang mengangkat brand Anda di atas kompetisi'
                },
                {
                  icon: Users,
                  title: isEnglish ? 'Local Expertise' : 'Keahlian Lokal',
                  description: isEnglish
                    ? 'Deep understanding of Indonesian fashion market and cultural nuances'
                    : 'Pemahaman mendalam tentang pasar fashion Indonesia dan nuansa budaya'
                },
                {
                  icon: Zap,
                  title: isEnglish ? 'Rapid Growth' : 'Pertumbuhan Cepat',
                  description: isEnglish
                    ? 'Proven track record of accelerating fashion brand growth and market presence'
                    : 'Track record terbukti dalam mempercepat pertumbuhan brand fashion dan kehadiran pasar'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="text-center p-8 bg-gray-50 rounded-2xl group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-maroon group-hover:scale-110 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-maroon group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-maroon mb-4">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Alvea Brand Section */}
        <section className="py-20 bg-gray-50">
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
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact
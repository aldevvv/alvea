import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Lightbulb, Camera, Rocket, TrendingUp, Award, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react'
import Navbar from './components/Navbar'
import AlveaMaroonLogo from './assets/AlveaMaroon.png'

function Process() {
  const [isEnglish, setIsEnglish] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const content = {
    en: {
      processTitle: 'Our Creative Process',
      processSubtitle: 'Five steps to transform your fashion brand',
      valuesTitle: 'Values & Sustainability',
      valuesSubtitle: 'Built on principles that matter',
      
      steps: [
        {
          id: 'discover',
          title: 'Discover',
          description: 'Brand audit, goals, audience.',
          detailedDescription: 'We dive deep into understanding your brand essence, analyzing your current market position, defining clear objectives, and identifying your target audience to create a solid foundation for all creative work.',
          icon: Search,
          color: 'from-maroon to-maroon-600'
        },
        {
          id: 'concept',
          title: 'Concept', 
          description: 'Moodboard, styling, channel plan.',
          detailedDescription: 'Our creative team develops comprehensive moodboards, defines visual styling direction, and creates strategic channel plans that align with your brand identity and target audience preferences.',
          icon: Lightbulb,
          color: 'from-maroon-600 to-gold'
        },
        {
          id: 'create',
          title: 'Create',
          description: 'Shoot/design/production.',
          detailedDescription: 'We bring concepts to life through professional photography sessions, innovative design work, and meticulous production processes, ensuring every detail meets our high-quality standards.',
          icon: Camera,
          color: 'from-gold to-gold-600'
        },
        {
          id: 'launch',
          title: 'Launch',
          description: 'Publishing, seeding, influencer activation.',
          detailedDescription: 'Strategic rollout across chosen channels with coordinated publishing schedules, targeted seeding campaigns, and influencer collaborations to maximize reach and engagement.',
          icon: Rocket,
          color: 'from-gold-600 to-maroon'
        },
        {
          id: 'grow',
          title: 'Grow',
          description: 'Iteration, optimization, reporting.',
          detailedDescription: 'Continuous improvement through data analysis, content iteration, performance optimization, and comprehensive reporting to ensure sustainable growth and long-term success.',
          icon: TrendingUp,
          color: 'from-maroon to-maroon-800'
        }
      ],

      endToEnd: {
        title: 'End-to-End Excellence',
        description: 'Our collaborative approach ensures seamless integration across all touchpoints, delivering consistent brand experiences that drive meaningful results.',
        features: [
          'Integrated strategy across all channels',
          'Collaborative approach with your team',
          'Consistent brand experience delivery',
          'Data-driven optimization process'
        ]
      },

      coreValues: {
        title: 'Core Values',
        values: [
          {
            title: 'Professional',
            description: 'High standards & integrity in every project we undertake.',
            icon: Award,
            details: 'We maintain exceptional quality standards, deliver on promises, and approach every project with unwavering integrity and professionalism.'
          },
          {
            title: 'Inclusive', 
            description: 'Diverse & empowering creative collaborations.',
            icon: Users,
            details: 'We celebrate diversity, create empowering brand narratives, and ensure our work represents and resonates with all communities.'
          },
          {
            title: 'Innovative',
            description: 'Fresh trends & creativity that stands out.',
            icon: Zap,
            details: 'We stay ahead of industry trends, embrace new technologies, and deliver creative solutions that differentiate your brand in the market.'
          }
        ]
      },

      sustainability: {
        title: 'Sustainability & Ethics',
        description: 'Our commitment to responsible creative practices',
        practices: [
          {
            category: 'Responsible Fashion',
            items: [
              'Promote sustainable fashion practices',
              'Support ethical fashion brands',
              'Advocate for conscious consumerism',
              'Highlight eco-friendly materials'
            ]
          },
          {
            category: 'Environmental Impact',
            items: [
              'Digital-first workflow to reduce paper waste',
              'Local sourcing for production needs',
              'Energy-efficient equipment and practices',
              'Minimal packaging for deliverables'
            ]
          },
          {
            category: 'Social Responsibility',
            items: [
              'Fair wages for all collaborators',
              'Equal opportunity employment',
              'Support for local communities',
              'Inclusive representation in all work'
            ]
          },
          {
            category: 'Vendor Responsibility',
            items: [
              'Ethical vendor selection process',
              'Regular compliance monitoring',
              'Sustainable supply chain practices',
              'Long-term partnership approach'
            ]
          }
        ]
      },

    },
    
    id: {
      processTitle: 'Proses Kreatif Kami',
      processSubtitle: 'Lima langkah untuk mentransformasi merek fashion Anda',
      valuesTitle: 'Nilai & Keberlanjutan',
      valuesSubtitle: 'Dibangun atas prinsip-prinsip yang penting',
      
      steps: [
        {
          id: 'discover',
          title: 'Discover',
          description: 'Audit brand, tujuan, audiens.',
          detailedDescription: 'Kami menggali pemahaman mendalam tentang esensi brand Anda, menganalisis posisi pasar saat ini, mendefinisikan tujuan yang jelas, dan mengidentifikasi target audiens untuk menciptakan fondasi solid bagi semua karya kreatif.',
          icon: Search,
          color: 'from-maroon to-maroon-600'
        },
        {
          id: 'concept',
          title: 'Concept', 
          description: 'Moodboard, styling, rencana kanal.',
          detailedDescription: 'Tim kreatif kami mengembangkan moodboard komprehensif, menentukan arah styling visual, dan membuat rencana kanal strategis yang selaras dengan identitas brand dan preferensi target audiens.',
          icon: Lightbulb,
          color: 'from-maroon-600 to-gold'
        },
        {
          id: 'create',
          title: 'Create',
          description: 'Sesi foto/desain/produksi.',
          detailedDescription: 'Kami mewujudkan konsep melalui sesi fotografi profesional, karya desain inovatif, dan proses produksi yang teliti, memastikan setiap detail memenuhi standar kualitas tinggi kami.',
          icon: Camera,
          color: 'from-gold to-gold-600'
        },
        {
          id: 'launch',
          title: 'Launch',
          description: 'Publish, seeding, aktivasi influencer.',
          detailedDescription: 'Peluncuran strategis di seluruh kanal terpilih dengan jadwal publikasi terkoordinasi, kampanye seeding yang tepat sasaran, dan kolaborasi influencer untuk memaksimalkan jangkauan dan engagement.',
          icon: Rocket,
          color: 'from-gold-600 to-maroon'
        },
        {
          id: 'grow',
          title: 'Grow',
          description: 'Iterasi, optimasi, pelaporan.',
          detailedDescription: 'Peningkatan berkelanjutan melalui analisis data, iterasi konten, optimasi performa, dan pelaporan komprehensif untuk memastikan pertumbuhan berkelanjutan dan kesuksesan jangka panjang.',
          icon: TrendingUp,
          color: 'from-maroon to-maroon-800'
        }
      ],

      endToEnd: {
        title: 'Keunggulan End-to-End',
        description: 'Pendekatan kolaboratif kami memastikan integrasi yang mulus di semua touchpoint, memberikan pengalaman brand yang konsisten dan mendorong hasil yang bermakna.',
        features: [
          'Strategi terintegrasi di semua kanal',
          'Pendekatan kolaboratif dengan tim Anda',
          'Pengiriman pengalaman brand yang konsisten',
          'Proses optimasi berbasis data'
        ]
      },

      coreValues: {
        title: 'Nilai-Nilai Inti',
        values: [
          {
            title: 'Profesional',
            description: 'Standar tinggi & integritas dalam setiap proyek yang kami kerjakan.',
            icon: Award,
            details: 'Kami mempertahankan standar kualitas luar biasa, menepati janji, dan mendekati setiap proyek dengan integritas dan profesionalisme yang tidak tergoyahkan.'
          },
          {
            title: 'Inklusif', 
            description: 'Kolaborasi kreatif yang beragam & memberdayakan.',
            icon: Users,
            details: 'Kami merayakan keberagaman, menciptakan narasi brand yang memberdayakan, dan memastikan karya kami mewakili dan beresonansi dengan semua komunitas.'
          },
          {
            title: 'Inovatif',
            description: 'Tren terbaru & kreativitas yang menonjol.',
            icon: Zap,
            details: 'Kami selalu terdepan dalam tren industri, merangkul teknologi baru, dan memberikan solusi kreatif yang membedakan brand Anda di pasar.'
          }
        ]
      },

      sustainability: {
        title: 'Keberlanjutan & Etika',
        description: 'Komitmen kami pada praktik kreatif yang bertanggung jawab',
        practices: [
          {
            category: 'Fashion Bertanggung Jawab',
            items: [
              'Mempromosikan praktik fashion berkelanjutan',
              'Mendukung brand fashion yang etis',
              'Mengadvokasi konsumerisme sadar',
              'Menyoroti bahan ramah lingkungan'
            ]
          },
          {
            category: 'Dampak Lingkungan',
            items: [
              'Alur kerja digital untuk mengurangi limbah kertas',
              'Sumber lokal untuk kebutuhan produksi',
              'Peralatan dan praktik hemat energi',
              'Kemasan minimal untuk deliverable'
            ]
          },
          {
            category: 'Tanggung Jawab Sosial',
            items: [
              'Upah yang adil untuk semua kolaborator',
              'Kesempatan kerja yang setara',
              'Dukungan untuk komunitas lokal',
              'Representasi inklusif dalam semua karya'
            ]
          },
          {
            category: 'Tanggung Jawab Vendor',
            items: [
              'Proses seleksi vendor yang etis',
              'Monitoring kepatuhan secara rutin',
              'Praktik supply chain berkelanjutan',
              'Pendekatan kemitraan jangka panjang'
            ]
          }
        ]
      },

    }
  }

  const t = content[isEnglish ? 'en' : 'id']

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const containerWidth = scrollContainerRef.current.clientWidth
        const stepIndex = Math.round(scrollLeft / containerWidth)
        setActiveStep(Math.min(stepIndex, t.steps.length - 1))
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [t.steps.length])

  const scrollToStep = (index: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth
      scrollContainerRef.current.scrollTo({
        left: index * containerWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar 
        isEnglish={isEnglish} 
        setIsEnglish={setIsEnglish} 
        currentPage="process"
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
                {t.processTitle}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.processSubtitle}
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

        {/* Process Steps - Horizontal Scroll */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            {/* Step Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 bg-white p-2 rounded-full shadow-lg">
                {t.steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => scrollToStep(index)}
                    className={`flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-maroon text-white shadow-md'
                        : 'text-gray-600 hover:text-maroon hover:bg-gray-100'
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{step.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollable Process Steps */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {t.steps.map((step, index) => (
              <div
                key={step.id}
                className="flex-none w-full snap-start px-4 sm:px-6 lg:px-8"
              >
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    {/* Step Icon */}
                    <div className={`w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-12 h-12 text-white" />
                    </div>

                    {/* Step Number */}
                    <div className="text-sm font-bold text-gold mb-4">
                      STEP {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Step Title */}
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon mb-6">
                      {step.title}
                    </h2>

                    {/* Step Description */}
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                      {step.description}
                    </p>

                    {/* Detailed Description */}
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                      {step.detailedDescription}
                    </p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* End-to-End Excellence */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon mb-6">
                {t.endToEnd.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                {t.endToEnd.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {t.endToEnd.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                  >
                    <CheckCircle className="w-6 h-6 text-maroon flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Alvea Brand Mark */}
            <div className="text-center py-16">
              <img
                src={AlveaMaroonLogo}
                alt="Alvea"
                className="h-16 w-auto mx-auto opacity-10"
              />
            </div>
          </div>
        </section>

        {/* Values & Sustainability */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6">
                {t.valuesTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t.valuesSubtitle}
              </p>
            </motion.div>

            {/* Core Values */}
            <div className="mb-20">
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-3xl font-bold text-maroon mb-12 text-center"
              >
                {t.coreValues.title}
              </motion.h3>

              <div className="grid lg:grid-cols-3 gap-8">
                {t.coreValues.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  >
                    <div className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-maroon group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-8 h-8 text-maroon group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="font-display text-2xl font-bold text-maroon mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {value.description}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {value.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Thin Gold Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-20"></div>

            {/* Alvea Brand Mark */}
            <div className="text-center py-8 mb-12">
              <img
                src={AlveaMaroonLogo}
                alt="Alvea"
                className="h-16 w-auto mx-auto opacity-10"
              />
            </div>

            {/* Sustainability & Ethics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h3 className="font-display text-3xl font-bold text-maroon mb-4">
                  {t.sustainability.title}
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  {t.sustainability.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {t.sustainability.practices.map((practice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-lg"
                  >
                    <h4 className="font-display text-xl font-bold text-maroon mb-6 flex items-center gap-3">
                      <div className="w-2 h-8 bg-gold rounded-full"></div>
                      {practice.category}
                    </h4>
                    <ul className="space-y-3">
                      {practice.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-maroon mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Process
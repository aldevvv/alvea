import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Trophy, MapPin, Calendar, Target, Lightbulb, Heart } from 'lucide-react'
import Navbar from './components/Navbar'
import AlveaMaroonLogo from './assets/AlveaMaroon.png'
import AlveaWhiteLogo from './assets/AlveaWhite.png'
import AfniPhoto from './assets/Afni.png'
import ElsaPhoto from './assets/Elsa.png'
import EvaPhoto from './assets/Eva.png'

function About() {
  const [isEnglish, setIsEnglish] = useState(true)

  const content = {
    en: {
      title: 'About Alvea',
      intro: 'Alvea is a fashion-first creative agency based in Makassar, partnering with brands to build character, launch collections, and grow sustainably.',
      subtitle: 'Where creativity meets strategy, and local heritage fuels global ambition.',
      
      stats: [
        { number: '2023', label: 'Founded', icon: Calendar },
        { number: '3', label: 'Core Team', icon: Users },
        { number: '50+', label: 'Projects', icon: Trophy },
        { number: '100%', label: 'Makassar', icon: MapPin }
      ],
      
      story: {
        title: 'Our Story',
        content: 'What started as a passion project between three creative minds has evolved into a full-fledged fashion agency. Afni, Elsa, and Eva combined their unique talents and shared vision to create something extraordinary. From humble beginnings in Makassar, we\'ve grown into a trusted partner for fashion brands across Indonesia, always staying true to our roots while reaching for global standards.',
        highlight: 'From passion project to fashion powerhouse'
      },
      
      logo: {
        title: 'Logo Meaning',
        meaning: 'ALV = Afni, Elsa, Eva — Our unity transformed into one identity; elegant & premium feel by design.',
        description: 'The name Alvea represents the convergence of our founders\' initials, symbolizing unity, collaboration, and the elegant fusion of distinct creative perspectives into one cohesive brand identity.'
      },
      
      vision: {
        title: 'Our Vision',
        text: 'To become the leading creative agency that empowers fashion brands to reach their full potential through innovative design and strategic storytelling.'
      },
      
      mission: {
        title: 'Our Mission',
        subtitle: 'Three pillars that guide everything we do',
        items: [
          {
            title: 'Build Professional Brand Image',
            description: 'Create compelling brand identities that resonate with target audiences and drive meaningful connections.',
            icon: Target
          },
          {
            title: 'Provide Creative Platform',
            description: 'Offer comprehensive creative solutions for fashion brands to showcase their uniqueness and tell their stories.',
            icon: Lightbulb
          },
          {
            title: 'Form Strategic Partnerships',
            description: 'Build long-term relationships that drive sustainable growth and mutual success in the fashion industry.',
            icon: Heart
          }
        ]
      },
      
      values: {
        title: 'Our Core Values',
        subtitle: 'The principles that shape our work and relationships',
        items: [
          {
            title: 'Professional Excellence',
            description: 'We maintain the highest standards of quality and professionalism in every project, ensuring exceptional results that exceed expectations.',
            icon: Trophy
          },
          {
            title: 'Inclusive Creativity',
            description: 'We embrace diversity and create spaces where all voices and perspectives are valued, fostering innovation through collaboration.',
            icon: Users
          },
          {
            title: 'Innovative Solutions',
            description: 'We constantly push boundaries to deliver fresh, creative solutions that stand out in the competitive fashion landscape.',
            icon: Lightbulb
          }
        ]
      },
      
      makassar: {
        title: 'Makassar Roots',
        subtitle: 'Local Heritage, Global Vision',
        text: 'Born and raised in the vibrant city of Makassar, we bring the rich cultural heritage and entrepreneurial spirit of South Sulawesi to every project. Our local roots give us unique perspective and authentic storytelling that connects with both local and international audiences.',
        features: [
          'Rich cultural heritage influences our creative approach',
          'Strong entrepreneurial spirit drives our business strategy',
          'Local insights with global perspective',
          'Authentic storytelling rooted in Indonesian values'
        ]
      },
      
      team: {
        title: 'The Creative Minds',
        subtitle: 'Meet the founders who started it all',
        members: [
          {
            name: 'Afni Kaulan Sadida',
            role: 'Digital Marketing Manager',
            description: 'Digital marketing strategist focused on growing brands through data-driven creative campaigns and strategic online presence.',
            avatar: AfniPhoto
          },
          {
            name: 'Elsa Asdar',
            role: 'Creative & Content Strategist',
            description: 'Master of visual aesthetics and content strategy, bringing brands to life through compelling design and engaging content.',
            avatar: ElsaPhoto
          },
          {
            name: 'Eva Amalia Anwar',
            role: 'Co-Founder',
            description: 'Visionary leader and co-founder with passion for brand storytelling and strategic business development.',
            avatar: EvaPhoto
          }
        ]
      },
      
      cta: {
        title: 'Meet the Team',
        subtitle: 'Ready to discuss your project? Let\'s chat!'
      }
    },
    
    id: {
      title: 'Tentang Alvea',
      intro: 'Alvea adalah agensi kreatif yang berfokus pada fashion di Makassar, bermitra dengan merek-merek untuk membangun karakter, meluncurkan koleksi, dan berkembang secara berkelanjutan.',
      subtitle: 'Di mana kreativitas bertemu dengan strategi, dan warisan lokal menggerakkan ambisi global.',
      
      stats: [
        { number: '2023', label: 'Didirikan', icon: Calendar },
        { number: '3', label: 'Tim Inti', icon: Users },
        { number: '50+', label: 'Proyek', icon: Trophy },
        { number: '100%', label: 'Makassar', icon: MapPin }
      ],
      
      story: {
        title: 'Cerita Kami',
        content: 'Apa yang dimulai sebagai proyek passion dari tiga jiwa kreatif telah berkembang menjadi agensi fashion yang lengkap. Afni, Elsa, dan Eva menggabungkan talenta unik dan visi bersama untuk menciptakan sesuatu yang luar biasa. Dari awal yang sederhana di Makassar, kami telah tumbuh menjadi mitra terpercaya untuk merek fashion di seluruh Indonesia, selalu setia pada akar kami sambil meraih standar global.',
        highlight: 'Dari proyek passion menjadi kekuatan fashion'
      },
      
      logo: {
        title: 'Makna Logo',
        meaning: 'ALV = Afni, Elsa, Eva — Persatuan kami yang diubah menjadi satu identitas; nuansa elegan & premium berdasarkan desain.',
        description: 'Nama Alvea merepresentasikan konvergensi inisial para pendiri kami, melambangkan persatuan, kolaborasi, dan fusi elegan dari perspektif kreatif yang berbeda menjadi satu identitas merek yang kohesif.'
      },
      
      vision: {
        title: 'Visi Kami',
        text: 'Menjadi agensi kreatif terdepan yang memberdayakan merek fashion untuk mencapai potensi penuh mereka melalui desain inovatif dan storytelling strategis.'
      },
      
      mission: {
        title: 'Misi Kami',
        subtitle: 'Tiga pilar yang memandu semua yang kami lakukan',
        items: [
          {
            title: 'Membangun Citra Merek Profesional',
            description: 'Menciptakan identitas merek yang menarik dan beresonansi dengan target audiens serta mendorong koneksi yang bermakna.',
            icon: Target
          },
          {
            title: 'Menyediakan Platform Kreatif',
            description: 'Menawarkan solusi kreatif komprehensif untuk merek fashion untuk menampilkan keunikan mereka dan menceritakan kisah mereka.',
            icon: Lightbulb
          },
          {
            title: 'Membentuk Kemitraan Strategis',
            description: 'Membangun hubungan jangka panjang yang mendorong pertumbuhan berkelanjutan dan kesuksesan bersama di industri fashion.',
            icon: Heart
          }
        ]
      },
      
      values: {
        title: 'Nilai-Nilai Inti Kami',
        subtitle: 'Prinsip-prinsip yang membentuk pekerjaan dan hubungan kami',
        items: [
          {
            title: 'Keunggulan Profesional',
            description: 'Kami mempertahankan standar kualitas dan profesionalisme tertinggi di setiap proyek, memastikan hasil luar biasa yang melampaui ekspektasi.',
            icon: Trophy
          },
          {
            title: 'Kreativitas Inklusif',
            description: 'Kami merangkul keberagaman dan menciptakan ruang di mana semua suara dan perspektif dihargai, mendorong inovasi melalui kolaborasi.',
            icon: Users
          },
          {
            title: 'Solusi Inovatif',
            description: 'Kami terus mendorong batas-batas untuk memberikan solusi kreatif yang segar dan menonjol dalam lanskap fashion yang kompetitif.',
            icon: Lightbulb
          }
        ]
      },
      
      makassar: {
        title: 'Akar Makassar',
        subtitle: 'Warisan Lokal, Visi Global',
        text: 'Lahir dan besar di kota Makassar yang dinamis, kami membawa warisan budaya yang kaya dan semangat kewirausahaan Sulawesi Selatan ke setiap proyek. Akar lokal kami memberikan perspektif unik dan storytelling autentik yang terhubung dengan audiens lokal maupun internasional.',
        features: [
          'Warisan budaya yang kaya memengaruhi pendekatan kreatif kami',
          'Semangat kewirausahaan yang kuat mendorong strategi bisnis kami',
          'Wawasan lokal dengan perspektif global',
          'Storytelling autentik yang berakar pada nilai-nilai Indonesia'
        ]
      },
      
      team: {
        title: 'Para Pemikir Kreatif',
        subtitle: 'Berkenalan dengan para pendiri yang memulai semuanya',
        members: [
          {
            name: 'Afni Kaulan Sadida',
            role: 'Digital Marketing Manager',
            description: 'Strategis pemasaran digital yang berfokus pada pertumbuhan merek melalui kampanye kreatif berbasis data dan kehadiran online strategis.',
            avatar: AfniPhoto
          },
          {
            name: 'Elsa Asdar',
            role: 'Creative & Content Strategist',
            description: 'Ahli estetika visual dan strategi konten, menghidupkan merek melalui desain yang menarik dan konten yang engaging.',
            avatar: ElsaPhoto
          },
          {
            name: 'Eva Amalia Anwar',
            role: 'Co-Founder',
            description: 'Pemimpin visioner dan co-founder dengan passion untuk storytelling merek dan pengembangan bisnis strategis.',
            avatar: EvaPhoto
          }
        ]
      },
      
      cta: {
        title: 'Kenali Tim',
        subtitle: 'Siap mendiskusikan proyek Anda? Mari berkomunikasi!'
      }
    }
  }

  const t = content[isEnglish ? 'en' : 'id']

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar 
        isEnglish={isEnglish} 
        setIsEnglish={setIsEnglish} 
        currentPage="about"
      />

      {/* About Content */}
      <main className="pt-20">
        {/* Hero Intro */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <h1 className="font-display text-6xl md:text-7xl font-bold text-maroon mb-6">
                {t.title}
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
                {t.intro}
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gold font-medium"
              >
                {t.subtitle}
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {t.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="text-center bg-gray-50 p-6 rounded-2xl"
                >
                  <stat.icon className="w-8 h-8 text-maroon mx-auto mb-3" />
                  <div className="text-3xl font-bold text-maroon mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
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
            className="absolute top-20 right-10 w-24 h-24 border-2 border-gold/20 rounded-full"
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

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-maroon mb-4">
                    {t.story.title}
                  </h2>
                  <p className="text-gold font-semibold text-lg">{t.story.highlight}</p>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  {t.story.content}
                </motion.p>
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-maroon/10 to-gold/10 rounded-3xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-display text-8xl font-bold text-maroon/20 mb-4">2023</div>
                    <p className="text-maroon font-semibold">The Beginning</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Logo Meaning - Enhanced */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-16 rounded-3xl text-center relative overflow-hidden"
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
                className="font-display text-8xl md:text-9xl font-bold text-maroon mb-8 relative"
              >
                Alvea
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gold rounded-full"
                />
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-display text-3xl font-semibold text-maroon mb-6"
              >
                {t.logo.title}
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6"
              >
                {t.logo.meaning}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-gray-500 max-w-2xl mx-auto leading-relaxed"
              >
                {t.logo.description}
              </motion.p>
              
              {/* Background decorations */}
              <div className="absolute top-10 left-10 w-20 h-20 border border-maroon/10 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-gold/10 rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-20 bg-gradient-to-br from-maroon to-maroon-800 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-display text-5xl md:text-6xl font-bold mb-8"
              >
                {t.vision.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-2xl text-maroon-100 max-w-5xl mx-auto leading-relaxed italic font-light"
              >
                "{t.vision.text}"
              </motion.p>
            </motion.div>
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-24 h-24 border-2 border-gold/30 rounded-full"
          />
        </section>

        {/* Mission - Enhanced */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-4">
                {t.mission.title}
              </h2>
              <p className="text-xl text-gray-600">{t.mission.subtitle}</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-10">
              {t.mission.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-50 p-10 rounded-3xl text-center relative overflow-hidden group"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-gradient-to-br from-maroon to-gold rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold text-maroon mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-maroon/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values - Enhanced */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-4">
                {t.values.title}
              </h2>
              <p className="text-xl text-gray-600">{t.values.subtitle}</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-10">
              {t.values.items.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ y: -10, rotateY: 5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3, type: "spring", stiffness: 80 }}
                  className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-maroon relative group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-16 h-16 bg-maroon/10 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <value.icon className="w-8 h-8 text-maroon" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-semibold text-maroon mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Animated border */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                    className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-maroon to-gold rounded-full"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Makassar Roots - Enhanced */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-display text-4xl md:text-5xl font-bold text-maroon mb-4"
                >
                  {t.makassar.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gold font-semibold text-lg mb-6"
                >
                  {t.makassar.subtitle}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 leading-relaxed text-lg mb-8"
                >
                  {t.makassar.text}
                </motion.p>
                
                <div className="space-y-4">
                  {t.makassar.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 bg-maroon rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-maroon to-maroon-800 p-12 rounded-3xl text-white text-center relative overflow-hidden">
                  <MapPin className="w-16 h-16 text-gold mx-auto mb-6" />
                  <h3 className="font-display text-3xl font-bold mb-4">Makassar</h3>
                  <p className="text-maroon-100">The Heart of South Sulawesi</p>
                  
                  {/* Animated background patterns */}
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 w-32 h-32 border-2 border-gold/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-8 -left-8 w-24 h-24 bg-gold/10 rounded-full blur-sm"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-4">
                {t.team.title}
              </h2>
              <p className="text-xl text-gray-600">{t.team.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10">
              {t.team.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -15, rotateY: 5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-maroon/10"
                  >
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-maroon mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Hover effect */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-maroon to-gold rounded-b-3xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-16 rounded-3xl relative overflow-hidden"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-display text-4xl md:text-5xl font-bold text-maroon mb-6"
              >
                {t.cta.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 mb-10"
              >
                {t.cta.subtitle}
              </motion.p>
              <motion.a
                href="https://wa.me/6285349905538"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="bg-maroon text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-maroon-600 transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
              >
                {t.cta.title}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.a>
              
              {/* Background decoration */}
              <motion.div 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-32 h-32 border border-maroon/10 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-gold/10 rounded-full blur-sm"
              />
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
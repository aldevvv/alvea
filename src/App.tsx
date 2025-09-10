import { useState, useRef, useEffect } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  Camera,
  Share2,
  Globe,
  Star,
  Users,
  Award,
  Zap,
  Heart,
  Play,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  Send
} from 'lucide-react'
import Navbar from './components/Navbar'
import AlveaFixLogo from './assets/AlveaFix.png'
import AlveaWhiteLogo from './assets/AlveaWhite.png'

function App() {
  const [isEnglish, setIsEnglish] = useState(true)
  const [showToast, setShowToast] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])



  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data)
    setShowToast(true)
    reset()
    setTimeout(() => setShowToast(false), 3000)
  }

  const content = {
    en: {
      nav: {
        services: 'Services',
        portfolio: 'Portfolio',
        about: 'About',
        process: 'Process',
        contact: 'Contact'
      },
      hero: {
        headline: 'Elevating Fashion Brands Through Creative Excellence',
        subline: 'We craft compelling visual narratives that transform emerging fashion brands into industry leaders through innovative photography, strategic digital presence, and authentic storytelling.',
        primaryCta: 'Start Your Journey',
        secondaryCta: 'View Portfolio',
        stats: [
          { number: '100+', label: 'Brands Elevated' },
          { number: '500K+', label: 'Audience Reached' },
          { number: '50+', label: 'Awards Won' }
        ]
      },
      values: {
        title: 'Our Creative Foundation',
        subtitle: 'Built on principles that drive exceptional results',
        cards: [
          {
            title: 'Personal & Collaborative',
            description: 'Every partnership begins with deep understanding. We immerse ourselves in your brand story, values, and vision to create authentic connections.',
            icon: Users
          },
          {
            title: 'Innovation-First Approach',
            description: 'Staying ahead means constant evolution. We blend cutting-edge techniques with timeless aesthetics to create lasting impact.',
            icon: Zap
          },
          {
            title: 'End-to-End Excellence',
            description: 'From initial concept to final delivery, we handle every detail with precision, ensuring seamless execution across all touchpoints.',
            icon: Award
          },
          {
            title: 'Sustainable & Ethical',
            description: 'We believe in responsible creativity that honors both artistic integrity and environmental consciousness in every project.',
            icon: Heart
          }
        ]
      },
      services: {
        title: 'Comprehensive Creative Services',
        subtitle: 'Everything your fashion brand needs to stand out',
        items: [
          {
            title: 'Fashion Photography',
            description: 'Editorial and commercial photography that captures your brand essence with striking visual storytelling.',
            features: ['Studio & Location Shoots', 'Product Photography', 'Lookbook Creation', 'Campaign Visuals'],
            icon: Camera,
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Digital Strategy & Social Media',
            description: 'Strategic content creation and management that builds authentic brand communities and drives engagement.',
            features: ['Content Strategy', 'Social Media Management', 'Influencer Partnerships', 'Brand Storytelling'],
            icon: Share2,
            image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Web Design & Development',
            description: 'Premium digital experiences that convert visitors into customers with seamless user journeys.',
            features: ['E-commerce Websites', 'Brand Websites', 'Mobile Optimization', 'SEO Integration'],
            icon: Globe,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      process: {
        title: 'Our Creative Process',
        subtitle: 'How we bring your vision to life',
        steps: [
          {
            number: '01',
            title: 'Discovery & Strategy',
            description: 'We dive deep into your brand, audience, and goals to create a comprehensive creative strategy.'
          },
          {
            number: '02',
            title: 'Creative Development',
            description: 'Our team develops concepts, mood boards, and creative directions aligned with your vision.'
          },
          {
            number: '03',
            title: 'Production & Execution',
            description: 'We bring ideas to life through meticulous planning and flawless execution of every detail.'
          },
          {
            number: '04',
            title: 'Delivery & Optimization',
            description: 'We deliver exceptional results and continuously optimize based on performance and feedback.'
          }
        ]
      },
      testimonials: [
        {
          quote: "Alvea transformed our brand presence completely. Their creative vision and strategic approach helped us reach new heights in the fashion industry.",
          author: 'Sari Dewi',
          position: 'Founder, Atelier Luna',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SariDewi'
        },
        {
          quote: "Working with Alvea was a game-changer. Their attention to detail and understanding of fashion trends is unmatched.",
          author: 'Andi Prasetyo',
          position: 'Creative Director, Nova Fashion',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AndiPrasetyo'
        },
        {
          quote: "The team at Alvea doesn't just create content, they craft stories that resonate with our audience on a deeper level.",
          author: 'Maya Kusuma',
          position: 'Brand Manager, Luxe Collective',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MayaKusuma'
        }
      ],
      portfolio: {
        title: 'Featured Work',
        subtitle: 'A showcase of our creative collaborations',
        categories: ['All', 'Photography', 'Digital', 'Branding'],
        items: [
          {
            title: 'Atelier Luna Campaign',
            category: 'Photography',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Nova Fashion Rebranding',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Luxe Collective Digital Strategy',
            category: 'Digital',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Spring Collection Shoot',
            category: 'Photography',
            image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Minimalist Brand Identity',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'E-commerce Platform Design',
            category: 'Digital',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Editorial Fashion Shoot',
            category: 'Photography',
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Sustainable Fashion Campaign',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Social Media Strategy',
            category: 'Digital',
            image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      contact: {
        title: 'Let\'s Create Something Amazing Together',
        subtitle: 'Ready to elevate your fashion brand? Get in touch with our team.',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          company: 'Company Name',
          message: 'Tell us about your project',
          submit: 'Send Message'
        },
        info: [
          { icon: Mail, text: 'support@alvea.my.id' },
          { icon: MessageCircle, text: '085349905538', link: 'https://wa.me/6285349905538' },
          { icon: MapPin, text: 'Makassar, Indonesia' }
        ]
      },
      brands: [
        'ATELIER LUNA',
        'NOVA FASHION',
        'LUXE COLLECTIVE',
        'ETHEREAL WEAR',
        'MAKASSAR COUTURE',
        'INDIE FASHION',
        'URBAN THREADS',
        'COASTAL STYLE'
      ],
      cta: {
        title: 'Ready to Transform Your Brand?',
        subtitle: 'Join hundreds of fashion brands that have elevated their presence with Alvea.',
        button: 'Start Your Project'
      },
      toast: {
        success: 'Message sent successfully!'
      }
    },
    id: {
      nav: {
        services: 'Layanan',
        portfolio: 'Portfolio',
        about: 'Tentang',
        process: 'Proses',
        contact: 'Kontak'
      },
      hero: {
        headline: 'Mengangkat Merek Fashion Melalui Keunggulan Kreatif',
        subline: 'Kami menciptakan narasi visual yang menarik untuk mentransformasi merek fashion yang sedang berkembang menjadi pemimpin industri melalui fotografi inovatif, kehadiran digital strategis, dan storytelling autentik.',
        primaryCta: 'Mulai Perjalanan Anda',
        secondaryCta: 'Lihat Portfolio',
        stats: [
          { number: '100+', label: 'Merek yang Dikembangkan' },
          { number: '500K+', label: 'Audiens Terjangkau' },
          { number: '50+', label: 'Penghargaan Diraih' }
        ]
      },
      values: {
        title: 'Fondasi Kreatif Kami',
        subtitle: 'Dibangun atas prinsip-prinsip yang mendorong hasil luar biasa',
        cards: [
          {
            title: 'Personal & Kolaboratif',
            description: 'Setiap kemitraan dimulai dengan pemahaman mendalam. Kami membenamkan diri dalam cerita merek, nilai, dan visi Anda untuk menciptakan koneksi autentik.',
            icon: Users
          },
          {
            title: 'Pendekatan Inovasi Pertama',
            description: 'Tetap unggul berarti evolusi konstan. Kami memadukan teknik mutakhir dengan estetika timeless untuk menciptakan dampak yang bertahan lama.',
            icon: Zap
          },
          {
            title: 'Keunggulan End-to-End',
            description: 'Dari konsep awal hingga pengiriman akhir, kami menangani setiap detail dengan presisi, memastikan eksekusi yang mulus di semua touchpoint.',
            icon: Award
          },
          {
            title: 'Berkelanjutan & Etis',
            description: 'Kami percaya pada kreativitas yang bertanggung jawab yang menghormati integritas artistik dan kesadaran lingkungan dalam setiap proyek.',
            icon: Heart
          }
        ]
      },
      services: {
        title: 'Layanan Kreatif Komprehensif',
        subtitle: 'Semua yang dibutuhkan merek fashion Anda untuk tampil menonjol',
        items: [
          {
            title: 'Fotografi Fashion',
            description: 'Fotografi editorial dan komersial yang menangkap esensi merek Anda dengan storytelling visual yang memukau.',
            features: ['Pemotretan Studio & Lokasi', 'Fotografi Produk', 'Pembuatan Lookbook', 'Visual Kampanye'],
            icon: Camera,
            image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Strategi Digital & Media Sosial',
            description: 'Pembuatan konten strategis dan manajemen yang membangun komunitas merek autentik dan mendorong engagement.',
            features: ['Strategi Konten', 'Manajemen Media Sosial', 'Kemitraan Influencer', 'Brand Storytelling'],
            icon: Share2,
            image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Desain & Pengembangan Web',
            description: 'Pengalaman digital premium yang mengubah pengunjung menjadi pelanggan dengan customer journey yang mulus.',
            features: ['Website E-commerce', 'Website Merek', 'Optimasi Mobile', 'Integrasi SEO'],
            icon: Globe,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      process: {
        title: 'Proses Kreatif Kami',
        subtitle: 'Bagaimana kami mewujudkan visi Anda',
        steps: [
          {
            number: '01',
            title: 'Discovery & Strategi',
            description: 'Kami menggali mendalam tentang merek, audiens, dan tujuan Anda untuk menciptakan strategi kreatif yang komprehensif.'
          },
          {
            number: '02',
            title: 'Pengembangan Kreatif',
            description: 'Tim kami mengembangkan konsep, mood board, dan arahan kreatif yang selaras dengan visi Anda.'
          },
          {
            number: '03',
            title: 'Produksi & Eksekusi',
            description: 'Kami mewujudkan ide-ide melalui perencanaan yang teliti dan eksekusi yang sempurna dari setiap detail.'
          },
          {
            number: '04',
            title: 'Pengiriman & Optimasi',
            description: 'Kami memberikan hasil yang luar biasa dan terus mengoptimalkan berdasarkan kinerja dan umpan balik.'
          }
        ]
      },
      testimonials: [
        {
          quote: "Alvea benar-benar mengubah kehadiran merek kami sepenuhnya. Visi kreatif mereka dan pendekatan strategis membantu kami mencapai tingkat baru di industri fashion.",
          author: 'Sari Dewi',
          position: 'Founder, Atelier Luna',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SariDewi'
        },
        {
          quote: "Bekerja dengan Alvea adalah pengubah permainan. Perhatian terhadap detail dan pemahaman mereka tentang tren fashion tidak tertandingi.",
          author: 'Andi Prasetyo',
          position: 'Creative Director, Nova Fashion',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AndiPrasetyo'
        },
        {
          quote: "Tim Alvea tidak hanya membuat konten, mereka menciptakan cerita yang beresonansi dengan audiens kami pada tingkat yang lebih dalam.",
          author: 'Maya Kusuma',
          position: 'Brand Manager, Luxe Collective',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MayaKusuma'
        }
      ],
      portfolio: {
        title: 'Karya Unggulan',
        subtitle: 'Showcase kolaborasi kreatif kami',
        categories: ['Semua', 'Fotografi', 'Digital', 'Branding'],
        items: [
          {
            title: 'Atelier Luna Campaign',
            category: 'Photography',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Nova Fashion Rebranding',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Luxe Collective Digital Strategy',
            category: 'Digital',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Spring Collection Shoot',
            category: 'Photography',
            image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Minimalist Brand Identity',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'E-commerce Platform Design',
            category: 'Digital',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Editorial Fashion Shoot',
            category: 'Photography',
            image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Sustainable Fashion Campaign',
            category: 'Branding',
            image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          },
          {
            title: 'Social Media Strategy',
            category: 'Digital',
            image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
          }
        ]
      },
      contact: {
        title: 'Mari Ciptakan Sesuatu yang Menakjubkan Bersama',
        subtitle: 'Siap untuk meningkatkan merek fashion Anda? Hubungi tim kami.',
        form: {
          name: 'Nama Lengkap',
          email: 'Alamat Email',
          company: 'Nama Perusahaan',
          message: 'Ceritakan tentang proyek Anda',
          submit: 'Kirim Pesan'
        },
        info: [
          { icon: Mail, text: 'support@alvea.web.id' },
          { icon: MessageCircle, text: '085349905538', link: 'https://wa.me/6285349905538' },
          { icon: MapPin, text: 'Makassar, Indonesia' }
        ]
      },
      brands: [
        'ATELIER LUNA',
        'NOVA FASHION',
        'LUXE COLLECTIVE',
        'ETHEREAL WEAR',
        'MAKASSAR COUTURE',
        'INDIE FASHION',
        'URBAN THREADS',
        'COASTAL STYLE'
      ],
      cta: {
        title: 'Siap Mentransformasi Merek Anda?',
        subtitle: 'Bergabunglah dengan ratusan merek fashion yang telah meningkatkan kehadiran mereka dengan Alvea.',
        button: 'Mulai Proyek Anda'
      },
      toast: {
        success: 'Pesan berhasil dikirim!'
      }
    }
  }

  const t = content[isEnglish ? 'en' : 'id']

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden relative">
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
        >
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span>{t.toast.success}</span>
        </motion.div>
      )}

      <Navbar
        isEnglish={isEnglish}
        setIsEnglish={setIsEnglish}
        currentPage="home"
      />

      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-maroon leading-tight mb-8"
            >
              {t.hero.headline}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              {t.hero.subline}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.a
                href="https://wa.me/6285349905538"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(124, 29, 43, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-maroon text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-maroon-600 transition-all duration-300 flex items-center gap-3 cursor-pointer"
              >
                {t.hero.primaryCta}
                <ArrowRight size={20} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-maroon text-maroon px-10 py-4 rounded-lg font-semibold text-lg hover:bg-maroon hover:text-white transition-all duration-300 flex items-center gap-3"
              >
                <Play size={16} />
                {t.hero.secondaryCta}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {t.hero.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-maroon mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Decorative elements */}
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-10 w-32 h-32 border-2 border-gold/30 rounded-full"
        />
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-gold/20 rounded-full blur-sm"
        />
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-20 w-16 h-16 border border-maroon/20 rotate-45"
        />
      </section>

      {/* Enhanced Values Section */}
      <section className="py-32 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6">
              {t.values.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.values.subtitle}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.cards.map((card, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-maroon/20 rounded-2xl flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8 text-maroon" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-maroon mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6">
              {t.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {t.services.items.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] mb-8 overflow-hidden rounded-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-maroon/80 to-gold/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <service.icon className="w-12 h-12 mx-auto mb-4" />
                      <span className="text-lg font-semibold">Learn More</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-maroon" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-maroon group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6">
              {t.process.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.process.subtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-maroon to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  {index < t.process.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gold to-maroon/30 -z-10"></div>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-maroon mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6">
              {t.portfolio.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.portfolio.subtitle}
            </p>
          </motion.div>
          
          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.portfolio.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-maroon">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-6">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-2xl font-semibold text-maroon mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {t.contact.info.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-maroon/10 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-maroon" />
                    </div>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-maroon transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="font-display text-xl font-semibold text-maroon mb-6">Follow Us</h4>
                <div className="flex gap-4 relative z-10">
                  <a
                    href="https://www.instagram.com/alvea.id?igsh=ZnF6ZDNqOHk0YThp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-maroon text-white rounded-xl flex items-center justify-center hover:bg-maroon-600 transition-colors cursor-pointer hover:scale-110 transform duration-200"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/6285349905538"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-maroon text-white rounded-xl flex items-center justify-center hover:bg-maroon-600 transition-colors cursor-pointer hover:scale-110 transform duration-200"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder={t.contact.form.name}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                  </div>
                  <div>
                    <input
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      type="email"
                      placeholder={t.contact.form.email}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
                  </div>
                </div>
                <div>
                  <input
                    {...register("company")}
                    type="text"
                    placeholder={t.contact.form.company}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <textarea
                    {...register("message", { required: true })}
                    rows={6}
                    placeholder={t.contact.form.message}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-maroon focus:border-transparent transition-all resize-none"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-maroon text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-maroon-600 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {t.contact.form.submit}
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-maroon to-maroon-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-8">
              {t.cta.title}
            </h2>
            <p className="text-xl text-maroon-100 mb-12 max-w-3xl mx-auto">
              {t.cta.subtitle}
            </p>
            <motion.a
              href="https://wa.me/6285349905538"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-maroon px-12 py-4 rounded-xl font-bold text-lg hover:bg-gold-400 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
            >
              {t.cta.button}
              <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="mb-4">
                <img 
                  src={AlveaFixLogo}
                  alt="Alvea" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Elevating fashion brands through creative excellence and strategic digital presence.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/alvea.id?igsh=ZnF6ZDNqOHk0YThp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-maroon/10 text-maroon rounded-lg flex items-center justify-center hover:bg-maroon hover:text-white transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/6285349905538" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-maroon/10 text-maroon rounded-lg flex items-center justify-center hover:bg-maroon hover:text-white transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-maroon mb-4">Services</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-maroon transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-maroon transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-maroon transition-colors">Web Design</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-maroon mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-maroon transition-colors">About</a></li>
                <li><a href="#" className="hover:text-maroon transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-maroon transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 text-center text-gray-500">
            © 2025 Alvea Fashion Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

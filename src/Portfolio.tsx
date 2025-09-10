import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Share2, Globe, ArrowRight, Filter, X } from 'lucide-react'
import Navbar from './components/Navbar'
import AlveaMaroonLogo from './assets/AlveaMaroon.png'

function Portfolio() {
  const [isEnglish, setIsEnglish] = useState(true)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedCase, setSelectedCase] = useState<any>(null)

  const content = {
    en: {
      title: 'Portfolio',
      subtitle: 'Our creative work with fashion brands',
      filters: [
        { id: 'all', label: 'All Work', icon: Filter },
        { id: 'photography', label: 'Photography', icon: Camera },
        { id: 'social', label: 'Social Media', icon: Share2 },
        { id: 'web', label: 'Web Development', icon: Globe }
      ],
      cases: [
        // Photography Cases
        {
          id: 'atelier-luna-lookbook',
          category: 'photography',
          title: 'Atelier Luna Lookbook',
          role: 'Fashion Photography & Art Direction',
          image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          height: 'tall',
          problem: 'Brand struggled with creating strong visual identity and showcasing their premium fashion collections effectively to reach the right affluent audience.',
          approach: 'Personal & creative approach, integrating high-end fashion photography, strategic art direction, and premium visual storytelling to elevate brand perception.',
          result: 'Engagement growth of 245% and sales uplift of 40% within 3 months. Premium positioning successfully achieved with 60% increase in high-value customers.',
          metrics: [
            { label: 'Engagement Growth', value: '245%' },
            { label: 'Sales Increase', value: '40%' },
            { label: 'Premium Customers', value: '+60%' }
          ]
        },
        {
          id: 'nova-product-campaign',
          category: 'photography',
          title: 'Nova Fashion Product Campaign',
          role: 'Product Photography & Visual Production',
          image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          height: 'medium',
          problem: 'New fashion brand needed compelling product visuals that would stand out in crowded e-commerce marketplace and drive online sales.',
          approach: 'Creative product photography with lifestyle integration, focusing on emotional connection and brand storytelling through visual narratives.',
          result: 'Online conversion rate increased by 85% and product page engagement up 150%. Successfully launched across 5 major e-commerce platforms.',
          metrics: [
            { label: 'Conversion Rate', value: '+85%' },
            { label: 'Page Engagement', value: '+150%' },
            { label: 'Platform Launch', value: '5 Sites' }
          ]
        },
        {
          id: 'editorial-spring-collection',
          category: 'photography',
          title: 'Spring Collection Editorial',
          role: 'Editorial Photography & Creative Direction',
          image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
          height: 'short',
          problem: 'Fashion designer needed editorial-quality imagery for magazine features and premium brand positioning in competitive market.',
          approach: 'High-fashion editorial approach with professional models, premium locations, and magazine-quality production standards.',
          result: 'Featured in 8 fashion magazines and increased brand recognition by 300%. Attracted 15 new wholesale clients.',
          metrics: [
            { label: 'Magazine Features', value: '8 Publications' },
            { label: 'Brand Recognition', value: '+300%' },
            { label: 'New Clients', value: '15 Wholesale' }
          ]
        },
        
        // Social Media Cases
        {
          id: 'luxe-collective-campaign',
          category: 'social',
          title: 'Luxe Collective Brand Campaign',
          role: 'Social Media Strategy & Management',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          height: 'tall',
          problem: 'Luxury fashion brand struggled with low social media engagement, inconsistent brand voice, and difficulty reaching target affluent demographics.',
          approach: 'Comprehensive social strategy with premium content creation, influencer partnerships, and targeted community building focusing on luxury lifestyle.',
          result: 'Instagram followers grew 400%, engagement rate increased to 8.5%, and generated $500K in direct social commerce sales.',
          metrics: [
            { label: 'Follower Growth', value: '400%' },
            { label: 'Engagement Rate', value: '8.5%' },
            { label: 'Social Sales', value: '$500K' }
          ]
        },
        {
          id: 'makassar-couture-community',
          category: 'social',
          title: 'Makassar Couture Community',
          role: 'Community Building & Content Strategy',
          image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=650&q=80',
          height: 'medium',
          problem: 'Local fashion brand needed to build strong community presence and establish thought leadership in Indonesian fashion industry.',
          approach: 'Community-first strategy with user-generated content, local fashion influencer collaborations, and authentic storytelling about Indonesian fashion.',
          result: 'Built community of 50K engaged followers, achieved 12% average engagement rate, and established brand as local fashion authority.',
          metrics: [
            { label: 'Community Size', value: '50K' },
            { label: 'Engagement Rate', value: '12%' },
            { label: 'Brand Authority', value: 'Achieved' }
          ]
        },
        {
          id: 'influencer-collaboration',
          category: 'social',
          title: 'Multi-Brand Influencer Campaign',
          role: 'Influencer Strategy & Campaign Management',
          image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          height: 'short',
          problem: 'Multiple fashion brands needed coordinated influencer campaigns but lacked expertise in influencer selection and campaign management.',
          approach: 'Strategic influencer matching, authentic partnership development, and comprehensive campaign tracking across multiple platforms.',
          result: 'Delivered average 15% engagement rate across campaigns and generated 2.5M total impressions with 25% increase in brand awareness.',
          metrics: [
            { label: 'Average Engagement', value: '15%' },
            { label: 'Total Impressions', value: '2.5M' },
            { label: 'Brand Awareness', value: '+25%' }
          ]
        },

        // Web Development Cases
        {
          id: 'ethereal-wear-ecommerce',
          category: 'web',
          title: 'Ethereal Wear E-commerce',
          role: 'Full-Stack Development & UX Design',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
          height: 'tall',
          problem: 'Fashion brand needed modern e-commerce platform that would showcase products beautifully while providing seamless shopping experience.',
          approach: 'User-centric design with mobile-first approach, advanced filtering, wishlist functionality, and integrated payment solutions for Indonesian market.',
          result: 'Online sales increased 320%, average order value up 55%, and mobile conversion rate reached 4.2% - above industry average.',
          metrics: [
            { label: 'Online Sales', value: '+320%' },
            { label: 'Order Value', value: '+55%' },
            { label: 'Mobile Conversion', value: '4.2%' }
          ]
        },
        {
          id: 'indie-fashion-portfolio',
          category: 'web',
          title: 'Indie Fashion Designer Portfolio',
          role: 'Creative Development & Brand Integration',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          height: 'medium',
          problem: 'Independent fashion designer needed professional portfolio website to attract high-end clients and showcase unique design aesthetic.',
          approach: 'Minimalist design philosophy with focus on visual storytelling, interactive galleries, and seamless contact integration for client inquiries.',
          result: 'Increased client inquiries by 280% and attracted 12 high-value commission projects worth average $15K each.',
          metrics: [
            { label: 'Client Inquiries', value: '+280%' },
            { label: 'Commission Projects', value: '12' },
            { label: 'Average Value', value: '$15K' }
          ]
        },
        {
          id: 'urban-threads-landing',
          category: 'web',
          title: 'Urban Threads Campaign Landing',
          role: 'Landing Page Optimization & Conversion',
          image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=550&q=80',
          height: 'short',
          problem: 'Streetwear brand needed high-converting landing pages for seasonal campaigns to maximize advertising ROI and capture leads.',
          approach: 'Conversion-optimized design with A/B testing, compelling CTAs, social proof integration, and fast-loading mobile experience.',
          result: 'Achieved 12.5% conversion rate (3x industry average), reduced bounce rate to 25%, and generated 5,000+ qualified leads.',
          metrics: [
            { label: 'Conversion Rate', value: '12.5%' },
            { label: 'Bounce Rate', value: '25%' },
            { label: 'Qualified Leads', value: '5,000+' }
          ]
        }
      ],
      cta: 'Start Your Project'
    },
    id: {
      title: 'Portfolio',
      subtitle: 'Karya kreatif kami bersama merek fashion',
      filters: [
        { id: 'all', label: 'Semua Karya', icon: Filter },
        { id: 'photography', label: 'Fotografi', icon: Camera },
        { id: 'social', label: 'Media Sosial', icon: Share2 },
        { id: 'web', label: 'Pengembangan Web', icon: Globe }
      ],
      cases: [
        // Photography Cases
        {
          id: 'atelier-luna-lookbook',
          category: 'photography',
          title: 'Atelier Luna Lookbook',
          role: 'Fotografi Fashion & Art Direction',
          image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          height: 'tall',
          problem: 'Brand kesulitan membangun identitas visual yang kuat dan menampilkan koleksi fashion premium secara efektif untuk menjangkau audiens berkelas.',
          approach: 'Pendekatan personal & kreatif, mengintegrasikan fotografi fashion high-end, art direction strategis, dan visual storytelling premium untuk mengangkat persepsi merek.',
          result: 'Pertumbuhan engagement 245% dan peningkatan penjualan 40% dalam 3 bulan. Positioning premium berhasil dicapai dengan peningkatan 60% pelanggan high-value.',
          metrics: [
            { label: 'Pertumbuhan Engagement', value: '245%' },
            { label: 'Peningkatan Penjualan', value: '40%' },
            { label: 'Pelanggan Premium', value: '+60%' }
          ]
        },
        {
          id: 'nova-product-campaign',
          category: 'photography',
          title: 'Kampanye Produk Nova Fashion',
          role: 'Fotografi Produk & Produksi Visual',
          image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          height: 'medium',
          problem: 'Brand fashion baru membutuhkan visual produk yang menarik untuk menonjol di marketplace e-commerce yang padat dan mendorong penjualan online.',
          approach: 'Fotografi produk kreatif dengan integrasi lifestyle, fokus pada koneksi emosional dan brand storytelling melalui narasi visual.',
          result: 'Tingkat konversi online meningkat 85% dan engagement halaman produk naik 150%. Berhasil diluncurkan di 5 platform e-commerce utama.',
          metrics: [
            { label: 'Tingkat Konversi', value: '+85%' },
            { label: 'Engagement Halaman', value: '+150%' },
            { label: 'Peluncuran Platform', value: '5 Situs' }
          ]
        },
        {
          id: 'editorial-spring-collection',
          category: 'photography',
          title: 'Editorial Koleksi Musim Semi',
          role: 'Fotografi Editorial & Creative Direction',
          image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
          height: 'short',
          problem: 'Desainer fashion membutuhkan imagery berkualitas editorial untuk feature majalah dan positioning merek premium di pasar yang kompetitif.',
          approach: 'Pendekatan editorial high-fashion dengan model profesional, lokasi premium, dan standar produksi berkualitas majalah.',
          result: 'Tampil di 8 majalah fashion dan meningkatkan brand recognition 300%. Menarik 15 klien wholesale baru.',
          metrics: [
            { label: 'Feature Majalah', value: '8 Publikasi' },
            { label: 'Brand Recognition', value: '+300%' },
            { label: 'Klien Baru', value: '15 Wholesale' }
          ]
        },
        
        // Social Media Cases
        {
          id: 'luxe-collective-campaign',
          category: 'social',
          title: 'Kampanye Merek Luxe Collective',
          role: 'Strategi & Manajemen Media Sosial',
          image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          height: 'tall',
          problem: 'Brand fashion mewah kesulitan dengan engagement media sosial rendah, brand voice yang tidak konsisten, dan kesulitan menjangkau demografi target yang berkelas.',
          approach: 'Strategi sosial komprehensif dengan pembuatan konten premium, kemitraan influencer, dan community building yang fokus pada luxury lifestyle.',
          result: 'Follower Instagram tumbuh 400%, engagement rate meningkat ke 8.5%, dan menghasilkan $500K penjualan social commerce langsung.',
          metrics: [
            { label: 'Pertumbuhan Follower', value: '400%' },
            { label: 'Engagement Rate', value: '8.5%' },
            { label: 'Penjualan Sosial', value: '$500K' }
          ]
        },
        {
          id: 'makassar-couture-community',
          category: 'social',
          title: 'Komunitas Makassar Couture',
          role: 'Community Building & Strategi Konten',
          image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&auto=format&fit=crop&w=650&q=80',
          height: 'medium',
          problem: 'Brand fashion lokal perlu membangun kehadiran komunitas yang kuat dan membangun thought leadership di industri fashion Indonesia.',
          approach: 'Strategi community-first dengan user-generated content, kolaborasi influencer fashion lokal, dan storytelling autentik tentang fashion Indonesia.',
          result: 'Membangun komunitas 50K follower yang engaged, mencapai 12% average engagement rate, dan memantapkan brand sebagai otoritas fashion lokal.',
          metrics: [
            { label: 'Ukuran Komunitas', value: '50K' },
            { label: 'Engagement Rate', value: '12%' },
            { label: 'Otoritas Merek', value: 'Tercapai' }
          ]
        },
        {
          id: 'influencer-collaboration',
          category: 'social',
          title: 'Kampanye Influencer Multi-Brand',
          role: 'Strategi Influencer & Manajemen Kampanye',
          image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
          height: 'short',
          problem: 'Beberapa brand fashion membutuhkan kampanye influencer terkoordinasi tetapi kurang expertise dalam seleksi influencer dan manajemen kampanye.',
          approach: 'Pencocokan influencer strategis, pengembangan partnership autentik, dan tracking kampanye komprehensif di berbagai platform.',
          result: 'Menghasilkan rata-rata 15% engagement rate di seluruh kampanye dan menghasilkan 2.5M total impressions dengan 25% peningkatan brand awareness.',
          metrics: [
            { label: 'Rata-rata Engagement', value: '15%' },
            { label: 'Total Impressions', value: '2.5M' },
            { label: 'Brand Awareness', value: '+25%' }
          ]
        },

        // Web Development Cases
        {
          id: 'ethereal-wear-ecommerce',
          category: 'web',
          title: 'E-commerce Ethereal Wear',
          role: 'Full-Stack Development & UX Design',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80',
          height: 'tall',
          problem: 'Brand fashion membutuhkan platform e-commerce modern yang menampilkan produk dengan indah sambil memberikan pengalaman belanja yang mulus.',
          approach: 'Desain user-centric dengan pendekatan mobile-first, filtering canggih, fitur wishlist, dan solusi pembayaran terintegrasi untuk pasar Indonesia.',
          result: 'Penjualan online meningkat 320%, rata-rata nilai order naik 55%, dan tingkat konversi mobile mencapai 4.2% - di atas rata-rata industri.',
          metrics: [
            { label: 'Penjualan Online', value: '+320%' },
            { label: 'Nilai Order', value: '+55%' },
            { label: 'Konversi Mobile', value: '4.2%' }
          ]
        },
        {
          id: 'indie-fashion-portfolio',
          category: 'web',
          title: 'Portfolio Desainer Fashion Indie',
          role: 'Creative Development & Integrasi Brand',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
          height: 'medium',
          problem: 'Desainer fashion independen membutuhkan website portfolio profesional untuk menarik klien high-end dan menampilkan estetika desain yang unik.',
          approach: 'Filosofi desain minimalis dengan fokus pada visual storytelling, galeri interaktif, dan integrasi kontak yang mulus untuk inquiry klien.',
          result: 'Meningkatkan inquiry klien 280% dan menarik 12 proyek komisi high-value senilai rata-rata $15K masing-masing.',
          metrics: [
            { label: 'Inquiry Klien', value: '+280%' },
            { label: 'Proyek Komisi', value: '12' },
            { label: 'Nilai Rata-rata', value: '$15K' }
          ]
        },
        {
          id: 'urban-threads-landing',
          category: 'web',
          title: 'Landing Kampanye Urban Threads',
          role: 'Optimasi Landing Page & Konversi',
          image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=550&q=80',
          height: 'short',
          problem: 'Brand streetwear membutuhkan landing page berkonversi tinggi untuk kampanye musiman guna memaksimalkan ROI iklan dan menangkap leads.',
          approach: 'Desain teroptimasi konversi dengan A/B testing, CTA yang compelling, integrasi social proof, dan pengalaman mobile yang fast-loading.',
          result: 'Mencapai 12.5% conversion rate (3x rata-rata industri), mengurangi bounce rate ke 25%, dan menghasilkan 5,000+ qualified leads.',
          metrics: [
            { label: 'Conversion Rate', value: '12.5%' },
            { label: 'Bounce Rate', value: '25%' },
            { label: 'Qualified Leads', value: '5,000+' }
          ]
        }
      ],
      cta: 'Mulai Proyek Anda'
    }
  }

  const t = content[isEnglish ? 'en' : 'id']

  const filteredCases = activeFilter === 'all' 
    ? t.cases 
    : t.cases.filter(c => c.category === activeFilter)

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar 
        isEnglish={isEnglish} 
        setIsEnglish={setIsEnglish} 
        currentPage="portfolio"
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
              className="text-center mb-16"
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold text-maroon mb-8 leading-tight">
                {t.title}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                {t.subtitle}
              </p>

              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                {t.filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-maroon text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-maroon/10 hover:text-maroon'
                    }`}
                  >
                    <filter.icon className="w-5 h-5" />
                    {filter.label}
                  </motion.button>
                ))}
              </div>
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

        {/* Portfolio Grid - Masonry Layout */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredCases.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      layout: { duration: 0.3 }
                    }}
                    onClick={() => setSelectedCase(caseStudy)}
                    className={`group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                      caseStudy.height === 'tall' ? 'row-span-2' : 
                      caseStudy.height === 'short' ? 'row-span-1' : 'row-span-1'
                    }`}
                    style={{
                      height: caseStudy.height === 'tall' ? '500px' : 
                              caseStudy.height === 'short' ? '250px' : '350px'
                    }}
                  >
                    <div className="relative h-full overflow-hidden">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-maroon/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>
                      
                      {/* Hover Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="mb-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold rounded-full text-sm font-medium text-maroon mb-3">
                            {(() => {
                              const filter = t.filters.find(f => f.id === caseStudy.category)
                              const Icon = filter?.icon
                              return Icon ? <Icon className="w-4 h-4" /> : null
                            })()}
                            {t.filters.find(f => f.id === caseStudy.category)?.label}
                          </div>
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-2 leading-tight">
                          {caseStudy.title}
                        </h3>
                        <p className="text-maroon-100 text-sm font-medium mb-4">
                          {caseStudy.role}
                        </p>
                        <div className="flex items-center gap-2 text-gold font-semibold">
                          <span>View Case Study</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCase(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                >
                  <X size={20} />
                </button>

                {/* Case Study Header */}
                <div className="relative h-64 overflow-hidden rounded-t-3xl">
                  <img
                    src={selectedCase.image}
                    alt={selectedCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold rounded-full text-sm font-medium text-maroon mb-3">
                      {(() => {
                        const filter = t.filters.find(f => f.id === selectedCase.category)
                        const Icon = filter?.icon
                        return Icon ? <Icon className="w-4 h-4" /> : null
                      })()}
                      {t.filters.find(f => f.id === selectedCase.category)?.label}
                    </div>
                    <h2 className="font-display text-3xl font-bold mb-2">{selectedCase.title}</h2>
                    <p className="text-maroon-100 font-medium">{selectedCase.role}</p>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-8">
                  {/* Problem → Approach → Result */}
                  <div className="space-y-12">
                    {/* Problem */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-maroon/10 rounded-2xl flex items-center justify-center">
                          <span className="font-bold text-maroon">P</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-maroon">Problem</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">{selectedCase.problem}</p>
                    </div>

                    {/* Alvea Brand Mark */}
                    <div className="text-center py-8">
                      <div className="font-display text-4xl font-bold text-maroon/20">Alvea</div>
                    </div>

                    {/* Approach */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gold/20 rounded-2xl flex items-center justify-center">
                          <span className="font-bold text-gold">A</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-maroon">Approach</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">{selectedCase.approach}</p>
                    </div>

                    {/* Alvea Brand Mark */}
                    <div className="text-center py-8">
                      <div className="font-display text-4xl font-bold text-maroon/20">Alvea</div>
                    </div>

                    {/* Result */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                          <span className="font-bold text-green-600">R</span>
                        </div>
                        <h3 className="font-display text-2xl font-bold text-maroon">Result</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg mb-8">{selectedCase.result}</p>

                      {/* Metrics */}
                      <div className="grid md:grid-cols-3 gap-6">
                        {selectedCase.metrics.map((metric: any, index: number) => (
                          <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl">
                            <div className="font-display text-3xl font-bold text-maroon mb-2">
                              {metric.value}
                            </div>
                            <div className="text-sm font-medium text-gray-600">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Alvea Brand Mark */}
                    <div className="text-center py-8">
                      <div className="font-display text-4xl font-bold text-maroon/20">Alvea</div>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-8">
                      <motion.a
                        href="https://wa.me/6285349905538"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-maroon text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-maroon-600 transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
                      >
                        {t.cta}
                        <ArrowRight size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default Portfolio
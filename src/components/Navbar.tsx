import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import AlveaFixLogo from '../assets/AlveaFix.png'

interface NavbarProps {
  isEnglish: boolean
  setIsEnglish: (value: boolean) => void
  currentPage?: 'home' | 'about' | 'services' | 'portfolio' | 'process' | 'contact'
}

function Navbar({ isEnglish, setIsEnglish, currentPage = 'home' }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setIsScrolled(window.scrollY > heroHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const navItems = {
    en: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      process: 'Process',
      contact: 'Contact'
    },
    id: {
      home: 'Home',
      about: 'Tentang',
      services: 'Layanan',
      portfolio: 'Portfolio',
      process: 'Proses',
      contact: 'Kontak'
    }
  }


  const nav = navItems[isEnglish ? 'en' : 'id']

  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about'
  const isServicesPage = location.pathname === '/services'
  const isPortfolioPage = location.pathname === '/portfolio'
  const isProcessPage = location.pathname === '/process'
  const isContactPage = location.pathname === '/contact'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        currentPage === 'about' || isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-lg border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="transition-all duration-300"
            >
              <img
                src={AlveaFixLogo}
                alt="Alvea"
                className="h-24 w-auto"
              />
            </motion.div>
          </Link>
          
          {/* Centered Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {Object.entries(nav).map(([key, value]) => {
              // Get the correct active state and link for each page
              const getPageState = () => {
                switch(key) {
                  case 'home': return { isActive: isHomePage, linkTo: '/' }
                  case 'about': return { isActive: isAboutPage, linkTo: '/about' }
                  case 'services': return { isActive: isServicesPage, linkTo: '/services' }
                  case 'portfolio': return { isActive: isPortfolioPage, linkTo: '/portfolio' }
                  case 'process': return { isActive: isProcessPage, linkTo: '/process' }
                  case 'contact': return { isActive: isContactPage, linkTo: '/contact' }
                  default: return { isActive: false, linkTo: `/#${key}` }
                }
              }

              const { isActive, linkTo } = getPageState()

              return (
                <Link key={key} to={linkTo}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`transition-all duration-300 font-medium relative group ${
                      isActive ? 'text-maroon' : 'text-gray-700 hover:text-maroon'
                    }`}
                  >
                    {value}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-maroon"></span>
                    )}
                    {!isActive && (
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon transition-all duration-300 group-hover:w-full"></span>
                    )}
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Right-aligned Language Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEnglish(!isEnglish)}
            className="hidden lg:block text-sm transition-colors border-2 border-gray-200 hover:border-maroon px-4 py-2 rounded-full font-medium text-gray-600 hover:text-maroon"
          >
            {isEnglish ? 'ID' : 'EN'}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-maroon transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        className="lg:hidden bg-white backdrop-blur-lg border-t border-gray-100 overflow-hidden"
      >
        <div className="px-4 py-6 space-y-4">
          {Object.entries(nav).map(([key, value]) => {
            const getPageState = () => {
              switch(key) {
                case 'home': return { isActive: isHomePage, linkTo: '/' }
                case 'about': return { isActive: isAboutPage, linkTo: '/about' }
                case 'services': return { isActive: isServicesPage, linkTo: '/services' }
                case 'portfolio': return { isActive: isPortfolioPage, linkTo: '/portfolio' }
                case 'process': return { isActive: isProcessPage, linkTo: '/process' }
                case 'contact': return { isActive: isContactPage, linkTo: '/contact' }
                default: return { isActive: false, linkTo: `/#${key}` }
              }
            }

            const { isActive, linkTo } = getPageState()

            return (
              <Link
                key={key}
                to={linkTo}
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-colors font-medium ${
                  isActive ? 'text-maroon' : 'text-gray-700 hover:text-maroon'
                }`}
              >
                {value}
              </Link>
            )
          })}
          <button
            onClick={() => setIsEnglish(!isEnglish)}
            className="text-sm transition-colors border border-gray-200 hover:border-maroon px-3 py-1 rounded-full text-gray-600 hover:text-maroon"
          >
            {isEnglish ? 'ID' : 'EN'}
          </button>
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
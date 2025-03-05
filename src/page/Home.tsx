import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  Sun, 
  Moon, 
  ChevronRight, 
  ChevronDown,
  Layout, 
  Pointer, 
  Zap,
  Menu,
  X
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { TestimonialsSection } from "@/components/testimonials-with-marquee"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/ui/marquee"
import { Feature108 } from "@/components/shadcnblocks-com-feature108"
import { FeatureSteps } from "@/components/feature-section"
import HeroImageCarousel from "@/components/ui/gallery"

// Animation variants

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
}

// Logos component for the marquee
const Logos = {
  tailwindcss: () => (
    <svg
      className={"h-[28px] sm:w-auto w-[140px]"}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 262 33"
    >
      <path
        className={"fill-cyan-500"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
      />
      <path
        className={"fill-primary"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80.996 13.652H76.284V22.772C76.284 25.204 77.88 25.166 80.996 25.014V28.7C74.688 29.46 72.18 27.712 72.18 22.772V13.652H68.684V9.69996H72.18V4.59596L76.284 3.37996V9.69996H80.996V13.652ZM98.958 9.69996H103.062V28.7H98.958V25.964C97.514 27.978 95.272 29.194 92.308 29.194C87.14 29.194 82.846 24.824 82.846 19.2C82.846 13.538 87.14 9.20596 92.308 9.20596C95.272 9.20596 97.514 10.422 98.958 12.398V9.69996ZM92.954 25.28C96.374 25.28 98.958 22.734 98.958 19.2C98.958 15.666 96.374 13.12 92.954 13.12C89.534 13.12 86.95 15.666 86.95 19.2C86.95 22.734 89.534 25.28 92.954 25.28ZM109.902 6.84996C108.458 6.84996 107.28 5.63396 107.28 4.22796C107.281 3.53297 107.558 2.86682 108.049 2.37539C108.541 1.88395 109.207 1.60728 109.902 1.60596C110.597 1.60728 111.263 1.88395 111.755 2.37539C112.246 2.86682 112.523 3.53297 112.524 4.22796C112.524 5.63396 111.346 6.84996 109.902 6.84996ZM107.85 28.7V9.69996H111.954V28.7H107.85ZM116.704 28.7V0.959961H120.808V28.7H116.704ZM147.446 9.69996H151.778L145.812 28.7H141.784L137.832 15.894L133.842 28.7H129.814L123.848 9.69996H128.18L131.866 22.81L135.856 9.69996H139.77L143.722 22.81L147.446 9.69996ZM156.87 6.84996C155.426 6.84996 154.248 5.63396 154.248 4.22796C154.249 3.53297 154.526 2.86682 155.017 2.37539C155.509 1.88395 156.175 1.60728 156.87 1.60596C157.565 1.60728 158.231 1.88395 158.723 2.37539C159.214 2.86682 159.491 3.53297 159.492 4.22796C159.492 5.63396 158.314 6.84996 156.87 6.84996ZM154.818 28.7V9.69996H158.922V28.7H154.818ZM173.666 9.20596C177.922 9.20596 180.962 12.094 180.962 17.034V28.7H176.858V17.452C176.858 14.564 175.186 13.044 172.602 13.044C169.904 13.044 167.776 14.64 167.776 18.516V28.7H163.672V9.69996H167.776V12.132C169.03 10.156 171.082 9.20596 173.666 9.20596ZM200.418 2.09996H204.522V28.7H200.418V25.964C198.974 27.978 196.732 29.194 193.768 29.194C188.6 29.194 184.306 24.824 184.306 19.2C184.306 13.538 188.6 9.20596 193.768 9.20596C196.732 9.20596 198.974 10.422 200.418 12.398V2.09996ZM194.414 25.28C197.834 25.28 200.418 22.734 200.418 19.2C200.418 15.666 197.834 13.12 194.414 13.12C190.994 13.12 188.41 15.666 188.41 19.2C188.41 22.734 190.994 25.28 194.414 25.28ZM218.278 29.194C212.54 29.194 208.246 24.824 208.246 19.2C208.246 13.538 212.54 9.20596 218.278 9.20596C222.002 9.20596 225.232 11.144 226.752 14.108L223.218 16.16C222.382 14.374 220.52 13.234 218.24 13.234C214.896 13.234 212.35 15.78 212.35 19.2C212.35 22.62 214.896 25.166 218.24 25.166C220.52 25.166 222.382 23.988 223.294 22.24L226.828 24.254C225.232 27.256 222.002 29.194 218.278 29.194ZM233.592 14.944C233.592 18.402 243.814 16.312 243.814 23.342C243.814 27.142 240.508 29.194 236.404 29.194C232.604 29.194 229.868 27.484 228.652 24.748L232.186 22.696C232.794 24.406 234.314 25.432 236.404 25.432C238.228 25.432 239.634 24.824 239.634 23.304C239.634 19.922 229.412 21.822 229.412 15.02C229.412 11.448 232.49 9.20596 236.366 9.20596C239.482 9.20596 242.066 10.65 243.396 13.158L239.938 15.096C239.254 13.614 237.924 12.93 236.366 12.93C234.884 12.93 233.592 13.576 233.592 14.944ZM251.11 14.944C251.11 18.402 261.332 16.312 261.332 23.342C261.332 27.142 258.026 29.194 253.922 29.194C250.122 29.194 247.386 27.484 246.17 24.748L249.704 22.696C250.312 24.406 251.832 25.432 253.922 25.432C255.746 25.432 257.152 24.824 257.152 23.304C257.152 19.922 246.93 21.822 246.93 15.02C246.93 11.448 250.008 9.20596 253.884 9.20596C257 9.20596 259.584 10.65 260.914 13.158L257.456 15.096C256.772 13.614 255.442 12.93 253.884 12.93C252.402 12.93 251.11 13.576 251.11 14.944Z"
      />
    </svg>
  ),
  nextjs: () => (
    <svg
      className={"h-[20px] fill-primary"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394 79"
    >
      <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path>
      <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"></path>
      <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"></path>
      <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"></path>
      <path
        clipRule="evenodd"
        d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
        fillRule="evenodd"
      ></path>
      <path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"></path>
      <path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"></path>
      <path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"></path>
    </svg>
  ),
  framer: () => (
    <div
      className={
        "h-fit flex items-center justify-start font-bold text-xl gap-3"
      }
    >
      <svg
        viewBox="0 0 14 21"
        role="presentation"
        className={"h-[30px] fill-primary"}
      >
        <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="currentColor"></path>
      </svg>
      Motion
    </div>
  ),
  aws: () => (
    <div className="flex items-center gap-2 font-bold text-xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">CloudPro</span>
    </div>
  ),
};

function Home() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)
  const useCasesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  const featureStepsData = [
    { 
      step: 'Step 1', 
      title: 'Connect Your Data Sources',
      content: 'Easily integrate with 100+ data sources including CRMs, analytics platforms, and databases. Our platform automatically syncs and normalizes your data.', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop' 
    },
    { 
      step: 'Step 2',
      title: 'Activate AI Analysis',
      content: 'Our AI engine automatically analyzes your data to uncover patterns, trends, and actionable insights that drive business growth.',
      image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      step: 'Step 3',
      title: 'Automate & Scale',
      content: 'Set up automated workflows and real-time monitoring to continuously optimize your operations and scale your business intelligence.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop'
    },
  ]

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const handleGetStarted = () => {
    navigate('/dashboard')
  }

  const handleBookDemo = () => {
    navigate('/wishlist')
  }

  return (
    <div className={`min-h-screen bg-background ${darkMode ? "dark" : ""}`}>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <div className="flex items-center space-x-2">
              <img
                src="https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon-32x32.png"
                alt="DataAI Logo"
                width={32}
                height={32}
                className="rounded-lg shadow-lg"
              />
              <span className="inline-block font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">DataAI</span>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => scrollToSection(featuresRef)} className="group">
                Features
              </Button>

              <Button variant="ghost" onClick={() => scrollToSection(useCasesRef)} className="group">
                Use Cases
              </Button>

              <Button variant="ghost" onClick={() => scrollToSection(testimonialsRef)} className="group">
                Testimonials
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-muted/50 data-[state=open]:bg-muted/50">
                    Resources <ChevronDown className="ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[180px]">
                  <DropdownMenuItem onClick={() => scrollToSection(resourcesRef)} className="cursor-pointer">Documentation</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(resourcesRef)} className="cursor-pointer">Help Center</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection(resourcesRef)} className="cursor-pointer">API</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          <div className="flex items-center justify-end space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="hidden md:flex">
              {darkMode ? <Sun className="h-5 w-5 transition-all" /> : <Moon className="h-5 w-5 transition-all" />}
            </Button>
            <Button variant="ghost" className="hidden md:flex">
              Sign in
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-primary to-primary/80" onClick={handleGetStarted}>
              Get started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-background"
            >
              <div className="container py-4 space-y-4">
                <Button variant="ghost" onClick={() => scrollToSection(featuresRef)} className="w-full justify-start">
                  Features
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection(useCasesRef)} className="w-full justify-start">
                  Use Cases
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection(testimonialsRef)} className="w-full justify-start">
                  Testimonials
                </Button>
                <Button variant="ghost" onClick={() => scrollToSection(resourcesRef)} className="w-full justify-start">
                  Resources
                </Button>
                <hr className="border-t border-border" />
                <Button variant="ghost" className="w-full justify-start">
                  Sign in
                </Button>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80" onClick={handleGetStarted}>
                  Get started
                </Button>
                <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="w-full justify-start">
                  {darkMode ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
                  {darkMode ? "Light mode" : "Dark mode"}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

   {/* Hero Section */}
   <section className="relative overflow-hidden py-8 md:py-16 lg:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-[400px] md:h-[600px] w-[400px] md:w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-[60px] md:blur-[80px] transform rotate-12" />
          <div className="absolute bottom-0 left-0 h-[400px] md:h-[600px] w-[400px] md:w-[600px] rounded-full bg-gradient-to-tr from-secondary/20 via-secondary/10 to-transparent blur-[60px] md:blur-[80px] transform -rotate-12" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] md:h-[500px] w-[500px] md:w-[800px] rounded-full bg-gradient-to-b from-muted/30 to-transparent opacity-50 blur-[80px] md:blur-[120px]" />
        </div>

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:gap-12 grid-cols-1 lg:grid-cols-2 items-center">
            <motion.div
              className="flex flex-col justify-center space-y-4 md:space-y-6 order-2 lg:order-1 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={slideUp} className="flex justify-center lg:justify-start">
                <Badge className="mb-2 md:mb-4 inline-flex items-center rounded-full border px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2" variant="outline">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  New AI-Powered Features
                </Badge>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent leading-[1.15] md:leading-[1.2]"
                variants={slideUp}
              >
                Go to market with unique data
              </motion.h1>

              <motion.p className="max-w-[540px] mx-auto lg:mx-0 text-base sm:text-lg md:text-xl text-muted-foreground/90 font-medium" variants={slideUp}>
                Access 100+ premium data sources and AI research agents in one platform, then automate growth workflows
                to turn insights into revenue.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 justify-center lg:justify-start" variants={scaleUp}>
                <Button size="lg" className="gap-2 w-full sm:w-auto text-sm md:text-base h-11 md:h-12 px-6 md:px-8 bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" onClick={handleGetStarted}>
                  Start building for free <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto text-sm md:text-base h-11 md:h-12 px-6 md:px-8 border-2 hover:bg-muted/50 transition-all duration-300" onClick={handleBookDemo}>
                  Book a demo <ChevronRight className="h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div variants={slideUp} className="pt-6 md:pt-8">
                <p className="text-xs md:text-sm text-muted-foreground/70 flex items-center gap-2 justify-center lg:justify-start">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 md:h-5 w-4 md:w-5 text-primary">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Trusted by 300,000+ leading GTM teams worldwide
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative order-1 lg:order-2 w-full max-w-[500px] mx-auto"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <HeroImageCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-y bg-muted/40 py-8 sm:py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center space-x-2 rounded-full bg-muted/60 px-4 md:px-6 py-1.5 md:py-2 backdrop-blur-sm">
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 md:h-4 w-3.5 md:w-4 text-primary">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 9.94L11.646 13.294L10.354 14.586L9.062 13.294L7 11.232" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xs md:text-sm font-medium">TRUSTED BY LEADING GTM TEAMS</span>
            </div>

            <Marquee className="py-4 md:py-6" pauseOnHover speed={25}>
              {[Logos.tailwindcss, Logos.framer, Logos.nextjs, Logos.aws].map((Logo, index) => (
                <div
                  key={index}
                  className="mx-8 md:mx-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200"
                >
                  <Logo />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Feature Steps Section */}
      <section ref={featuresRef} className="relative border-y bg-background/50 backdrop-blur-sm">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary/5 to-transparent" />
        </div>
        <FeatureSteps 
          features={featureStepsData}
          title="Get Started in Three Simple Steps"
          autoPlayInterval={4000}
          className="py-20 md:py-32 [&_h3]:bg-gradient-to-br [&_h3]:from-foreground [&_h3]:to-foreground/70 [&_h3]:bg-clip-text [&_h3]:text-transparent"
        />
      </section>

      {/* Use Cases Section using Feature108 */}
      <section ref={useCasesRef} className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 via-primary/[0.02] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
        </div>
        <Feature108 
          badge="Real-World Applications"
          heading="Transforming industries with data-driven insights"
          description="See how different industries leverage our platform to drive innovation and achieve measurable results."
          tabs={[
            {
              value: "tab-1",
              icon: <Zap className="h-auto w-4 shrink-0" />,
              label: "E-commerce",
              content: {
                badge: "Retail Intelligence",
                title: "Optimize your e-commerce performance",
                description:
                  "Analyze customer behavior, optimize inventory management, and personalize shopping experiences. Our AI-powered platform helps e-commerce businesses increase conversion rates and customer lifetime value.",
                buttonText: "View E-commerce Solutions",
                imageSrc:
                  "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&auto=format&fit=crop&q=60",
                imageAlt: "E-commerce Analytics Dashboard",
              },
            },
            {
              value: "tab-2",
              icon: <Pointer className="h-auto w-4 shrink-0" />,
              label: "Financial Services",
              content: {
                badge: "FinTech Solutions",
                title: "Transform financial decision-making",
                description:
                  "Leverage AI for risk assessment, fraud detection, and market analysis. Our platform helps financial institutions make data-driven decisions and provide personalized services to their customers.",
                buttonText: "Explore Financial Solutions",
                imageSrc:
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
                imageAlt: "Financial Analytics Platform",
              },
            },
            {
              value: "tab-3",
              icon: <Layout className="h-auto w-4 shrink-0" />,
              label: "Healthcare",
              content: {
                badge: "Healthcare Analytics",
                title: "Revolutionize patient care with data",
                description:
                  "Improve patient outcomes through predictive analytics, optimize resource allocation, and streamline operations. Our platform helps healthcare providers deliver better care while reducing costs.",
                buttonText: "Discover Healthcare Solutions",
                imageSrc:
                  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
                imageAlt: "Healthcare Analytics Dashboard",
              },
            },
          ]}
        />
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="relative py-16 sm:py-24 md:py-32 bg-muted/40">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-secondary/5 via-secondary/[0.02] to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
        </div>
        <TestimonialsSection
          title="Loved by teams worldwide"
          description="See what our customers have to say about our platform."
          testimonials={[
            {
              author: {
                name: "John Doe",
                handle: "@johndoe",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
              },
              text: "DataAI has transformed how we approach our go-to-market strategy. The insights we've gained have directly contributed to our revenue growth.",
              href: "https://twitter.com/johndoe"
            },
            {
              author: {
                name: "Jane Smith",
                handle: "@janesmith",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
              },
              text: "The AI-powered features have saved us countless hours in data analysis. It's like having a team of data scientists at our fingertips.",
              href: "https://twitter.com/janesmith"
            },
            {
              author: {
                name: "Alex Johnson",
                handle: "@alexj",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
              },
              text: "The automation workflows have streamlined our processes and eliminated repetitive tasks. Our team can now focus on strategic initiatives.",
              href: "https://twitter.com/alexj"
            },
          ]}
        />
      </section>

      {/* CTA Section */}
      <section className="relative border-t bg-muted/40 py-12 sm:py-16 md:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary/5 to-transparent" />
        </div>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent px-4">
              Ready to transform your business?
            </h2>
            <p className="max-w-[500px] text-base sm:text-lg md:text-xl text-muted-foreground">
              Join thousands of companies using DataAI to drive growth and make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-6 w-full sm:w-auto">
              <Button size="lg" className="gap-2 w-full sm:w-auto text-sm md:text-base h-11 md:h-12 px-6 md:px-8 bg-gradient-to-r from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:via-primary/80 hover:to-primary/70 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" onClick={handleGetStarted}>
                Start building for free <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto text-sm md:text-base h-11 md:h-12 px-6 md:px-8 border-2 hover:bg-muted/50 transition-all duration-300" onClick={handleBookDemo}>
                Book a demo <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={resourcesRef} className="relative border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/[0.03] to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-secondary/[0.03] to-transparent" />
        </div>
        <div className="container px-4 md:px-6 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur-lg opacity-25" />
                  <img
                    src="https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon-32x32.png"
                    alt="DataAI Logo"
                    width={32}
                    height={32}
                    className="relative rounded-lg shadow-2xl"
                  />
                </div>
                <span className="inline-block font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">DataAI</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[320px]">
                Transform your business with unique data insights and AI-powered automation. Make better decisions, faster.
              </p>
              <div className="flex gap-4">
                <a href="#" className="rounded-full bg-muted/60 p-2 hover:bg-muted transition-colors hover:text-primary">
                  <svg className="h-4 w-4 md:h-5 md:w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="rounded-full bg-muted/60 p-2 hover:bg-muted transition-colors hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="rounded-full bg-muted/60 p-2 hover:bg-muted transition-colors hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs md:text-sm font-semibold tracking-wider uppercase bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">Product</h3>
              <ul className="space-y-2 md:space-y-3">
                {["Features", "Solutions", "Integrations", "Enterprise", "Security"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs md:text-sm font-semibold tracking-wider uppercase bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">Company</h3>
              <ul className="space-y-2 md:space-y-3">
                {["About", "Blog", "Careers", "Press", "Partners"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs md:text-sm font-semibold tracking-wider uppercase bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">Resources</h3>
              <ul className="space-y-2 md:space-y-3">
                {["Documentation", "Help Center", "Support", "API", "Status"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              © {new Date().getFullYear()} DataAI. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-8">
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home


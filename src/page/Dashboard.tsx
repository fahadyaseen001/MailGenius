import type React from "react"
import { useState, useRef, useEffect, lazy, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Upload,
  Mail,
  FileSpreadsheet,
  CheckCircle,
  AlertCircle,
  Loader2,
  Send,
  ArrowRight,
  FileCheck,
  Sun,
  Moon,
  HelpCircle,
  ChevronRight,
  BarChart3,
  Users,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  User,
  LogOut,
  ChevronDown,
  ChevronLeft,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

// Lazy load Confetti for better performance
const Confetti = lazy(() => import("react-confetti"))

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Sample data for dashboard metrics
const metrics = [
  { label: "Open Rate", value: "42%", change: "+5%", isPositive: true },
  { label: "Click Rate", value: "12.8%", change: "+2.3%", isPositive: true },
  { label: "Conversion", value: "3.6%", change: "-0.5%", isPositive: false },
  { label: "Campaigns", value: "24", change: "+3", isPositive: true },
]

// Sample data for recent campaigns
const recentCampaigns = [
  { name: "Product Launch", date: "May 15", status: "Completed", emails: 1250, openRate: "38%" },
  { name: "Weekly Newsletter", date: "May 10", status: "Completed", emails: 980, openRate: "42%" },
  { name: "Customer Feedback", date: "May 5", status: "Completed", emails: 540, openRate: "51%" },
]

function Dashboard() {
  const [step, setStep] = useState(1)
  const [userEmail, setUserEmail] = useState("")
  const [, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState("")
  const [googleSheetLink, setGoogleSheetLink] = useState("")
  const [, setEmailsSent] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode for the startup vibe
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })
  const [showTooltip, setShowTooltip] = useState("")
  const [totalEmailsSent, setTotalEmailsSent] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // Auto-close sidebar on small screens
      if (window.innerWidth < 1024) {
        setSidebarOpen(false)
      } else {
        setSidebarOpen(true)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Set dark mode by default for the startup vibe
    document.documentElement.classList.add("dark")

    return () => window.removeEventListener("resize", handleResize)
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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      validateAndSetFile(droppedFile)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0]
      validateAndSetFile(selectedFile)
    }
  }

  const validateAndSetFile = (selectedFile: File) => {
    setIsUploading(true)
    setError("")

    const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase()
    if (fileExtension !== "csv" && fileExtension !== "xlsx") {
      setError("Please upload a .csv or .xlsx file")
      setIsUploading(false)
      return
    }

    setTimeout(() => {
      const isValid = Math.random() > 0.2

      if (isValid) {
        setFile(selectedFile)
        setFileName(selectedFile.name)
        setStep(2)
      } else {
        setError('Please include an "Email" column in your file')
      }
      setIsUploading(false)
    }, 1500)
  }

  const handleGenerateContent = () => {
    setIsGenerating(true)
    setError("")

    setTimeout(() => {
      if (Math.random() > 0.1) {
        setGoogleSheetLink("https://docs.google.com/spreadsheets/d/example")
        setStep(3)
      } else {
        setError("Failed to generate email content. Please try again.")
      }
      setIsGenerating(false)
    }, 3000)
  }

  const handleSendEmails = () => {
    setIsSending(true)
    setError("")

    setTimeout(() => {
      if (Math.random() > 0.1) {
        const randomEmailCount = Math.floor(Math.random() * 500) + 100
        setTotalEmailsSent(randomEmailCount)
        setEmailsSent(true)
        setStep(4)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000)
      } else {
        setError("Something went wrong! Please check your file or try again.")
      }
      setIsSending(false)
    }, 3000)
  }

  const getMailboxLink = () => {
    if (userEmail.includes("gmail")) {
      return "https://mail.google.com/mail/"
    } else if (userEmail.includes("outlook") || userEmail.includes("hotmail")) {
      return "https://outlook.live.com/mail/"
    } else {
      return "https://mail.google.com/mail/"
    }
  }

  const resetForm = () => {
    setStep(1)
    setFile(null)
    setFileName("")
    setGoogleSheetLink("")
    setEmailsSent(false)
    setError("")
  }


  const handleLogoClick = () => {
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white transition-colors duration-300">
      {/* Confetti effect on success */}
      {showConfetti && (
        <Suspense fallback={null}>
          <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={300} />
        </Suspense>
      )}

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-gray-900 shadow-xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
                <div className="flex items-center">
                  <button
                    onClick={handleLogoClick}
                    className="flex items-center group p-1.5 rounded-lg transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95"
                  >
                    <Mail className="h-6 w-6 text-indigo-400 group-hover:scale-110 transition-transform duration-200" />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="ml-2 text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200"
                    >
                      MailGenius
                    </motion.span>
                  </button>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-gray-400 hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-6">
                <nav className="flex flex-col space-y-6">
                  <a href="#" className="flex items-center text-sm font-medium text-indigo-400">
                    <BarChart3 className="h-5 w-5 mr-3" />
                    Dashboard
                  </a>
                  <a href="#" className="flex items-center text-sm font-medium text-gray-300 hover:text-indigo-400">
                    <Mail className="h-5 w-5 mr-3" />
                    Campaigns
                  </a>
                  <a href="#" className="flex items-center text-sm font-medium text-gray-300 hover:text-indigo-400">
                    <Users className="h-5 w-5 mr-3" />
                    Contacts
                  </a>
                  <a href="#" className="flex items-center text-sm font-medium text-gray-300 hover:text-indigo-400">
                    <Settings className="h-5 w-5 mr-3" />
                    Settings
                  </a>
                </nav>
              </div>
              <div className="border-t border-gray-800 p-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Alex Johnson</p>
                    <p className="text-xs text-gray-400">alex@example.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main layout */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar - desktop */}
        <motion.aside
          className="hidden lg:flex flex-col w-64 border-r border-gray-800 bg-gray-900 transition-all duration-300 ease-in-out"
          animate={{ width: sidebarOpen ? 256 : 80 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center h-16 px-4 border-b border-gray-800">
            <div className="flex items-center">
              <button
                onClick={handleLogoClick}
                className="flex items-center group p-1.5 rounded-lg transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-95"
              >
                <Mail className="h-6 w-6 text-indigo-400 group-hover:scale-110 transition-transform duration-200" />
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-2 text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors duration-200"
                  >
                    MailGenius
                  </motion.span>
                )}
              </button>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-2">
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-indigo-900/30 text-indigo-400"
                >
                  <BarChart3 className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="ml-3">Dashboard</span>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="ml-3">Campaigns</span>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                >
                  <Users className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="ml-3">Contacts</span>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800"
                >
                  <Settings className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="ml-3">Settings</span>}
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-800">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700"
            >
              {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </div>
        </motion.aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-gray-800 bg-gray-900">
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-400 hover:bg-gray-800"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-end">
              <div className="hidden sm:flex items-center rounded-md bg-gray-800 px-3 py-1.5 mr-4">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 bg-transparent border-none focus:outline-none text-sm text-gray-300 w-40 lg:w-60"
                />
              </div>

              <div className="flex items-center space-x-4">
                <button onClick={toggleDarkMode} className="p-1.5 rounded-md text-gray-400 hover:bg-gray-800">
                  {darkMode ? <Sun className="h-5 w-5 text-gray-400" /> : <Moon className="h-5 w-5 text-gray-500" />}
                </button>

                <button className="p-1.5 rounded-md text-gray-400 hover:bg-gray-800 relative">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-indigo-500"></span>
                </button>

                <div className="relative">
                  <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-indigo-900 flex items-center justify-center text-indigo-300">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="hidden md:flex items-center">
                      <span className="text-sm font-medium text-gray-300">Alex Johnson</span>
                      <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 ring-1 ring-black ring-opacity-5 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                            Your Profile
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                            Settings
                          </a>
                          <a href="/" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800">
                            <div className="flex items-center">
                              <LogOut className="h-4 w-4 mr-2"
                              />
                              Sign out
                            </div>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </header>

          {/* Main content area */}
          <main className="flex-1 overflow-y-auto bg-gray-950 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              {/* Page header */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-white">Email Campaign</h1>
                <p className="mt-1 text-sm text-gray-400">
                  Create and send personalized email campaigns to your contacts.
                </p>
              </div>

              {/* Dashboard metrics */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-5 backdrop-blur-sm"
                    variants={fadeInUp}
                    whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-400">{metric.label}</p>
                        <p className="mt-1 text-2xl font-semibold text-white">{metric.value}</p>
                      </div>
                      <div
                        className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          metric.isPositive ? "bg-green-900/30 text-green-400" : "bg-red-900/30 text-red-400"
                        }`}
                      >
                        {metric.change}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="bg-gray-900 rounded-xl shadow-md border border-gray-800 overflow-hidden mb-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="border-b border-gray-800 px-6 py-4">
                  <h2 className="text-lg font-medium text-white">Create New Campaign</h2>
                </div>

                {/* Stepper */}
                <div className="px-6 py-6 border-b border-gray-800">
                  <div className="w-full overflow-x-auto pb-2">
                    <div className="flex w-full min-w-max items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400"} transition-colors duration-300`}
                        >
                          {step > 1 ? <CheckCircle className="h-5 w-5" /> : "1"}
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <h3 className="text-sm font-medium text-center text-white">Upload</h3>
                          <p className="text-xs text-gray-400 text-center">Upload contact list</p>
                        </div>
                      </div>

                      <div
                        className={`flex-1 h-[2px] mx-4 ${step > 1 ? "bg-indigo-600" : "bg-gray-800"} transition-colors duration-300`}
                      />

                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400"} transition-colors duration-300`}
                        >
                          {step > 2 ? <CheckCircle className="h-5 w-5" /> : "2"}
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <h3 className="text-sm font-medium text-center text-white">Generate</h3>
                          <p className="text-xs text-gray-400 text-center">Create email content</p>
                        </div>
                      </div>

                      <div
                        className={`flex-1 h-[2px] mx-4 ${step > 2 ? "bg-indigo-600" : "bg-gray-800"} transition-colors duration-300`}
                      />

                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400"} transition-colors duration-300`}
                        >
                          {step > 3 ? <CheckCircle className="h-5 w-5" /> : "3"}
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <h3 className="text-sm font-medium text-center text-white">Send</h3>
                          <p className="text-xs text-gray-400 text-center">Review and send emails</p>
                        </div>
                      </div>

                      <div
                        className={`flex-1 h-[2px] mx-4 ${step > 3 ? "bg-indigo-600" : "bg-gray-800"} transition-colors duration-300`}
                      />

                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 4 ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400"} transition-colors duration-300`}
                        >
                          {step > 4 ? <CheckCircle className="h-5 w-5" /> : "4"}
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <h3 className="text-sm font-medium text-center text-white">Done</h3>
                          <p className="text-xs text-gray-400 text-center">Campaign completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        key="step1"
                      >
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Your email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={userEmail}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white placeholder-gray-400 transition-all duration-200"
                            required
                          />
                        </div>

                        <div>
                          <div className="flex items-center mb-1">
                            <p className="block text-sm font-medium text-gray-300">Upload your contact list</p>
                            <div
                              className="ml-2 text-gray-400 cursor-pointer relative"
                              onMouseEnter={() => setShowTooltip("fileHelp")}
                              onMouseLeave={() => setShowTooltip("")}
                            >
                              <HelpCircle className="w-4 h-4" />

                              <AnimatePresence>
                                {showTooltip === "fileHelp" && (
                                  <motion.div
                                    className="absolute left-6 top-0 w-64 p-2 bg-gray-900 rounded-lg shadow-xl text-xs text-white z-20"
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -5 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <div className="absolute top-2 -left-1 transform rotate-45 w-2 h-2 bg-gray-900"></div>
                                    Your file should include columns for: Email (required), Name, Company, and any other
                                    personalization fields.
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>

                          <div
                            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
                              isDragging
                                ? "border-indigo-500 bg-indigo-900/20"
                                : "border-gray-700 hover:border-indigo-500 hover:bg-indigo-900/10"
                            }`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              accept=".csv,.xlsx"
                              className="hidden"
                            />
                            <motion.div
                              animate={{
                                y: [0, -5, 0],
                              }}
                              transition={{
                                repeat: Number.POSITIVE_INFINITY,
                                duration: 2,
                                repeatType: "reverse",
                              }}
                            >
                              <Upload className="mx-auto h-10 w-10 text-indigo-400 mb-3" />
                            </motion.div>
                            <p className="text-sm text-gray-300">
                              <span className="font-semibold text-indigo-400">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400 mt-1">CSV or XLSX files only</p>
                          </div>
                        </div>

                        {isUploading && (
                          <div className="flex items-center justify-center space-x-2 text-indigo-400">
                            <Loader2 className="animate-spin h-5 w-5" />
                            <span>Validating file...</span>
                          </div>
                        )}
                        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        key="step2"
                      >
                        <div className="flex items-center p-4 bg-green-900/20 rounded-lg border border-green-900/30">
                          <FileCheck className="h-6 w-6 text-green-400 mr-3" />
                          <div>
                            <p className="font-medium text-white">{fileName}</p>
                            <p className="text-sm text-gray-400">Ready to generate email content</p>
                          </div>
                        </div>

                        <button
                          onClick={handleGenerateContent}
                          disabled={isGenerating}
                          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isGenerating ? (
                            <>
                              <Loader2 className="animate-spin h-5 w-5 mr-2" />
                              <span>Generating AI-powered email content...</span>
                            </>
                          ) : (
                            <>
                              <FileSpreadsheet className="h-5 w-5 mr-2" />
                              <span>Generate Email Content</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={resetForm}
                          className="w-full text-gray-400 hover:text-gray-300 text-sm font-medium py-2"
                        >
                          Start over
                        </button>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        key="step3"
                      >
                        <div className="p-4 bg-indigo-900/20 rounded-lg border border-indigo-900/30">
                          <p className="text-white mb-2">Your AI-generated email content is ready to send.</p>
                          <a
                            href={googleSheetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
                          >
                            <FileSpreadsheet className="h-5 w-5 mr-2" />
                            <span>View in Google Sheets</span>
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </a>
                        </div>

                        {/* Email preview */}
                        <div className="p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-sm">
                          <h3 className="text-sm font-medium text-gray-300 mb-2">Email Preview:</h3>
                          <div className="p-4 bg-gray-900 rounded-lg border border-gray-700 text-sm">
                            <p className="text-white mb-2">
                              <strong>Subject:</strong> Special Offer for [Name]
                            </p>
                            <p className="text-gray-300">Hello [Name],</p>
                            <p className="text-gray-300 my-2">
                              We noticed you've been interested in our [Product] and wanted to offer you a special
                              discount...
                            </p>
                            <p className="text-gray-300">
                              Best regards,
                              <br />
                              Your Company
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={handleSendEmails}
                          disabled={isSending}
                          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSending ? (
                            <>
                              <Loader2 className="animate-spin h-5 w-5 mr-2" />
                              <span>Sending emails to your contacts...</span>
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              <span>Send Emails</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={resetForm}
                          className="w-full text-gray-400 hover:text-gray-300 text-sm font-medium py-2"
                        >
                          Start over
                        </button>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        className="space-y-6 text-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        key="step4"
                      >
                        <div className="flex flex-col items-center">
                          <div className="rounded-full bg-green-900/30 p-3 mb-4">
                            <CheckCircle className="h-8 w-8 text-green-400" />
                          </div>
                          <h2 className="text-xl font-bold text-white">Success!</h2>
                          <p className="text-gray-400 mt-1">Emails have been successfully sent!</p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                          <h3 className="font-medium text-white text-lg mb-3">Campaign Summary</h3>
                          <div className="flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-3xl font-bold text-indigo-400">{totalEmailsSent}</p>
                              <p className="text-sm text-gray-400">Emails Sent</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <a
                            href={getMailboxLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
                          >
                            <Mail className="h-5 w-5 mr-2" />
                            <span>Check your mailbox</span>
                          </a>
                        </div>

                        <button
                          onClick={resetForm}
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
                        >
                          Start a new campaign
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Error Message */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        className="mt-4 p-3 bg-red-900/20 text-red-400 rounded-lg flex items-start border border-red-900/30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{error}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Recent campaigns */}
              <motion.div
                className="bg-gray-900 rounded-xl shadow-md border border-gray-800 overflow-hidden backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center">
                  <h2 className="text-lg font-medium text-white">Recent Campaigns</h2>
                  <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">View all</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-800">
                    <thead className="bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                          Campaign
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                          Emails
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                        >
                          Open Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-800">
                      {recentCampaigns.map((campaign, index) => (
                        <tr key={index} className="hover:bg-gray-800/50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-white">{campaign.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-400">{campaign.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400">
                              {campaign.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{campaign.emails}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{campaign.openRate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard


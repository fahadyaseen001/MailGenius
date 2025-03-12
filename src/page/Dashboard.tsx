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
  HelpCircle,
  ChevronRight,
  BarChart3,
  Users,
  Settings,
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


    return () => {
      window.removeEventListener("resize", handleResize)
      
    }
  }, [])




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
    <div className="min-h-screen bg-white text-gray-800 transition-colors duration-300">
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
              className="fixed inset-0 bg-gray-800/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col bg-white shadow-xl border-r border-gray-200"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="flex items-center">
                  <button
                    onClick={handleLogoClick}
                    className="flex items-center group p-1.5 rounded-lg transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
                  >
                    <Mail className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="ml-2 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200"
                    >
                      MailGenius
                    </motion.span>
                  </button>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-6">
                <nav className="flex flex-col space-y-6">
                  <a href="#" className="flex items-center text-sm font-medium text-blue-600">
                    <BarChart3 className="h-5 w-5 mr-3" />
                    Dashboard
                  </a>
                  <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                    <Mail className="h-5 w-5 mr-3" />
                    Campaigns
                  </a>
                  <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                    <Users className="h-5 w-5 mr-3" />
                    Contacts
                  </a>
                  <a href="#" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600">
                    <Settings className="h-5 w-5 mr-3" />
                    Settings
                  </a>
                </nav>
              </div>
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">Alex Johnson</p>
                    <p className="text-xs text-gray-500">alex@example.com</p>
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
          className="hidden lg:flex flex-col w-64 border-r border-gray-200 bg-white transition-all duration-300 ease-in-out"
          animate={{ width: sidebarOpen ? 256 : 80 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <div className="flex items-center">
              <button
                onClick={handleLogoClick}
                className="flex items-center group p-1.5 rounded-lg transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 active:scale-95"
              >
                <Mail className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="ml-2 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200"
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
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-blue-50 text-blue-600"
                >
                  <BarChart3 className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="ml-3">Dashboard</span>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="ml-3">Campaigns</span>}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  <Users className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="ml-3">Leads</span>}
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200"
            >
              {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </div>
        </motion.aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-gray-200 bg-white shadow-sm">
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-end">
              <div className="hidden sm:flex items-center rounded-md bg-gray-100 px-3 py-1.5 mr-4">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 bg-transparent border-none focus:outline-none text-sm text-gray-600 w-40 lg:w-60"
                />
              </div>

              <div className="flex items-center space-x-4">

                <div className="relative">
                  <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="hidden md:flex items-center">
                      <span className="text-sm font-medium text-gray-700">Alex Johnson</span>
                      <ChevronDown className="h-4 w-4 ml-1 text-gray-500" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-200 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <div className="py-1">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Your Profile
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Settings
                          </a>
                          <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
          <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              {/* Page header */}
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Email Campaign</h1>
                <p className="mt-1 text-sm text-gray-500">
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
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-5"
                    variants={fadeInUp}
                    whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-500">{metric.label}</p>
                        <p className="mt-1 text-2xl font-semibold text-gray-900">{metric.value}</p>
                      </div>
                      <div
                        className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          metric.isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}
                      >
                        {metric.change}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="border-b border-gray-200 px-6 py-4">
                  <h2 className="text-lg font-medium text-gray-900">Create New Campaign</h2>
                </div>

                {/* Stepper */}
                <div className="px-6 py-6 border-b border-gray-200">
                  <div className="w-full overflow-x-auto pb-2">
                    <div className="flex w-full min-w-max items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"} transition-colors duration-300`}
                        >
                          {step > 1 ? <CheckCircle className="h-5 w-5" /> : "1"}
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <h3 className="text-sm font-medium text-center text-gray-900">Upload</h3>
                          <p className="text-xs text-gray-500 text-center">Upload contact list</p>
                        </div>
                      </div>

                      <div
                        className={`flex-1 h-[2px] mx-4 ${step > 1 ? "bg-blue-600" : "bg-gray-200"} transition-colors duration-300`}
                      />

                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"} transition-colors duration-300`}
                        >
                          {step > 2 ? <CheckCircle className="h-5 w-5" /> : "2"}
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <h3 className="text-sm font-medium text-center text-gray-900">Generate</h3>
                          <p className="text-xs text-gray-500 text-center">Create email content</p>
                        </div>
                      </div>

                      <div
                        className={`flex-1 h-[2px] mx-4 ${step > 2 ? "bg-blue-600" : "bg-gray-200"} transition-colors duration-300`}
                      />

                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"} transition-colors duration-300`}
                        >
                          {step > 3 ? <CheckCircle className="h-5 w-5" /> : "3"}
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <h3 className="text-sm font-medium text-center text-gray-900">Send</h3>
                          <p className="text-xs text-gray-500 text-center">Review and send emails</p>
                        </div>
                      </div>

                      <div
                        className={`flex-1 h-[2px] mx-4 ${step > 3 ? "bg-blue-600" : "bg-gray-200"} transition-colors duration-300`}
                      />

                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 4 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"} transition-colors duration-300`}
                        >
                          {step > 4 ? <CheckCircle className="h-5 w-5" /> : "4"}
                        </div>
                        <div className="mt-2 flex flex-col items-center">
                          <h3 className="text-sm font-medium text-center text-gray-900">Done</h3>
                          <p className="text-xs text-gray-500 text-center">Campaign completed</p>
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
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Your email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={userEmail}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 transition-all duration-200"
                            required
                          />
                        </div>

                        <div>
                          <div className="flex items-center mb-1">
                            <p className="block text-sm font-medium text-gray-700">Upload your contact list</p>
                            <div
                              className="ml-2 text-gray-500 cursor-pointer relative"
                              onMouseEnter={() => setShowTooltip("fileHelp")}
                              onMouseLeave={() => setShowTooltip("")}
                            >
                              <HelpCircle className="w-4 h-4" />

                              <AnimatePresence>
                                {showTooltip === "fileHelp" && (
                                  <motion.div
                                    className="absolute left-6 top-0 w-64 p-2 bg-white rounded-lg shadow-lg text-xs text-gray-700 z-20 border border-gray-200"
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -5 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <div className="absolute top-2 -left-1 transform rotate-45 w-2 h-2 bg-white"></div>
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
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300 hover:border-blue-500 hover:bg-blue-50"
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
                              <Upload className="mx-auto h-10 w-10 text-blue-600 mb-3" />
                            </motion.div>
                            <p className="text-sm text-gray-600">
                              <span className="font-semibold text-blue-600">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 mt-1">CSV or XLSX files only</p>
                          </div>
                        </div>

                        {isUploading && (
                          <div className="flex items-center justify-center space-x-2 text-blue-600">
                            <Loader2 className="animate-spin h-5 w-5" />
                            <span>Validating file...</span>
                          </div>
                        )}
                        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
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
                        <div className="flex items-center p-4 bg-green-50 rounded-lg border border-green-200">
                          <FileCheck className="h-6 w-6 text-green-600 mr-3" />
                          <div>
                            <p className="font-medium text-gray-900">{fileName}</p>
                            <p className="text-sm text-gray-500">Ready to generate email content</p>
                          </div>
                        </div>

                        <button
                          onClick={handleGenerateContent}
                          disabled={isGenerating}
                          className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
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
                          className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium py-2"
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
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-gray-900 mb-2">Your AI-generated email content is ready to send.</p>
                          <a
                            href={googleSheetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <FileSpreadsheet className="h-5 w-5 mr-2" />
                            <span>View in Google Sheets</span>
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </a>
                        </div>

                        {/* Email preview */}
                        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 shadow-sm">
                          <h3 className="text-sm font-medium text-gray-700 mb-2">Email Preview:</h3>
                          <div className="p-4 bg-white rounded-lg border border-gray-300 text-sm">
                            <p className="text-gray-900 mb-2">
                              <strong>Subject:</strong> Special Offer for [Name]
                            </p>
                            <p className="text-gray-700">Hello [Name],</p>
                            <p className="text-gray-700 my-2">
                              We noticed you've been interested in our [Product] and wanted to offer you a special
                              discount...
                            </p>
                            <p className="text-gray-700">
                              Best regards,
                              <br />
                              Your Company
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={handleSendEmails}
                          disabled={isSending}
                          className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
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
                          className="w-full text-gray-500 hover:text-gray-700 text-sm font-medium py-2"
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
                          <div className="rounded-full bg-green-100 p-3 mb-4">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                          <h2 className="text-xl font-bold text-gray-900">Success!</h2>
                          <p className="text-gray-500 mt-1">Emails have been successfully sent!</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                          <h3 className="font-medium text-gray-900 text-lg mb-3">Campaign Summary</h3>
                          <div className="flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-3xl font-bold text-blue-600">{totalEmailsSent}</p>
                              <p className="text-sm text-gray-500">Emails Sent</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <a
                            href={getMailboxLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <Mail className="h-5 w-5 mr-2" />
                            <span>Check your mailbox</span>
                          </a>
                        </div>

                        <button
                          onClick={resetForm}
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
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
                        className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg flex items-start border border-red-200"
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
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Recent Campaigns</h2>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">View all</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Campaign
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Emails
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Open Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentCampaigns.map((campaign, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{campaign.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{campaign.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-600">
                              {campaign.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.emails}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.openRate}</td>
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


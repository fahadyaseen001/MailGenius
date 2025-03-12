import { ArrowLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

export default function ResetLinkSentPage() {
  const location = useLocation()
  const [isResending, setIsResending] = useState(false)
  const [backgroundState, setBackgroundState] = useState(0)
  
  // Get email from location state, or use default for demo
  const userEmail = location.state?.email || "fahadyaseen102@gmail.com"

  // Background animation effect
  useEffect(() => {
    const backgroundInterval = setInterval(() => {
      setBackgroundState(prevState => (prevState + 1) % 2)
    }, 3000)
    
    return () => clearInterval(backgroundInterval)
  }, [])

  // Determine background gradient class based on state
  const getBackgroundClass = () => {
    return backgroundState === 0
      ? "bg-gradient-to-r from-blue-300 to-indigo-500"
      : "bg-gradient-to-r from-blue-500 to-indigo-300"
  }

  const handleResendLink = () => {
    setIsResending(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsResending(false)
    }, 1500)
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center p-4 transition-colors duration-4000 ease-in-out ${getBackgroundClass()}`}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 text-white p-2 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5H5V19H19V5Z" fill="currentColor" />
                  <path d="M12 8H15V16H12V8Z" fill="white" />
                </svg>
              </div>
              <span className="text-2xl font-bold ml-2">lemlist</span>
            </div>
            <h1 className="text-2xl font-semibold text-center text-gray-800">Welcome back!</h1>
          </div>
        </div>

        <a 
          href="/login" 
          className="flex items-center text-gray-600 hover:text-[#4169e1] mb-8 border-b border-gray-200 pb-3"
        >
          <ArrowLeft size={16} className="mr-1" />
          <span>Back to login</span>
        </a>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Check your inbox!</h2>
            <p className="text-gray-600 mb-1">Your reset link has been sent to:</p>
            <p className="text-gray-800 font-medium mb-6">{userEmail}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a 
              href={`https://mail.google.com/mail/u/0/#search/${userEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-md p-3 hover:bg-gray-50 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g transform="scale(0.5)">
                  <path d="M45 16.2l-5 2.75-5 4.75V40h35V19.7l-5-4.75-5-2.75L45 16.2z" fill="#4285f4"/>
                  <path d="M30 16.25l-5 2.75 20 11 5-2.75-20-11z" fill="#34a853"/>
                  <path d="M45 16.2V31l10 5.25V19.7l-5-2.73-5-.77z" fill="#fbbc05"/>
                  <path d="M30 23.7V40h10V23.7L30 16.2l-5 2.75 5 4.75z" fill="#ea4335"/>
                </g>
              </svg>
              <span className="font-medium">Gmail</span>
              <ExternalLink size={16} />
            </a>
            
            <a 
              href="https://outlook.live.com/mail/0/inbox"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-gray-200 rounded-md p-3 hover:bg-gray-50 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.492 8.17v8.124s-5.29 1.902-5.327 1.934c-.013-.004-5.323-1.934-5.323-1.934V8.17l5.326 1.702L22.492 8.17z" fill="#0364B8"/>
                <path d="M10.114 6.262H2.232v12.244h7.882V6.262z" fill="#0078D4"/>
                <path d="M10.115 6.262H2.236c0 2.94 1.9 5.444 4.585 6.386l3.294-3.94V6.262z" fill="#EB3C00"/>
                <path d="M2.233 6.262c0 4.362 3.548 7.91 7.883 7.91V6.262H2.233z" fill="#28A8EA"/>
              </svg>
              <span className="font-medium">Outlook</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600 mb-2">Didn't receive the email?</p>
            <Button 
              variant="link"
              className="text-gray-600 hover:text-[#4169e1] font-medium"
              onClick={handleResendLink}
              disabled={isResending}
            >
              {isResending ? "Resending..." : "Resend password link"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 
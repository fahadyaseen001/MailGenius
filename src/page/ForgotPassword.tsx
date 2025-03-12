import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Form validation effect
  useEffect(() => {
    setIsEmailValid(validateEmail(email))
  }, [email])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isEmailValid) return

    setIsSubmitting(true)
    
    // In a real app, you would make an API call here
    // This is just a simulation
    setTimeout(() => {
      // Pass the email as a state/param to the next page
      navigate("/reset-password", { state: { email } })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-blue-300 to-indigo-500 p-4">
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 pb-2">Forgot your password?</h2>
            <p className="text-gray-600 mb-4">No worries, we'll send you reset instructions</p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@company.com"
              className={`w-full h-12 px-3 border rounded-md ${
                email && !isEmailValid ? "border-red-500" : "border-gray-200"
              }`}
            />
            {email && !isEmailValid && (
              <p className="mt-1 text-sm text-red-500">Please enter a valid email address</p>
            )}
          </div>

          <div style={{ cursor: isEmailValid ? 'pointer' : 'not-allowed' }}>
            <Button 
              type="submit"
              disabled={!isEmailValid || isSubmitting}
              className={`w-full h-12 border rounded-md ${
                isEmailValid 
                  ? "bg-white text-[#4169e1] hover:bg-gray-100 border-gray-300" 
                  : "bg-gray-100 text-gray-400 border-gray-200"
              }`}
            >
              {isSubmitting ? "Sending..." : "Receive reset link"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 
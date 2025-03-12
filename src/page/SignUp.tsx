import { useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [isAnimating, setIsAnimating] = useState(true)
  const [backgroundState, setBackgroundState] = useState(0)
  
  // Password validation states
  const [hasUppercase, setHasUppercase] = useState(false)
  const [hasLowercase, setHasLowercase] = useState(false)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasSymbol, setHasSymbol] = useState(false)
  const [hasMinLength, setHasMinLength] = useState(false)

  // Validate password as user types
  useEffect(() => {
    setHasUppercase(/[A-Z]/.test(password))
    setHasLowercase(/[a-z]/.test(password))
    setHasNumber(/[0-9]/.test(password))
    setHasSymbol(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password))
    setHasMinLength(password.length >= 8)
  }, [password])

  // Combined animation effects - only runs once on component mount
  useEffect(() => {
    // Initial component animation
    setIsAnimating(true)
    const animTimer = setTimeout(() => setIsAnimating(false), 200)
    
    // Background gradient animation
    const backgroundInterval = setInterval(() => {
      setBackgroundState(prevState => (prevState + 1) % 2)
    }, 3000)
    
    // Clean up both timers when component unmounts
    return () => {
      clearTimeout(animTimer)
      clearInterval(backgroundInterval)
    }
  }, []) // Empty dependency array means this only runs once on mount

  // Determine background gradient class based on state
  const getBackgroundClass = () => {
    return backgroundState === 0
      ? "bg-gradient-to-r from-blue-300 to-indigo-500"
      : "bg-gradient-to-r from-blue-500 to-indigo-300"
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center p-4 transition-colors duration-4000 ease-in-out ${getBackgroundClass()}`}>
      <div 
        className={`w-full max-w-md bg-white rounded-lg shadow-md p-8 transition-all duration-500 ease-out ${
          isAnimating ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <div className="bg-blue-500 text-white p-2 rounded">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5H5V19H19V5Z" fill="currentColor" />
                <path d="M12 8H15V16H12V8Z" fill="white" />
              </svg>
            </div>
            <span className="text-2xl font-bold ml-2">lemlist</span>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Try for free</h1>

        <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 h-12 border border-gray-200 hover:bg-gray-100 rounded-md"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Sign up with Google
            </Button>
            
       
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-200 flex-grow"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="border-t border-gray-200 flex-grow"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First name
              </label>
              <Input
                id="firstName"
                type="text"
                placeholder="Your first name"
                className="w-full h-12 px-3 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                placeholder="Your last name"
                className="w-full h-12 px-3 border border-gray-200 rounded-md"
              />
            </div>
          </div>

          <div>
            <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Work email
            </label>
            <Input
              id="workEmail"
              type="email"
              placeholder="Work email"
              className="w-full h-12 px-3 border border-gray-200 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full h-12 pr-10 border border-gray-200 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-1 flex items-center justify-center border ${hasUppercase ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                  {hasUppercase && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-xs text-gray-600">Uppercase</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-1 flex items-center justify-center border ${hasLowercase ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                  {hasLowercase && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-xs text-gray-600">Lowercase</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-1 flex items-center justify-center border ${hasNumber ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                  {hasNumber && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-xs text-gray-600">Number</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-1 flex items-center justify-center border ${hasSymbol ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                  {hasSymbol && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-xs text-gray-600">Symbol</span>
              </div>
              
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-1 flex items-center justify-center border ${hasMinLength ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                  {hasMinLength && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="text-xs text-gray-600">Min. 8 char.</span>
              </div>
            </div>
          </div>

          <Button className="w-full h-12 bg-white hover:bg-gray-100 text-[#4169e1] border border-gray-300 rounded-md">
            Create account
          </Button>

          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-gray-800 hover:text-[#4169e1] font-medium underline">
              Log in
            </a>
          </div>
          
          <div className="text-center text-xs text-gray-500 mt-2">
            By continuing you agree to the <a href="/terms" className="underline">Terms of use</a> and <a href="/privacy" className="underline">Privacy policy</a>.
          </div>
        </div>
      </div>
    </div>
  )
} 
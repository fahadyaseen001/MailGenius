import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { companyMenuContent, productMenuContent, solutionMenuContent, resourcesMenuContent } from "@/data"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileSubmenuStates, setMobileSubmenuStates] = useState<Record<string, boolean>>({})
  const navigate = useNavigate()

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])


  const handleGetStarted = () => {
    navigate("/dashboard")
  }


  const getMenuContentByName = (name: string) => {
    switch (name.toLowerCase()) {
      case "product":
        return productMenuContent
      case "solution":
        return solutionMenuContent
      case "resources":
        return resourcesMenuContent
      case "company":
        return companyMenuContent
      default:
        return null
    }
  }

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 max-w-[1920px] 2xl:px-8 3xl:max-w-[2400px] 3xl:px-12 4xl:max-w-[3000px] 4xl:px-16">
        {/* Logo - Left Side */}
        <div className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon-32x32.png"
            alt="DataAI Logo"
            width={20}
            height={20}
            className="rounded-lg shadow-lg 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12"
          />
        </div>

        {/* Navigation - Middle */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8 2xl:space-x-10 3xl:space-x-12 absolute left-1/2 transform -translate-x-1/2">
          {[
            { name: "Product", hasSubmenu: true },
            { name: "Solution", hasSubmenu: true },
            { name: "Resources", hasSubmenu: true },
            { name: "Company", hasSubmenu: true },
            { name: "Enterprise", hasSubmenu: false, hasUnderline: true },
            { name: "Pricing", hasSubmenu: false, hasUnderline: true },
          ].map((item) => (
            <div key={item.name} className="relative group">
              <div className="relative group">
                <button
                  className="text-sm font-medium text-black flex items-center"
                  onClick={() => {
                    const unclickableItems = ["Product", "Solution", "Resources", "Company"];
                    if (item.hasSubmenu && !unclickableItems.includes(item.name)) {
                      setActiveMenu(activeMenu === item.name ? null : item.name)
                    }
                  }}
                  aria-expanded={activeMenu === item.name}
                  aria-haspopup={item.hasSubmenu ? "true" : "false"}
                >
                  {item.hasSubmenu ? (
                    <>
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 
                          ${activeMenu === item.name ? "rotate-180" : "group-hover:rotate-180"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  ) : item.hasUnderline ? (
                    <span className="relative">
                      {item.name}
                      <div
                        className="absolute bottom-0 left-0 w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                        style={{ height: "0.5px" }}
                      ></div>
                    </span>
                  ) : (
                    item.name
                  )}
                </button>
              </div>

              {item.hasSubmenu && (
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 mt-5 w-screen max-w-5xl px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out z-50 ${activeMenu === item.name ? "opacity-100 visible" : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"}`}
                >
                  <div className="overflow-hidden rounded-xl shadow-2xl ring-1 ring-black/5 border border-gray-200">
                    {getMenuContentByName(item.name)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side - CTA Buttons */}
        <div className="flex items-center space-x-2">
          {/* Mobile Sign Up Button - Visible only on mobile */}
          <button className="lg:hidden text-sm font-medium bg-black text-white px-3 py-2 rounded-md hover:bg-gray-900 transition-all duration-300">
            Sign up
          </button>
          
          {/* Mobile Menu Hamburger Button - Moved to far right */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop CTA Buttons - Hidden on mobile */}
          <div className="relative group hidden lg:block">
            <button className="inline-flex text-sm font-medium text-black mr-4" onClick={handleGetStarted}>
              <span className="relative">
                Get a demo
                <div
                  className="absolute bottom-0 left-0 w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{ height: "0.5px" }}
                ></div>
              </span>
            </button>
          </div>

          <div className="hidden lg:block h-6 w-px bg-gray-300 mx-2"></div>

          <div className="relative group hidden lg:block">
            <button className="inline-flex text-sm font-medium text-black ml-4">
              <span className="relative">
                Login
                <div
                  className="absolute bottom-0 left-0 w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{ height: "0.5px" }}
                ></div>
              </span>
            </button>
          </div>

          <button className="hidden lg:inline-flex ml-4 lg:ml-6 text-sm font-medium bg-black text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-md hover:bg-gray-900 transition-all duration-300 group items-center justify-center overflow-hidden">
            Sign up
            <span className="relative overflow-hidden ml-2 inline-block h-4 w-4">
              <svg
                className="absolute transform transition-all duration-300 group-hover:translate-y-[-100%]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="16"
                height="16"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <svg
                className="absolute transform translate-y-[100%] transition-all duration-300 group-hover:translate-y-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width="16"
                height="16"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen with scroll prevention */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-white z-40"
            style={{ height: 'calc(100vh - 64px)', maxHeight: 'calc(100vh - 64px)' }}
          >
            <div className="absolute inset-0 overflow-y-auto">
              <div className="container mx-auto px-4 py-6 space-y-4">
                {[
                  { name: "Product", hasSubmenu: true },
                  { name: "Solution", hasSubmenu: true },
                  { name: "Resources", hasSubmenu: true },
                  { name: "Company", hasSubmenu: true },
                  { name: "Enterprise", hasSubmenu: false, hasUnderline: true },
                  { name: "Pricing", hasSubmenu: false, hasUnderline: true },
                ].map((item) => (
                  <div key={item.name} className="relative">
                    <div className="relative w-full">
                      <button
                        className="w-full justify-between text-sm font-medium text-black flex items-center py-2 group"
                        onClick={(e) => {
                          e.preventDefault();
                          if (item.hasSubmenu) {
                            toggleMobileSubmenu(item.name)
                          }
                        }}
                        aria-expanded={mobileSubmenuStates[item.name]}
                        aria-controls={`mobile-submenu-${item.name}`}
                      >
                        {item.hasSubmenu ? (
                          <>
                            {item.name}
                            <svg
                              className={`ml-1 h-4 w-4 transition-transform duration-200 
                                ${mobileSubmenuStates[item.name] ? "rotate-180" : "group-hover:rotate-180"}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </>
                        ) : item.hasUnderline ? (
                          <span className="relative">
                            {item.name}
                            <div
                              className="absolute bottom-0 left-0 w-full bg-black scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                              style={{ height: "0.5px" }}
                            ></div>
                          </span>
                        ) : (
                          item.name
                        )}
                      </button>
                    </div>

                    {/* Mobile Submenu (collapsed by default) */}
                    {item.hasSubmenu && (
                      <AnimatePresence>
                        {mobileSubmenuStates[item.name] && (
                          <motion.div
                            id={`mobile-submenu-${item.name}`}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 pl-4 border-l-2 border-gray-100"
                          >
                            {/* Render mini version of menu content */}
                            <div className="mobile-menu-content py-2">
                              {/* We'll create a simplified version of the content for mobile */}
                              {item.name === "Product" && (
                                <div className="space-y-4">
                                  <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">RECURRING WORKFLOWS</p>
                                    <div className="space-y-3">
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">🧩</span>
                                        <p className="text-sm font-medium text-gray-900">CRM enrichment & hygiene</p>
                                      </a>
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">🎯</span>
                                        <p className="text-sm font-medium text-gray-900">Account & lead scoring</p>
                                      </a>
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">✈️</span>
                                        <p className="text-sm font-medium text-gray-900">Automated inbound</p>
                                      </a>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">FEATURES</p>
                                    <div className="space-y-3">
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">🔄</span>
                                        <p className="text-sm font-medium text-gray-900">Integrations</p>
                                      </a>
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">🔍</span>
                                        <p className="text-sm font-medium text-gray-900">
                                          Multi-provider data enrichment
                                        </p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {item.name === "Solution" && (
                                <div className="space-y-4">
                                  <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">BY TEAM</p>
                                    <div className="space-y-3">
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">📊</span>
                                        <p className="text-sm font-medium text-gray-900">RevOps</p>
                                      </a>
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">💼</span>
                                        <p className="text-sm font-medium text-gray-900">Sales</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {item.name === "Resources" && (
                                <div className="space-y-4">
                                  <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">LEARNING CENTER</p>
                                    <div className="space-y-3">
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">🏛️</span>
                                        <p className="text-sm font-medium text-gray-900">University</p>
                                      </a>
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">⭐</span>
                                        <p className="text-sm font-medium text-gray-900">Experts</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {item.name === "Company" && (
                                <div className="space-y-4">
                                  <div>
                                    <p className="text-xs font-medium text-gray-500 mb-2">OUR COMPANY</p>
                                    <div className="space-y-3">
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">🎁</span>
                                        <p className="text-sm font-medium text-gray-900">Careers</p>
                                      </a>
                                      <a href="#" className="flex items-center py-1">
                                        <span className="flex-shrink-0 h-5 w-5 text-center mr-2">❄️</span>
                                        <p className="text-sm font-medium text-gray-900">About</p>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
                
                {/* Login link added underneath Pricing */}
                <div className="relative py-2">
                  <button className="w-full justify-between text-sm font-medium text-black flex items-center">
                    <span className="relative">Login</span>
                  </button>
                </div>
                
                <hr className="border-t border-gray-200 my-4" />
                
                {/* New CTA Buttons: "Start building - for free" and "Get a demo" */}
                <div className="grid grid-cols-2 gap-3 mt-4 mb-6">
                  <button className="w-full py-3 px-4 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-900 transition-colors duration-200">
                    Start building - for free
                  </button>
                  <button 
                    onClick={handleGetStarted}
                    className="w-full py-3 px-4 text-sm font-medium text-center text-black bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    Get a demo
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header


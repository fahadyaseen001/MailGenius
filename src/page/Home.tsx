import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { TestimonialsSection } from "../components/testimonials-with-marquee"
import { Marquee } from "@/components/ui/marquee"
import { Feature108 } from "@/components/shadcnblocks-com-feature108"
import { FeatureSteps } from "@/components/feature-section"
import Header from "../components/Header"




const Logos = {
  canva: () => (
    <svg className="h-8" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.7128 12.2581C19.7128 16.0968 16.6073 19.2258 12.7934 19.2258C8.97941 19.2258 5.87395 16.0968 5.87395 12.2581C5.87395 8.41935 8.97941 5.29032 12.7934 5.29032C16.6073 5.29032 19.7128 8.41935 19.7128 12.2581Z"
        fill="#7D2AE7"
      />
      <path
        d="M32.6486 12.2581C32.6486 16.0968 29.5432 19.2258 25.7293 19.2258C21.9153 19.2258 18.8099 16.0968 18.8099 12.2581C18.8099 8.41935 21.9153 5.29032 25.7293 5.29032C29.5432 5.29032 32.6486 8.41935 32.6486 12.2581Z"
        fill="#FF7262"
      />
      <path
        d="M26.1806 12.2581C26.1806 16.0968 23.0752 19.2258 19.2612 19.2258C15.4473 19.2258 12.3418 16.0968 12.3418 12.2581C12.3418 8.41935 15.4473 5.29032 19.2612 5.29032C23.0752 5.29032 26.1806 8.41935 26.1806 12.2581Z"
        fill="#00C4CC"
      />
      <path
        d="M42.954 5.80645H46.0595V18.7097H42.954V5.80645ZM53.2704 5.80645V18.7097H57.5356L57.5582 8.90323L61.5669 18.7097H63.7695L67.7783 8.92742V18.7097H72.0435V5.80645H66.5715L63.6791 13.2581L60.7867 5.80645H53.2704ZM75.1489 5.80645H78.2544V18.7097H75.1489V5.80645Z"
        fill="currentColor"
      />
    </svg>
  ),
  hubspot: () => (
    <svg className="h-6" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.4444 0C20.0556 0 16.6667 3.33333 16.6667 7.77778V13.3333H13.3333V7.77778C13.3333 3.33333 9.94444 0 5.55556 0C1.16667 0 0 3.33333 0 7.77778V22.2222C0 26.6667 3.33333 30 7.77778 30C12.2222 30 15.5556 26.6667 15.5556 22.2222V16.6667H18.8889V22.2222C18.8889 26.6667 22.2222 30 26.6667 30C31.1111 30 34.4444 26.6667 34.4444 22.2222V7.77778C34.4444 3.33333 31.1111 0 26.6667 0H24.4444ZM24.4444 3.33333H26.6667C29.4444 3.33333 31.1111 5 31.1111 7.77778V22.2222C31.1111 25 29.4444 26.6667 26.6667 26.6667C23.8889 26.6667 22.2222 25 22.2222 22.2222V16.6667H12.2222V22.2222C12.2222 25 10.5556 26.6667 7.77778 26.6667C5 26.6667 3.33333 25 3.33333 22.2222V7.77778C3.33333 5 5 3.33333 7.77778 3.33333C10.5556 3.33333 12.2222 5 12.2222 7.77778V13.3333H22.2222V7.77778C22.2222 5 23.8889 3.33333 26.6667 3.33333H24.4444Z"
        fill="#FF7A59"
      />
      <path
        d="M44.4444 23.3333V10H47.7778V11.6667C48.8889 10.5556 50.5556 9.44444 52.7778 9.44444C56.1111 9.44444 58.3333 11.6667 58.3333 15.5556V23.3333H55V16.1111C55 13.8889 53.8889 12.2222 51.6667 12.2222C49.4444 12.2222 47.7778 13.8889 47.7778 16.1111V23.3333H44.4444Z"
        fill="currentColor"
      />
      <path
        d="M61.6667 16.6667C61.6667 12.2222 65 9.44444 69.4444 9.44444C73.8889 9.44444 77.2222 12.2222 77.2222 16.6667C77.2222 21.1111 73.8889 23.8889 69.4444 23.8889C65 23.8889 61.6667 21.1111 61.6667 16.6667ZM73.8889 16.6667C73.8889 13.8889 71.6667 12.2222 69.4444 12.2222C67.2222 12.2222 65 13.8889 65 16.6667C65 19.4444 67.2222 21.1111 69.4444 21.1111C71.6667 21.1111 73.8889 19.4444 73.8889 16.6667Z"
        fill="currentColor"
      />
      <path d="M80 6.11111H83.3333V23.3333H80V6.11111Z" fill="currentColor" />
      <path
        d="M86.1111 16.6667C86.1111 12.2222 89.4444 9.44444 93.8889 9.44444C97.7778 9.44444 100.556 11.6667 101.111 15.5556H97.7778C97.2222 13.3333 95.5556 12.2222 93.8889 12.2222C91.6667 12.2222 89.4444 13.8889 89.4444 16.6667C89.4444 19.4444 91.6667 21.1111 93.8889 21.1111C95.5556 21.1111 97.2222 20 97.7778 17.7778H101.111C100.556 21.6667 97.7778 23.8889 93.8889 23.8889C89.4444 23.8889 86.1111 21.1111 86.1111 16.6667Z"
        fill="currentColor"
      />
    </svg>
  ),
  openai: () => (
    <svg className="h-6" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2222 0H27.7778L22.2222 20H16.6667L22.2222 0Z" fill="currentColor" />
      <path d="M33.3333 0H38.8889L33.3333 20H27.7778L33.3333 0Z" fill="currentColor" />
      <path d="M44.4444 0H50L44.4444 20H38.8889L44.4444 0Z" fill="currentColor" />
      <path d="M55.5556 0H61.1111L55.5556 20H50L55.5556 0Z" fill="currentColor" />
      <path d="M66.6667 0H72.2222L66.6667 20H61.1111L66.6667 0Z" fill="currentColor" />
      <path d="M77.7778 0H83.3333L77.7778 20H72.2222L77.7778 0Z" fill="currentColor" />
    </svg>
  ),
  square: () => (
    <svg className="h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="30" rx="5" fill="#3E4348" />
      <path
        d="M40 7.5H45L50 22.5H45L44.1667 20H40.8333L40 22.5H35L40 7.5ZM43.3333 16.6667L42.5 13.3333L41.6667 16.6667H43.3333Z"
        fill="currentColor"
      />
      <path
        d="M52.5 7.5H57.5V17.5C57.5 18.3333 57.9167 18.75 58.75 18.75C59.5833 18.75 60 18.3333 60 17.5V7.5H65V17.5C65 20.8333 62.9167 22.9167 59.5833 22.9167C56.25 22.9167 52.5 20.8333 52.5 17.5V7.5Z"
        fill="currentColor"
      />
      <path
        d="M67.5 7.5H80.8333V11.6667H72.5V13.3333H80V17.5H72.5V18.3333H80.8333V22.5H67.5V7.5Z"
        fill="currentColor"
      />
      <path d="M82.5 7.5H87.5V22.5H82.5V7.5Z" fill="currentColor" />
      <path d="M90 7.5H95L97.5 17.5L100 7.5H105L100.833 22.5H94.1667L90 7.5Z" fill="currentColor" />
    </svg>
  ),
}

function Home() {
  const navigate = useNavigate()
  const [] = useState(false)
  const featuresRef = useRef<HTMLDivElement>(null)
  const useCasesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  const featureStepsData = [
    {
      step: "Step 1",
      title: "Connect Your Data Sources",
      content:
        "Easily integrate with 100+ data sources including CRMs, analytics platforms, and databases. Our platform automatically syncs and normalizes your data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 2",
      title: "Activate AI Analysis",
      content:
        "Our AI engine automatically analyzes your data to uncover patterns, trends, and actionable insights that drive business growth.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 3",
      title: "Automate & Scale",
      content:
        "Set up automated workflows and real-time monitoring to continuously optimize your operations and scale your business intelligence.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  const handleGetStarted = () => {
    navigate("/dashboard")
  }

  const handleBookDemo = () => {
    navigate("/wishlist")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-0 pb-20 md:pb-28 lg:pb-32 bg-white">
        <div className="container mx-auto px-4 max-w-7xl relative">
          {/* Left side decorative flowers */}
          <div className="absolute left-0 bottom-0 z-0 hidden md:block">
            <img 
              src="/images/@image.png" 
              alt="Decorative element" 
              className="w-60 h-auto" 
              style={{ transform: "translateY(-20%) translateX(-45%)" }}
            />
          </div>

          {/* Right side decorative flowers */}
          <div className="absolute right-0 top-0 z-0 hidden md:block">
            <img 
              src="/images/mailclosed.png" 
              alt="Decorative element" 
              className="w-80 h-auto" 
              style={{ transform: "translateY(-20%) translateX(15%)" }}
            />
          </div>

          {/* Main Content Card */}
          <div
            className="bg-[#f9f9f7] rounded-2xl p-10 md:p-14 lg:p-20 max-w-[85rem] mx-auto"
            style={{ marginTop: "-1px" }}
          >
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="font-[600] text-black leading-[74px] text-[74px] tracking-tight mb-6"
                style={{
                  fontFamily: "Roobert, sans-serif",
                  fontWeight: 600,
                  fontSize: "74px",
                  lineHeight: "74px",
                }}
              >
                Go to market with unique
                <br />
                <span className="inline-block">—and the ability to act on it</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
                Access 100+ premium data sources and AI research agents in one platform, then automate growth workflows
                to turn insights into revenue.
              </p>

              <button
                onClick={handleGetStarted}
                className="text-sm font-medium bg-black text-white px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-md hover:bg-gray-900 transition-all duration-300 group items-center justify-center overflow-hidden shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}
              >
                Start building for free
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
            </motion.div>
          </div>

          {/* Trust Indicators - Outside the card */}
          <motion.div
            className="mt-15 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="uppercase text-xs font-medium tracking-wider text-black mb-3" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
              TRUSTED BY MORE THAN 300,000 LEADING GTM TEAMS OF ALL SIZES
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-400">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div className="flex ml-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-400">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>4.9 rating</span>
              </div>
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-400">
                  <path
                    d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="9"
                    cy="7"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="ml-2 text-gray-600" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>20k+ growth community</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="inline-flex items-center justify-center space-x-2 rounded-full bg-gray-100 px-5 py-2.5">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-blueberry-500">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M15 9.94L11.646 13.294L10.354 14.586L9.062 13.294L7 11.232"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-base font-medium tracking-wide text-gray-800" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>TRUSTED BY LEADING GTM TEAMS</span>
            </div>

            <Marquee className="py-8" pauseOnHover speed={25}>
              {[Logos.canva, Logos.hubspot, Logos.openai, Logos.square].map((Logo, index) => (
                <div
                  key={index}
                  className="mx-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200"
                >
                  <Logo />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Feature Steps Section */}
      <section ref={featuresRef} className="py-24 md:py-32 bg-gray-50">
        <FeatureSteps
          features={featureStepsData}
          title="Get Started in Three Simple Steps"
          autoPlayInterval={4000}
          className="[&_h3]:text-3xl [&_h3]:font-bold [&_h3]:tracking-tight [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-gray-600"
        />
      </section>

      {/* Use Cases Section */}
      <section ref={useCasesRef} className="py-24 md:py-32 bg-white">
        <Feature108
          badge="Real-World Applications"
          heading="Transforming industries with data-driven insights"
          description="See how different industries leverage our platform to drive innovation and achieve measurable results."
          tabs={[
            {
              value: "tab-1",
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
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
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              label: "Financial Services",
              content: {
                badge: "FinTech Solutions",
                title: "Transform financial decision-making",
                description:
                  "Leverage AI for risk assessment, fraud detection, and market analysis. Our platform helps financial institutions make data-driven decisions and provide personalized services to their customers.",
                buttonText: "Explore Financial Solutions",
                imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
                imageAlt: "Financial Analytics Platform",
              },
            },
            {
              value: "tab-3",
              icon: (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              ),
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
      <section ref={testimonialsRef} className="py-24 md:py-32 bg-gray-50">
        <TestimonialsSection
          title="Loved by teams worldwide"
          description="See what our customers have to say about our platform."
          testimonials={[
            {
              author: {
                name: "John Doe",
                handle: "@johndoe",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
              },
              text: "DataAI has transformed how we approach our go-to-market strategy. The insights we've gained have directly contributed to our revenue growth.",
              href: "https://twitter.com/johndoe",
            },
            {
              author: {
                name: "Jane Smith",
                handle: "@janesmith",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
              },
              text: "The AI-powered features have saved us countless hours in data analysis. It's like having a team of data scientists at our fingertips.",
              href: "https://twitter.com/janesmith",
            },
            {
              author: {
                name: "Alex Johnson",
                handle: "@alexj",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
              },
              text: "The automation workflows have streamlined our processes and eliminated repetitive tasks. Our team can now focus on strategic initiatives.",
              href: "https://twitter.com/alexj",
            },
          ]}
        />
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-4xl" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
              Ready to transform your business?
            </h2>
            <p className="max-w-2xl text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
              Join thousands of companies using DataAI to drive growth and make better decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 pt-8">
              <Button
                className="text-lg px-8 py-4 rounded-full bg-blueberry-500 text-white hover:bg-blueberry-600 transition-colors shadow-lg"
                onClick={handleGetStarted}
                style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}
              >
                Start building for free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={handleBookDemo}
                style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}
              >
                Book a demo <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={resourcesRef} className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img
                  src="https://raw.githubusercontent.com/shadcn-ui/ui/main/apps/www/public/favicon-32x32.png"
                  alt="DataAI Logo"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-xl font-bold" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>DataAI</span>
              </div>
              <p className="text-gray-400 max-w-xs" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
                Transform your business with unique data insights and AI-powered automation. Make better decisions,
                faster.
              </p>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {["Product", "Company", "Resources"].map((category) => (
              <div key={category} className="space-y-4">
                <h3 className="text-lg font-semibold" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>{category}</h3>
                <ul className="space-y-2">
                  {["Features", "Solutions", "Integrations", "Enterprise", "Security"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>© {new Date().getFullYear()} DataAI. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontFamily: "Roobert, sans-serif", fontWeight: 600, }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

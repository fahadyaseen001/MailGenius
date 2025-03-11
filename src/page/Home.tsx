import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Feature108 } from "@/components/shadcnblocks-com-feature108"
import Header from "../components/Header"
import HeroSection from '../components/hero-section'
import PortfolioSlider from "../components/ui/feature-card"
import TestimonialSection from "../components/testimonial-section"
import CTASection from "../components/cta-section"
import Footer from "../components/Footer"

function Home() {
  const navigate = useNavigate()
  const [] = useState(false)
  const useCasesRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  
  const handleGetStarted = () => {
    navigate("/dashboard")
  }

  const handleBookDemo = () => {
    navigate("/contact")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header/Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection handleGetStarted={handleGetStarted} />

      <section>
        <PortfolioSlider/>
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

      {/* Testimonials Section with Curved Top */}
      <TestimonialSection testimonialsRef={testimonialsRef} />

      {/* CTA Section */}
      <CTASection 
        handleGetStarted={handleGetStarted} 
        handleBookDemo={handleBookDemo} 
      />

      {/* Footer */}
      <Footer resourcesRef={resourcesRef} />
    </div>
  )
}

export default Home
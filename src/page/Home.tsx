import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { TestimonialsSection } from "../components/testimonials-with-marquee"
import { Feature108 } from "@/components/shadcnblocks-com-feature108"
import { FeatureSteps } from "@/components/feature-section"
import Header from "../components/Header"
import HeroSection from '../components/hero-section'
import RestSection from '../components/rest-section'

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
      title: "High Bounce Rates",
      content:
        "Reduce them to <1% with AI-powered email validation and DNS management.",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop",
    },
    {
      step: "Step 2",
      title: "Spam Folders",
      content:
        "Ensure 100% mailbox delivery with automated warm-ups and domain health optimization",
      image: "https://images.unsplash.com/photo-1720288954220-bba3be2d1d6e?q=80&w=1933&auto=format&fit"

    },
    {
      step: "Step 3",
      title: "Generic Outreach",
      content:
        "Personalize emails using job changes, company milestones, and LinkedIn activity.",
      image: "https://images.unsplash.com/photo-1675352162037-792ae4045e3c?q=80&w=1932&auto=format&fit=crop"
    },
    {
      step: "Step 4",
      title: "Fragmented Tools",
      content:
        "Replace 10+ apps with one platform: data extraction, enrichment, sending, and analytics",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop",
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
      <HeroSection handleGetStarted={handleGetStarted} />

      <RestSection handleGetStarted={handleGetStarted} />


      {/* Feature Steps Section */}
      <section ref={featuresRef} className="py-20 md:py-22">
        <FeatureSteps
          features={featureStepsData}
          title="Core Problems We Solve"
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

import { cn } from "@/utils"
import { TestimonialCard, TestimonialCardProps } from "@/components/ui/testimonial-card"
import { Marquee } from "@/components/ui/marquee"

interface TestimonialsSectionProps {
  title?: string
  description?: string
  testimonials?: Array<Omit<TestimonialCardProps, 'className'>>
  className?: string
}

// Example testimonials that match the images exactly
const defaultTestimonials = [
  {
    author: {
      name: "Lachlan Fea",
      position: "Co-Founder",
      company: "Cloutly",
      avatar: "/images/person1.png"
    },
    text: "If you're serious about cold email and personalization, lemlist answers all of your burning questions.",
    stats: [
      { value: "+40%", label: "Reply Rates", color: "#ffa0a0" },
      { value: "30+", label: "Meetings Booked", color: "#d7b7ff" },
      { value: "$20K", label: "Revenue Generated", color: "#d8ff80" }
    ],
    backgroundColor: "#ffffff"
  },
];

export function TestimonialsSection({ 
  testimonials = defaultTestimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "py-16 sm:py-24 overflow-hidden w-full",
      className
    )}>
      <div className="w-full overflow-hidden">
        <Marquee 
          pauseOnHover 
          speed={160} 
          className="py-4"
          direction="left"
        >
          {testimonials.map((testimonial, i) => (
            <div key={i} className="px-4">
              <div className="w-[520px] h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <TestimonialCard {...testimonial} className="h-full" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
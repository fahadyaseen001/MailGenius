import { cn } from "@/utils"

export interface TestimonialAuthor {
  name: string;
  position: string;
  company: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author?: TestimonialAuthor;
  text?: string;
  stats?: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  backgroundColor?: string;
  href?: string;
  className?: string;
}

export const TestimonialCard = ({
  author = {
    name: "Gabriel Frasconi",
    position: "Vice President",
    company: "Zendesk",
    avatar:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-11%20064535-5RTwxGRS2XEbUSdiEodeohm1AyvC4o.png",
  },
  text = "We had massive success using lemlist. When you work with a good company, and they help you become more successful, I can just highly recommend them.",
  stats = [
    { value: "+40%", label: "Reply Rates", color: "#fca5a5" }, // rose-400 equivalent
    { value: "200+", label: "Meetings Booked", color: "#c084fc" }, // purple-400 equivalent
    { value: "$750K", label: "Revenue Generated", color: "#a3e635" }, // lime-400 equivalent
  ],
  backgroundColor = "",
  href,
  className,
}: TestimonialCardProps) => {
  const Card = href ? "a" : "div"

  return (
    <div className={cn("max-w-2xl mx-auto", className)}>
      <Card
        {...(href ? { href } : {})}
        className="rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] h-full flex flex-col"
        style={{ backgroundColor }}
      >
        <div className="grid grid-cols-5 min-h-[160px]">
          {/* Testimonial Content - 3 columns */}
          <div className="col-span-3 p-4 flex flex-col justify-between">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{author.name}</h3>
                <div className="max-w-[95%] overflow-hidden">
                  <p className="text-gray-600 text-base break-words overflow-wrap-normal whitespace-normal">{text}</p>
                </div>
              </div>
              <div className="mt-auto pt-2">
                <p className="text-gray-400 text-xs">
                  {author.position} at <span className="font-bold">{author.company}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Image Section - 2 columns */}
          <div className="col-span-2 bg-gray-300 flex items-center justify-center overflow-hidden">
            {author.avatar && (
              <img 
                src={author.avatar} 
                alt={`${author.name}'s profile`}
                className="w-full h-full object-cover object-center"
              />
            )}
          </div>
        </div>

        {/* Separator Line */}
        <div className="border-b border-gray-200" />

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-1 p-2">
          {stats.map((stat, index) => (
            <div key={index} className="flex rounded-md overflow-hidden h-7">
              <div className="py-1 px-1.5 flex items-center justify-center" style={{ backgroundColor: stat.color }}>
                <span className="text-sm font-bold text-gray-800">{stat.value}</span>
              </div>
              <div
                className="py-1 px-1.5 flex items-center flex-grow"
                style={{ backgroundColor: `${stat.color}30` }} // 30% opacity version of the color
              >
                <span className="text-gray-700 text-xs whitespace-nowrap">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}



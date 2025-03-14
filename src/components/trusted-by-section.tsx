import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";

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
  

const TrustedBySection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      className="py-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <Marquee className="py-8" speed={200}>
            {[Logos.canva, Logos.hubspot, Logos.openai, Logos.square].map((Logo, index) => (
              <motion.div
                key={index}
                className="mx-12 flex items-center justify-center transition-opacity duration-200"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Logo />
              </motion.div>
            ))}
          </Marquee>
        </div>
      </div>
    </motion.section>
  );
};

export default TrustedBySection; 

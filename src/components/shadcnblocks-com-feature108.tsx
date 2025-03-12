import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Feature108 = ({
  badge = "shadcnblocks.com",
  heading = "A Collection of Components Built With Shadcn & Tailwind",
  description = "Join us to build flawless web solutions.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Boost Revenue",
      content: {
        badge: "Modern Tactics",
        title: "Make your site a true standout.",
        description:
          "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
        buttonText: "See Plans",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Higher Engagement",
      content: {
        badge: "Expert Features",
        title: "Boost your site with top-tier design.",
        description:
          "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
        buttonText: "See Tools",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "placeholder",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Stunning Layouts",
      content: {
        badge: "Elite Solutions",
        title: "Build an advanced web experience.",
        description:
          "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
        buttonText: "See Options",
        imageSrc:
          "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "placeholder",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col items-center gap-4 text-center"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeIn}>
            <Badge variant="outline" className="text-[#3B82F6] border-[#3B82F6]">{badge}</Badge>
          </motion.div>
          <motion.h1 
            className="max-w-2xl text-3xl font-semibold md:text-4xl text-gray-800"
            variants={fadeIn}
          >
            {heading}
          </motion.h1>
          <motion.p 
            className="text-gray-600"
            variants={fadeIn}
          >
            {description}
          </motion.p>
        </motion.div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-white">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.value}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <TabsTrigger
                    value={tab.value}
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-gray-600 data-[state=active]:bg-[#3B82F6]/10 data-[state=active]:text-[#3B82F6]"
                  >
                    {tab.icon} {tab.label}
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>
          <motion.div 
            className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-white shadow-lg p-6 lg:p-16"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
          >
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <motion.div 
                  className="flex flex-col gap-5"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Badge variant="outline" className="w-fit bg-white text-[#3B82F6] border-[#3B82F6]">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-semibold lg:text-5xl text-gray-800">
                    {tab.content.title}
                  </h3>
                  <p className="text-gray-600 lg:text-lg">
                    {tab.content.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="mt-2.5 w-fit gap-2 bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.img
                  src={tab.content.imageSrc}
                  alt={tab.content.imageAlt}
                  className="rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </TabsContent>
            ))}
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };

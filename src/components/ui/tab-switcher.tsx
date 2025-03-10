"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TabsComponentProps {
  onTabChange: (tab: string) => void;
  defaultTab?: string;
}

export default function TabsComponent({ onTabChange, defaultTab }: TabsComponentProps) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Tabs 
        defaultValue={defaultTab} 
        onValueChange={(value) => onTabChange(value)}
        className="w-full"
      >
        <TabsList className="w-full h-auto bg-[#f8f6f0] p-2 rounded-lg">
          <TabsTrigger
            value="tab1"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm font-medium text-black"
          >
            High Bounce Rates
          </TabsTrigger>
          <TabsTrigger
            value="tab2"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm font-medium text-black"
          >
            Spam Folders 
          </TabsTrigger>
          <TabsTrigger
            value="tab3"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm font-medium text-black "
          >
            Generic Outreach
          </TabsTrigger>
          <TabsTrigger
            value="tab4"
            className="px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm font-medium text-black"
          >
           Fragmented Tools 
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}


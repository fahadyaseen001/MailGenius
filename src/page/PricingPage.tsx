import { Check, Clock, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

// Types
type BillingPeriod = "monthly" | "quarterly" | "yearly"
type Currency = {
  code: string
  symbol: string
  flag: string
}

// Plan feature type
type PlanFeature = {
  text: string
  subtext?: string
  isComingSoon?: boolean
}

// Plan data type
type PricingPlan = {
  name: string
  basePrice: number
  description: string
  features: PlanFeature[]
  buttonText: string
  monthlyEmails: string
  additionalEmailText: string
  highlighted?: boolean
  customPrice?: boolean
  yearlyOnly?: boolean
  minSeats?: number
}

// Animation variants - simplified for sequential animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

// Pricing Card Component
function PricingCard({ 
  plan, 
  billingPeriod, 
  currency,
  index
}: { 
  plan: PricingPlan, 
  billingPeriod: BillingPeriod,
  currency: Currency,
  index: number
}) {
  // Calculate price based on billing period
  const getDiscount = () => {
    switch (billingPeriod) {
      case "quarterly": return 0.1; // 10% discount
      case "yearly": return 0.2; // 20% discount
      default: return 0;
    }
  }
  
  const discount = getDiscount();
  const discountedPrice = plan.basePrice * (1 - discount);
  
  // Don't show discount badge for monthly billing
  const showDiscountBadge = billingPeriod !== "monthly" && !plan.customPrice;
  
  return (
    <motion.div 
      className={`border ${plan.highlighted ? "border-2 border-blue-500" : ""} rounded-lg ${plan.highlighted ? "bg-black text-white" : "bg-[#f9f9f7]"} ${plan.highlighted ? "relative" : ""}`}
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{ delay: 1.2 + (index * 0.2) }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      {plan.highlighted && (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-2 rounded-t-md font-medium">
          USER'S TOP CHOICE
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold">{plan.name}</h3>
        <div className="flex items-baseline mt-2">
          {plan.customPrice ? (
            <div>
              <span className="text-2xl font-bold">Custom price</span>
              {plan.yearlyOnly && (
                <span className="ml-2 bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                  YEARLY ONLY
                </span>
              )}
            </div>
          ) : (
            <>
              <div className="flex items-baseline">
                <span className={`text-lg font-bold ${plan.highlighted ? "text-[#4169e1]" : "text-[#4169e1]"}`}>
                  {currency.symbol}
                </span>
                <span className={`text-3xl font-bold ${plan.highlighted ? "text-[#4169e1]" : "text-[#4169e1]"}`}>
                  {Math.round(discountedPrice)}
                </span>
                <span className={`${plan.highlighted ? "text-gray-400" : "text-gray-600"} ml-1`}>/ MO</span>
              </div>
              {showDiscountBadge && (
                <span className={`ml-auto ${plan.highlighted ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-700"} px-2 py-1 rounded-md text-xs font-medium`}>
                  {billingPeriod === "quarterly" ? "-10%" : "-20%"}
                </span>
              )}
            </>
          )}
        </div>

        <div className={`mt-4 text-sm ${plan.highlighted ? "text-gray-300" : "text-gray-600"} font-medium`}>
          {plan.monthlyEmails}
          <div className={`${plan.highlighted ? "text-gray-400" : "text-gray-500"} font-normal`}>
            {plan.additionalEmailText}
          </div>
        </div>

        <Button 
          className={`w-full mt-4 ${plan.highlighted 
            ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-blue-700" 
            : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:bg-gray-100"}`}
        >
          {plan.buttonText}
        </Button>

        <div className="mt-6">
          <p className={`font-medium ${plan.highlighted ? "text-gray-200" : "text-gray-800"} mb-4`}>
            {plan.description}
            {plan.minSeats && <span className="text-gray-500"> ({plan.minSeats} seats min.)</span>}
          </p>

          <div className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex gap-3">
                <div className={`flex-shrink-0 w-5 h-5 ${plan.highlighted ? "bg-blue-900/50" : "bg-gray-100"} rounded-full flex items-center justify-center`}>
                  {feature.isComingSoon ? (
                    <Clock className={`w-3.5 h-3.5 ${plan.highlighted ? "text-blue-400" : "text-gray-500"}`} />
                  ) : (
                    <Check className={`w-3.5 h-3.5 ${plan.highlighted ? "text-blue-400" : "text-gray-500"}`} />
                  )}
                </div>
                {feature.subtext ? (
                  <div>
                    <p className={`${plan.highlighted ? "text-gray-300" : "text-gray-700"}`}>{feature.text}</p>
                    <p className={`${plan.highlighted ? "text-gray-400" : "text-gray-500"} text-sm`}>{feature.subtext}</p>
                  </div>
                ) : (
                  <p className={`${plan.highlighted ? "text-gray-300" : "text-gray-700"}`}>{feature.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly")
  const [currency, setCurrency] = useState<Currency>({
    code: "USD",
    symbol: "$",
    flag: "https://flagcdn.com/w80/us.png"
  })
  const navigate = useNavigate()
  
  // Plan data
  const pricingPlans: PricingPlan[] = [
    {
      name: "Email Pro",
      basePrice: 399,
      description: "For growing teams",
      monthlyEmails: "3 SENDING EMAILS / USER",
      additionalEmailText: "Additional sending email for $9 / mo / email",
      buttonText: "Start a 14-day free trial",
      features: [
        {
          text: "Free 200 emails or 50 phone nbs/mo",
          subtext: "Unlimited with paid credits"
        },
        { text: "450M+ leads database" },
        {
          text: "Unlimited LinkedIn leads export",
          subtext: "lemlist Chrome extension"
        },
        { text: "Unlimited campaigns, emails, & follow-ups" },
        {
          text: "Personalization at scale",
          subtext: "Text variables, Custom images, Liquid syntax"
        },
        {
          text: "CRM integration",
          subtext: "Hubspot, Salesforce, Pipedrive"
        },
        { text: "Emails warm-up & deliverability boost" },
        { text: "Live lead monitoring & custom reports" }
      ]
    },
    {
      name: "Multichannel Expert",
      basePrice: 899,
      description: "For scaling businesses",
      monthlyEmails: "5 SENDING EMAILS / USER",
      additionalEmailText: "Additional sending email for $9 / mo / email",
      buttonText: "Start a 14-day free trial",
      highlighted: true,
      features: [
        { text: "Everything in the Email Pro" },
        {
          text: "Free 300 emails or 75 phone nbs/mo",
          subtext: "Unlimited with paid credits"
        },
        {
          text: "Automated LinkedIn actions",
          subtext: "Visits, invites, messages"
        },
        { text: "Conditioned sequence steps" },
        {
          text: "Call steps",
          subtext: "VoIP integrations (Aircall, Ringover)"
        },
        { text: "Centralized multichannel inbox" },
        { text: "Intents & Signals targeting" },
        { text: "Custom landing pages" },
        { text: "Campaign templates" },
        {
          text: "API, webhooks, & integrations",
          subtext: "Zapier, n8n, Make"
        }
      ]
    },
    {
      name: "Enterprise",
      basePrice: 0,
      customPrice: true,
      yearlyOnly: true,
      description: "For large organizations",
      minSeats: 5,
      monthlyEmails: "5 SENDING EMAILS / USER",
      additionalEmailText: "Additional sending email for $9 / mo / email",
      buttonText: "Contact Sales",
      features: [
        { text: "Everything in the Multichannel Expert" },
        { text: "Unlimited guest seats" },
        {
          text: "Free 500 emails or 125 phone nbs/mo",
          subtext: "Unlimited with paid credits"
        },
        { text: "Custom user roles & permissions" },
        { text: "Activity logs" },
        { text: "Personalized (1:1) onboarding" },
        { text: "Dedicated account manager" },
        { text: "Premium support" },
        { text: "Custom terms of use" },
        { text: "Payment by wire transfer or SEPA" },
        {
          text: "Advanced API access",
          subtext: "Additional endpoints, rates, & volumes",
          isComingSoon: true
        },
        { text: "Advanced login security (SSO/SAML)", isComingSoon: true },
        { text: "Custom credits assignment", isComingSoon: true },
        { text: "Yearly commitments w/ quarterly payments", isComingSoon: true }
      ]
    }
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Free Plan Banner */}
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 mb-8 flex justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Free Plan</h2>
          <div className="flex items-baseline">
            <span className="text-lg font-bold">{currency.symbol}</span>
            <span className="text-2xl font-bold">0</span>
          </div>
        </div>
        <div className="flex-1 max-w-md ml-4">
          <p className="text-sm">
            Use the MailGenie.ai find, verify, and export up to 100 leads' emails or 25 phone numbers
            each month, for free!
          </p>
        </div>
        <Button 
          className="bg-white text-[#4169e1] hover:bg-gray-100"
          onClick={() => navigate('/dashboard')}
        >
          Get Started
        </Button>
      </motion.div>

      {/* Billing Toggle */}
      <motion.div 
        className="flex justify-between items-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Tabs 
          defaultValue={billingPeriod} 
          onValueChange={(value) => setBillingPeriod(value as BillingPeriod)}
          className="inline-flex"
        >
          <TabsList className="h-auto bg-gray-100 p-2 rounded-md">
            <TabsTrigger
              value="monthly"
              className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:font-medium data-[state=active]:shadow-sm text-gray-700"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="quarterly"
              className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:font-medium data-[state=active]:shadow-sm text-gray-700"
            >
              Quarterly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="px-6 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:font-medium data-[state=active]:shadow-sm text-gray-700"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md hover:bg-gray-100">
            <span className="flex items-center">
              <img
                src={currency.flag}
                alt="Currency Flag"
                className="w-5 h-5 mr-2"
              />
              {currency.code} ({currency.symbol})
            </span>
            <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setCurrency({
              code: "USD",
              symbol: "$",
              flag: "https://flagcdn.com/w80/us.png"
            })}>
              <img src="https://flagcdn.com/w80/us.png" alt="US Flag" className="w-5 h-5 mr-2" />
              USD ($)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCurrency({
              code: "Euro",
              symbol: "€",
              flag: "https://flagcdn.com/w80/eu.png"
            })}>
              <img src="https://flagcdn.com/w80/eu.png" alt="EU Flag" className="w-5 h-5 mr-2" />
              Euro (€)
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCurrency({
              code: "Pound",
              symbol: "£",
              flag: "https://flagcdn.com/w80/gb.png"
            })}>
              <img src="https://flagcdn.com/w80/gb.png" alt="UK Flag" className="w-5 h-5 mr-2" />
              Pound (£)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>

      {/* Cards container */}
      <motion.div 
        className="grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {pricingPlans.map((plan, index) => (
          <PricingCard 
            key={index}
            plan={plan}
            billingPeriod={billingPeriod}
            currency={currency}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}


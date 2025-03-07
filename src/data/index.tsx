import type React from "react"

// Product Menu Content
const productMenuContent: React.ReactNode = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-white">
    <div className="p-6">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">RECURRING WORKFLOWS</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🧩</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">CRM enrichment &amp; hygiene</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Connect to and auto-update your CRM as a source of truth
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🎯</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Account & lead scoring</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Generate custom lead scores to prioritize your account list
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>✈️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Automated inbound</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Connect to your webforms and auto-enrich and score leads
            </p>
          </div>
        </a>
      </div>
    </div>
    <div className="p-6 border-t md:border-t-0 md:border-l border-gray-100">
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>📊</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">TAM sourcing</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Build targeted lead lists using 100+ sources and AI
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🔄</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Intent data</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Track job changes, new hires, promotions, and more
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🚀</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Automated outbound</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Build, enrich, score, and message leads in seconds
            </p>
          </div>
        </a>
      </div>
    </div>
    <div className="p-6 border-t lg:border-t-0 lg:border-l border-gray-100">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">FEATURES</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🔄</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Integrations</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🔍</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Multi-provider data enrichment</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>⚙️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">AI formula generator</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🤖</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">AI research agent</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>✍️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Personalized copywriting</p>
          </div>
        </a>
      </div>
    </div>
  </div>
)

// Solution Menu Content
const solutionMenuContent: React.ReactNode = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-white">
    <div className="p-6">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">BY TEAM</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>📊</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">RevOps</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Prospect, enrich, and clean your CRM automatically
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>💼</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Sales</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">Automate your prospecting and research</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>📈</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Growth marketing</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">Targeted campaigns across every channel</p>
          </div>
        </a>
      </div>
    </div>
    <div className="p-6 border-t md:border-t-0 md:border-l border-gray-100">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">BY COMPANY TYPE</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🏢</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Enterprise</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">Build the data foundation for any GTM workflow</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🚀</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Startups</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Launch growth campaigns quickly without adding headcount
            </p>
          </div>
        </a>
      </div>
    </div>
    <div className="p-6 border-t lg:border-t-0 lg:border-l border-gray-100">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">CUSTOMER SOLUTIONS</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex flex-col items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <p className="text-sm font-medium text-gray-900 mb-2">
            How Vanta uses Clay to streamline RevOps and scale signal-based prospecting
          </p>
          <div className="w-full h-32 bg-purple-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl">🐰</span>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="flex flex-col items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <p className="text-sm font-medium text-gray-900 mb-2">How OpenAI is scaling their GTM motion with Clay</p>
          <div className="w-full h-32 bg-green-200 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl">⚙️</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
)

// Resources Menu Content
const resourcesMenuContent: React.ReactNode = (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 bg-white">
    <div className="p-6">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">LEARNING CENTER</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🏛️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">University</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">Learn how to use Clay with our best resources</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>⭐</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Experts</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Need help scaling your outbound? Hire a Clay expert
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🔶</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Cohorts</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">Live training - the fastest way to master Clay</p>
          </div>
        </a>
      </div>
    </div>
    <div className="p-6 border-t md:border-t-0 md:border-l border-gray-100">
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>📚</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Claybooks</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Build powerful workflows with Clay and other tools
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>📝</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Blog</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Read our best guides for outbound, from email setup to AI copywriting
            </p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>💬</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Slack community</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Join our Slack for live support and a community of 20K+ growth experts!
            </p>
          </div>
        </a>
      </div>
    </div>
    <div className="p-6 border-t lg:border-t-0 lg:border-l border-gray-100">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">ADDITIONAL HELP</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>➡️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Getting started</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🟥</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Creators</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🔻</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Live events</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🔗</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Integration partners</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>❓</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">FAQ</p>
          </div>
        </a>
      </div>
    </div>
  </div>
)

// Company Menu Content
const companyMenuContent: React.ReactNode = (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
    <div className="p-6">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">OUR COMPANY</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>🎁</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Careers</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">Learn about our team – and apply to join us</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>❄️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">About</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">We build creative tools for growth teams</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span>❤️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Customer stories</p>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              Read about how our biggest customers use (& love) Clay
            </p>
          </div>
        </a>
      </div>
    </div>
    <div className="p-6 border-t md:border-t-0 md:border-l border-gray-100">
      <p className="text-xs font-semibold text-gray-500 tracking-wider mb-5">SOCIAL MEDIA</p>
      <div className="space-y-6">
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span className="text-blue-600">in</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">LinkedIn</p>
          </div>
        </a>
        <a
          href="#"
          className="flex items-start group/item hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg transition-colors duration-200"
        >
          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center mr-4 rounded-lg bg-gray-50 group-hover/item:bg-white text-center overflow-hidden">
            <span className="text-red-600">▶️</span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">YouTube</p>
          </div>
        </a>
      </div>
    </div>
  </div>
)

export { productMenuContent, solutionMenuContent, resourcesMenuContent, companyMenuContent }


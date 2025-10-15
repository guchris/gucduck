"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"

// Career data
const careerData = [
  {
    id: 1,
    title: "Gap Year - Career Break",
    company: "Travel & Exploration",
    location: "35 cities in 22 countries",
    period: "Jul 2023 - Jul 2024",
    type: "Full-time",
    color: "blue",
    description: "Traveled to 35 cities in 22 countries, exploring diverse cultures and gaining global perspective."
  },
  {
    id: 2,
    title: "Lead Product Manager",
    company: "TaxBit",
    location: "Seattle, WA, USA",
    period: "Mar 2022 - Jun 2023",
    type: "Full-time",
    color: "blue",
    description: "Orchestrated the strategic conception, development, and launch of transformative crypto-tax products, driving substantial revenue growth, establishing industry standards, and fostering a developer-centric ecosystem.",
    achievements: [
      "Conceptualized and launched a Digital W9/W8 tax filing product, complete with SDK and API implementation solutions, generating over $1M in annual recurring revenue (ARR) and enabling clients to verify more than 1M of their user records for tax identity compliance.",
      "Led the construction of a comprehensive suite of B2B2C tax management tools, swiftly becoming a staple in all client contracts, that empowered 2 million users to navigate and comprehend their crypto tax obligations.",
      "Coordinate the cross-functional project to design, develop, and launch TaxBit's v2 API by leading technical discussions, collaborating with engineering leads of diverse teams, and prioritizing feedback from existing customers.",
      "Created, hired, and contributed to a dedicated Developer Relations team that overhauled content creation, documentation, and client support. This move enhanced the overall developer experience, fostering robust relationships and ensuring the success of client API integrations.",
      "Secured approval for a groundbreaking proposal on DeFi personal identification, leveraging zero-knowledge tokens as a strategic adjunct to the Digital W9/W8 product."
    ],
    testimonial: {
      text: "Chris did great work at TaxBit, and I recommend him for any organization. He possesses a strong work ethic, high attention to detail, and a remarkable ability to quickly grasp complex concepts, ranging from technical to regulatory.",
      author: "Daniel Kluesing, VP of Product (Direct Manager)"
    }
  },
  {
    id: 3,
    title: "Product Manager II",
    company: "Microsoft Corporation",
    location: "Redmond, WA, USA",
    period: "Feb 2021 - Mar 2022",
    type: "Full-time",
    color: "blue",
    description: "Drove the strategy & vision, design & implementation, and metrics & impact of a suite of internal tools to automate developer workflows and keep Windows safe and secure.",
    achievements: [
      "Optimized a critical automation tool, slashing developer integration times by 2000+ hours, and managed its migration to a serverless framework, orchestrating timely bug resolutions and feature requests.",
      "Spearheaded the design and creation of a unified internal tools platform for Windows Servicing, rolling out with a suite of 7 high-utility web-apps and achieving a rapid 40% adoption rate among engineers within the debut week.",
      "Conducted regular developer feedback loops through targeted surveys and roadshows, leading to pivotal enhancements in debugging and integration support, solidifying tool robustness.",
      "Designed the UI/UX blueprint for Microsoft Gaming Studios' NFT marketplace, partnering closely with developers to realize a seamless end-to-end user experience from purchase to acquisition."
    ],
    testimonial: {
      text: "Christopher came into my team and instantly started having a positive impact on the day to day, but also on our long-term goals. Christopher took it upon himself to completely design the UX of a brand-new service platform for our organization that completely revolutionized the way our engineers interacted with all of our internal tools & services. There is no doubt in my mind that Christopher is one of the most prepared & best university hires I have ever had the pleasure to work with.",
      author: "Luis Luciano, Principal PM (Direct Manager)"
    }
  },
  {
    id: 4,
    title: "Founder, AR Creator",
    company: "Stellar Effects",
    location: "Seattle, WA, USA",
    period: "Jan 2021 - Dec 2023",
    type: "Part-time",
    color: "blue",
    description: "Stellar Effects is a solo-run agency that builds tailored and memorable social media AR effects for brands, musicians, and everyone in-between",
    achievements: [
      "Founded a popular augmented reality (AR) agency that creates custom Social AR effects for brands, artists, and everyone in-between, resulting in over 6 figures in revenue each year",
      "Designed and developed over 100 Social AR effects that have been viewed over 20 billion times and captured over 1 billion times"
    ],
    testimonial: {
      text: "Christopher is an incredible filter / lens creator. His work is visually stunning and he also ensures a genuinely enjoyable user experience. In addition, he's great to work with – communicative and always on time!",
      author: "BMG (International Music Label)"
    }
  },
  {
    id: 5,
    title: "Coach / DevRel Representative",
    company: "Major League Hacking",
    location: "Seattle, WA, USA",
    period: "Oct 2020 - Dec 2023",
    type: "Part-time",
    color: "blue",
    description: "Empowered thousands of students throughout dozens of collegiate MLH hackathons, both virtual and in-person, while serving as a dynamic developer evangelist for tech giants.",
    achievements: [
      "Elevated hackathon experiences as a coach for events like HackHarvard, ShellHacks, QWER Hacks, and others, imparting invaluable insights to organizing teams and student hackers.",
      "Evangelized developer tools from industry leaders like Google Cloud, MongoDB, and Twilio, while providing technical support to student hackers incorporating them into their projects.",
      "Amplified community engagement by providing dedicated support to the official MLH Discord, fostering collaboration and knowledge sharing among thousands of active users.",
      "Played a pivotal role in shaping the future of hackathon organizing by attending and actively contributing to HackCon in both 2021 and 2022, making it easier than ever to hit the ground running.",
      "Architected a comprehensive Notion resource hub, crafting meticulously designed templates for slide decks, project judging, and more, streamlining the coaching process and enhancing support for organizers and students."
    ],
    testimonial: {
      text: "I had the pleasure of working with Chris as their direct manager for over a year at MLH. Chris was a go-to resource for staffing large/premier hackathons and educational events. They not only had a high level of professionalism and organizational skills, but a deep understanding of the student developer communities at each of these events and could relate to just about anyone to help them learn/embrace new technologies.",
      author: "Brandon Minaya, Coaches Program Lead (Direct Manager)"
    }
  },
  {
    id: 6,
    title: "Social Media Intern",
    company: "Out in Tech",
    location: "Seattle, WA, USA",
    period: "Aug 2020 - Dec 2020",
    type: "Internship",
    color: "blue",
    description: "Orchestrated exponential growth across diverse digital platforms, amplifying the narratives of a thriving 40,000-strong community through strategic content creation, innovative growth strategies, and beyond.",
    achievements: [
      "Engineered an automated content dissemination system across various social platforms, streamlining the delivery of impactful stories and maximizing reach.",
      "Created a comprehensive Figma Design system, setting the standard for all marketing and social materials at Out in Tech, ensuring a cohesive and visually compelling brand identity.",
      "Spearheaded dynamic community engagement by publishing various content series, curating member highlights, and managing 24/7 social media interactions.",
      "Increased collaboration within the official Slack by implementing channel rules, creating sub-communities, and incorporating bots.",
      "Collaborated with the President and Vice-President to ideate and execute events and initiatives, strategically driving the community's growth through innovative concepts and impactful strategies."
    ],
    testimonial: {
      text: "Christopher was a wonderful intern at Out in Tech: entrepreneurial, detail-oriented, and mission-driven. It's rare to see someone spearhead new initiatives to such an extent, but Christopher did it with our communications and social media seamlessly. I'd recommend him wholeheartedly for a digital marketing or communications position!",
      author: "Gary Goldman, Senior Program Director (Direct Manager)"
    }
  },
  {
    id: 7,
    title: "Product Manager Intern",
    company: "Microsoft Corporation",
    location: "Redmond, WA, USA",
    period: "May 2020 - Aug 2020",
    type: "Internship",
    color: "blue",
    description: "Led the development of a visionary log analytics tool, coupled with a robust triage system for Windows Server bugs, significantly elevating team efficiency and issue resolution.",
    achievements: [
      "Spearheaded the design and development of an internal log analytics tool, resuling in a 35% reduction in engineering debug time, enhancing overall engineering team productivity.",
      "Maintained the safety and security of the Windows ecosystem by meticulously updating and supporting a triage system handling over 100 concurrent tickets.",
      "Navigated the challenges of the pandemic by orchestrating inclusive LGBTQ+ intern virtual events, fostering meaningful conversations and community engagement during remote work periods.",
      "Created an official \"Guess the Gibberish\" AR filter variant for Microsoft Life's Instagram account, garnering an impressive 20 million views and amplifying brand visibility."
    ],
    testimonial: {
      text: "Chris is a leader as a whole, be it product vision, analysis and framework. When I managed him in his early career at Microsoft, I could see the urge in him to learn and challenge himself by pushing the boundaries, he brought the outside in and learn in all to the internal product we were working on. His passion to bring his whole self, give back to community and bring everyone along is treat to watch.",
      author: "Harpreet Kaur, Principal TPM (Direct Manager)"
    }
  },
  {
    id: 8,
    title: "Product Manager Intern",
    company: "Microsoft Corporation",
    location: "Redmond, WA, USA",
    period: "May 2019 - Aug 2019",
    type: "Internship",
    color: "blue",
    description: "Elevated the productivity of Azure DevOps users by strategically enhancing Microsoft Flow's capabilities and crafting high-impact templates for widespread adoption, streamlining workflows and automating millions of tasks.",
    achievements: [
      "Drove internal tooling innovation by defining scopes and securing stakeholder approvals through in-depth analysis of insights gleaned from over 30 customer interviews.",
      "Led the expansion effort of Microsoft Flow features and the creation of top-value templates, resulting in a reduction of over 1 million manual tasks for developers in both public and private domains.",
      "Contributed to the design and development of a live polling feature within PowerPoint presentations, familiarizing myself with the existing PowerPoint codebase and proactively submitting Pull Requests (PRs) during the company-wide hackathon."
    ]
  },
  {
    id: 9,
    title: "Software Engineering Intern",
    company: "Union Pacific Railroad",
    location: "Omaha, NE, USA",
    period: "May 2018 - Aug 2018",
    type: "Internship",
    color: "blue",
    description: "Pioneered the integration of cutting-edge chatbot technologies at Union Pacific, leveraging NLP and Rasa to prototype innovative internal and consumer-facing chatbots, establishing the company's initial footprint in the realm of conversational AI.",
    achievements: [
      "Conducted comprehensive market research on available chatbot technologies to select and champion an optimal solution for Union Pacific's trajectory.",
      "Demonstrated agility and innovation by deploying a customizable and open-source platform to create compelling proof-of-concept (POC) and minimum viable product (MVP) internal and external chatbots.",
      "Won 1st place at the intern hackathon by developing and presenting a successful POC chatbot to company VPs, underscoring a commitment to provide the best user experience to company clientele.",
      "Achieved a 56% boost in traffic to the Hadoop Architecture and Data Portal through the strategic implementation of interactive Rasa chatbots, enhancing user engagement and accessibility."
    ]
  }
]

const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    'orange': 'bg-orange-500',
    'green': 'bg-green-500',
    'blue': 'bg-blue-500',
    'purple': 'bg-purple-500',
    'yellow': 'bg-yellow-500',
    'pink': 'bg-pink-500',
    'gray': 'bg-gray-500',
    'black': 'bg-black'
  }
  return colorMap[color] || 'bg-gray-500'
}

const getHoverClasses = (color: string) => {
  const hoverMap: { [key: string]: string } = {
    'orange': 'hover:bg-orange-500 hover:text-white',
    'green': 'hover:bg-green-500 hover:text-white',
    'blue': 'hover:bg-blue-500 hover:text-white',
    'purple': 'hover:bg-purple-500 hover:text-white',
    'yellow': 'hover:bg-yellow-500 hover:text-white',
    'pink': 'hover:bg-pink-500 hover:text-white',
    'gray': 'hover:bg-gray-500 hover:text-white',
    'black': 'hover:bg-black hover:text-white'
  }
  return hoverMap[color] || 'hover:bg-gray-500 hover:text-white'
}

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
        <NavBar />
          
          <main className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h2 className="text-xs font-medium text-gray-900 dark:text-white">About</h2>
              </div>
            </div>

            {/* Hero Section */}
            <div className="mb-12">
              <div className="space-y-4">
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  Product manager by day, entrepreneur by night, and a connoisseur of good memes always. In my free time, you can catch me creating augmented reality experiences that have been viewed and captured by billions of people and building out ambitious projects and ventures. I'm passionate about using technology to improve people's lives and have a knack for making even the most mundane things just a bit more fun (and viral).
                </p>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white">Career</h3>
              </div>
              
              <div className="w-full space-y-6">
                {careerData.map((job) => (
                  <div key={job.id} className="group">
                    <div className="flex items-start gap-2">
                      {/* Dot */}
                      <div className={`w-3 h-3 rounded-full ${getColorClasses(job.color)} flex-shrink-0 mt-0.5`}></div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title and Company */}
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className={`text-xs font-medium transition-all duration-200 text-black dark:text-white ${getHoverClasses(job.color)}`}>
                            {job.title}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{job.company}</span>
                        </div>
                        
                        {/* Location, Period, Type */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{job.location}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{job.period}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{job.type}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                          {job.description}
                        </p>
                        
                        {/* Achievements */}
                        {job.achievements && (
                          <div className="space-y-2 mb-3">
                            {job.achievements.map((achievement, index) => (
                              <p key={index} className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                                {achievement}
                              </p>
                            ))}
                          </div>
                        )}
                        
                        {/* Testimonial */}
                        {job.testimonial && (
                          <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic mb-2">
                              "{job.testimonial.text}"
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                              — {job.testimonial.author}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

            {/* Education Section */}
            <div className="mb-8">
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                <h3 className="text-xs font-medium text-gray-900 dark:text-white">Education</h3>
              </div>
              
              <div className="w-full space-y-6">
                {/* University */}
                <div className="group">
                  <div className="flex items-start gap-2">
                    {/* Dot */}
                    <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-0.5"></div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title and University */}
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-blue-500 hover:text-white">
                          B.S. Computer Science
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Missouri University of Science & Technology (S&T)</span>
                      </div>
                      
                      {/* Location, Period, GPA */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Rolla, MO, USA</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Aug 2016 - Dec 2020</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">GPA 3.81, Summa Cum Laude</span>
                      </div>
                      
                      {/* Coursework */}
                      <div className="space-y-2 mb-3">
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">Coursework:</p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 1001 - Special Topics (Data Structures Laboratory)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 1010 - Intro / Computer Science
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 1200 - Discrete Math For Computer Science
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 1510 - Data Structures
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 1570 - Intro To Programming
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 1580 - Intro To Programming Lab
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 2200 - Theory of Computer Science
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 2300 - File Structures and Intro to Databases
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 2500 - Algorithms
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 3100 - Software Engineering I
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 3200 - Intro Numerical Methods
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 3500 - Programming Languages & Translators
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 3800 - Intro To Operating Systems
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 4096 - Software System Development
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 5001 - Special Topics (Introduction to Deep Learning)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 5001 - Special Topics (Experiential Entrepreneurship Computer Scientists)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 5001 - Special Topics (Introduction to Virtual Reality)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 5402 - Intro to Data Mining
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            COMP SCI 5700 - Bioinformatics
                          </p>
                        </div>
                      </div>
                      
                      {/* Scholarships */}
                      <div className="space-y-2 mb-3">
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">Scholarships:</p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Garmin Scholarship ($20,000)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Missouri S&T Trustees Scholarship ($14,000)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Missouri Bright Flight Scholarship ($12,000)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Missouri S&T University Scholarship ($8,000)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Missouri S&T CS Department Scholarship ($2,500)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Chang-Lin Tien Scholarship ($1,000)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Donald D. Myers Scholarship ($1,500)
                          </p>
                        </div>
                      </div>
                      
                      {/* Awards & Honors */}
                      <div className="space-y-2 mb-3">
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">Awards & Honors:</p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Missouri S&T Most Improved Organization (2019)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Missouri S&T CS Leadership Award (2019, 2020)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Missouri S&T CS Ambassador Award (2019, 2020)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Miner Key ICCA Midwest QF Runner Up (2020)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Miner Key ICCA Midwest QF Best Choreo (2020)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            MLH Top 50 Hacker (2019)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            1st Place @ TAVhacks (2020)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            1st Place @ Union Pacific Hackathon (2018)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            2nd Place @ Forbes Hackathon (2018, 2019)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Goldman Sachs PRIDE Summit Scholar (2018)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Forbes Under 30 Scholar (2018, 2019)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            O4U Tech Scholar (2019)
                          </p>
                        </div>
                      </div>
                      
                      {/* Comp Sci Transcript */}
                      <div className="space-y-2 mb-3">
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">Comp Sci Transcript</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                          [Link to transcript will be added]
                        </p>
                      </div>
                      
                      {/* Recommendation */}
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic mb-2">
                          "Christopher - it has been an honor and privilege to work with you and see so many of the things that you have accomplished on behalf of our students at Missouri S&T. I know that you will accomplish great things in the years to come and look forward to seeing what direction you go and what impact you have."
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                          — Chris Maples, Missouri S&T Chancellor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Extracurriculars */}
                <div className="group">
                  <div className="flex items-start gap-2">
                    {/* Dot */}
                    <div className="w-3 h-3 rounded-full bg-blue-500 flex-shrink-0 mt-0.5"></div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xs font-medium transition-all duration-200 text-black dark:text-white hover:bg-blue-500 hover:text-white">
                          Key Extracurriculars
                        </h4>
                      </div>
                      
                      {/* PickHacks */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">PickHacks</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Co-Founder, Co-Director, Finance + Dev + Design Lead</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Mar 2018 - Jan 2021</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                          Transformed the Midwest hackathon landscape by scaling an organizing team of students, raising an ungodly amount of sponsorship money, and establishing a thriving hacker community.
                        </p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Orchestrated and guided a dynamic team of 18 students, propelling PickHacks and PickleHack to become premier hackathons in the Midwest, boasting over 500 attendees annually.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Singlehandedly raised and managed $170,000 in corporate and university sponsorships, adeptly navigating 501(c) tax exemptions, and overseeing multiple bank accounts both within and outside the university.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Masterminded exponential growth by scaling the team, overseeing the design of captivating websites and marketing materials, and leading a powerhouse development team.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Established a vibrant community for S&T students to extend their learning beyond the traditional classroom setting, fulfilling crucial "experiential learning" requirements essential for graduation.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Attracted an illustrious lineup of sponsors including St. Louis Bread Co (Panera), St. Louis Cardinals, Boeing, Mastercard, GitHub, Rolls Royce, State Farm, AT&T, Accenture, and Redbull.
                          </p>
                        </div>
                        <div className="space-y-1 mt-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">Links:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            PickHacks Official Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            PickHacks Instagram [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            PickHacks 2019 Recap Video [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            MLH HackCon VII - Session Speaker [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Missouri S&T PickHacks Article [Link will be added]
                          </p>
                        </div>
                      </div>
                      
                      {/* Miner Key */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Miner Key</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Founder, President, Music Director</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Jan 2018 - Jan 2021</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                          Founded and propelled Miner Key, a dynamic co-ed collegiate a cappella group, to meteoric success with over 15,000 subscribers and 3 million views/streams on YouTube and Spotify, culminating in multiple accolades at the prestigious ICCA competition.
                        </p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Assembled, directed, and musically led a team of 18 students, achieving 2nd place in the 2020 Midwest Quarterfinals of the prestigious ICCA competition. Secured additional accolades for the best choreography and recorded the 2nd highest score ever for a first-time group.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Singlehandedly raised $10,000 through strategic relationship-building with the Chancellor, collaboration with the Department of Music, and successful campaigns to the student council.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Conducted bi-weekly rehearsals, teaching vocal parts, shaping the group's sound, and all administrative tasks, including securing rehearsal spaces, booking gigs, and implementing a comprehensive recruitment process.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Crafted and choreographed an electrifying, award-winning sequence for Miner Key's ICCA competition set, showcasing an innovative approach that defied conventional expectations.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Amidst the challenges of the pandemic, facilitated the production, review, and release of professional recordings of Miner Key's ICCA set by coordinating with a professional mixing studio.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Established and managed Miner Key's presence on social media platforms, including Instagram, Facebook, YouTube, and Spotify, contributing to the group's visibility and outreach.
                          </p>
                        </div>
                        <div className="space-y-1 mt-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">Links:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Miner Key Official YouTube Channel [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Miner Key Official Spotify [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Miner Key 2019 ICCA Set [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Miner Key 2019 ICCA Results [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Miner Key Instagram [Link will be added]
                          </p>
                        </div>
                      </div>
                      
                      {/* ACM */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">S&T Association for Computer Machinery (ACM)</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Vice President, ACM Hack Chair</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">May 2018 - Aug 2020</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                          Orchestrated a transformative era of S&T's chapter of ACM by engaging with 7 dynamic communities of over 200 members across 100s of events.
                        </p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Elevated S&T ACM and its communities by introducing groundbreaking programs such as concept events, captivating socials, and career-shaping workshops.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Played a pivotal role in the design and development of the S&T ACM website and resume portal, facilitating career growth and opportunities for members through a streamlined platform.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Pioneered S&T ACM's social media presence by initiating and managing the organization's first social media accounts, enhancing visibility and engagement.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Grew and created automated tooling for the S&T ACM Discord server, fostering a supportive environment for computer science students to connect and collaborate.
                          </p>
                        </div>
                        <div className="space-y-1 mt-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">Links:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T ACM Official Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T ACM Instagram [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T ACM GitHub [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T CS Department Student Orgs [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T CS Department Student Events [Link will be added]
                          </p>
                        </div>
                      </div>
                      
                      {/* SPECTRUM */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">SPECTRUM (LGBTQ+)</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Public Relations</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Apr 2019 - May 2020</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                          Cultivated a profound sense of belonging and community for S&T LGBTQ+ students, fostering an inclusive environment that transcends the digital and physical realms.
                        </p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Revolutionized SPECTRUM's outreach by catapulting the organization into the digital age with a vibrant and active presence on Instagram and Twitter.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Amplified SPECTRUM's visibility on campus by personally designing and strategically disseminating modern marketing materials.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Secured a dedicated office space, providing the executive team with a centralized hub for meetings and storage, fostering organizational efficiency.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Successfully advocated for SPECTRUM's financial needs, securing an impressive $4,000 per semester budget as the organization's representative at Student Council Meetings.
                          </p>
                        </div>
                        <div className="space-y-1 mt-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">Links:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T SPECTRUM S&T Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T SPECTRUM Instagram [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T SPECTRUM x Student Diversity Initiatives [Link will be added]
                          </p>
                        </div>
                      </div>
                      
                      {/* TAVtech */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">TAVtech</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Cybersecurity Fellow</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Dec 2019 - Jan 2020</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
                          Chosen as a standout participant in the prestigious TAVtech Cybersecurity Fellowship's Winter 2019 class, studying cybersecurity while fully immersed in the vibrant Israeli culture and startup ecosystem.
                        </p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Immersed myself in over 80 hours of intensive and immersive cybersecurity training throughout an entire winter break.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Ventured into a new city, embracing its language and culture while forging lifelong friendships with fellow participants.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Took innovation by storm by conceiving, designing, and developing a groundbreaking mobile app to promote STD testing and transparency within the LGBTQ+ community, achieving a 1st-place finish at the TAVtech hackathon.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Skillfully secured a $1,000 no-strings-attached grant from the esteemed 1517 Fund, propelling the development of a robust MVP of the aforementioned mobile app following the conclusion of the fellowship.
                          </p>
                        </div>
                        <div className="space-y-1 mt-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">Links:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            TAVtech Official Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            TAVtech LinkedIn Page [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T TAVtech Article [Link will be added]
                          </p>
                        </div>
                      </div>
                      
                      {/* Additional Activities */}
                      <div className="space-y-2 mb-3">
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-medium">Additional Leadership Roles:</p>
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            <span className="font-medium">Out for Undergrad (O4U)</span> - Alumni, Campus Ambassador (Feb 2020 - Oct 2020): Orchestrated and executed impactful outreach programs tailored to connect with LGBTQ+ students across Midwest universities, fostering a sense of community and support. Captivated audiences through dynamic presentations and shared slide decks with thousands of students, resulting in 156 applications to O4U initiatives.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            <span className="font-medium">Major League Hacking</span> - Community Expert, Top 50 Hacker (Aug 2018 - Jan 2021): Leveraged my expertise in pioneering my university's inaugural hackathon group to become an official advisor, extending invaluable guidance to new and experienced community organizers. Conducted video call sessions, providing comprehensive support in areas such as finances, logistics, website development, judging, and day-of event scenarios, imparting crucial insights to fellow organizers. Contributed to the enhancement of community-building practices by reporting key feedback and insights to MLH, actively shaping and refining the official, free organizer handbook available online.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            <span className="font-medium">Missouri S&T CS Department</span> - Student Ambassador (Dec 2018 - Dec 2020): Hosted engaging sessions for prospective high school students and parents, providing an insightful introduction to the CS department and adeptly addressing their inquiries. Collaborated with distinguished alumni, the chair, and the dean in brainstorming transformative enhancements for the department, contributing to its overall evolution and success. Spearheaded the organization and digitization of student files, elevating data upkeep and transparency within the department. Represented the university at the renowned Grace Hopper Celebration in 2018 and 2019, showcasing a commitment to advancing diversity and inclusion in technology on a global scale.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            <span className="font-medium">Impact Labs</span> - Sponsorship Director (Dec 2018 - Nov 2019): Secured over 10k in sponsorships for the Impact Labs annual summit in NYC, leveraging strategic partnerships with major companies like Lyft and Digital Ocean. Dynamically marketed Impact Labs events, deploying effective outreach strategies across my extensive network and the organizations under my leadership, maximizing visibility and engagement.
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            <span className="font-medium">Forbes</span> - Under 30 Scholar (Oct 2018, Oct 2019): Catapulted the Under 30 Scholar program at Forbes into the spotlight through a strategically crafted series of LinkedIn posts, amassing an extraordinary 10 million views and generating a flood of thousands of applications. Showcased exceptional networking prowess at multiple Under 30 summits, seamlessly cultivating valuable connections and securing sponsorships for various groups under my leadership. Clinched 2nd place in the prestigious Forbes Under 30 hackathon in both 2018 and 2019.
                          </p>
                        </div>
                        <div className="space-y-1 mt-2">
                          <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">Additional Links:</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Out for Undergrad Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            O4U LinkedIn Post [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            MLH Official Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            MLH Top 50 - Christopher Gu [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            MLH Top 50 - The PickHacks Team [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            MLH Community Spotlight [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            MLH Article [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            HackCon LinkedIn Post [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T CS Department Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T Student Ambassadors Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Impact Labs Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Forbes Under 30 Scholar LinkedIn Post 1 [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Forbes Under 30 Scholar LinkedIn Post 2 [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Forbes Under 30 Scholar Website [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T Forbes 2019 Article [Link will be added]
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            S&T Forbes 2018 Article [Link will be added]
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </main>
        </div>
      </div>
    </>
  );
}

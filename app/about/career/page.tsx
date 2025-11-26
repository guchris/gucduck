"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"

// Career data
const careerData = [
  {
    id: 1,
    title: "Senior Technical Product Manager",
    company: "Amazon",
    location: "Seattle, WA, USA",
    period: "Mar 2025 - Present",
    type: "Full-time",
    color: "blue",
    description: "Driving AI research, enablement, and community initiatives across the software builder experience.",
  },
  {
    id: 2,
    title: "Gap Year",
    company: "Career Break",
    location: "35 cities in 22 countries",
    period: "Jul 2023 - Dec 2024",
    type: "Full-time",
    color: "blue",
    description: "Traveled to 35 cities in 22 countries."
  },
  {
    id: 3,
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
      "Secured approval for a groundbreaking proposal on DeFi personal identification, leveraging zero-knowledge tokens as a strategic adjunct to the Digital W9/W8 product.",
      "Served as the inaugural member of a diversity group, actively contributing to planning and organizing events to promote inclusivity and diversity within the company."
    ],
    links: [
      { text: "TaxBit Digital W9/W8", url: "https://www.taxbit.com/digital-w9-w8/" },
      { text: "TaxBit Digital W9/W8 Case Study", url: "https://www.taxbit.com/case-studies/uphold-case-study/" },
      { text: "TaxBit Tax Center Solutions", url: "https://www.taxbit.com/white-papers/digital-asset-compliance/" },
      { text: "TaxBit API Guides", url: "https://apidocs.taxbit.com/docs/getting-started" },
      { text: "TaxBit API Reference", url: "https://apidocs.taxbit.com/reference/auth-token" }
    ],
    testimonial: {
      text: "Chris did great work at TaxBit, and I recommend him for any organization. He possesses a strong work ethic, high attention to detail, and a remarkable ability to quickly grasp complex concepts, ranging from technical to regulatory.",
      author: "Daniel Kluesing, VP of Product (Direct Manager)"
    }
  },
  {
    id: 4,
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
      text: "Christopher came into my team and instantly started having a positive impact on the day to day, but also on our long-term goals. Christopher took it upon himself to completely design the UX of a brand-new service platform for our organization that completely revolutionized the way our engineers interacted with all of our internal tools & services. Christopher was an amazing partner to our teams, and fully engaged in all engineering system designs, architecture discussions, planning, agile development and deployment. I was extremely proud of his growth as a product manager, and his business maturity when it came to presenting ideas, the progress of the team & communicating successes & failures. There is no doubt in my mind that Christopher is one of the most prepared & best university hires I have ever had the pleasure to work with, and there is no doubt in my mind that given the opportunity I would hire him, or work with him in any capacity. He truly is one of the best professionals in the industry, and everything he does he pours his all.",
      author: "Luis Luciano, Principal PM (Direct Manager)"
    }
  },
  {
    id: 5,
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
    links: [
      "chris-corner.com/founder/stellar-effects",
      "stell-ar.com"
    ],
    testimonials: [
      {
        text: "Christopher is an incredible filter / lens creator. His work is visually stunning and he also ensures a genuinely enjoyable user experience. In addition, he's great to work with – communicative and always on time!",
        author: "BMG (International Music Label)"
      },
      {
        text: "Chris is my absolute go-to when it comes to filters/lenses. He has worked on projects for both my developing and A-level artists and each one has turned out incredible. Not to mention that he's super quick and extremely easy to work with. He's the BEST!",
        author: "Crowdsurf (Digital Marketing Agency)"
      }
    ]
  },
  {
    id: 6,
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
    testimonials: [
      {
        text: "I had the pleasure of working with Chris as their direct manager for over a year at MLH. Chris was a go-to resource for staffing large/premier hackathons and educational events. They not only had a high level of professionalism and organizational skills, but a deep understanding of the student developer communities at each of these events and could relate to just about anyone to help them learn/embrace new technologies. Chris would routinely have to learn new technologies quickly to be able to lead workshops on them as well as help encourage developers to use them and was incredible at it. Chris would be a huge asset to any DevRel, evangelism, or product marketing team.",
        author: "Brandon Minaya, Coaches Program Lead (Direct Manager)"
      },
      {
        text: "I was introduced to Chris by way of a 30ft tall banner depicting Chris that my company, Major League Hacking (MLH), had printed celebrating him for his achievements in building community at his university. Out of a community of more than 5,000 campus organizers we worked with that year, he had set himself apart for the way he was able to create events, connection, and community for the student developers at his school. As I got to know Chris better and he began working at MLH as a Coach, I got to see how he puts his community building skills to work firsthand in a developer relations context. Chris has shown great ability to help people understand and get setup on a suite of developer tools including APIs and cloud services, all while engaging them personally and authentically. If you have the chance to work with Chris, seize it, you might just end up printing a larger than life banner of him.",
        author: "Nick Quinlan, Chief Operating Officer"
      }
    ]
  },
  {
    id: 7,
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
    id: 8,
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
      text: "Chris is a leader as a whole, be it product vision, analysis and framework. When I managed him in his early career at Microsoft, I could see the urge in him to learn and challenge himself by pushing the boundaries, he brought the outside in and learn in all to the internal product we were working on. He took the feedback and kept improving upon on his product designs. His passion to bring his whole self, give back to community and bring everyone along is treat to watch. If you are looking for product leader who is ready to bring innovation and manage it all, this leader is in making, keep shining bright Chris! And keep in touch.",
      author: "Harpreet Kaur, Principal TPM (Direct Manager)"
    }
  },
  {
    id: 9,
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
    id: 10,
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
  const colorMap: {[key: string]: string} = {
    'blue': 'bg-blue-500',
    'pink': 'bg-pink-500', 
    'yellow': 'bg-yellow-500',
    'green': 'bg-green-500',
    'purple': 'bg-purple-500',
    'orange': 'bg-orange-500',
    'gray': 'bg-gray-500',
    'black': 'bg-black'
  }
  return colorMap[color] || 'bg-gray-500'
}

const getHoverClasses = (color: string) => {
  const hoverMap: {[key: string]: string} = {
    'blue': 'hover:bg-blue-500 hover:text-white',
    'pink': 'hover:bg-pink-500 hover:text-white',
    'yellow': 'hover:bg-yellow-500 hover:text-white',
    'green': 'hover:bg-green-500 hover:text-white',
    'purple': 'hover:bg-purple-500 hover:text-white',
    'orange': 'hover:bg-orange-500 hover:text-white',
    'gray': 'hover:bg-gray-500 hover:text-white',
    'black': 'hover:bg-black hover:text-white'
  }
  return hoverMap[color] || 'hover:bg-gray-500 hover:text-white'
}

export default function CareerPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          
          <main className="flex-1 pt-6">
            {/* Career Timeline */}
            <div className="mb-8">
              <div className="w-full space-y-6">
                {careerData.map((job) => (
                  <div key={job.id}>
                    <div className="flex items-start gap-2">
                      {/* Dot */}
                      <div className={`w-3 h-3 rounded-full ${getColorClasses(job.color)} flex-shrink-0 mt-0.5`}></div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <div className="mb-1">
                          <h4 className={`text-xs font-medium text-black dark:text-white`}>
                            {job.title}
                          </h4>
                        </div>
                        
                        {/* Company and Period */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{job.company}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{job.period}</span>
                        </div>
                        
                        {/* Location and Type */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{job.location}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{job.type}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-black dark:text-white leading-relaxed mb-3">
                          {job.description}
                        </p>
                        
                        {/* Achievements */}
                        {job.achievements && (
                          <div className="space-y-2 mb-3">
                            {job.achievements.map((achievement, index) => (
                              <p key={index} className="text-xs text-black dark:text-white leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                                {achievement}
                              </p>
                            ))}
                          </div>
                        )}
                        
                        {/* Links */}
                        {job.links && (
                          <div className="space-y-2 mb-3">
                            <p className="text-xs text-black dark:text-white leading-relaxed font-medium">Links:</p>
                            <div className="space-y-1">
                              {job.links.map((link, index) => (
                                <p key={index} className="text-xs text-black dark:text-white leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                                  {typeof link === 'string' ? (
                                    link
                                  ) : (
                                    <a 
                                      href={link.url} 
                                      target="_blank" 
                                      rel="noopener noreferrer"
                                      className="text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                      {link.text}
                                    </a>
                                  )}
                                </p>
                              ))}
                            </div>
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
                        
                        {/* Multiple Testimonials */}
                        {job.testimonials && (
                          <div className="space-y-3">
                            {job.testimonials.map((testimonial, index) => (
                              <div key={index} className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic mb-2">
                                  "{testimonial.text}"
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                                  — {testimonial.author}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

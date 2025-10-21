"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"

// Education data
const educationData = [
  {
    id: 1,
    title: "B.S. Computer Science",
    institution: "Missouri University of Science & Technology (S&T)",
    location: "Rolla, MO, USA",
    period: "Aug 2016 - Dec 2020",
    gpa: "3.81",
    honors: "Summa Cum Laude",
    color: "blue",
    coursework: [
      "COMP SCI 1001 - Special Topics (Data Structures Laboratory)",
      "COMP SCI 1010 - Intro / Computer Science",
      "COMP SCI 1200 - Discrete Math For Computer Science",
      "COMP SCI 1510 - Data Structures",
      "COMP SCI 1570 - Intro To Programming",
      "COMP SCI 1580 - Intro To Programming Lab",
      "COMP SCI 2200 - Theory of Computer Science",
      "COMP SCI 2300 - File Structures and Intro to Databases",
      "COMP SCI 2500 - Algorithms",
      "COMP SCI 3100 - Software Engineering I",
      "COMP SCI 3200 - Intro Numerical Methods",
      "COMP SCI 3500 - Programming Languages & Translators",
      "COMP SCI 3800 - Intro To Operating Systems",
      "COMP SCI 4096 - Software System Development",
      "COMP SCI 5001 - Special Topics (Introduction to Deep Learning)",
      "COMP SCI 5001 - Special Topics (Experiential Entrepreneurship Computer Scientists)",
      "COMP SCI 5001 - Special Topics (Introduction to Virtual Reality)",
      "COMP SCI 5402 - Intro to Data Mining",
      "COMP SCI 5700 - Bioinformatics"
    ],
    scholarships: [
      "Missouri Bright Flight Scholarship ($12,000)",
      "Missouri S&T University Scholarship ($8,000)",
      "Missouri S&T Trustees Scholarship ($14,000)",
      "Missouri S&T CS Department Scholarship ($2,500)",
      "Garmin Scholarship ($20,000)",
      "Chang-Lin Tien Scholarship ($1,000)",
      "Donald D. Myers Scholarship ($1,500)"
    ],
    awards: [
      "Missouri S&T Most Improved Organization (2019)",
      "Missouri S&T CS Leadership Award (2019, 2020)",
      "Missouri S&T CS Ambassador Award (2019, 2020)",
      "Miner Key ICCA Midwest QF Runner Up (2020)",
      "Miner Key ICCA Midwest QF Best Choreo (2020)",
      "MLH Top 50 Hacker (2019)",
      "1st Place @ TAVhacks (2020)",
      "1st Place @ Union Pacific Hackathon (2018)",
      "2nd Place @ Forbes Hackathon (2018, 2019)",
      "Goldman Sachs PRIDE Summit Scholar (2018)",
      "Forbes Under 30 Scholar (2018, 2019)",
      "O4U Tech Scholar (2019)"
    ],
    recommendation: {
      text: "Christopher - it has been an honor and privilege to work with you and see so many of the things that you have accomplished on behalf of our students at Missouri S&T. I know that you will accomplish great things in the years to come and look forward to seeing what direction you go and what impact you have.",
      author: "Chris Maples, Missouri S&T Chancellor"
    },
    transcript: "Comp Sci Transcript"
  }
]

const extracurricularData = [
  {
    id: 1,
    title: "Co-Founder, Co-Director, Finance + Dev + Design Lead",
    organization: "PickHacks",
    period: "Mar 2018 - Jan 2021",
    color: "blue",
    description: "Transformed the Midwest hackathon landscape by scaling an organizing team of students, raising an ungodly amount of sponsorship money, and establishing a thriving hacker community.",
    achievements: [
      "Orchestrated and guided a dynamic team of 18 students, propelling PickHacks and PickleHack to become premier hackathons in the Midwest, boasting over 500 attendees annually.",
      "Singlehandedly raised and managed $170,000 in corporate and university sponsorships, adeptly navigating 501(c) tax exemptions, and overseeing multiple bank accounts both within and outside the university.",
      "Masterminded exponential growth by scaling the team, overseeing the design of captivating websites and marketing materials, and leading a powerhouse development team. The result: flyers on every wall of every Midwest campus, a comprehensive suite of platforms, from the main website to hacker portals, resume portals, sponsor portals, and even cutting-edge on-prem devices.",
      "Established a vibrant community for S&T students to extend their learning beyond the traditional classroom setting, fulfilling crucial \"experiential learning\" requirements essential for graduation. Notably, our events helped secure internships and full-time roles for over 30 S&T students.",
      "Attracted an illustrious lineup of sponsors that reads like a who's who, including heavyweights like St. Louis Bread Co (Panera), St. Louis Cardinals, Boeing, Mastercard, GitHub, Rolls Royce, State Farm, AT&T, Accenture, and Redbull."
    ],
    links: [
      { text: "PickHacks Official Website", url: "https://www.pickhacks.io/" },
      { text: "PickHacks Instagram", url: "https://www.instagram.com/sandtpickhacks/?hl=en" },
      { text: "PickHacks 2019 Recap Video", url: "https://www.youtube.com/watch?v=Iqnbst4-Ujw" },
      { text: "PickHacks 2020 Recap Video", url: "https://www.youtube.com/watch?v=wE_aFwbrVAA" },
      { text: "Missouri S&T PickHacks Article", url: "https://news.mst.edu/2019/02/missouri-st-to-host-pickhacks-competition/" }
    ]
  },
  {
    id: 2,
    title: "Founder, President, Music Director",
    organization: "Miner Key",
    period: "Jan 2018 - Jan 2021",
    color: "blue",
    description: "Founded and propelled Miner Key, a dynamic co-ed collegiate a cappella group, to meteoric success with over 15,000 subscribers and 3 million views/streams on YouTube and Spotify, culminating in multiple accolades at the prestigious ICCA competition.",
    achievements: [
      "Assembled, directed, and musically led a team of 18 students, achieving 2nd place in the 2020 Midwest Quarterfinals of the prestigious ICCA competition. Secured additional accolades for the best choreography and recorded the 2nd highest score ever for a first-time group.",
      "Singlehandedly raised $10,000 through strategic relationship-building with the Chancellor, collaboration with the Department of Music, and successful campaigns to the student council, enabling the acquisition of arrangements, equipment, and professional mixing services.",
      "Conducted bi-weekly rehearsals, teaching vocal parts, shaping the group's sound, and all administrative tasks, including securing rehearsal spaces, booking gigs, and implementing a comprehensive recruitment process. This hands-on approach transformed Miner Key into a well-oiled machine, ensuring both musical excellence and operational cohesion.",
      "Crafted and choreographed an electrifying, award-winning sequence for Miner Key's ICCA competition set, showcasing an innovative approach that defied conventional expectations, setting the group apart with style and flair despite zero prior choreography and dance experience.",
      "Amidst the challenges of the pandemic, facilitated the production, review, and release of professional recordings of Miner Key's ICCA set by coordinating with a professional mixing studio.",
      "Established and managed Miner Key's presence on social media platforms, including Instagram, Facebook, YouTube, and Spotify, contributing to the group's visibility and outreach."
    ],
    links: [
      { text: "Miner Key Official YouTube Channel", url: "https://www.youtube.com/@minerkeyacappella7421" },
      { text: "Miner Key Official Spotify", url: "https://open.spotify.com/artist/72NZlUC6Bn1iSAtTE13Y6B?si=vpUek8KBQrmGc7picW7uZg" },
      { text: "Miner Key 2019 ICCA Set", url: "https://youtu.be/-ZwS4yYLXV0?si=GPLnw0P-LO3f4G3f" },
      { text: "Miner Key 2020 ICCA Results", url: "https://www.varsityvocals.com/events/2020-icca-mw-qf-missouri-state" },
      { text: "Miner Key Instagram", url: "https://www.instagram.com/sandtminerkey/" }
    ]
  },
  {
    id: 3,
    title: "Vice President, ACM Hack Chair",
    organization: "S&T Association for Computer Machinery (ACM)",
    period: "May 2018 - Aug 2020",
    color: "blue",
    description: "Orchestrated a transformative era of S&T's chapter of ACM by engaging with 7 dynamic communities of over 200 members across 100s of events.",
    achievements: [
      "Elevated S&T ACM and its communities by introducing groundbreaking programs such as concept events, captivating socials, and career-shaping workshops.",
      "Played a pivotal role in the design and development of the S&T ACM website and resume portal, facilitating career growth and opportunities for members through a streamlined platform.",
      "Pioneered S&T ACM's social media presence by initiating and managing the organization's first social media accounts, enhancing visibility and engagement.",
      "Grew and created automated tooling for the S&T ACM Discord server, fostering a supportive environment for computer science students to connect and collaborate."
    ],
    links: [
      { text: "S&T ACM Official Website", url: "https://www.mstacm.org/" },
      { text: "S&T ACM Instagram", url: "https://www.instagram.com/mstacm/" },
      { text: "S&T ACM GitHub", url: "https://github.com/mstacm" },
      { text: "S&T CS Department Student Orgs", url: "https://cs.mst.edu/undergraduate-degree/student-organizations/" },
      { text: "S&T CS Department Student Events", url: "https://cs.mst.edu/newsandevents/student-events/" }
    ]
  },
  {
    id: 4,
    title: "Public Relations",
    organization: "SPECTRUM (LGBTQ+)",
    period: "Apr 2019 - May 2020",
    color: "blue",
    description: "Cultivated a profound sense of belonging and community for S&T LGBTQ+ students, fostering an inclusive environment that transcends the digital and physical realms.",
    achievements: [
      "Revolutionized SPECTRUM's outreach by catapulting the organization into the digital age with a vibrant and active presence on Instagram and Twitter.",
      "Amplified SPECTRUM's visibility on campus by personally designing and strategically disseminating modern marketing materials.",
      "Secured a dedicated office space, providing the executive team with a centralized hub for meetings and storage, fostering organizational efficiency.",
      "Successfully advocated for SPECTRUM's financial needs, securing an impressive $4,000 per semester budget as the organization's representative at Student Council Meetings."
    ],
    links: [
      { text: "S&T SPECTRUM Website", url: "https://lgbtqrolla.org/resources/campus/" },
      { text: "S&T SPECTRUM Instagram", url: "https://www.instagram.com/sandtspectrum/" },
      { text: "S&T SPECTRUM x Student Diversity Initiatives", url: "https://hwb.mst.edu/engagementandbelonging/" }
    ]
  },
  {
    id: 5,
    title: "Cybersecurity Fellow",
    organization: "TAVtech",
    period: "Dec 2019 - Jan 2020",
    color: "blue",
    description: "Chosen as a standout participant in the prestigious TAVtech Cybersecurity Fellowship's Winter 2019 class, studying cybersecurity while fully immersed in the vibrant Israeli culture and startup ecosystem.",
    achievements: [
      "Immersed myself in over 80 hours of intensive and immersive cybersecurity training throughout an entire winter break.",
      "Ventured into a new city, embracing its language and culture while forging lifelong friendships with fellow participants.",
      "Took innovation by storm by conceiving, designing, and developing a groundbreaking mobile app to promote STD testing and transparency within the LGBTQ+ community, achieving a 1st-place finish at the TAVtech hackathon.",
      "Skillfully secured a $1,000 no-strings-attached grant from the esteemed 1517 Fund, propelling the development of a robust MVP of the aforementioned mobile app following the conclusion of the fellowship."
    ],
    links: [
      { text: "TAVtech Official Website", url: "https://taventure.org/" },
      { text: "TAVtech LinkedIn Page", url: "https://www.linkedin.com/company/tavml/" },
      { text: "S&T TAVtech Article", url: "https://econnection.mst.edu/2020/04/technology-fellowship-takes-student-to-in-israel/" }
    ]
  },
  {
    id: 6,
    title: "Alumni, Campus Ambassador",
    organization: "Out for Undergrad (O4U)",
    period: "Feb 2020 - Oct 2020",
    color: "blue",
    description: "Orchestrated and executed impactful outreach programs tailored to connect with LGBTQ+ students across Midwest universities, fostering a sense of community and support.",
    achievements: [
      "Captivated audiences through dynamic presentations and shared slide decks with thousands of students, resulting in 156 applications to O4U initiatives."
    ],
    links: [
      { text: "Out for Undergrad Website", url: "https://www.outforundergrad.org/tech" },
      { text: "O4U LinkedIn Post", url: "https://www.linkedin.com/posts/christopherlgu_o4ut2019-activity-6582278201970688000--Rc8?utm_source=share&utm_medium=member_desktop" }
    ]
  },
  {
    id: 7,
    title: "Community Expert, Top 50 Hacker",
    organization: "Major League Hacking",
    period: "Aug 2018 - Jan 2021",
    color: "blue",
    description: "Leveraged my expertise in pioneering my university's inaugural hackathon group to become an official advisor, extending invaluable guidance to new and experienced community organizers.",
    achievements: [
      "Conducted video call sessions, providing comprehensive support in areas such as finances, logistics, website development, judging, and day-of event scenarios, imparting crucial insights to fellow organizers.",
      "Contributed to the enhancement of community-building practices by reporting key feedback and insights to MLH, actively shaping and refining the official, free organizer handbook available online."
    ],
    links: [
      { text: "MLH Official Website", url: "https://mlh.io/" },
      { text: "MLH Top 50 - Christopher Gu", url: "https://top.mlh.io/2020/profiles/christopher-gu" },
      { text: "MLH Top 50 - The PickHacks Team", url: "https://top.mlh.io/2020/profiles/the-pickhacks-team" },
      { text: "MLH Community Spotlight", url: "https://www.instagram.com/mlhacks/p/CsFB_HLOTTm/?img_index=1" },
      { text: "MLH Article", url: "https://news.mlh.io/how-becoming-a-hackathon-organizer-helped-me-launch-my-first-business-stellar-effects-04-04-2023" },
      { text: "HackCon LinkedIn Post", url: "https://www.linkedin.com/posts/christopherlgu_hackconvii-mlh-hackathon-activity-6572181956291887104-LJuQ" }
    ]
  },
  {
    id: 8,
    title: "Student Ambassador",
    organization: "Missouri S&T CS Department",
    period: "Dec 2018 - Dec 2020",
    color: "blue",
    description: "Hosted engaging sessions for prospective high school students and parents, providing an insightful introduction to the CS department and adeptly addressing their inquiries.",
    achievements: [
      "Collaborated with distinguished alumni, the chair, and the dean in brainstorming transformative enhancements for the department, contributing to its overall evolution and success.",
      "Spearheaded the organization and digitization of student files, elevating data upkeep and transparency within the department.",
      "Represented the university at the renowned Grace Hopper Celebration in 2018 and 2019, showcasing a commitment to advancing diversity and inclusion in technology on a global scale."
    ],
    links: [
      { text: "S&T CS Department Website", url: "https://cs.mst.edu/" },
      { text: "S&T Student Ambassadors Website", url: "https://futurestudents.mst.edu/contact-us/studentambassadors/" }
    ]
  },
  {
    id: 9,
    title: "Sponsorship Director",
    organization: "Impact Labs",
    period: "Dec 2018 - Nov 2019",
    color: "blue",
    description: "Secured over 10k in sponsorships for the Impact Labs annual summit in NYC, leveraging strategic partnerships with major companies like Lyft and Digital Ocean.",
    achievements: [
      "Dynamically marketed Impact Labs events, deploying effective outreach strategies across my extensive network and the organizations under my leadership, maximizing visibility and engagement."
    ],
    links: [
      { text: "Impact Labs Website", url: "https://www.impactlabs.io/" }
    ]
  },
  {
    id: 10,
    title: "Under 30 Scholar",
    organization: "Forbes",
    period: "Oct 2018, Oct 2019",
    color: "blue",
    description: "Catapulted the Under 30 Scholar program at Forbes into the spotlight through a strategically crafted series of LinkedIn posts, amassing an extraordinary 10 million views and generating a flood of thousands of applications.",
    achievements: [
      "Showcased exceptional networking prowess at multiple Under 30 summits, seamlessly cultivating valuable connections and securing sponsorships for various groups under my leadership.",
      "Clinched 2nd place in the prestigious Forbes Under 30 hackathon in both 2018 and 2019."
    ],
    links: [
      { text: "Forbes Under 30 Scholar LinkedIn Post 1", url: "https://www.linkedin.com/posts/christopherlgu_forbes30under30-under30summit-activity-6561418190285602816-ed4A" },
      { text: "Forbes Under 30 Scholar LinkedIn Post 2", url: "https://www.linkedin.com/posts/christopherlgu_under30summit-activity-6595360551294107648-DrHR" },
      { text: "Forbes Under 30 Scholar Website", url: "https://www.forbes.com/sites/forbespr/2017/09/12/forbes-under-30-scholars-program-focused-on-diversity-and-inclusion-offers-1000-college-students-access-to-2017-forbes-under-30-summit/" },
      { text: "S&T Forbes 2019 Article", url: "https://econnection.mst.edu/2020/03/st-student-named-top-hacker-forbes-under-30-scholar/" },
      { text: "S&T Forbes 2018 Article", url: "https://econnection.mst.edu/2018/11/two-students-selected-for-forbes-program/" }
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

export default function EducationPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
          <NavBar />
          
          <main className="flex-1 pt-6">
            {/* Education Timeline */}
            <div className="mb-8">
              <div className="w-full space-y-6">
                {educationData.map((education) => (
                  <div key={education.id}>
                    <div className="flex items-start gap-2">
                      {/* Dot */}
                      <div className={`w-3 h-3 rounded-full ${getColorClasses(education.color)} flex-shrink-0 mt-0.5`}></div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <div className="mb-1">
                          <h4 className={`text-xs font-medium text-black dark:text-white`}>
                            {education.title}
                          </h4>
                        </div>
                        
                        {/* Institution and Period */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{education.institution}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{education.period}</span>
                        </div>
                        
                        {/* Location, GPA, and Honors */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{education.location}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">GPA {education.gpa}, {education.honors}</span>
                        </div>
                        
                        {/* Coursework */}
                        <div className="space-y-2 mb-3">
                          <p className="text-xs text-black dark:text-white leading-relaxed font-medium">Coursework:</p>
                          <div className="space-y-1">
                            {education.coursework.map((course, index) => (
                              <p key={index} className="text-xs text-black dark:text-white leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                                {course}
                              </p>
                            ))}
                          </div>
                        </div>
                        
                        {/* Scholarships */}
                        <div className="space-y-2 mb-3">
                          <p className="text-xs text-black dark:text-white leading-relaxed font-medium">Scholarships:</p>
                          <div className="space-y-1">
                            {education.scholarships.map((scholarship, index) => (
                              <p key={index} className="text-xs text-black dark:text-white leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                                {scholarship}
                              </p>
                            ))}
                          </div>
                        </div>
                        
                        {/* Awards & Honors */}
                        <div className="space-y-2 mb-3">
                          <p className="text-xs text-black dark:text-white leading-relaxed font-medium">Awards & Honors:</p>
                          <div className="space-y-1">
                            {education.awards.map((award, index) => (
                              <p key={index} className="text-xs text-black dark:text-white leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                                {award}
                              </p>
                            ))}
                          </div>
                        </div>
                        
                        {/* Transcript */}
                        <div className="space-y-2 mb-3">
                          <p className="text-xs text-black dark:text-white leading-relaxed font-medium">{education.transcript}</p>
                        </div>
                        
                        {/* Recommendation */}
                        {education.recommendation && (
                          <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed italic mb-2">
                              "{education.recommendation.text}"
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                              — {education.recommendation.author}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurriculars Timeline */}
            <div className="mb-8">
              <div className="w-full space-y-6">
                {extracurricularData.map((activity) => (
                  <div key={activity.id}>
                    <div className="flex items-start gap-2">
                      {/* Dot */}
                      <div className={`w-3 h-3 rounded-full ${getColorClasses(activity.color)} flex-shrink-0 mt-0.5`}></div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <div className="mb-1">
                          <h4 className={`text-xs font-medium text-black dark:text-white`}>
                            {activity.title}
                          </h4>
                        </div>
                        
                        {/* Organization and Period */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">{activity.organization}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{activity.period}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-xs text-black dark:text-white leading-relaxed mb-3">
                          {activity.description}
                        </p>
                        
                        {/* Achievements */}
                        {activity.achievements && (
                          <div className="space-y-2 mb-3">
                            {activity.achievements.map((achievement, index) => (
                              <p key={index} className="text-xs text-black dark:text-white leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                                {achievement}
                              </p>
                            ))}
                          </div>
                        )}
                        
                        {/* Links */}
                        {activity.links && (
                          <div className="space-y-2 mb-3">
                            <p className="text-xs text-black dark:text-white leading-relaxed font-medium">Links:</p>
                            <div className="space-y-1">
                              {activity.links.map((link, index) => (
                                <p key={index} className="text-xs text-black dark:text-white leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                                  <a 
                                    href={link.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                  >
                                    {link.text}
                                  </a>
                                </p>
                              ))}
                            </div>
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

"use client"

// Component Imports  
import { NavBar } from "@/components/NavBar"

export default function EducationPage() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="w-full px-6">
        <NavBar />
          
          <main className="flex-1 pt-6">
            {/* Education Section */}
            <div className="mb-8">
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
                            Dean's List (All Semesters)
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Summa Cum Laude Graduate
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                            Outstanding Computer Science Student Award
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
                          <h5 className="text-xs font-medium text-gray-900 dark:text-white">PickHacks (2018-2020)</h5>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Co-Founder & Director</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                          Founded and directed Missouri S&T's first major hackathon, growing from 0 to 500+ participants across 3 years
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                          Secured $50,000+ in sponsorships from companies like Google, Microsoft, and Amazon
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                          Featured in MLH Top 50 Hackathons and recognized by Forbes Under 30
                        </p>
                      </div>
                      
                      {/* Student Ambassadors */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <h5 className="text-xs font-medium text-gray-900 dark:text-white">Student Ambassadors (2017-2020)</h5>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">President (2019-2020)</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                          Led recruitment efforts and represented the university at national conferences
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                          Organized campus tours and events for prospective students and families
                        </p>
                      </div>
                      
                      {/* Impact Labs */}
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <h5 className="text-xs font-medium text-gray-900 dark:text-white">Impact Labs (2018-2020)</h5>
                          <span className="text-xs text-gray-500 dark:text-gray-400">•</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">Co-Founder & Technical Lead</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                          Built technology solutions for local nonprofits and community organizations
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed pl-2 border-l border-gray-200 dark:border-gray-700">
                          Led development of web applications and mobile apps for social impact
                        </p>
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

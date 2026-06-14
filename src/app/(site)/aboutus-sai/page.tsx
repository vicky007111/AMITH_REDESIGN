import type { Metadata } from "next";
import PageHero from "@/app/components/shared/PageHero";
import Features from "@/app/components/Home/Features";
import VisionMission from "@/app/components/Home/VisionMission";

export const metadata: Metadata = {
  title: "About Us (Sai Redesign) | AMITH",
  description: "Redesigned team layout matching the sketch requirements with theme variables.",
};

interface BoardMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const leadershipTeam: BoardMember[] = [
  {
    id: 1,
    name: "Prof. Devadas Manoharan",
    role: "Director / Former Vice Chancellor",
    description: "A highly distinguished academician and structural engineering authority. Bringing decades of institutional leadership and deep civil engineering expertise to the core advisory board.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Retired MES Colonel",
    role: "Director / Military Engineering Veteran",
    description: "Overseeing large-scale infrastructure executions with strategic military engineering precision. Specializes in project management, defense infrastructure, and operational efficiency.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    name: "Senior IIT-Madras Consultant",
    role: "Technical Director & Advisor",
    description: "Bridging cutting-edge structural research with practical real-world engineering solutions. Focuses on advanced consultancy, seismic evaluation, and complex concrete structures.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  }
];

export default function AboutUsSaiPage() {
  return (
    <main className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      
      <PageHero
        label="About Us"
        title="A Team Built on Decades of Engineering Excellence"
        subtitle="AMITH Civil & Allied Engineering Services Pvt Ltd is directed by three of South India's most distinguished civil engineering professionals."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us (Sai)" },
        ]}
      />

      <Features />

      {/* --- REDESIGNED LEADERSHIP SECTION (Matches Sketch) --- */}
      <section className="bg-neutral-50 dark:bg-neutral-900/50 py-20 px-6 md:px-12 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-neutral-900 dark:text-white">
              Our Board of Directors
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto text-sm md:text-base">
              The core background profiles of our leadership team are fully visible directly below.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {leadershipTeam.map((member) => (
              
              /* Row Layout: Image left, content right */
              <div 
                key={member.id}
                className="flex flex-col md:flex-row items-stretch bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden p-6 gap-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                
                {/* Photo container (Ph) */}
                <div className="w-full md:w-1/3 min-h-[240px] relative rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description Text Container (des) */}
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">
                    {member.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                    {member.description}
                  </p>
                </div>

              </div>

            ))}
          </div>

        </div>
      </section>

      <VisionMission />
    </main>
  );
}
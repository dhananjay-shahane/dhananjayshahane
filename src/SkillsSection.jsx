import React from "react";
import { skills } from "./constant/constant.jsx"; // Ensure this file exports an array of skills
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const SkillsSection = () => {
  // Split the skills into two rows for demonstration
  const midIndex = Math.ceil(skills.length / 2);
  const topRowSkills = skills.slice(0, midIndex);
  const bottomRowSkills = skills.slice(midIndex);

  return (
    <div className="py-10 md:py-20 lg:py-28">
      <div className="receptacle max-w-7xl mx-auto p-5">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-0">
        <div className="space-y-5 lg:col-span-8">
          <h1 className="text-start font-epilogue text-2xl font-bold text-neutral-900 md:text-5xl">
            Discover My Diverse Skill Set for Creating Tomorrow's Solutions!
          </h1>
          <div className="max-w-4xl space-y-5">
            <p className="text-base font-normal text-neutral-600 md:text-xl">
              Unlike many freelance software engineers, I approach your project as a distinct opportunity rather than just another task on my list.
            </p>
            <p className="text-base font-normal text-neutral-600 md:text-xl">
              My expertise spans design, management, creative direction, and development. Throughout my projects, I’ve learned that effective workflows, transparent communication, and self-discipline are vital for success. By focusing on these principles, I’ve built a robust work ethic that fuels my success across various domains.
            </p>
            <p className="text-base font-normal text-neutral-600 md:text-xl">
              Unlike conventional IT service agencies, I won’t charge you hefty fees for slow work that is often outsourced to underpaid developers and designers.
            </p>
            <p className="text-base font-normal text-neutral-600 md:text-xl">
              I manage all the work personally and am ready to get involved in every detail. Should I need to collaborate with someone else, I will be open about it. I strive to be a genuine partner, dedicating my full focus to our project together.
            </p>
          </div>
        </div>

          <div className="md:col-span-4">
            <div className="group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm p-5 md:min-h-[300px]">
              <h3 className="font-epilogue text-xl font-bold text-neutral-900 md:text-3xl">
                Skills
              </h3>
              <div className="absolute bottom-0 left-4 right-4 top-10 translate-y-6 rounded-t-2xl bg-gradient-to-br from-primary to-secondary/10 transition-transform duration-300 group-hover:translate-y-3 group-hover:rotate-[-1deg] md:top-20">
                {/* Top Row Skills */}
                <motion.div
                  className="flex flex-wrap justify-center mt-4"
                  initial={{ x: -100 }} // Start position for the top row
                  animate={{ x: 0 }}    // End position for the top row
                  transition={{ duration: 0.5 }}
                >
                  {topRowSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center m-2 p-2 border rounded-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={skill.logo} // Assuming each skill has a logo property
                        alt={skill.name}
                        className="h-10 w-10"
                      />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Bottom Row Skills */}
                <motion.div
                  className="flex flex-wrap justify-center mt-4"
                  initial={{ x: 100 }} // Start position for the bottom row
                  animate={{ x: 0 }}    // End position for the bottom row
                  transition={{ duration: 0.5 }}
                >
                  {bottomRowSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center m-2 p-2 border rounded-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={skill.logo} // Assuming each skill has a logo property
                        alt={skill.name}
                        className="h-10 w-10"
                      />
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

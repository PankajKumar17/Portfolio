import React from "react";
import SkillCard from "../components/SkillCard";
import ExperienceCard from "../components/ExperienceCard";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#00000f] text-white' : 'bg-[#efeae3] text-gray-900'} p-8 transition-colors duration-300`}>
      {/* Main Skills Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-6xl font-bold text-center ${isDark ? 'text-white' : 'text-gray-900'} mb-16`}>
          MY SKILLS
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <SkillCard src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" label="Flutter"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" label="React"/>
            <SkillCard src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" label="Tailwind CSS"/>
            <SkillCard src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" label="Next.js"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" label="C++"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" label="Node.js"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" label="MongoDB"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" label="MySQL"/>
          </div>

          
          <ExperienceCard/>
        </div>

        <div className="mt-16">
          <h2 className={`text-3xl font-bold text-center ${isDark ? 'text-purple-500' : 'text-orange-600'} mb-8`}>
            ADDITIONAL SKILLS
          </h2>
          <div className={`${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-orange-200'} rounded-lg p-8 border relative transition-colors duration-300`}>
            <div className={`absolute top-0 left-8 h-full w-48 ${isDark ? 'bg-gradient-to-r from-slate-900 to-transparent' : 'bg-gradient-to-r from-white to-transparent'} z-10`}></div>
            <div className={`absolute top-0 right-8 h-full w-48 ${isDark ? 'bg-gradient-to-l from-slate-900 to-transparent' : 'bg-gradient-to-l from-white to-transparent'} z-10`}></div>
            
            <div className="overflow-hidden">
              <div className="flex gap-8 animate-scroll">
                <div className="flex gap-8 shrink-0">
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" />
                  </div>
                  <div className="w-12 h-12">
                    <h2 className="text-2xl text-center">express</h2>
                  </div>
                </div>
                
                <div className="flex gap-8 shrink-0">
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" />
                  </div>
                  <div className="w-12 h-12">
                    <h2 className="text-2xl text-center">express</h2>
                  </div>
                </div>
                <div className="flex gap-8 shrink-0">
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" />
                  </div>
                  <div className="w-12 h-12">
                    <h2 className="text-2xl text-center">express</h2>
                  </div>
                </div>
                <div className="flex gap-8 shrink-0">
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="Firebase" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="PyTorch" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
                  </div>
                  <div className="w-12 h-12">
                    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" />
                  </div>
                  <div className="w-12 h-12">
                    <h2 className="text-2xl text-center">express</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

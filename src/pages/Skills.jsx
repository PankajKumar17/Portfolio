import React from "react";
import SkillCard from "../components/SkillCard";
import ExperienceCard from "../components/ExperienceCard";

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#00000f] text-white p-8">
      {/* Main Skills Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center text-white mb-16">
          MY SKILLS
        </h1>

        <div className="flex items-center justify-center gap-12">
          <div className="grid grid-cols-4 gap-6">
            <SkillCard src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" label="Flutter"/>
            {/* <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" />
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" />
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" /> */}
            {/* <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" /> */}
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" label="React"/>
            <SkillCard src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" label="Tailwind CSS"/>
            <SkillCard src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/24154156/dango-inner-2.webp" label="Next.js"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" label="C++"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" label="Node.js"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" label="MongoDB"/>
            <SkillCard src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" label="MySQL"/>
            {/* <SkillCard src=""/> */}
          </div>

          
          <ExperienceCard/>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-purple-500 mb-8">
            ADDITIONAL SKILLS
          </h2>
          <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 relative">
            <div className="absolute top-0 left-8 h-full w-48 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute top-0 right-8 h-full w-48 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
            
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

import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectTemplate from "../components/ProjectTemplate";
import { useTheme } from "../context/ThemeContext";

const projectsData = {
  flashcards: {
    title: "Flash Cards",
    description: "An interactive learning application that helps users study and memorize information through digital flashcards.",
    techStack: ["React", "JavaScript", "CSS3"],
    images: [{ src: "/images/flash_cards.png", alt: "Flash Cards Main" },{ src: "/images/Flashcard.png", alt: "Flash Cards Main" },{ src: "/images/imageCard.png", alt: "Flash Cards Main" },{ src: "/images/ThinkFlipHome.png", alt: "Flash Cards Main" },{ src: "/images/ThinkflipHistory.png", alt: "Flash Cards Main" },{ src: "/images/ThinkflipMcq.png", alt: "Flash Cards Main" }],
    videos: [{ src: "https://res.cloudinary.com/drdrcbfqj/video/upload/v1764761016/1764515324059533_kdmhfy.mov" }],
    features: [
{ 
  title: "Perfect for exam revision",
  description: "Uses an adaptive spaced repetition algorithm to schedule flashcards based on user recall performance. Cards that are harder to remember appear more frequently, while mastered cards are shown less often. This helps optimize long-term retention with minimal effort."
}, // small flashcard

{ 
  title: "Visual Flashcards",
  description: "Generate flashcards with relevant images in the background to enhance visual memory. Image-based cues help users better associate concepts with visuals, making learning more engaging and effective. Ideal for diagrams, processes, and visual-heavy topics."
}, // image behind flashcard

{ 
  title: "Scanned Documents Hub",
  description: "All scanned documents are displayed on the home page for quick access. Users can easily revisit previously scanned content and continue learning without rescanning. This acts as a centralized knowledge dashboard."
}, // home page scanned docs

{ 
  title: "Scan History & Organization",
  description: "Maintains a complete history of all scanned texts with proper organization. Each scan is linked to its generated flashcards and MCQs, allowing users to track progress and revisit older material anytime."
}, // scan history

{ 
  title: "MCQ-Based Practice",
  description: "Automatically generate multiple-choice questions from scanned content. MCQs help users test their understanding, reinforce concepts, and prepare for exams through active recall and self-assessment."
},
    ],
    challenges: "Designing an efficient spaced repetition flow.",
    solution: "Implemented SM-2 inspired logic.",
    githubUrl: "https://github.com/PankajKumar17"
  },
  sniffi: {
    title: "Sniffi",
    description: "A community hub for pet owners to share and discover.",
    techStack: ["React", "Node", "MongoDB"],
    images: [{ src: "/images/sniffi_image.png", alt: "Sniffi" }],
    videos: [{ src: "/videos/sniffi-demo.mp4", poster: "/images/sniffi_image.png", caption: "Sniffi app walkthrough" }],
    features: [
      { title: "Profiles", description: "Rich pet profiles with activity logs." },
      { title: "Discovery", description: "Browse nearby pet-friendly locations." }
    ],
    challenges: "Real-time updates & geolocation performance.",
    solution: "Optimized data fetching & memoization.",
    githubUrl: "https://github.com/PankajKumar17"
  },
  skipq: {
    title: "SkipQ",
    description: "Virtual queue management reducing physical wait times.",
    techStack: ["React", "Redis", "WebSocket"],
    images: [{ src: "/images/skipQ1.png", alt: "SkipQ" },{ src: "/images/skipQlogin.jpg", alt: "SkipQlogin" },{ src: "/images/skipQhome.jpg", alt: "SkipQ" },{ src: "/images/skipQgame.jpg", alt: "SkipQ" },{ src: "/images/skipQpay.png", alt: "SkipQ" },{ src: "/images/skipQqr.png", alt: "SkipQ" }],
    videos: [{ src: "https://res.cloudinary.com/drdrcbfqj/video/upload/v1764673267/skipQ_zyzv0w.mp4" }],
    features: [
{
  title: "Authentication",
  description: "A secure and reliable login and signup system that protects user data using encrypted credentials. Supports persistent sessions to avoid repeated logins. Ensures only authorized users can access queue and payment features."
},
{
  title: "Live Queue Updates",
  description: "Displays real-time queue positions directly on the home page using live data synchronization. Users are instantly notified of changes in their position. This reduces uncertainty and improves transparency in waiting times."
},
{
  title: "Interactive Games",
  description: "Engaging mini-games are provided to keep users entertained while waiting in the queue. This reduces perceived waiting time and enhances overall user experience. Games are lightweight and accessible without disrupting queue status."
},
{
  title: "Flexible Payments",
  description: "Supports both online and offline payment options to ensure seamless transactions. Integrated with Razorpay for secure and fast online payments. Offline wallet-based payments are available for low-connectivity scenarios."
},
{
  title: "QR Validity",
  description: "QR codes enable offline verification even without an active internet connection. Each QR is time-bound and securely validated to prevent misuse. This ensures smooth entry and verification at checkpoints."
}
    ],
    challenges: "Maintaining sync under load.",
    solution: "Redis pub/sub for lightweight messaging.",
    githubUrl: "https://github.com/PankajKumar17"
  },
  hostel: {
    title: "Hostel Suvidha",
    description: "Hostel administration & student service portal.",
    techStack: ["React", "MySQL", "Stripe"],
    images: [{ src: "/images/hostel_suvidha.png", alt: "Hostel Suvidha" }],
    videos: [{ src: "/videos/hostel-demo.mp4", poster: "/images/hostel_suvidha.png", caption: "Hostel management system demo" }],
    features: [
      { title: "Room Allocation", description: "Track and assign rooms dynamically." },
      { title: "Payments", description: "Integrated secure fee processing." }
    ],
    challenges: "Consistent multi-entity relationships.",
    solution: "Normalized schema & clear data flows.",
    githubUrl: "https://github.com/PankajKumar17"
  }
};

const Project = () => {
  const { isDark } = useTheme();
  const [openKey, setOpenKey] = useState(null);
  const openData = openKey ? projectsData[openKey] : null;

  return (
    <div className="relative w-full">
      <div className={`${isDark ? 'bg-[#00000f] text-white' : 'bg-[#efeae3] text-gray-900'} py-20 px-8 min-h-[140vh] w-full flex flex-col justify-center items-center transition-filter transition-colors duration-300 ${openKey ? 'blur-sm' : ''}`}>      
        <h2 className="text-6xl font-semibold">A small selection</h2>
        <h2 className="text-6xl font-semibold">of my work</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 p-6 mt-12">
          <div className="card1 w-132 h-84 rounded-2xl relative group">
            <div className={`absolute rounded-2xl inset-0 ${isDark ? 'bg-gradient-to-r from-blue-400 to-indigo-800' : 'bg-gradient-to-r from-orange-400 to-red-500'} transition-opacity delay-400 duration-100 group-hover:opacity-0`}></div>
            <div className="relative w-132 h-84 px-12 pt-12 z-10 hover:p-0 transition-all duration-400 delay-100 ease-in-out ">
              <ProjectCard src="images/flash_cards.png" alt="Flash Cards Project" onOpen={() => setOpenKey('flashcards')} />
            </div>
          </div>
          <div className="card1 w-132 h-84 rounded-2xl relative group">
            <div className={`absolute rounded-2xl inset-0 ${isDark ? 'bg-gradient-to-r from-orange-600 to-yellow-400' : 'bg-gradient-to-r from-yellow-400 to-orange-500'} transition-opacity delay-400 duration-100 group-hover:opacity-0`}></div>
            <div className="relative w-132 h-84 px-12 pt-12 z-10 hover:p-0 transition-all duration-400 delay-100 ease-in-out ">
              <ProjectCard src="images/sniffi_image.png" alt="Sniffi Project" onOpen={() => setOpenKey('sniffi')} />
            </div>
          </div>
          <div className="card1 w-132 h-84 rounded-2xl relative group">
            <div className={`absolute rounded-2xl inset-0 ${isDark ? 'bg-gradient-to-r from-purple-600 to-indigo-600' : 'bg-gradient-to-r from-orange-500 to-pink-500'} transition-opacity delay-400 duration-100 group-hover:opacity-0`}></div>
            <div className="relative w-132 h-84 px-12 pt-12 z-10 hover:p-0 transition-all duration-400 delay-100 ease-in-out ">
              <ProjectCard src="images/skipq.png" alt="SkipQ Project" onOpen={() => setOpenKey('skipq')} />
            </div>
          </div>
          <div className="card1 w-132 h-84 rounded-2xl relative group">
            <div className={`absolute rounded-2xl inset-0 ${isDark ? 'bg-gradient-to-r from-slate-900 to-slate-600' : 'bg-gradient-to-r from-orange-300 to-red-400'} transition-opacity delay-400 duration-100 group-hover:opacity-0`}></div>
            <div className="relative w-132 h-84 px-12 pt-12 z-10 hover:p-0 transition-all duration-400 delay-100 ease-in-out ">
              <ProjectCard src="images/hostel_suvidha.png" alt="Hostel Suvidha Project" onOpen={() => setOpenKey('hostel')} />
            </div>
          </div>
        </div>
      </div>
      {openData && (
        <ProjectTemplate
          {...openData}
          onClose={() => setOpenKey(null)}
        />
      )}
    </div>
  );
};

export default Project;

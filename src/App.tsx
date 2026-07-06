import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, PenTool, Activity, Edit2, Zap, Search, ArrowRight, Send, Sun, Plus, Clover, ArrowLeft } from 'lucide-react';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const faqs = [
  {
    question: "Do I need to pay to try Zo? What AI models can I use?",
    answer: "Zo offers a free trial with access to our standard AI models. For advanced features and premium models, we have various paid plans to suit your needs."
  },
  {
    question: "Is my data secure? Will you train AI on my work?",
    answer: "Your data privacy and security are our top priorities. We use enterprise-grade encryption and explicitly do not train our AI models on your personal or workspace data without your consent."
  },
  {
    question: "Is Zo like OpenClaw or Hermes?",
    answer: "While Zo shares some capabilities with other AI tools, it provides a unique, unified workspace that seamlessly integrates agents, automation, and a suite of powerful built-in services tailored for your personal cloud."
  },
  {
    question: "How can I get involved with the Zo community?",
    answer: "We'd love to have you! Join our active community on Discord, participate in our forums, and follow us on social media to connect with other users, share ideas, and stay updated."
  }
];

const lifeTestimonials = [
  {
    name: 'Anthena',
    text: "I had 12 tools and I was able to replace all of them with just Zo. I made a new website simply by telling Zo what I wanted, and had this really magical experience of finally feeling like the vision in my mind was actually in front of me.",
    bgGradient: "from-blue-400 via-purple-300 to-orange-300",
    videoUrl: "https://videos.pexels.com/video-files/4428754/4428754-uhd_2560_1440_25fps.mp4"
  },
  {
    name: 'Jing',
    text: "What Zo lets me do is focus on the things I know best: the trading strategy, and the research generation workflow, without having to worry about the specific infrastructure details.",
    bgGradient: "from-emerald-400 via-teal-300 to-cyan-300",
    videoUrl: "https://videos.pexels.com/video-files/4433390/4433390-uhd_2560_1440_25fps.mp4"
  },
  {
    name: 'Joe',
    text: "With Zo, I'm able to offer my services to clients, and have a balance between life and work. So in some form it gives me the freedom to gain my life back, and spend more time with my family.",
    bgGradient: "from-rose-400 via-fuchsia-300 to-indigo-300",
    videoUrl: "https://videos.pexels.com/video-files/8814525/8814525-uhd_2560_1440_25fps.mp4"
  },
  {
    name: 'Kate',
    text: "Zo has completely transformed how our team collaborates. We've streamlined our processes and the AI capabilities are just phenomenal.",
    bgGradient: "from-amber-400 via-orange-300 to-red-300",
    videoUrl: "https://videos.pexels.com/video-files/4428754/4428754-uhd_2560_1440_25fps.mp4"
  }
];

const buildDreamsData = [
  {
    id: 'build',
    label: 'Build',
    title: 'Build websites and applications',
    subtitle: 'Modern stack, instantly deployed',
    description: 'Deploy high-performance web applications with a click. Zo handles the infrastructure, routing, and deployment pipelines so you can focus on the user experience.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-slate-50 border-l border-slate-200 flex items-center justify-center relative overflow-hidden">
        <img src="/Build.png" alt="Build" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    id: 'generate',
    label: 'Generate',
    title: 'Generate code, content, and ideas',
    subtitle: 'AI-first generation, zero friction',
    description: 'Transform your thoughts into reality instantly. Use natural language to generate fully functional applications, stunning visuals, and compelling copy without writing a single line of code.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-slate-50 border-l border-slate-200 flex items-center justify-center relative overflow-hidden">
        <img src="/generate.png" alt="Generate" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    id: 'automate',
    label: 'Automate',
    title: 'Run complex automations',
    subtitle: 'Connect everything, everywhere',
    description: 'Create powerful workflows that connect your favorite tools. From simple triggers to complex multi-step processes, automate your daily tasks without writing scripts.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-slate-50 border-l border-slate-200 p-8 flex items-center justify-center relative overflow-hidden">
        {/* Placeholder graphic for Automate */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent"></div>
        <div className="relative z-10 w-full max-w-sm">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-4 relative ml-8">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-[2px] bg-purple-300"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-purple-50 border border-purple-100 flex items-center justify-center">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <div className="h-2 w-24 bg-slate-200 rounded"></div>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-4 relative ml-16">
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-[2px] bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 border border-blue-100"></div>
              <div className="h-2 w-32 bg-slate-100 rounded"></div>
            </div>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative ml-24">
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-20 h-[2px] bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-green-50 border border-green-100"></div>
              <div className="h-2 w-20 bg-slate-100 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const chatData = [
  {
    id: 'chat',
    label: 'Chat',
    title: 'Engage in natural conversations',
    subtitle: 'Context-aware, memory-enabled',
    description: 'Chat with Zo like you would with a human. It remembers past interactions and understands the context of your current tasks.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-[#0A0D14] border-l border-white/10 flex items-center justify-center relative overflow-hidden">
        <img src="/Chat (1).png" alt="Chat" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    id: 'integration',
    label: 'Integration',
    title: 'Chat with your tools',
    subtitle: 'Seamless API connections',
    description: 'Directly interact with your favorite applications through chat. Ask for reports, trigger actions, and manage your workflows via text.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-[#0A0D14] border-l border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        <div className="w-full max-w-sm bg-[#0A0D14] border border-white/10 rounded-xl p-6 shadow-2xl relative z-10 flex flex-col gap-4">
           <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white/50">G</div>
              <div className="flex-1 h-2 bg-white/10 rounded"></div>
           </div>
           <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white/50">S</div>
              <div className="flex-1 h-2 bg-white/10 rounded"></div>
           </div>
           <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white/50">N</div>
              <div className="flex-1 h-2 bg-white/10 rounded"></div>
           </div>
        </div>
      </div>
    )
  }
];

const organizeLifeData = [
  {
    id: 'organise',
    label: 'Organise',
    title: 'Keep everything in its place',
    subtitle: 'Unified file system',
    description: 'Store all your files, images, and documents in one central hub. Easily search, tag, and organize your digital life.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-slate-50 border-l border-slate-200 flex items-center justify-center relative overflow-hidden">
        <img src="/Organise.png" alt="Organise" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    id: 'pdfs',
    label: 'PDFs',
    title: 'Read and edit PDFs',
    subtitle: 'Built-in document viewer',
    description: 'Highlight, annotate, and manage all your PDFs natively. Your Zo agent can even summarize large documents for you instantly.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-slate-50 border-l border-slate-200 p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100/50 via-transparent to-transparent"></div>
        <div className="w-full max-w-sm bg-white rounded-xl border border-slate-200 shadow-xl p-6 relative z-10 space-y-3">
          <div className="h-4 w-1/2 bg-slate-200 rounded mb-4"></div>
          <div className="h-2 w-full bg-slate-100 rounded"></div>
          <div className="h-2 w-full bg-slate-100 rounded"></div>
          <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
          <div className="h-10 w-full bg-rose-50 rounded mt-4 border border-rose-100"></div>
        </div>
      </div>
    )
  },
  {
    id: 'voice_notes',
    label: 'Voice notes',
    title: 'Transcribe your thoughts',
    subtitle: 'AI-powered voice recognition',
    description: 'Record voice memos on the go. Zo automatically transcribes and categorizes them, making your audio fully searchable.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-slate-50 border-l border-slate-200 p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent"></div>
        <div className="w-full max-w-sm bg-white rounded-full border border-slate-200 shadow-xl h-16 relative z-10 flex items-center px-6 gap-2">
           <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
           <div className="flex-1 flex items-center gap-1 h-8 justify-center opacity-60">
             <div className="w-1 h-4 bg-indigo-400 rounded-full"></div>
             <div className="w-1 h-6 bg-indigo-400 rounded-full"></div>
             <div className="w-1 h-3 bg-indigo-400 rounded-full"></div>
             <div className="w-1 h-8 bg-indigo-400 rounded-full"></div>
             <div className="w-1 h-5 bg-indigo-400 rounded-full"></div>
             <div className="w-1 h-4 bg-indigo-400 rounded-full"></div>
             <div className="w-1 h-7 bg-indigo-400 rounded-full"></div>
           </div>
           <div className="text-xs font-mono text-slate-400">00:12</div>
        </div>
      </div>
    )
  },
  {
    id: 'spreadsheets',
    label: 'Spreadsheets',
    title: 'Crunch your numbers',
    subtitle: 'Integrated data grids',
    description: 'Create and edit spreadsheets without leaving your workspace. Analyze data and build charts seamlessly.',
    graphic: (
      <div className="w-full h-full min-h-[400px] bg-slate-50 border-l border-slate-200 p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100/50 via-transparent to-transparent"></div>
        <div className="w-full max-w-sm bg-white rounded-xl border border-slate-200 shadow-xl relative z-10 overflow-hidden">
           <div className="flex bg-slate-50 border-b border-slate-200">
             <div className="w-8 border-r border-slate-200 py-1"></div>
             <div className="flex-1 border-r border-slate-200 py-1 px-2 text-[10px] text-slate-400 font-mono text-center">A</div>
             <div className="flex-1 border-r border-slate-200 py-1 px-2 text-[10px] text-slate-400 font-mono text-center">B</div>
             <div className="flex-1 py-1 px-2 text-[10px] text-slate-400 font-mono text-center">C</div>
           </div>
           <div className="flex border-b border-slate-100">
             <div className="w-8 border-r border-slate-200 py-2 text-[10px] text-slate-400 font-mono text-center bg-slate-50">1</div>
             <div className="flex-1 border-r border-slate-100 py-2 px-2 bg-emerald-50"></div>
             <div className="flex-1 border-r border-slate-100 py-2 px-2"></div>
             <div className="flex-1 py-2 px-2"></div>
           </div>
           <div className="flex border-b border-slate-100">
             <div className="w-8 border-r border-slate-200 py-2 text-[10px] text-slate-400 font-mono text-center bg-slate-50">2</div>
             <div className="flex-1 border-r border-slate-100 py-2 px-2"></div>
             <div className="flex-1 border-r border-slate-100 py-2 px-2"></div>
             <div className="flex-1 py-2 px-2"></div>
           </div>
           <div className="flex border-b border-slate-100">
             <div className="w-8 border-r border-slate-200 py-2 text-[10px] text-slate-400 font-mono text-center bg-slate-50">3</div>
             <div className="flex-1 border-r border-slate-100 py-2 px-2"></div>
             <div className="flex-1 border-r border-slate-100 py-2 px-2"></div>
             <div className="flex-1 py-2 px-2 bg-slate-50"></div>
           </div>
        </div>
      </div>
    )
  }
];

const NavItem = ({ title, hasDropdown = true }: { title: string, hasDropdown?: boolean }) => (
  <button className="flex items-center gap-1.5 text-[15px] font-medium text-white/80 hover:text-white transition-colors">
    {title} {hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60 stroke-[2.5]" />}
  </button>
);

const BrowserMockup = ({ url, children }: { url: string, children: React.ReactNode }) => (
  <motion.div variants={fadeInUp} className="w-full shrink-0 flex flex-col bg-[#f2efe9] rounded-t-xl rounded-b-md overflow-hidden border border-slate-200 shadow-xl">
    {/* Browser Header */}
    <div className="h-10 flex items-center px-4 relative border-b border-slate-200/60">
      <div className="flex gap-1.5 absolute left-4">
        <div className="w-2.5 h-2.5 rounded-full bg-[#d8d5cf]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#d8d5cf]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#d8d5cf]"></div>
      </div>
      <div className="mx-auto bg-[#e8e5df] text-[#8c8a86] text-[11px] px-6 py-1 rounded-full font-medium tracking-wide">
        {url}
      </div>
    </div>
    {/* Browser Content */}
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0D14]">
       {children}
    </div>
  </motion.div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 800);
      }
      setProgress(p);
    }, 25);
    return () => clearInterval(interval);
  }, []);
  const [activeLifeTab, setActiveLifeTab] = useState(0);
  const [activeBuildTab, setActiveBuildTab] = useState(0);
  const [activeChatTab, setActiveChatTab] = useState(0);
  const [activeOrganizeTab, setActiveOrganizeTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>

    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#0A0D14] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }} 
            animate={{ scale: 1, opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-64 h-64 md:w-96 md:h-96 relative flex items-center justify-center"
          >
            <img src="/zo_object.png" alt="Loading Zo" className="w-full h-auto object-contain mix-blend-screen drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse" />
          </motion.div>
          
          {/* Bottom right loader */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 flex flex-col items-end gap-3 z-10">
            <div className="text-white font-mono text-5xl md:text-6xl font-bold tracking-tighter drop-shadow-md">
              {progress}<span className="text-white/40 text-3xl md:text-4xl ml-1">%</span>
            </div>
            
            <div className="w-48 md:w-64 h-3 bg-[#111622] rounded-full p-[2px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.05)] border border-white/5 relative overflow-hidden">
              <motion.div 
                className="h-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 relative shadow-[0_0_15px_rgba(236,72,153,0.8)]"
                style={{ width: `${progress}%` }}
              >
                 <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.4)_0%,transparent_40%,rgba(0,0,0,0.3)_100%)] rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-hidden bg-[#0A0D14]">
      <div className="min-h-[900px] md:min-h-[1000px] lg:min-h-[1100px] xl:min-h-[1200px] relative flex flex-col">
        {/* Image Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none bg-cover bg-bottom bg-no-repeat"
          style={{ backgroundImage: 'url(/hero_mp4.png)' }}
        />
        
        {/* Navbar */}
        <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-50 px-8 py-6 flex items-center justify-between max-w-[1400px] w-full mx-auto">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/wordmark.svg" alt="Zo" className="h-6 w-auto brightness-0 invert drop-shadow-md" />
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem title="Pricing" hasDropdown={false} />
            <NavItem title="Resources" hasDropdown={true} />
            <NavItem title="Community" hasDropdown={true} />
            <NavItem title="Download" hasDropdown={false} />
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button className="text-[13px] font-bold text-white/90 hover:text-white px-4 py-2 transition-colors uppercase tracking-wider">
              Sign In
            </button>
            <button className="text-[13px] font-bold text-white px-5 py-2 transition-colors bg-transparent border border-white/30 hover:border-white/50 hover:bg-white/5 rounded-full uppercase tracking-wider">
              Sign Up
            </button>
          </div>
        </div>
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white/90 hover:text-white p-2 ml-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-[#0A0D14] border-b border-white/10 flex flex-col md:hidden overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                <a href="#" className="text-white/80 font-medium text-lg hover:text-white">Pricing</a>
                <a href="#" className="text-white/80 font-medium text-lg hover:text-white">Resources</a>
                <a href="#" className="text-white/80 font-medium text-lg hover:text-white">Community</a>
                <a href="#" className="text-white/80 font-medium text-lg hover:text-white">Download</a>
                
                <div className="h-px bg-white/10 my-2"></div>
                
                <div className="flex flex-col gap-3">
                  <button className="text-left text-white/90 font-bold text-lg hover:text-white transition-colors">
                    Sign In
                  </button>
                  <button className="text-left text-white font-bold text-lg">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-start pt-8 md:pt-12 px-8 md:px-12 max-w-[1400px] w-full mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="max-w-3xl">
          <motion.h1 variants={fadeInUp} className="text-[40px] md:text-[64px] leading-[1.05] font-bold tracking-tight text-white mb-6 font-serif drop-shadow-md">
            Build something<br />
            seriously powerful
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-[18px] text-white/90 font-normal mb-10 max-w-2xl leading-snug drop-shadow-md">
            Run your business and life on Zo with a cloud computer that works 24/7
          </motion.p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
              <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" className="w-[18px] h-[18px] invert" />
                Download <span className="text-lg leading-none">&rarr;</span>
              </div>
            </button>
            
            <motion.p variants={fadeInUp} className="text-[15px] font-medium text-white/50">
              No credit card required
            </motion.p>
          </div>
        </div>
      </motion.div>
      </main>
      </div>

      {/* Meeting Insights Section */}
      <section className="bg-white py-24 px-8 md:px-12 relative z-20">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono tracking-wide text-slate-600 mb-6 uppercase shadow-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              LIFE WITH ZO
            </div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif font-normal text-slate-900 tracking-tight">
              See how everyday people are using Zo
            </motion.h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-8 mb-10 border-b border-slate-200">
            {lifeTestimonials.map((t, i) => (
              <button 
                key={t.name}
                onClick={() => setActiveLifeTab(i)}
                className={`flex items-center gap-2 pb-4 font-medium transition-colors ${activeLifeTab === i ? 'border-b-2 border-blue-500 text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mockup */}
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 md:p-8 bg-gradient-to-br ${lifeTestimonials[activeLifeTab].bgGradient} flex items-center justify-center transition-colors duration-700`}>
              <div className="bg-[#0A0D14] rounded-xl overflow-hidden shadow-2xl w-full max-w-5xl border border-[#333]">
                   {/* Video Grid */}
                   <div className="grid grid-cols-1 gap-4 p-4 lg:p-6">
                     <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-800 border border-white/5">
                       <video key={activeLifeTab} src={lifeTestimonials[activeLifeTab].videoUrl} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                       <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white/90 text-xs px-2.5 py-1 rounded-md flex items-center gap-2">
                         <span className="flex gap-0.5 items-end h-3">
                           <span className="w-0.5 h-1.5 bg-white/80 rounded-full"></span>
                           <span className="w-0.5 h-2.5 bg-white/80 rounded-full"></span>
                           <span className="w-0.5 h-1 bg-white/80 rounded-full"></span>
                         </span>
                         Roy Lee
                       </div>
                     </div>
                   </div>

                </div>
              </div>
            
            <div className="max-w-xl">
              <motion.p variants={fadeInUp} className="text-2xl md:text-3xl text-slate-800 font-medium leading-relaxed font-serif">
                "{lifeTestimonials[activeLifeTab].text}"
              </motion.p>
            </div>
            </div>
        </div>
      </motion.div>
      </section>

      {/* How Zo Works Section */}
      <section className="py-24 bg-[#0A0D14] relative">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="px-6 md:px-12 mx-auto max-w-[1400px]">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif font-normal text-white tracking-tight mb-6">
              How Zo works
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[18px] text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Zo sits at the center of your digital life. It intelligently connects your input sources to your favorite tools, orchestrating workflows automatically so you can focus on what matters.
            </motion.p>
            <div className="mt-8 flex justify-center">
              <button className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
                <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                  Explore more <span className="text-lg leading-none">&rarr;</span>
                </div>
              </button>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden">
            <img src="/how_works.png" alt="How Zo Works" className="w-full object-cover" />
          </div>
        </div>
      </motion.div>
      </section>

      {/* Build Your Dreams Section */}
      <section className="py-24 bg-white relative text-slate-900 border-t border-slate-100">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="px-6 md:px-12 mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono tracking-wide text-slate-600 mb-6 uppercase shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                ZO PLATFORM
              </div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif font-normal tracking-tight mb-4">
                Build your dreams.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[18px] text-slate-500 font-normal">
                Build websites. Run automations. Generate content. Hosting built-in. Zo does it all.
              </motion.p>
            </div>
            <button className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
              <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                Go to your Zo <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <motion.div variants={fadeInUp} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 overflow-x-auto hide-scrollbar">
              {buildDreamsData.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveBuildTab(idx)}
                  className={`flex-1 min-w-[150px] py-4 px-6 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                    activeBuildTab === idx
                      ? 'border-slate-900 text-slate-900 bg-slate-50/50'
                      : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-serif font-normal text-slate-900 mb-2 tracking-tight">
                  {buildDreamsData[activeBuildTab].title}
                </motion.h3>
                <h4 className="text-xl text-slate-500 mb-6 font-normal">
                  {buildDreamsData[activeBuildTab].subtitle}
                </h4>
                <motion.p variants={fadeInUp} className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg">
                  {buildDreamsData[activeBuildTab].description}
                </motion.p>
              </div>
              <div className="h-full flex items-center justify-center">
                {buildDreamsData[activeBuildTab].graphic}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      </section>

      {/* Chat Section */}
      <section className="py-24 bg-[#0A0D14] relative text-white border-t border-white/10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="px-6 md:px-12 mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-mono tracking-wide text-white/80 mb-6 uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                ZO CHAT
              </div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif font-normal tracking-tight mb-4">
                Chat with superpowers.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[18px] text-white/50 font-normal">
                Zo is wherever you are: text, Slack, email, Discord, Telegram, MCP, and more. Access any AI model. Connect to all the tools you use.
              </motion.p>
            </div>
            <button className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
              <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <motion.div variants={fadeInUp} className="border border-white/10 rounded-xl bg-[#0A0D14] overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/10 overflow-x-auto hide-scrollbar">
              {chatData.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveChatTab(idx)}
                  className={`flex-1 min-w-[150px] py-4 px-6 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                    activeChatTab === idx
                      ? 'border-white text-white bg-white/5'
                      : 'border-transparent text-white/50 hover:text-white hover:bg-white/[0.02]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-serif font-normal text-white mb-2 tracking-tight">
                  {chatData[activeChatTab].title}
                </motion.h3>
                <h4 className="text-xl text-white/50 mb-6 font-normal">
                  {chatData[activeChatTab].subtitle}
                </h4>
                <motion.p variants={fadeInUp} className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
                  {chatData[activeChatTab].description}
                </motion.p>
              </div>
              <div className="h-full flex items-center justify-center">
                {chatData[activeChatTab].graphic}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      </section>

      {/* Organize Your Life Section */}
      <section className="py-24 bg-white relative text-slate-900 border-t border-slate-100">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="px-6 md:px-12 mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono tracking-wide text-slate-600 mb-6 uppercase shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                ZO WORKSPACE
              </div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif font-normal tracking-tight mb-4">
                Organize your life
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-[18px] text-slate-500 font-normal">
                Work with anything in your personal cloud. Your Zo comes with storage, compute, networking, and powerful built-in services.
              </motion.p>
            </div>
            <button className="relative group flex-shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
              <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          <motion.div variants={fadeInUp} className="border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 overflow-x-auto hide-scrollbar">
              {organizeLifeData.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveOrganizeTab(idx)}
                  className={`flex-1 min-w-[150px] py-4 px-6 text-sm font-medium transition-colors border-b-2 whitespace-nowrap ${
                    activeOrganizeTab === idx
                      ? 'border-slate-900 text-slate-900 bg-slate-50/50'
                      : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-serif font-normal text-slate-900 mb-2 tracking-tight">
                  {organizeLifeData[activeOrganizeTab].title}
                </motion.h3>
                <h4 className="text-xl text-slate-500 mb-6 font-normal">
                  {organizeLifeData[activeOrganizeTab].subtitle}
                </h4>
                <motion.p variants={fadeInUp} className="text-slate-600 text-base md:text-lg leading-relaxed max-w-lg">
                  {organizeLifeData[activeOrganizeTab].description}
                </motion.p>
              </div>
              <div className="h-full flex items-center justify-center">
                {organizeLifeData[activeOrganizeTab].graphic}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0A0D14] relative text-white border-t border-white/10">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="px-6 md:px-12 mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left side: FAQs */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-mono tracking-wide text-white/80 mb-6 uppercase">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                ZO FAQ
              </div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif font-normal tracking-tight mb-12 text-white">
                Frequently asked questions
              </motion.h2>
              
              <div className="space-y-2">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-white/10">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between py-6 text-left hover:text-white/80 transition-colors"
                    >
                      <span className="text-[20px] font-normal pr-8 text-white">{faq.question}</span>
                      <ChevronDown className={`w-6 h-6 flex-shrink-0 text-white/60 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                    >
                      <motion.p variants={fadeInUp} className="text-white/60 text-lg leading-relaxed">
                        {faq.answer}
                      </motion.p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Card */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-md bg-gradient-to-br from-pink-600 via-purple-600 to-blue-700 rounded-[2rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-20 h-20 mb-8">
                    <div className="w-full h-full rounded-full bg-[#0A0D14] flex items-end justify-center overflow-hidden border-4 border-white/10 shadow-lg relative">
                       <div className="absolute bottom-0 w-[80%] h-[35%] bg-slate-200 rounded-t-[50%]"></div>
                       <div className="absolute bottom-[15%] w-[70%] h-[70%] bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full shadow-[inset_-2px_-4px_10px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center pb-1">
                          <div className="flex gap-3 mb-1">
                            <div className="w-2.5 h-1 border-t-[2.5px] border-slate-800 rounded-t-full"></div>
                            <div className="w-2.5 h-1 border-t-[2.5px] border-slate-800 rounded-t-full"></div>
                          </div>
                          <div className="w-8 h-4 border-b-[3px] border-slate-800 rounded-full mt-1"></div>
                       </div>
                    </div>
                  </div>
                  
                  <motion.h3 variants={fadeInUp} className="text-4xl md:text-5xl leading-[1.15] font-serif font-normal tracking-tight mb-8 text-white">
                    Book a 15-min<br/>intro call
                  </motion.h3>
                  
                  <button className="w-full relative group overflow-hidden rounded-full p-[1px] shadow-xl mb-10">
                    <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-black/80 rounded-full blur-[2px] group-hover:blur-md transition-all"></span>
                    <div className="w-full relative bg-gradient-to-b from-[#222] to-[#000] group-hover:from-[#333] group-hover:to-[#111] transition-colors rounded-full py-3.5 flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
                      <span className="text-[15px] font-medium text-white">Book a call</span>
                    </div>
                  </button>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center text-pink-200">
                        <Send className="w-6 h-6 -rotate-45" fill="currentColor" strokeWidth={1} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Prefer to email?</div>
                        <div className="text-sm text-white/80">hello@zo.com</div>
                      </div>
                    </div>
                    
                    <button className="w-10 h-10 relative group overflow-hidden rounded-full p-[1px] shadow-md hover:scale-105 transition-transform">
                      <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-black/80 rounded-full blur-[2px] group-hover:blur-md transition-all"></span>
                      <div className="w-full h-full relative bg-gradient-to-b from-[#222] to-[#000] transition-colors rounded-full flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] text-white">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 md:py-32 bg-white relative text-slate-900 border-t border-slate-200 overflow-hidden">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: Infinite Vertical Slide */}
          <div className="relative h-[800px] lg:h-[1200px] overflow-hidden -mt-12 lg:-mt-32 pb-12 w-full px-6 lg:px-12">
            <div className="flex flex-col gap-8 animate-slide-vertical">
               {/* duplicate images for seamless loop */}
               <BrowserMockup url="joannakurylo.zo.space">
                 <div className="w-full h-full flex flex-col text-white font-mono text-[9px] sm:text-[10px] tracking-widest bg-[#0A0D14] relative overflow-hidden group cursor-pointer">
                   <div className="py-2 px-4 whitespace-nowrap overflow-hidden text-slate-900 font-bold bg-[#A5F3FF]">
                     BORN · SMB GROWTH @ ZO · 20 AGENTS ONLINE · BUILT ON ZO.COMPUTER ·
                   </div>
                   <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
                     <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                       <div className="flex gap-4 items-center">
                          <motion.h1 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-bold leading-[1.1] text-white">Joanna<br/>Kurylo</motion.h1>
                          <span className="text-slate-500 text-[10px] leading-tight font-mono tracking-widest mt-1">EST.<br/>26</span>
                       </div>
                       <div className="flex gap-3 sm:gap-5 text-slate-300 items-center font-mono">
                         <span className="text-white">home</span>
                         <span>blog</span>
                         <span>data</span>
                         <span>demos</span>
                         <span>contact</span>
                         <button className="bg-[#4CE3FF] text-[#0A1118] px-3 sm:px-4 py-1.5 rounded-full font-bold shadow-[0_0_15px_rgba(76,227,255,0.4)] shrink-0 flex items-center gap-1 ml-2">
                            <span className="text-[8px]">▶</span> hire
                         </button>
                       </div>
                     </div>
                     <div className="border-t border-b border-cyan-900/30 py-4 flex flex-wrap justify-between gap-2 text-slate-500 mt-2">
                       <span>BROOKLYN, NY</span>
                       <span>COMMAND CENTER</span>
                       <span>EST. QUEENS, NY</span>
                     </div>
                     <div className="mt-6 flex flex-col gap-6 text-slate-400">
                        <motion.p variants={fadeInUp} className="leading-relaxed">PERSONAL CLOUD COMMAND LAYER · BUILT<br/>ON ZO.COMPUTER</motion.p>
                        <div className="relative w-fit mt-2">
                           <div className="border border-cyan-800 bg-[#0A0D14] px-4 py-3 flex items-center gap-3 relative z-10">
                              <div className="w-2 h-2 rounded-full bg-[#4CE3FF] shadow-[0_0_8px_rgba(76,227,255,0.8)]"></div>
                              <span className="text-slate-300">34,782 VISITORS</span>
                           </div>
                           <div className="absolute inset-0 border border-cyan-800 translate-x-1.5 translate-y-1.5"></div>
                           
                           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 border border-[#4CE3FF] rotate-45 opacity-60 z-20"></div>
                           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#4CE3FF]/20 blur-md"></div>
                        </div>
                     </div>
                   </div>
                   
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[100px] font-black text-white/90 font-sans tracking-tighter mix-blend-overlay opacity-30">
                      JOANNA
                   </div>
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-[#4CE3FF]/20 blur-[50px] pointer-events-none"></div>

                   <div className="absolute bottom-4 right-4 bg-white text-black px-3 py-1.5 rounded-full flex items-center gap-2 font-sans text-xs font-medium z-30 shadow-lg">
                     <div className="w-4 h-4 bg-slate-200 rounded shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-sm"></div>
                     </div> Built on Zo
                   </div>
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-40 pointer-events-none">
                     <div className="pointer-events-auto">
                     <div className="relative group/cta transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover/cta:opacity-100 group-hover/cta:blur-lg group-hover/cta:to-blue-400/90"></div>
                       <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                         Explore <span className="text-lg leading-none">&rarr;</span>
                       </div>
                     </div>
                     </div>
                   </div>
                 </div>
               </BrowserMockup>

               <BrowserMockup url="studio.zo.space">
                 <div className="w-full h-full relative group cursor-pointer">
                   <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000" alt="Audio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                     <div className="relative group/cta transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover/cta:opacity-100 group-hover/cta:blur-lg group-hover/cta:to-blue-400/90"></div>
                       <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                         Explore <span className="text-lg leading-none">&rarr;</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </BrowserMockup>

               <BrowserMockup url="shop.zo.space">
                 <div className="w-full h-full relative group cursor-pointer">
                   <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" alt="Cyber" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                     <div className="relative group/cta transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover/cta:opacity-100 group-hover/cta:blur-lg group-hover/cta:to-blue-400/90"></div>
                       <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                         Explore <span className="text-lg leading-none">&rarr;</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </BrowserMockup>
               
               <BrowserMockup url="joannakurylo.zo.space">
                 <div className="w-full h-full flex flex-col text-white font-mono text-[9px] sm:text-[10px] tracking-widest bg-[#0A0D14] relative overflow-hidden group cursor-pointer">
                   <div className="py-2 px-4 whitespace-nowrap overflow-hidden text-slate-900 font-bold bg-[#A5F3FF]">
                     BORN · SMB GROWTH @ ZO · 20 AGENTS ONLINE · BUILT ON ZO.COMPUTER ·
                   </div>
                   <div className="p-4 sm:p-6 flex-1 flex flex-col relative z-10">
                     <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                       <div className="flex gap-4 items-center">
                          <motion.h1 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-bold leading-[1.1] text-white">Joanna<br/>Kurylo</motion.h1>
                          <span className="text-slate-500 text-[10px] leading-tight font-mono tracking-widest mt-1">EST.<br/>26</span>
                       </div>
                       <div className="flex gap-3 sm:gap-5 text-slate-300 items-center font-mono">
                         <span className="text-white">home</span>
                         <span>blog</span>
                         <span>data</span>
                         <span>demos</span>
                         <span>contact</span>
                         <button className="bg-[#4CE3FF] text-[#0A1118] px-3 sm:px-4 py-1.5 rounded-full font-bold shadow-[0_0_15px_rgba(76,227,255,0.4)] shrink-0 flex items-center gap-1 ml-2">
                            <span className="text-[8px]">▶</span> hire
                         </button>
                       </div>
                     </div>
                     <div className="border-t border-b border-cyan-900/30 py-4 flex flex-wrap justify-between gap-2 text-slate-500 mt-2">
                       <span>BROOKLYN, NY</span>
                       <span>COMMAND CENTER</span>
                       <span>EST. QUEENS, NY</span>
                     </div>
                     <div className="mt-6 flex flex-col gap-6 text-slate-400">
                        <motion.p variants={fadeInUp} className="leading-relaxed">PERSONAL CLOUD COMMAND LAYER · BUILT<br/>ON ZO.COMPUTER</motion.p>
                        <div className="relative w-fit mt-2">
                           <div className="border border-cyan-800 bg-[#0A0D14] px-4 py-3 flex items-center gap-3 relative z-10">
                              <div className="w-2 h-2 rounded-full bg-[#4CE3FF] shadow-[0_0_8px_rgba(76,227,255,0.8)]"></div>
                              <span className="text-slate-300">34,782 VISITORS</span>
                           </div>
                           <div className="absolute inset-0 border border-cyan-800 translate-x-1.5 translate-y-1.5"></div>
                           
                           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 border border-[#4CE3FF] rotate-45 opacity-60 z-20"></div>
                           <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#4CE3FF]/20 blur-md"></div>
                        </div>
                     </div>
                   </div>
                   
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[100px] font-black text-white/90 font-sans tracking-tighter mix-blend-overlay opacity-30">
                      JOANNA
                   </div>
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-[#4CE3FF]/20 blur-[50px] pointer-events-none"></div>

                   <div className="absolute bottom-4 right-4 bg-white text-black px-3 py-1.5 rounded-full flex items-center gap-2 font-sans text-xs font-medium z-30 shadow-lg">
                     <div className="w-4 h-4 bg-slate-200 rounded shrink-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-400 rounded-sm"></div>
                     </div> Built on Zo
                   </div>
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-40 pointer-events-none">
                     <div className="pointer-events-auto">
                     <div className="relative group/cta transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover/cta:opacity-100 group-hover/cta:blur-lg group-hover/cta:to-blue-400/90"></div>
                       <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                         Explore <span className="text-lg leading-none">&rarr;</span>
                       </div>
                     </div>
                     </div>
                   </div>
                 </div>
               </BrowserMockup>

               <BrowserMockup url="studio.zo.space">
                 <div className="w-full h-full relative group cursor-pointer">
                   <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000" alt="Audio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                     <div className="relative group/cta transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover/cta:opacity-100 group-hover/cta:blur-lg group-hover/cta:to-blue-400/90"></div>
                       <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                         Explore <span className="text-lg leading-none">&rarr;</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </BrowserMockup>

               <BrowserMockup url="shop.zo.space">
                 <div className="w-full h-full relative group cursor-pointer">
                   <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" alt="Cyber" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                   <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                     <div className="relative group/cta transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                       <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover/cta:opacity-100 group-hover/cta:blur-lg group-hover/cta:to-blue-400/90"></div>
                       <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                         Explore <span className="text-lg leading-none">&rarr;</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </BrowserMockup>
            </div>
          </div>
          
          {/* Right side: Content */}
          <div className="px-6 md:px-12 py-24 flex flex-col justify-center h-full min-h-[500px] lg:min-h-[800px] z-10 relative">
            <div className="flex flex-col w-full mt-auto mb-auto max-w-2xl">
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-[56px] leading-[1.15] font-serif font-normal tracking-tight mb-8 text-slate-900">
                See what everyday people are building on Zo.
              </motion.h2>
              
              <div className="flex flex-col gap-6 text-[18px] text-slate-500 font-normal leading-snug mb-12">
                <motion.p variants={fadeInUp}>
                  From custom showcase websites and beautiful e-commerce platforms to full personal cloud command centers, our community is pushing the boundaries of what's possible.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Explore how creators, designers, and developers use our tools to establish their visual identity and build digital experiences that stand out.
                </motion.p>
              </div>
              
              <div className="flex items-start">
                <button className="relative group shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
                  <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                    Explore Gallery <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
            </div>
        </div>
      </motion.div>
      </section>


      {/* Testimonial Section */}
      <section className="bg-[#0A0D14] text-white pt-24 pb-16 md:pt-32 md:pb-24 border-t border-white/5 relative">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          {/* Top Row: Image & Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 md:mb-32">
            {/* Left: Image & Info */}
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col">
              <div className="aspect-[4/5] w-full overflow-hidden mb-6 bg-slate-800 rounded-xl">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Sarah Jenkins" className="w-full h-full object-cover" />
              </div>
              <motion.h3 variants={fadeInUp} className="text-xl font-bold text-white mb-1 tracking-tight">Sarah Jenkins</motion.h3>
              <motion.p variants={fadeInUp} className="text-sm text-white/60 font-medium">Head of Product <span className="text-white font-bold">NexusLabs</span></motion.p>
            </div>
            
            {/* Right: Quote */}
            <div className="lg:col-span-9 xl:col-span-9 flex flex-col justify-start">
              <div className="text-[64px] text-white/70 mb-2 font-serif italic font-bold leading-none mt-[-20px]">“</div>
              <blockquote className="text-3xl md:text-4xl lg:text-[48px] leading-[1.15] font-serif font-normal tracking-tight mb-16 max-w-4xl text-white">
                Zo fundamentally changed how we operate. We replaced five different tools with one cohesive cloud environment. Our entire web and automation infrastructure now runs on autopilot.
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto">
                <button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white/70 hover:text-white">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom Row: Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/20 pt-10 gap-10">
            {/* Metric 1 */}
            <motion.div variants={fadeInUp} className="flex flex-col text-[#888888]">
              <div className="flex items-center gap-2 mb-6 font-bold text-sm tracking-tight">
                 <span className="w-5 h-5 flex items-center justify-center text-lg">✻</span>
                 Workflows
              </div>
              <div className="text-5xl md:text-[64px] font-bold tracking-tight mb-4 text-[#888888]">
                10k+
              </div>
              <div className="text-lg font-medium">
                Automations executed daily
              </div>
            </motion.div>
            
            {/* Metric 2 */}
            <motion.div variants={fadeInUp} className="flex flex-col text-[#888888]">
              <div className="flex items-center gap-2 mb-6 font-bold text-sm tracking-tight">
                 <span className="w-5 h-5 flex items-center justify-center text-xl">✤</span>
                 Performance
              </div>
              <div className="text-5xl md:text-[64px] font-bold tracking-tight mb-4 text-[#888888]">
                &lt;50ms
              </div>
              <div className="text-lg font-medium">
                Average global latency
              </div>
            </motion.div>
            
            {/* Metric 3 */}
            <motion.div variants={fadeInUp} className="flex flex-col text-white">
              <div className="flex items-center gap-2 mb-6 font-bold text-sm tracking-tight text-white/90">
                 <span className="w-5 h-5 flex items-center justify-center text-lg">❀</span>
                 Reliability
              </div>
              <div className="text-5xl md:text-[64px] font-bold tracking-tight mb-4 text-white">
                99.9%
              </div>
              <div className="text-lg font-medium text-white/90">
                Guaranteed platform uptime
              </div>
            </motion.div>
            
          </div>
        </div>
      </motion.div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-[#FAFAFA] py-32 relative overflow-hidden border-t border-slate-200">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <div className="mx-auto max-w-4xl px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          
          {/* 3D Computer Image */}
          <div className="relative mb-20 flex justify-center w-full max-w-[320px] mx-auto">
             <img src="/zo_object.png" alt="Retro 3D Computer" className="w-full h-auto object-contain mix-blend-multiply" />
          </div>
          
          <motion.h2 variants={fadeInUp} className="text-5xl md:text-[64px] font-bold tracking-tight text-slate-900 mb-6 font-serif leading-[1.1]">
            Get started with Zo
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-[20px] text-slate-600 mb-10 max-w-2xl leading-relaxed">
            Created by cofounders Rob (1st engineer at Substack) and Ben (early engineer at Stripe). Backed by the Collisons (Stripe), Guillermo Rauch (Vercel), and many friends.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <button className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-blue-500/50 to-blue-500/80 rounded-full blur-md opacity-90 transition duration-500 group-hover:opacity-100 group-hover:blur-lg group-hover:to-blue-400/90"></div>
              <div className="relative bg-gradient-to-r from-[#1e40af] via-[#3b82f6] to-[#1d4ed8] text-white font-bold text-[14px] px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-blue-400/30">
                <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" className="w-[18px] h-[18px] invert" />
                Download <span className="text-lg leading-none">&rarr;</span>
              </div>
            </button>
            <motion.p variants={fadeInUp} className="text-[15px] font-medium text-slate-500">
              No credit card required
            </motion.p>
          </div>
          
              </div>
      </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#030614] pt-32 pb-12 border-t border-white/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-start">
          <img src="/Footer_11.png" alt="Footer Background" className="w-full h-full object-cover object-left" />
        </div>
        
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          <div className="flex justify-end w-full mb-32 pt-20 lg:pt-32">
          <div className="w-full max-w-xl lg:max-w-3xl pl-8 lg:pl-20">
            <motion.h2 variants={fadeInUp} className="text-[48px] md:text-[64px] leading-[1.05] font-bold tracking-tight text-white mb-6 font-serif drop-shadow-md">
              Build something<br />
              seriously powerful
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12 text-[15px]">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Download Mac app</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Tutorials</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Events</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Product Updates</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Discord Community</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Documentation</a>
              </div>
              
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">X</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">YouTube</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Reddit</a>
              </div>
              
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">Terms</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Security</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">Help Center</a>
              </div>
            </div>
          </div>
        </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-white/50 font-medium">
              © Zo Computer Company 2026
            </div>
            <a href="#" className="text-white/50 hover:text-white font-medium transition-colors">
              Sign out
            </a>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
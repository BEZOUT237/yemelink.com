import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe, Smartphone, Palette, PenTool, Megaphone, FileText, 
  Menu, X, Linkedin, Mail, MapPin, Phone, ArrowRight, 
  User, Lock, Eye, EyeOff, Sparkles, ExternalLink, ChevronRight,
  Github, Instagram, Youtube, Send, Zap, Users, MessageSquare,
  Share2, Heart, Award, TrendingUp, LayoutGrid, Plus, Trash2, Save,
  Bot, Settings, LogOut, ChevronUp, MessageCircle, Image as ImageIcon,
  Smile, BarChart2, ShieldAlert, ShieldCheck
} from 'lucide-react';

// --- DATA ---
const BRAND = {
  name: "YEMELINK",
  logo: "WhatsApp Image 2026-01-02 at 18.45.42.jpeg",
  founder: "stephane-yemeli.jpg.jpg",
  heroText: "We transform your ideas into powerful digital solutions. From stunning websites to mobile apps, we deliver excellence in every pixel and line of code.",
  colors: {
    primary: "from-[#00A3FF] via-[#0066FF] to-[#0047FF]",
    glow: "rgba(0, 163, 255, 0.4)"
  }
};

const SOCIAL_LINKS = [
  { icon: <Youtube size={28} />, url: "https://www.youtube.com/@YEMELINK2000", label: "YouTube" },
  { icon: <Instagram size={28} />, url: "https://www.instagram.com/yemelink2000", label: "Instagram" },
  { icon: <MessageSquare size={28} />, url: "https://www.tiktok.com/@yemelink", label: "TikTok" },
  { icon: <Globe size={28} />, url: "https://yemelink.blogspot.com", label: "Blog" },
  { icon: <Linkedin size={28} />, url: "https://www.linkedin.com/company/105687625/admin/dashboard", label: "LinkedIn" }
];

const INITIAL_PROJECTS = [
  { 
    id: 1, 
    title: "AI Automation Agency", 
    desc: "YEMELINK.AAA - Autonomous workflows and intelligent systems.", 
    url: "https://symphonious-pony-88095a.netlify.app",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 2, 
    title: "Networker Platform", 
    desc: "High-performance networking environment for creators.", 
    url: "https://networker.softr.app/",
    img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 3, 
    title: "Arkigai Group Hub", 
    desc: "Corporate portfolio for multi-sector excellence.", 
    url: "https://arkigai-group.com",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

const SERVICES = [
  { title: "Web Development", icon: <Globe />, desc: "Custom full-stack enterprise solutions, including e-commerce, progressive web apps, and high-performance business portals." },
  { title: "Mobile Apps", icon: <Smartphone />, desc: "Native Android and cross-platform engineering designed for scalability and high-performance user interaction." },
  { title: "Graphic Design", icon: <Palette />, desc: "Modern UI/UX identities, branding systems, and visual assets that command attention in a crowded digital space." },
  { title: "Content Strategy", icon: <PenTool />, desc: "Data-driven storytelling and digital presence planning that aligns your brand with current market trends." },
  { title: "Digital Marketing", icon: <Megaphone />, desc: "Growth-focused performance marketing, SEO, and social engineering to scale your product's user base." },
  { title: "Copywriting", icon: <FileText />, desc: "High-conversion strategic text designed to turn visitors into loyal customers through psychological precision." }
];

const PRODUCTS = [
  {
    title: "SkillGap.com",
    url: "https://skillgap.com",
    desc: "A Personalized Learning Resource Recommendation Algorithm and learning tracking tool. We aim to design the ultimate personalized recommendation algorithm for absolutely all learning resources, regardless of their format (books, YouTube videos, online articles, mobile apps, websites, etc.) to make you learn more easily, rapidly and efficiently.",
    icon: <Sparkles className="text-amber-400" />
  }
];

// --- COMPONENTS ---

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setTimeout(() => setIsVisible(true), delay); });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={domRef} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
};

const GlassCard = ({ children, className = "" }) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-blue-400/40 ${className}`}>
    {children}
  </div>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hi! I'm the YEMELINK Assistant. How can I help you today?", isBot: true }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input;
    setMessages([...messages, { text: userMsg, isBot: false }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I've logged your query. Our team will get back to you shortly. Feel free to explore SkillGap in our products page!", isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <GlassCard className="w-80 h-96 flex flex-col mb-4 border-[#00A3FF]/30">
          <div className="p-4 bg-gradient-to-r from-[#00A3FF] to-[#0066FF] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-white" />
              <span className="text-white font-black text-xs tracking-widest">YEMELINK AI</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} className="text-white" /></button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-xs font-medium ${m.isBot ? 'bg-slate-800 text-slate-200' : 'bg-[#00A3FF] text-white'}`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input 
              value={input} 
              onChange={e => setInput(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..." 
              className="flex-1 bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00A3FF] outline-none" 
            />
            <button onClick={handleSend} className="p-2 bg-[#00A3FF] rounded-lg text-white"><Send size={14} /></button>
          </div>
        </GlassCard>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-[#00A3FF] to-[#0066FF] rounded-full flex items-center justify-center text-white shadow-2xl shadow-blue-500/40 hover:scale-110 transition-transform"
        >
          <Bot size={24} />
        </button>
      )}
    </div>
  );
};

// --- SCREENS ---

const AdminDashboard = ({ projects, setProjects, communityPosts, setCommunityPosts, onLogout }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const addProject = () => {
    if (!newTitle) return;
    const proj = { id: Date.now(), title: newTitle, desc: newDesc, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", url: "#" };
    setProjects([proj, ...projects]);
    setNewTitle(""); setNewDesc("");
  };

  const deleteProject = (id) => setProjects(projects.filter(p => p.id !== id));
  const deletePost = (id) => setCommunityPosts(communityPosts.filter(p => p.id !== id));

  return (
    <div className="py-12 space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Super <span className="text-[#00A3FF]">Admin</span></h1>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">Status: Full Infrastructure Control</p>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setActiveTab('projects')} className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'projects' ? 'bg-[#00A3FF] text-white' : 'text-slate-500 hover:text-white'}`}>Projects</button>
          <button onClick={() => setActiveTab('community')} className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'community' ? 'bg-[#00A3FF] text-white' : 'text-slate-500 hover:text-white'}`}>Community</button>
          <button onClick={onLogout} className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20 font-bold text-xs uppercase hover:bg-red-500 hover:text-white transition-all">
            <LogOut size={16} />
          </button>
        </div>
      </div>

      {activeTab === 'projects' ? (
        <div className="grid lg:grid-cols-3 gap-8">
          <GlassCard className="p-6 h-fit space-y-6">
            <h3 className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-2"><Plus size={18} className="text-[#00A3FF]" /> Add Project</h3>
            <div className="space-y-4">
              <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Project Title" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00A3FF] outline-none" />
              <textarea value={newDesc} onChange={e => setNewDesc(e.target.value)} placeholder="Description" rows="4" className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00A3FF] outline-none resize-none" />
              <button onClick={addProject} className="w-full bg-[#00A3FF] text-white py-3 rounded-xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-2">
                Deploy <Save size={16} />
              </button>
            </div>
          </GlassCard>

          <div className="lg:col-span-2 space-y-4">
            {projects.map(p => (
              <div key={p.id} className="bg-white/5 border border-white/10 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <h4 className="text-white font-bold">{p.title}</h4>
                  <p className="text-slate-500 text-xs">{p.desc}</p>
                </div>
                <button onClick={() => deleteProject(p.id)} className="p-2 text-slate-500 hover:text-red-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-white font-black uppercase text-sm tracking-widest">Moderate Feed ({communityPosts.length})</h3>
          {communityPosts.map(p => (
            <div key={p.id} className="bg-white/5 border border-white/10 p-6 rounded-xl flex justify-between items-start">
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-black text-xs">{p.author[0]}</div>
                 <div className="space-y-2">
                    <p className="text-white font-bold">{p.author}</p>
                    <p className="text-slate-400 text-sm">{p.content}</p>
                    {p.image && <img src={p.image} className="h-20 rounded-lg object-cover" alt="Post" />}
                 </div>
              </div>
              <button onClick={() => deletePost(p.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CommunityFeed = ({ posts, setPosts }) => {
  const [newPost, setNewPost] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojis = ["🔥", "💻", "🚀", "✨", "🙌", "💙", "💡", "✅"];

  const handlePost = () => {
    if (!newPost.trim() && !imgUrl.trim()) return;
    const post = {
      id: Date.now(),
      author: "Community Member",
      content: newPost,
      image: imgUrl,
      likes: 0,
      shares: 0,
      comments: [],
      timestamp: "Just now"
    };
    setPosts([post, ...posts]);
    setNewPost("");
    setImgUrl("");
  };

  const handleLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="py-12 max-w-3xl mx-auto space-y-12">
      <ScrollReveal>
        <div className="text-center space-y-4">
           <h1 className="text-5xl font-black text-white uppercase tracking-tighter">YEMELINK <span className="text-[#00A3FF]">Connect</span></h1>
           <p className="text-slate-500 font-medium">Share ideas, get support, and showcase your builds.</p>
        </div>
      </ScrollReveal>

      {/* Post Creator */}
      <GlassCard className="p-6 space-y-4 border-[#00A3FF]/20">
        <div className="flex gap-4">
           <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 shrink-0">
             <User size={20} className="text-[#00A3FF]" />
           </div>
           <div className="flex-1 space-y-4">
              <textarea 
                value={newPost} 
                onChange={e => setNewPost(e.target.value)}
                placeholder="What's happening in tech? Use text, emojis or links..." 
                className="w-full bg-transparent border-none text-white text-lg focus:ring-0 outline-none resize-none h-24"
              />
              {imgUrl && (
                <div className="relative inline-block group">
                  <img src={imgUrl} className="max-h-60 rounded-xl border border-white/10" alt="Preview" />
                  <button onClick={() => setImgUrl("")} className="absolute top-2 right-2 p-1 bg-black/60 rounded-full text-white"><X size={14}/></button>
                </div>
              )}
           </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
           <div className="flex gap-2 relative">
              <button onClick={() => {
                const url = prompt("Enter Image URL (Unsplash/Imgur):");
                if (url) setImgUrl(url);
              }} className="p-2 text-slate-400 hover:text-[#00A3FF] transition-colors"><ImageIcon size={20} /></button>
              <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className="p-2 text-slate-400 hover:text-[#00A3FF] transition-colors"><Smile size={20} /></button>
              
              {showEmojiPicker && (
                <div className="absolute top-12 left-0 z-50 bg-slate-900 border border-white/10 p-2 rounded-xl flex gap-2 shadow-2xl">
                  {emojis.map(e => (
                    <button key={e} onClick={() => {setNewPost(p => p + e); setShowEmojiPicker(false);}} className="text-xl hover:scale-125 transition-transform">{e}</button>
                  ))}
                </div>
              )}
           </div>
           <button onClick={handlePost} className="bg-[#00A3FF] text-white px-8 py-2.5 rounded-full font-black uppercase text-xs tracking-widest hover:shadow-[0_0_20px_rgba(0,163,255,0.4)] transition-all">Post Now</button>
        </div>
      </GlassCard>

      {/* Feed */}
      <div className="space-y-8">
        {posts.map((post) => (
          <ScrollReveal key={post.id}>
            <GlassCard className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                 <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-xs text-white">
                       {post.author[0]}
                    </div>
                    <div>
                       <h4 className="text-white font-bold text-sm flex items-center gap-2">
                         {post.author} 
                         {post.author === "Stéphane Yemeli" && <ShieldCheck size={14} className="text-[#00A3FF]" />}
                       </h4>
                       <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{post.timestamp}</p>
                    </div>
                 </div>
                 <button className="text-slate-600 hover:text-white"><MessageSquare size={16}/></button>
              </div>

              <p className="text-slate-200 leading-relaxed whitespace-pre-wrap">{post.content}</p>
              
              {post.image && (
                <img src={post.image} className="w-full rounded-2xl border border-white/10" alt="Feed Item" />
              )}

              <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                 <button onClick={() => handleLike(post.id)} className="flex items-center gap-2 text-slate-500 hover:text-red-500 group transition-colors">
                    <Heart size={18} className={post.likes > 0 ? "fill-red-500 text-red-500" : ""} />
                    <span className="text-xs font-black">{post.likes}</span>
                 </button>
                 <button className="flex items-center gap-2 text-slate-500 hover:text-blue-400 group transition-colors">
                    <MessageCircle size={18} />
                    <span className="text-xs font-black">{post.comments?.length || 0}</span>
                 </button>
                 <button className="flex items-center gap-2 text-slate-500 hover:text-green-400 group transition-colors">
                    <Share2 size={18} />
                    <span className="text-xs font-black">{post.shares}</span>
                 </button>
                 <div className="flex-1" />
                 <div className="flex items-center gap-1 text-[10px] font-black text-slate-600 uppercase tracking-widest">
                    <BarChart2 size={12} /> {Math.floor(Math.random() * 500) + post.likes} Views
                 </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [communityPosts, setCommunityPosts] = useState([
    { 
      id: 1, 
      author: "Stéphane Yemeli", 
      content: "Welcome to the new YEMELINK Connect! Share your projects and let's grow together 🚀", 
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      likes: 12, shares: 4, timestamp: "Admin Post", comments: []
    }
  ]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Automatic Scroll to Top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleLogin = (success) => {
    if (success) {
      setIsAdmin(true);
      setCurrentPage('admin');
    } else {
      setCurrentPage('home');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-[#00A3FF] selection:text-white scroll-smooth font-sans">
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-slate-950/80 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={() => setCurrentPage('home')} className="flex items-center gap-3 group shrink-0">
            <img src={BRAND.logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <span className={`text-xl font-black tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-r ${BRAND.colors.primary}`}>
              {BRAND.name}
            </span>
          </button>

          <div className="flex items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar ml-4 md:ml-0">
            {[
              { id: 'home', label: 'Home' },
              { id: 'portfolio', label: 'Portfolio' },
              { id: 'services', label: 'Services' },
              { id: 'community', label: 'Community' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <button key={item.id} onClick={() => setCurrentPage(item.id)} className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all relative py-2 px-1 whitespace-nowrap ${currentPage === item.id ? 'text-white' : 'text-slate-500 hover:text-white'}`}>
                {item.label}
                {currentPage === item.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A3FF]" />}
              </button>
            ))}
            <div className="hidden sm:block w-px h-6 bg-white/10 mx-2" />
            <button onClick={() => setCurrentPage(isAdmin ? 'admin' : 'auth')} className="hidden sm:block bg-gradient-to-r from-[#00A3FF] to-[#0066FF] text-white font-black px-6 py-2 rounded-full text-[10px] hover:opacity-90 transition-all active:scale-95 uppercase tracking-widest whitespace-nowrap">
              {isAdmin ? "Dashboard" : "Log in"}
            </button>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {currentPage === 'admin' ? (
          <AdminDashboard projects={projects} setProjects={setProjects} communityPosts={communityPosts} setCommunityPosts={setCommunityPosts} onLogout={() => {setIsAdmin(false); setCurrentPage('home');}} />
        ) : currentPage === 'community' ? (
          <CommunityFeed posts={communityPosts} setPosts={setCommunityPosts} />
        ) : currentPage === 'services' ? (
          <ProductsServicesScreen />
        ) : currentPage === 'auth' ? (
          <AuthScreen onLogin={handleLogin} onBack={() => setCurrentPage('home')} />
        ) : currentPage === 'contact' ? (
          <div className="py-12 space-y-16">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase text-center tracking-tighter">Start a <span className="text-[#00A3FF]">Project</span></h1>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
               <GlassCard className="p-8">
                 <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                    <input placeholder="Name" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00A3FF] outline-none" />
                    <input placeholder="Email" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00A3FF] outline-none" />
                    <textarea placeholder="Message" rows="4" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00A3FF] outline-none resize-none" />
                    <button className="w-full bg-[#00A3FF] py-4 rounded-xl text-white font-black uppercase text-xs tracking-widest">Send Transmission</button>
                 </form>
               </GlassCard>
               <div className="space-y-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="text-white font-black uppercase text-xs mb-2">Direct Channel</h4>
                    <p className="text-slate-400">yemelink@gmail.com</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <h4 className="text-white font-black uppercase text-xs mb-2">Global Comms</h4>
                    <p className="text-slate-400">+90 505 740 4314</p>
                  </div>
               </div>
            </div>
          </div>
        ) : currentPage === 'portfolio' ? (
          <div className="space-y-16 py-12">
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Portfolio</h1>
            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((p) => (
                <GlassCard key={p.id} className="group cursor-pointer">
                  <div className="h-64 bg-slate-800 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-white mb-2 uppercase">{p.title}</h3>
                    <p className="text-slate-500 text-sm">{p.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-32">
            <section className="text-center py-24 space-y-10 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00A3FF]/10 blur-[120px] rounded-full -z-10"></div>
              <h1 className={`text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] bg-clip-text text-transparent bg-gradient-to-r ${BRAND.colors.primary}`}>
                {BRAND.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-medium">
                {BRAND.heroText}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
                <button onClick={() => setCurrentPage('services')} className="bg-[#00A3FF] text-white font-black px-12 py-5 rounded-2xl text-lg uppercase tracking-widest">Solutions</button>
                <button onClick={() => setCurrentPage('contact')} className="bg-white/5 border border-white/10 text-white font-black px-12 py-5 rounded-2xl text-lg uppercase tracking-widest">Contact</button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
                 {[
                   { val: "2+", label: "Years Experience" },
                   { val: "16", label: "Projects Done" },
                   { val: "16", label: "Happy Clients" },
                   { val: "24/7", label: "Active Support" }
                 ].map((stat, i) => (
                   <div key={i} className="text-center group">
                      <div className="text-4xl font-black text-white mb-2 group-hover:text-[#00A3FF] transition-colors">{stat.val}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
                   </div>
                 ))}
              </div>

              <div className="pt-20 space-y-8">
                 <h3 className="text-xl font-black uppercase tracking-[0.2em] text-white">Connect with us</h3>
                 <div className="flex justify-center flex-wrap gap-10">
                   {SOCIAL_LINKS.map((link, i) => (
                     <a key={i} href={link.url} target="_blank" className="text-slate-500 hover:text-[#00A3FF] hover:scale-125 transition-all duration-300" title={link.label}>
                       {link.icon}
                     </a>
                   ))}
                 </div>
              </div>
            </section>

            <section className="py-20">
              <GlassCard className="p-12 md:p-24 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10"></div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">Ready to Start Your <br/> <span className="text-[#00A3FF]">Digital Journey?</span></h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 font-medium">
                  Let's collaborate and build something amazing together. Get in touch for a free consultation or chat with our AI assistant for instant guidance.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button onClick={() => setCurrentPage('contact')} className="px-8 py-4 bg-[#00A3FF] text-white font-black uppercase text-xs tracking-widest rounded-xl transition-all">Request a Quote</button>
                  <button onClick={() => setIsChatOpen(true)} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-xl transition-all">Chat with AI</button>
                  <button onClick={() => setCurrentPage('community')} className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black uppercase text-xs tracking-widest rounded-xl transition-all">Join Community</button>
                </div>
              </GlassCard>
            </section>
            
            <section className="py-20">
              <GlassCard className="flex flex-col md:flex-row items-center gap-12 p-8 md:p-12">
                <div className="w-full md:w-1/3 aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img src={BRAND.founder} className="w-full h-full object-cover" alt="Founder" />
                </div>
                <div className="flex-1 space-y-6">
                   <h2 className="text-4xl font-black text-white uppercase">Stéphane Yemeli</h2>
                   <p className="text-[#00A3FF] font-black uppercase tracking-widest text-xs">Founder & Chief Technologist</p>
                   <p className="text-slate-400 text-xl leading-relaxed italic border-l-4 border-[#00A3FF] pl-6">"At YEMELINK, we bridge the gap between human vision and technological reality."</p>
                </div>
              </GlassCard>
            </section>
          </div>
        )}
      </main>

      <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                  <img src={BRAND.logo} alt="Logo" className="w-10 h-10 rounded-full" />
                  <span className={`text-2xl font-black uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${BRAND.colors.primary}`}>{BRAND.name}</span>
               </div>
               <p className="text-slate-500 text-sm font-medium">Online Products & Services. Your trusted tech partner for web development, mobile apps, design, and digital marketing solutions.</p>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-black uppercase text-xs tracking-widest">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Services', 'Portfolio', 'Blog', 'Contact'].map(l => (
                  <li key={l}><button onClick={() => setCurrentPage(l.toLowerCase())} className="text-slate-500 hover:text-white text-sm font-medium transition-colors">{l}</button></li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-black uppercase text-xs tracking-widest">Services</h4>
              <ul className="space-y-3">
                {['Web Development', 'Mobile Apps', 'Graphic Design', 'Digital Marketing', 'Content Creation'].map(s => (
                  <li key={s} className="text-slate-500 text-sm font-medium">{s}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-white font-black uppercase text-xs tracking-widest">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-500"><Mail size={18} /><span>yemelink@gmail.com</span></div>
                <div className="flex items-center gap-3 text-slate-500"><Phone size={18} /><span>+90 505 740 4314</span></div>
                <div className="flex items-center gap-3 text-slate-500"><ExternalLink size={18} /><span>linktr.ee/YEMELINK</span></div>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">© 2026 {BRAND.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
}

const AuthScreen = ({ onLogin, onBack }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <GlassCard className="w-full max-w-md p-8">
        <h2 className="text-3xl font-black text-white text-center mb-8 uppercase tracking-widest">Access Terminal</h2>
        <div className="space-y-4">
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none" />
          <input value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder="Password" className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white outline-none" />
          <button onClick={() => onLogin(email === "yemelink@gmail.com" && pass === "admin123")} className="w-full bg-[#00A3FF] text-white font-black py-4 rounded-xl uppercase tracking-widest">Initialize</button>
          <button onClick={onBack} className="w-full text-slate-500 text-[10px] font-black uppercase tracking-widest">Back</button>
        </div>
      </GlassCard>
    </div>
  );
};

const ProductsServicesScreen = () => (
  <div className="py-12 space-y-24">
    <ScrollReveal>
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Products & <span className="text-[#00A3FF]">Services</span></h1>
        <p className="text-slate-400 text-xl font-medium">Engineering the future of digital interaction.</p>
      </div>
    </ScrollReveal>
    <section className="space-y-12">
      <h2 className="text-2xl font-black text-white uppercase tracking-[0.2em] flex items-center gap-4"><Sparkles size={24} className="text-[#00A3FF]" /> Flagship Products</h2>
      {PRODUCTS.map((p, i) => (
        <GlassCard key={i} className="p-8 md:p-12 border-[#00A3FF]/20">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="w-20 h-20 bg-slate-900 rounded-3xl flex items-center justify-center border border-white/5 text-4xl">{p.icon}</div>
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{p.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">{p.desc}</p>
            </div>
          </div>
        </GlassCard>
      ))}
    </section>
    <section className="space-y-12">
      <h2 className="text-2xl font-black text-white uppercase tracking-[0.2em] flex items-center gap-4"><LayoutGrid size={24} className="text-[#00A3FF]" /> Core Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((s, i) => (
          <GlassCard key={i} className="p-8 h-full flex flex-col group">
            <div className="w-14 h-14 bg-[#00A3FF]/10 rounded-2xl flex items-center justify-center text-[#00A3FF] mb-6 group-hover:bg-[#00A3FF] group-hover:text-white transition-all">{s.icon}</div>
            <h3 className="text-xl font-black text-white mb-4 uppercase">{s.title}</h3>
            <p className="text-slate-500 text-sm font-medium">{s.desc}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  </div>
);
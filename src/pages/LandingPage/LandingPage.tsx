import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Footer } from "../../components/layout/Footer";
import { 
  MapPin, ShieldCheck, Activity, Users, ArrowRight, HeartPulse, 
  Calendar, BrainCircuit, Building2, Smartphone, CheckCircle2, AlertCircle
} from "lucide-react";

export interface LandingPageProps {
  onLaunchApp: () => void;
}

export function LandingPage({ onLaunchApp }: LandingPageProps) {
  // 1. STATE MANAGEMENT
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error" | null; msg: string }>({ type: null, msg: "" });

  // 2. DATA COLLECTIONS
  const [partnerHospitals] = useState([
    {
      name: "Northern Mindanao Medical Center (NMMC)",
      location: "J.R. Borja St, Cagayan de Oro",
      image: "/NMMC.jpg",
      tag: "Government Tertiary Center"
    },
    {
      name: "Maria Reyna Xavier University Hospital",
      location: "Corrales Ave, Cagayan de Oro",
      image: "/Maria-Reyna.jpg",
      tag: "Private University Training"
    },
    {
      name: "CDO Medical Center",
      location: "Yacal-Gomez St, Cagayan de Oro",
      image: "/CDO-Medical-Center.jpg",
      tag: "Private General Hospital"
    },
    {
      name: "Capitol University Medical City",
      location: "RN Pelaez Blvd, Cagayan de Oro",
      image: "/cumc.jpg",
      tag: "Base Teaching Hospital"
    },
    {
      name: "Polymedic Medical Plaza",
      location: "Capistrano St, Cagayan de Oro",
      image: "/polymedic.jpg",
      tag: "Modern Private Plaza"
    },
    {
      name: "J.R. Borja Memorial Hospital",
      location: "Tiano Bros St, Cagayan de Oro",
      image: "/jr borja.jpg",
      tag: "City Public Hospital"
    }
  ]);

  const teamMembers = [
    { name: "Marc Ariel H. Eurese", role: "Team Leader, AI Integration Specialist & Backend/Database Architecture" },
    { name: "Janyl Sweet V. Estores", role: "Frontend, UI/UX Developer & QA Tester" },
    { name: "Ma. Junelyn Grace N. Medina", role: "Frontend, UI/UX Developer & Documentation" },
    { name: "Mona Dane Bonita", role: "Frontend" },
    { name: "Larence Garilli Gamil", role: "Documentation Specialist" },
    { name: "Raisy Gadia", role: "QA Tester & Documentation Lead" }
  ];

  // 3. ACTION HANDLERS
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({ type: "error", msg: "Please fill out all form fields completely." });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      setFormStatus({ type: "error", msg: "Please supply a valid secure email address." });
      return;
    }
    
    // Dispatch to email client
    const subject = encodeURIComponent("CDO MedGuide Inquiry: " + formState.name);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:eurese.marc.ariel@gmail.com?subject=${subject}&body=${body}`;

    setFormStatus({ type: "success", msg: "Redirecting to your email client to send the message..." });
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen font-sans scroll-smooth">
      
      {/* NAVIGATION BAR HEADER */}
      <nav className="sticky top-0 right-0 left-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 px-6 py-4 flex items-center justify-between shadow-xs transition-all">
        <div className="flex items-center gap-3">
          <img src="/icon.png" alt="CDO MedGuide Logo" className="w-10 h-10 object-contain rounded-xl border border-green-100 shadow-inner" />
          <span className="text-xl font-black tracking-tight text-green-950">
            CDO <span className="text-green-600">MedGuide</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 font-semibold text-sm text-stone-600">
          <a href="#about" className="hover:text-green-700 transition-colors">About Us</a>
          <a href="#services" className="hover:text-green-700 transition-colors">Our Services</a>
          <a href="#partners" className="hover:text-green-700 transition-colors">Partner Hospitals</a>
          <a href="#team" className="hover:text-green-700 transition-colors">Our Team</a>
          <a href="#contact" className="hover:text-green-700 transition-colors">Contact</a>
        </div>
        <Button onClick={onLaunchApp} className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl text-xs px-5 h-9 transition-transform active:scale-[0.98] cursor-pointer">
          Sign In
        </Button>
      </nav>

      {/* HERO CALL-TO-ACTION FRAME */}
      <section className="relative px-6 py-20 lg:py-32 bg-linear-to-br from-green-950 via-green-900 to-emerald-900 text-white overflow-hidden text-center md:text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#14532d_1px,transparent_1px),linear-gradient(to_bottom,#14532d_1px,transparent_1px)] bg-size-[3rem_3rem] opacity-20 animate-pulse duration-1000" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-500">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-800/50 border border-green-700/50 text-xs font-semibold text-green-300 backdrop-blur-xs">
              <HeartPulse className="w-3.5 h-3.5 text-emerald-400" />
              Empowering Cagayan de Oro Healthcare Navigation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Your Health Journey, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-300 to-green-100">Perfectly Guided.</span>
            </h1>
            <p className="text-green-100/90 text-base md:text-lg max-w-xl leading-relaxed">
              CDO MedGuide connects citizens directly to leading healthcare facilities, specialized clinical consultants, and simplified online booking services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button onClick={onLaunchApp} className="bg-green-500 hover:bg-green-600 text-stone-950 font-bold px-6 py-3 h-auto text-base rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-950/40 group cursor-pointer transition-all duration-200">
                Sign In Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="#about" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border-green-400 text-green-50 bg-transparent hover:bg-white hover:text-green-950 hover:border-white font-bold px-6 py-3 h-auto text-base rounded-xl transition-all shadow-sm">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center relative animate-in fade-in zoom-in-75 duration-700">
            <div className="w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl absolute -inset-4 animate-ping duration-3000" />
            <img src="/icon.png" alt="Medical Hub Illustration" className="w-72 h-72 object-contain filter drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)]" />
          </div>
        </div>
      </section>

      {/* METRICS INFOGRAPHIC STATEMENT LAYER */}
      <section className="bg-white border-b border-green-100 py-10 px-6 relative z-20 shadow-xs">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1"><p className="text-3xl md:text-4xl font-black text-green-700">6</p><p className="text-stone-500 text-xs font-bold uppercase tracking-wider">Partner Hospitals</p></div>
          <div className="space-y-1"><p className="text-3xl md:text-4xl font-black text-green-700">24/7</p><p className="text-stone-500 text-xs font-bold uppercase tracking-wider">AI Support Availability</p></div>
          <div className="space-y-1"><p className="text-3xl md:text-4xl font-black text-green-700">100%</p><p className="text-stone-500 text-xs font-bold uppercase tracking-wider">Verified Specializations</p></div>
          <div className="space-y-1"><p className="text-3xl md:text-4xl font-black text-green-700">CDO</p><p className="text-stone-500 text-xs font-bold uppercase tracking-wider">Region Focused</p></div>
        </div>
      </section>

      {/* SECTION: ABOUT US */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto scroll-mt-16">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold text-green-600 uppercase tracking-widest">About Us</h2>
          <h3 className="text-3xl font-black text-stone-900 tracking-tight">Bridging the Gap Between Patients and Specialized Care</h3>
          <p className="text-stone-600 font-medium">CDO MedGuide eliminates navigation friction in times of medical need throughout the Misamis Oriental region.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600"><ShieldCheck className="w-6 h-6" /></div>
            <h4 className="text-lg font-bold text-green-950">Verified Medical Profiles</h4>
            <p className="text-stone-600 text-sm leading-relaxed">We coordinate real-time diagnostic updates directly with hospital boards to maintain accurate emergency parameters.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600"><Activity className="w-6 h-6" /></div>
            <h4 className="text-lg font-bold text-green-950">AI-Powered Sorting</h4>
            <p className="text-stone-600 text-sm leading-relaxed">Find specializations across clinical pathways effortlessly using modern contextual queries and predictive search mechanics.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-xs space-y-4 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600"><Users className="w-6 h-6" /></div>
            <h4 className="text-lg font-bold text-green-950">Unified Hub Navigation</h4>
            <p className="text-stone-600 text-sm leading-relaxed">Consolidates public and private primary centers under a single ecosystem for stress-free hospital location mapping.</p>
          </div>
        </div>
      </section>

      {/* SECTION: OUR SERVICES */}
      <section id="services" className="py-20 px-6 bg-white border-t border-green-100 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-green-600 uppercase tracking-widest">Our Services</h2>
            <h3 className="text-3xl font-black text-stone-900 tracking-tight">Comprehensive Features Built for Patients & Hospitals</h3>
            <p className="text-stone-600 font-medium">Explore digital tools optimized to handle real-time medical scheduling, medical center lookups, and artificial intelligence help.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-200/60 hover:border-green-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-green-600/20"><Building2 className="w-6 h-6" /></div>
              <div className="space-y-2"><h4 className="text-lg font-bold text-green-950">Advanced Hospital Directory</h4><p className="text-stone-600 text-sm leading-relaxed">Browse complete information sheets on medical center services, available beds, operation schedules, and contact methods across Cagayan de Oro.</p></div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-200/60 hover:border-green-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-green-600/20"><Calendar className="w-6 h-6" /></div>
              <div className="space-y-2"><h4 className="text-lg font-bold text-green-950">Seamless Appointment Booking</h4><p className="text-stone-600 text-sm leading-relaxed">Book check-ups directly with partner diagnostic institutions. Schedule appointments online, receive tracking status tokens, and check history lists inside your profile.</p></div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-200/60 hover:border-green-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-green-600/20"><BrainCircuit className="w-6 h-6" /></div>
              <div className="space-y-2"><h4 className="text-lg font-bold text-green-950">AI Medical Navigation Assistant</h4><p className="text-stone-600 text-sm leading-relaxed">Query our conversational AI module to match symptoms directly to specialized clinical departments, helping you find exactly where to go.</p></div>
            </div>
            <div className="flex gap-4 p-6 rounded-2xl bg-stone-50 border border-stone-200/60 hover:border-green-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-green-600/20"><Smartphone className="w-6 h-6" /></div>
              <div className="space-y-2"><h4 className="text-lg font-bold text-green-950">Dedicated Institutional Dashboards</h4><p className="text-stone-600 text-sm leading-relaxed">Hospital operators unlock distinct portal frameworks to review incoming patient logs, manage consultation timetables, and control public record metrics.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PARTNER HOSPITALS */}
      <section id="partners" className="py-20 px-6 bg-green-50/50 border-t border-green-100 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-green-600 uppercase tracking-widest">Partner Hospitals</h2>
            <h3 className="text-3xl font-black text-stone-900 tracking-tight">Direct Connections to CDO's Trusted Clinical Centers</h3>
            <p className="text-stone-600 font-medium">We work alongside the city's premier medical facilities to secure direct communication routing for standard scheduling.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerHospitals.map((hospital, idx) => (
              <Card key={idx} className="bg-white rounded-2xl overflow-hidden border-green-100 hover:border-green-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <CardHeader className="p-0">
                  <div className="w-full h-48 bg-stone-100 overflow-hidden relative">
                    <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <span className="absolute top-3 left-3 bg-green-950/80 backdrop-blur-xs text-green-300 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-xs tracking-wider uppercase">{hospital.tag}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-5 grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <CardTitle className="text-base text-green-950 font-bold line-clamp-2 leading-snug">{hospital.name}</CardTitle>
                    <div className="flex items-center gap-1.5 text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-green-500 shrink-0" />
                      <span className="text-xs font-medium truncate">{hospital.location}</span>
                    </div>
                  </div>
                  <Button onClick={onLaunchApp} variant="outline" size="sm" className="w-full text-green-700 border-green-200 hover:bg-green-50 hover:border-green-300 text-xs font-bold h-9 rounded-xl cursor-pointer">
                    Sign In to View
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: OUR TEAM */}
      <section id="team" className="py-20 px-6 bg-white border-t border-green-100 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-bold text-green-600 uppercase tracking-widest">Our Team</h2>
            <h3 className="text-3xl font-black text-stone-900 tracking-tight">The Developers Behind CDO MedGuide</h3>
            <p className="text-stone-600 font-medium">Developed by Computer Engineering students from the University of Science and Technology of Southern Philippines (USTP).</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-stone-50 border border-green-100 rounded-2xl p-6 text-center shadow-xs hover:shadow-md hover:border-green-300 transition-all">
                <div className="w-16 h-16 mx-auto bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-4 font-bold text-xl uppercase shadow-inner">
                  {member.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-green-950 mb-1">{member.name}</h4>
                <p className="text-sm font-medium text-stone-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: DYNAMIC CONTACT FORM WITH VALIDATIONS */}
      <section id="contact" className="py-20 px-6 bg-stone-50 border-t border-green-100 scroll-mt-16">
        <div className="max-w-lg mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <h2 className="text-xs font-bold text-green-600 uppercase tracking-widest">Contact Us</h2>
            <h3 className="text-3xl font-black text-stone-900 tracking-tight">Get in Touch</h3>
            <p className="text-stone-500 text-xs font-medium">Have questions or inquiries? Message our system managers directly.</p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-4 bg-white border border-green-100 p-6 md:p-8 rounded-3xl shadow-xs">
            {formStatus.type && (
              <div className={`p-4 rounded-xl flex items-center gap-3 text-xs md:text-sm font-semibold animate-in fade-in duration-200 ${formStatus.type === "success" ? "bg-green-100 text-green-800 border border-green-200" : "bg-rose-100 text-rose-800 border border-rose-200"}`}>
                {formStatus.type === "success" ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                <span>{formStatus.msg}</span>
              </div>
            )}
            
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Full Name</label>
              <input type="text" placeholder="Your name" value={formState.name} onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))} className="w-full h-10 px-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-green-600 font-medium text-stone-900" />
            </div>
            
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Email Address</label>
              <input type="email" placeholder="name@example.com" value={formState.email} onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))} className="w-full h-10 px-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-green-600 font-medium text-stone-900" />
            </div>
            
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Message Body</label>
              <textarea rows={4} placeholder="Type your message details here..." value={formState.message} onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))} className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-green-600 font-medium text-stone-900 resize-none" />
            </div>

            <Button type="submit" className="w-full h-10 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl text-sm shadow-md shadow-green-700/10 cursor-pointer pt-0.5">
              Dispatch Message
            </Button>
          </form>
        </div>
      </section>

      {/* UNIFIED GLOBAL FOOTER */}
      <Footer />
      
    </div>
  );
}
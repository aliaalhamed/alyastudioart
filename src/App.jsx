import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Mail, Phone, Palette, Video, PenTool, Layout, ArrowLeft, Download, ExternalLink, Brush, Layers, Sparkles, Lightbulb, Loader2, Share2, Smartphone } from 'lucide-react';

const PortfolioItem = ({ title, category, type, color }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg bg-white transition-all hover:-translate-y-2 hover:shadow-2xl">
    <div className={`h-64 w-full ${color} flex items-center justify-center relative overflow-hidden`}>
      {/* Placeholder for actual portfolio image */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      
      {type === 'image' ? (
        <div className="text-white text-center p-4">
          <Layout size={48} className="mx-auto mb-2 opacity-80" />
          <span className="text-lg font-bold opacity-80">عينة عمل</span>
        </div>
      ) : (
        <div className="text-white text-center p-4">
          <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
      )}
    </div>
    <div className="p-5">
      <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-full mb-2 inline-block">
        {category}
      </span>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <button className="text-sm font-medium text-gray-500 group-hover:text-purple-700 flex items-center gap-1 transition-colors">
        مشاهدة التفاصيل <ArrowLeft size={16} />
      </button>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, isNew }) => (
  <div className={`bg-white p-8 rounded-2xl shadow-md border ${isNew ? 'border-purple-300 ring-2 ring-purple-100' : 'border-purple-50'} hover:shadow-xl hover:border-purple-200 transition-all duration-300 text-center group relative overflow-hidden`}>
    {isNew && (
      <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
        جديد
      </div>
    )}
    <div className="w-16 h-16 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-purple-700" size={32} />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const TargetAudienceItem = ({ title }) => (
  <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border-r-4 border-purple-600">
    <div className="w-2 h-2 rounded-full bg-pink-500"></div>
    <span className="text-lg font-medium text-gray-800">{title}</span>
  </div>
);



export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAI, setShowAI] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'design', label: 'معرض التصاميم' },
    { id: 'drawing', label: 'معرض الرسومات' },
    { id: 'motion', label: 'معرض الموشن جرافيك' },
  ];

  const portfolioItems = [
    { id: 1, title: 'هوية بصرية لشركة ناشئة', category: 'design', type: 'image', color: 'bg-gradient-to-br from-purple-500 to-indigo-600' },
    { id: 2, title: 'شخصية كرتونية رقمية', category: 'drawing', type: 'image', color: 'bg-gradient-to-br from-pink-500 to-rose-400' },
    { id: 3, title: 'إعلان ترويجي متحرك', category: 'motion', type: 'video', color: 'bg-gradient-to-br from-violet-600 to-fuchsia-600' },
    { id: 4, title: 'تصميم منشورات سوشيال ميديا', category: 'design', type: 'image', color: 'bg-gradient-to-br from-blue-500 to-cyan-500' },
    { id: 5, title: 'رسم بورتريه رقمي', category: 'drawing', type: 'image', color: 'bg-gradient-to-br from-emerald-500 to-teal-400' },
    { id: 6, title: 'مقدمة شعار متحركة', category: 'motion', type: 'video', color: 'bg-gradient-to-br from-orange-400 to-red-500' },
  ];

  const filteredItems = activeTab === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 font-sans text-gray-800 selection:bg-purple-200">
      
      {showAI && <AICreativeAssistant onClose={() => setShowAI(false)} />}

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
             {/* Fallback text if image doesn't load immediately */}
             <h1 className="text-2xl font-bold text-purple-900 font-serif tracking-wide">
              alya<span className="text-pink-500">.</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['الرئيسية', 'من أنا', 'خدماتي', 'معرض الأعمال', 'تواصل معي'].map((item, idx) => {
              const ids = ['home', 'about', 'services', 'portfolio', 'contact'];
              return (
                <button 
                  key={idx}
                  onClick={() => scrollToSection(ids[idx])}
                  className="text-gray-600 hover:text-purple-700 font-medium transition-colors"
                >
                  {item}
                </button>
              );
            })}
         
            <a 
              href="https://wa.me/967701202010" 
              target="_blank" 
              rel="noreferrer"
              className="bg-purple-700 text-white px-5 py-2 rounded-full hover:bg-purple-800 transition-colors shadow-lg shadow-purple-200 flex items-center gap-2"
            >
              <Phone size={18} />
              <span>اطلب خدمة</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full border-t border-gray-100 shadow-xl">
            <div className="flex flex-col p-4 gap-4">
               <button 
                  onClick={() => { setShowAI(true); setIsMenuOpen(false); }}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-3 rounded-lg flex items-center justify-center gap-2 font-bold"
                >
                  <Sparkles size={18} />
                  <span>جرب الذكاء الاصطناعي ✨</span>
                </button>
              {['الرئيسية', 'من أنا', 'خدماتي', 'معرض الأعمال', 'تواصل معي'].map((item, idx) => {
                const ids = ['home', 'about', 'services', 'portfolio', 'contact'];
                return (
                  <button 
                    key={idx}
                    onClick={() => scrollToSection(ids[idx])}
                    className="text-right py-2 text-gray-600 hover:text-purple-700 border-b border-gray-50 last:border-0"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100/50 to-transparent -z-10 rounded-bl-full opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-gradient-to-r from-pink-100/40 to-transparent -z-10 rounded-tr-full opacity-60"></div>
        
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-right">
            <span className="text-pink-500 font-bold tracking-wider text-sm mb-4 block animate-pulse">CREATIVE STUDIO</span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              أهلاً، أنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-500">علياء الحامد</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              مدربة ومصممة جرافيك متخصصة. أحول الأفكار إلى واقع بصري من خلال التصميم الجرافيكي، الرسم الرقمي، والموشن جرافيك.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => scrollToSection('portfolio')} className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                شاهد أعمالي
              </button>
              
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
               {/* Decorative elements simulating the provided brand style */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-400 rounded-[2rem] rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl flex items-center justify-center p-8 border border-purple-50">
                 {/* Main Logo in Hero Section */}
                 <div className="w-full h-full flex items-center justify-center p-4">
                    <img 
                      src="شعاري.png" 
                      alt="Alya Creative Studio" 
                      className="max-w-full max-h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                    />
                 </div>
              </div>
              
              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg animate-bounce duration-[3000ms]">
                <PenTool className="text-pink-500" />
              </div>
              <div className="absolute -bottom-6 -left-4 bg-white p-3 rounded-xl shadow-lg animate-bounce duration-[4000ms]">
                <Video className="text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-lg p-8 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-4">معلومات شخصية</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>معيدة بكلية التربية - جامعة حضرموت</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>بكالوريوس علوم حاسوباً</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span>خبرة في التدريب والعمل الحر منذ 2019</span>
                    </li>
                  </ul>
                  <a 
                    href="https://drive.google.com/file/d/1FAbfAweF1HhbtMh1eVvGAcvezoX-111Z/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 w-full py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex items-center justify-center gap-2 font-medium"
                  >
                    <Download size={18} /> تحميل السيرة الذاتية
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <span className="text-purple-600 font-bold text-sm tracking-wider mb-2 block">من أنا</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">شغف بالتصميم، ودقة في التنفيذ</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                مدربة ومصممة جرافيك متخصصة في التدريب في مجالات التصميم والتقنيات الرقمية. أتمتع بخبرة أكاديمية في تدريس علوم الحاسوب، مع خبراتي في مجالات التصميم الجرافيكي والرسم الرقمي.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                أسعى لنقل مهاراتي ومعارفي لجيل جديد من المتدربين بأساليب تدريبية تقنية تدعم تحقيق أهدافهم الأكاديمية والمهنية، بالإضافة إلى تقديم خدمات تصميم احترافية لأصحاب الأعمال والمشاريع الناشئة.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'تصميم جرافيك', val: '95%' },
                  { label: 'رسم رقمي', val: '90%' },
                  { label: 'موشن جرافيك', val: '85%' },
                  { label: 'تدريب', val: '100%' }
                ].map((skill, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-700 mb-1">{skill.val}</div>
                    <div className="text-sm text-gray-600">{skill.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section (Based on Artboard 12) */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-2xl font-bold text-gray-800 mb-10">سواء كنت:</h2>
           <div className="flex flex-wrap justify-center gap-6">
             <TargetAudienceItem title="صاحب عمل" />
             <TargetAudienceItem title="مشروع ناشئ" />
             <TargetAudienceItem title="علامة تجارية" />
             <TargetAudienceItem title="صانع محتوى" />
           </div>
        </div>
      </section>

      {/* Services Section (Based on Artboard 40_1) */}
      <section id="services" className="py-20 container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-pink-500 font-bold text-sm tracking-wider">ماذا أقدم؟</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">الباقات والخدمات التصميمية</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <ServiceCard 
            icon={Palette}
            title="تصميم الشعارات والهويات"
            description="بناء هوية بصرية متكاملة تعكس قيم مشروعك وتميزك عن المنافسين، بدءاً من الشعار وحتى أدق التفاصيل."
          />
          <ServiceCard 
            icon={Video}
            title="موشن جرافيك وأنيميشن 2D"
            description="تحويل أفكارك إلى قصص مرئية متحركة تجذب الانتباه وتوصل رسالتك التسويقية بفاعلية عالية."
          />
          <ServiceCard 
            icon={Layers}
            title="المطبوعات وبروفايل الشركات"
            description="تصميم المطبوعات التجارية، الكتيبات، وبروفايلات الشركات بتصاميم احترافية وعصرية."
          />
          <ServiceCard 
            icon={Layout}
            title="منشورات السوشيال ميديا"
            description="تصميم محتوى بصري جذاب لمنصات التواصل الاجتماعي يساعد على زيادة التفاعل والوصول."
          />
          <ServiceCard 
            icon={Share2}
            title="إدارة الحسابات والمحتوى"
            description="خدمة متكاملة تشمل تخطيط المحتوى، كتابة النصوص، التصميم الإبداعي، والنشر وإدارة التفاعل لنمو حسابك."
            isNew={true}
          />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-purple-600 font-bold text-sm tracking-wider">أعمالي</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">معرض الإبداع</h2>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === cat.id 
                    ? 'bg-purple-700 text-white shadow-lg shadow-purple-200' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <PortfolioItem key={item.id} {...item} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-600 rounded-full hover:border-purple-600 hover:text-purple-600 transition-colors font-medium">
              مشاهدة المزيد من الأعمال
            </button>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden bg-gray-900 text-white">
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">هل لديك مشروع في ذهنك؟</h2>
              <p className="text-gray-300 text-lg">دعنا نحول أفكارك إلى واقع إبداعي. تواصل معي الآن لمناقشة مشروعك القادم.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://wa.me/967701202010" 
                target="_blank"
                rel="noreferrer" 
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-all group"
              >
                <Phone className="group-hover:rotate-12 transition-transform" />
                <div className="text-right">
                  <div className="text-xs opacity-90">تواصل عبر واتساب</div>
                  <div className="font-bold font-sans" dir="ltr">+967 701 202 010</div>
                </div>
              </a>
              
              <a 
                href="mailto:aliaalhamed01@gmail.com" 
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 p-4 rounded-xl transition-all group"
              >
                <Mail className="group-hover:-translate-y-1 transition-transform" />
                <div className="text-right">
                  <div className="text-xs text-gray-500">البريد الإلكتروني</div>
                  <div className="font-bold font-sans">aliaalhamed01@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="mt-10 flex justify-center gap-6 pt-8 border-t border-white/10">
               {/* Social Icons Placeholder */}
               <a href="https://www.instagram.com/alia.studioart/" className="w-12 h-12 rounded-full bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors">
                 <Instagram size={24} />
               </a>
               <a href="#" className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors">
                 <ExternalLink size={24} />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} علياء الحامد. جميع الحقوق محفوظة.</p>
          <div className="mt-2 flex justify-center gap-4">
             <span>Creative Studio</span>
             <span>•</span>
             <span>Graphic Design</span>
             <span>•</span>
             <span>Motion Graphics</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
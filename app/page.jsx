export default function LightGamingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-100">
      
      {/* Hero Section dengan Background Terang */}
      <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-[#F4F7D8]">
        {/* Overlay Gradien Lembut (Putih ke Transparan) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
        
        {/* Dekorasi Cahaya (Soft Glow) */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />

        {/* Gambar Hero (Gunakan gambar dengan nuansa lebih terang atau transparan) */}
        <img 
          src="https://i.ibb.co.com/fYFp698X/flowers.png" 
          alt="Hero Character"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-20 md:opacity-40"
        />

        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-2xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
            GJ
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-slate-500 uppercase tracking-wider">
            <a href="#" className="hover:text-blue-600 transition">About</a>
            <a href="#" className="hover:text-blue-600 transition">Collection</a>
            <a href="#" className="hover:text-blue-600 transition">Team</a>
            <a href="#" className="hover:text-blue-600 transition">Artist</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-2 rounded-lg text-sm font-bold text-white shadow-lg shadow-blue-500/20 hover:scale-105 transition">
            Search
          </button>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-8 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-2xl mb-6 text-slate-900 uppercase">
            <span className="text-blue-600">Play game</span> <br /> 
            everyday <br />
            Become a <span className="text-emerald-500">legend</span>
          </h1>
          <p className="text-slate-500 max-w-md text-lg mb-10 leading-relaxed font-medium">
            McClintock's eye for detail certainly helped narrow the whereabouts of lorem ipsum's origin.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-4 rounded-xl font-bold text-white shadow-xl shadow-blue-500/20 hover:shadow-emerald-500/40 transition-all transform hover:-translate-y-1">
              Download Now
            </button>
            <button className="flex items-center gap-3 font-bold group text-slate-700">
              <div className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shadow-sm">
                ▶
              </div>
              Watch Video
            </button>
          </div>
        </div>
      </section>

      {/* Top Collections Section */}
      <section className="relative z-20 -mt-20 pb-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-tighter text-slate-900">
          Top Collections
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, title: "World War", price: "$220" },
            { id: 2, title: "World War 2", price: "$250" },
            { id: 3, title: "World War 3", price: "$280" }
          ].map((item) => (
            <div key={item.id} className="group relative">
              {/* Border Gradien Glow (Biru ke Hijau) */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-blue-500 to-emerald-400 rounded-3xl opacity-20 group-hover:opacity-100 transition duration-500"></div>
              
              {/* Card Body */}
              <div className="relative bg-white border border-slate-100 rounded-[23px] p-8 flex flex-col items-center text-center shadow-xl shadow-slate-200/50">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white mb-4 shadow-lg">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.id + 50}`} 
                    alt="game"
                    className="w-full h-full object-cover bg-slate-100"
                  />
                </div>
                <h3 className="text-xl font-extrabold mb-1 text-slate-900">{item.title}</h3>
                <p className="text-slate-400 font-bold text-sm mb-4">Price: {item.price}</p>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent mb-6"></div>
                <button className="text-blue-600 font-black text-xs tracking-widest hover:text-emerald-500 transition-colors uppercase">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
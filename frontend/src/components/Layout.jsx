import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-950 via-slate-900 to-black">

      {/* Decorative Blurs */}
      <div className="fixed top-0 left-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="fixed bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

      <Navbar />

      <main className="flex-1 relative z-10 flex items-center justify-center px-4 py-10">
        <div
          className="
            w-full
            max-w-6xl
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-lg
            shadow-2xl
            p-6
            md:p-10
          "
        >
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
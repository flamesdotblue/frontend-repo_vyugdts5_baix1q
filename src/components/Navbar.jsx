import { Rocket, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow">
            <Rocket size={18} />
          </span>
          <span className="text-lg">VibeLaunch</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#showcase" className="hover:text-gray-900">Showcase</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800 active:scale-[0.99]">
          <User size={16} />
          Sign in
        </button>
      </div>
    </header>
  );
}

import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero3D />
        <Features />
        <section id="showcase" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Showcase</h2>
              <p className="mt-3 text-gray-600">A glimpse at the aesthetic and component variety you can build.</p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-violet-100" />
                  <div className="p-5">
                    <h3 className="font-semibold">Elegant module {i}</h3>
                    <p className="mt-1 text-sm text-gray-600">Clean composition and purposeful whitespace for clarity.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

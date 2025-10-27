import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-gray-900">
      <header className="mx-auto max-w-6xl px-6 py-6 sm:px-10">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">Interior Design</a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a className="hover:text-gray-900" href="#about">About</a>
            <a className="hover:text-gray-900" href="#skills">Skills</a>
            <a className="hover:text-gray-900" href="#projects">Projects</a>
            <a className="hover:text-gray-900" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-12 px-0 pb-16 sm:px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer className="border-t border-gray-200 bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-gray-600 sm:px-10">
          <p>© {new Date().getFullYear()} Your Name</p>
          <a href="#home" className="hover:text-gray-900">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

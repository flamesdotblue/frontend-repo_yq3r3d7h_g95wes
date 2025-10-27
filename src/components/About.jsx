import { Briefcase, Palette } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">About Me</h2>
          <p className="mt-4 text-gray-600">
            I’m an interior designer focused on quiet elegance and human-centered spaces.
            My work balances proportion, materiality, and light to create environments that feel
            effortless and intentional.
          </p>
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Palette className="text-gray-700" size={20} />
              <h3 className="text-sm font-medium uppercase tracking-wide text-gray-700">About Media</h3>
            </div>
            <p className="mt-3 text-gray-600">
              My approach blends natural textures with clean lines, subtle color, and generous negative space.
              I design for longevity—calm, modern interiors that invite light and daily rituals.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <ul className="mt-4 space-y-4">
            <li className="rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Briefcase size={18} className="text-gray-700" />
                  <p className="font-medium">Interior Design Intern — Studio A</p>
                </div>
                <span className="text-sm text-gray-500">2023</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Supported concept development, drawing sets, and FF&E coordination for residential projects.
              </p>
            </li>
            <li className="rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Briefcase size={18} className="text-gray-700" />
                  <p className="font-medium">Interior Design Intern — Atelier B</p>
                </div>
                <span className="text-sm text-gray-500">2022</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Contributed to residential layouts, material libraries, and sourcing with project managers.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

import { useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowDownToLine } from 'lucide-react';

export default function Hero() {
  const downloadCV = useCallback(() => {
    const content = `Interior Designer — Curriculum Vitae\n\nName: Your Name\nLocation: Your City\nEmail: you@example.com\nPortfolio: your-portfolio.com\nLinkedIn: linkedin.com/in/yourprofile\n\nProfile\n———\nInterior designer focused on functional minimalism, natural light, and calm material palettes.\n\nSkills\n———\n• AutoCAD  • Blender  • SketchUp  • Adobe CC  • Space planning  • 3D visualization\n\nExperience\n———\n• Interior Design Intern — Studio A (2023)\n  Supported concept development, drawing sets, and FF&E coordination.\n• Interior Design Intern — Atelier B (2022)\n  Worked on residential layouts and materials libraries.\n\nEducation\n———\nB.Des. in Interior Design — Your University\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Interior-Designer-CV.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <section id="home" className="relative h-[88vh] min-h-[640px] w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full items-end px-6 pb-10 sm:px-10">
        <div className="max-w-3xl text-white">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">Interior Design Portfolio</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Clean, modern spaces with intention and light.
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            I create calm, timeless interiors through refined materials, proportion, and detail.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={downloadCV}
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 text-sm font-medium text-gray-900 backdrop-blur transition hover:bg-white"
            >
              <ArrowDownToLine size={18} />
              Download CV
            </button>
            <a href="#projects" className="rounded-full border border-white/40 px-5 py-2.5 text-sm text-white transition hover:bg-white/10">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

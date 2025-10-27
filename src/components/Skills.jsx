import { Cube, Ruler, Box, PenTool } from 'lucide-react';

const skills = [
  { name: 'AutoCAD', icon: Ruler },
  { name: 'Blender', icon: Cube },
  { name: 'SketchUp', icon: Box },
  { name: 'Adobe Photoshop', icon: PenTool },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
        <p className="text-sm text-gray-500">Tools and software I use</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.map(({ name, icon: Icon }) => (
          <div key={name} className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="rounded-lg bg-gray-100 p-2 text-gray-700"><Icon size={18} /></span>
              <p className="font-medium">{name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

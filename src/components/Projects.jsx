import { useState } from 'react';

const PROJECTS = [
  {
    id: 'loft-renovation',
    title: 'Loft Renovation',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop',
    description:
      'A light-filled loft emphasizing warm oak, matte black accents, and flexible zones for living and work.',
  },
  {
    id: 'coastal-apartment',
    title: 'Coastal Apartment',
    image: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1600&auto=format&fit=crop',
    description:
      'Soft neutrals, textured linens, and microcement surfaces for a serene seaside retreat.',
  },
  {
    id: 'minimalist-townhouse',
    title: 'Minimalist Townhouse',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop',
    description:
      'Streamlined cabinetry, hidden storage, and diffused light for calm everyday living.',
  },
];

function Modal({ open, onClose, title, description }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose} className="rounded-md bg-gray-100 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-200">Close</button>
        </div>
        <p className="mt-3 text-gray-600">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <a href="#contact" className="text-sm font-medium text-gray-900 underline underline-offset-4">Get in touch for full case study</a>
          <span className="text-xs text-gray-500">Main image only shown on the grid</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openModal = (project) => {
    setActive(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="text-sm text-gray-500">Click a project to read a short description</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <button
            key={p.id}
            onClick={() => openModal(p)}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition hover:shadow-md"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-base font-medium">{p.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-gray-600">{p.description}</p>
              <div className="mt-3 text-sm font-medium text-gray-900 underline underline-offset-4">
                View details
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6">
        <h3 className="text-lg font-semibold">Get in Touch</h3>
        <p className="mt-2 text-gray-600">
          For collaborations, proposals, or full project case studies, feel free to reach out.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a id="contact" href="mailto:you@example.com" className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-black">Email</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-gray-300 px-5 py-2.5 text-sm text-gray-800 hover:bg-gray-50">LinkedIn</a>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={active?.title} description={active?.description} />
    </section>
  );
}

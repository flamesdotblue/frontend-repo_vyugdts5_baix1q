import { Sparkles, Shield, Settings } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished out of the box',
    desc: 'Thoughtful defaults, balanced spacing, and crisp typography so you can focus on your product.'
  },
  {
    icon: Shield,
    title: 'Accessible by design',
    desc: 'Inclusive color contrast, keyboard-friendly interactions, and sensible focus styles.'
  },
  {
    icon: Settings,
    title: 'Composable components',
    desc: 'Small, focused building blocks that scale with your app without adding complexity.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Designed for speed and delight</h2>
          <p className="mt-4 text-gray-600">
            Everything you need to craft a delightful product experience backed by a solid foundation.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

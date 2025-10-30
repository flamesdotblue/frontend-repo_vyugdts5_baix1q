import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build beautiful apps with effortless vibes
          </h1>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            A modern starter that blends crisp UI, smooth motion, and a mesmerizing 3D scene.
            Ship faster with a clean foundation that looks great out of the box.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-gray-800"
            >
              Explore features
              <ArrowRight size={16} />
            </a>
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-semibold border border-gray-200 hover:bg-gray-50"
            >
              See it in action
            </a>
          </div>
          <div className="pointer-events-none absolute -inset-x-10 -bottom-12 sm:-bottom-16 h-40 sm:h-56 bg-gradient-to-b from-transparent to-white" />
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10">
          <Spline
            scene="https://prod.spline.design/JwfM8z9e7YQp6m1T/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}

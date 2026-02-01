import { BadgeCheck, Zap, LockKeyhole, Star, Settings2, ShieldCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: 'Trusted Brands Only',
    desc: 'Official tools & licenses from Octoplus, UMT, Miracle, and more.',
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: 'Fast Activations',
    desc: 'Server credits & tool licenses delivered instantly.',
  },
  {
    icon: <LockKeyhole className="w-6 h-6 text-primary" />,
    title: 'Unlock With Confidence',
    desc: 'FRP, carrier, and IMEI unlocking tools verified by pros.',
  },
  {
    icon: <Settings2 className="w-6 h-6 text-primary" />,
    title: 'Repair-Grade Parts',
    desc: 'High-quality displays, batteries, and flex cables for major brands.',
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: '10K+ Happy Technicians',
    desc: 'Serving repair professionals worldwide since 2020.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: 'Secure & Verified',
    desc: 'Official GSM marketplace with verified listings only.',
  },
];

export default function TrustHighlights() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50" id="trust">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Trusted by Mobile Repair Experts
          </h2>
          <p className="mt-2 text-base text-neutral-600 max-w-2xl mx-auto">
            DB Tech Tonic is the go-to supplier for 100% authentic GSM unlocking tools and spare parts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((item, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-800 mb-1">{item.title}</h4>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

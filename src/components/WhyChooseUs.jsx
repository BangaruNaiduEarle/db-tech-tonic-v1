import { BadgeCheck, ShieldCheck, Star } from 'lucide-react';

const trustPoints = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: 'Official Tool Distributor',
    desc: 'Certified partner for UnlockTool, Octoplus, Miracle, UMT & more.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: 'Genuine OEM Parts',
    desc: 'Trusted quality for professional mobile repair centers.',
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: '10K+ Happy Technicians',
    desc: 'Proven track record in the global GSM repair community.',
  },
];

export default function TrustHighlights() {
  return (
    <section className="bg-white py-16" id="trust-highlights">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
          Trusted by Mobile Technicians Worldwide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div>{point.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-800">{point.title}</h4>
                <p className="text-sm text-neutral-600">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

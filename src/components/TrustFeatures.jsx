import {
  BadgeCheck,
  ShieldCheck,
  Wrench,
  Cpu,
  Star,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-primary" />,
    title: "100% Genuine Tools",
    desc: "We deal only in original, licensed software & hardware boxes for GSM professionals.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Verified Brand Partners",
    desc: "Authorized reseller for Miracle, UMT, Octoplus, EFT & more.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-primary" />,
    title: "Exclusive Tool Access",
    desc: "Early access to latest activations, credits & limited edition dongles.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Pro Hardware Solutions",
    desc: "Explore advanced ISP pinout jigs, test cables, and power boosters.",
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Top-Selling GSM Store",
    desc: "India’s leading supplier for high-demand mobile service equipment.",
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Trusted by Technicians",
    desc: "10,000+ recurring buyers, repair labs, and bulk resellers globally.",
  },
];

export default function TrustFeatures() {
  return (
    <section className="bg-white py-16" id="trust-features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Why Technicians Prefer DB Tech Tonic
          </h2>
          <p className="mt-3 text-neutral-600 max-w-2xl mx-auto text-base">
            Powering mobile service centers with the most trusted brands in GSM tools & software activations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center space-x-4 mb-3">
                {item.icon}
                <h4 className="text-lg font-semibold text-neutral-800">
                  {item.title}
                </h4>
              </div>
              <p className="text-sm text-neutral-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// PromoHighlights.jsx
export default function PromoHighlights() {
  return (
  <section id="promotions" className="py-16 bg-neutral-950 text-white">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
<mark className="bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded">
Hot Deals & Unlocking Tools
</mark>
</h2>
<p className="text-center max-w-2xl mx-auto text-neutral-400 mb-12">
<mark className="bg-primary/10 text-primary px-2 py-1 rounded">Flash Offers</mark> on tools, activations, and bulk credits. Boost your business with our featured unlock services.
</p>
</div>


<div className="relative w-full overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-10 pointer-events-none" />


<div className="marquee-scroll gap-6 px-4">
{[...Array(10)].map((_, i) => (
<div
key={i}
className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex-shrink-0 w-72 text-left"
>
<h3 className="font-semibold mb-1">🔓 UnlockTool Pro</h3>
<p className="text-sm text-neutral-300 mb-2">
Lifetime License – 20% Off
</p>
<span className="inline-block text-xs font-medium text-amber-400 bg-amber-400/10 px-2 py-1 rounded">
Flash Deal
</span>
</div>
))}
</div>
</div>
</section>

  );
}
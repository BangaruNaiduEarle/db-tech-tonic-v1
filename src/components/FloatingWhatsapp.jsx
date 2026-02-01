// components/FloatingWhatsapp.js
// import { MessageCircle } from 'lucide-react';
import { IoLogoWhatsapp } from "react-icons/io5";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/911234567890?text=Hi, I'm interested in your products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      aria-label="WhatsApp Chat"
    >
      <IoLogoWhatsapp size={32} />
    </a>
  );
}

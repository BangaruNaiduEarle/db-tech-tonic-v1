import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Clock,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white via-neutral-50 to-white">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4">
            Visit or Connect With Us
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Reach out to our team for sales, support or bulk order inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow p-6 space-y-5">
              <div className="flex items-start space-x-4">
                <MapPin className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-neutral-900">Address</p>
                  <p className="text-neutral-600 text-sm">
                    123 Tech Street, Electronics Market
                    <br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-neutral-900">Business Hours</p>
                  <p className="text-neutral-600 text-sm">
                    Mon – Sat: 10:00 AM – 8:00 PM <br />
                    Sun: 11:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-neutral-900">Call Us</p>
                  <a
                    href="tel:+911234567890"
                    className="text-primary hover:text-primary-dark text-sm font-medium"
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-primary w-6 h-6" />
                <div>
                  <p className="font-semibold text-neutral-900">Email</p>
                  <a
                    href="mailto:info@dbtechtonic.com"
                    className="text-primary hover:text-primary-dark text-sm font-medium"
                  >
                    info@dbtechtonic.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                Connect with Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <Instagram className="w-5 h-5 mr-2" /> Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:shadow-lg transition"
                >
                  <Facebook className="w-5 h-5 mr-2" /> Facebook
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow h-[400px] w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d3800.014290810973!2d83.2273257!3d17.7439658!3m2!1i1024!2i768!4f13.1!2m1!1sbaji%20junction%20near%20nad%20visakhapatnam!5e0!3m2!1sen!2sin!4v1769593286010!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DB Tech Tonic Location"
              className="w-full h-full"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

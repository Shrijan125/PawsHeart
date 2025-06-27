import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">PawsHeart</h3>
                <p className="text-sage-300">Every Pet Deserves Love</p>
              </div>
            </div>
            <p className="text-sage-300 leading-relaxed max-w-md">
              We're dedicated to connecting loving families with wonderful pets in need of homes. 
              Together, we can create more happy endings, one paw at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sage-300">
              <li><a href="#pets" className="hover:text-coral-400 transition-colors">Find a Pet</a></li>
              <li><a href="#stories" className="hover:text-coral-400 transition-colors">Success Stories</a></li>
              <li><a href="#help" className="hover:text-coral-400 transition-colors">How to Help</a></li>
              <li><a href="#contact" className="hover:text-coral-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sage-300">
              <p>123 Paws Street</p>
              <p>Lovetown, State 12345</p>
              <p>(555) 123-PAWS</p>
              <p>hello@pawsheart.org</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-sage-700 mt-12 pt-8 text-center">
          <p className="text-sage-300">
            © 2024 PawsHeart Animal Rescue. Made with{" "}
            <Heart className="w-4 h-4 inline text-coral-400" />{" "}
            for our furry friends.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
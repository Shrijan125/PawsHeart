
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm border-b border-peach-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Image alt="logo" fill src={'/logo.svg'} className="bg-none"></Image>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-sage-700">PawsHeart</h1>
              <p className="text-sm text-sage-600">Every Pet Deserves Love</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#pets" className="text-sage-700 hover:text-coral-500 font-medium transition-colors">
              Find Your Friend
            </a>
            <a href="#stories" className="text-sage-700 hover:text-coral-500 font-medium transition-colors">
              Success Stories
            </a>
            <a href="#help" className="text-sage-700 hover:text-coral-500 font-medium transition-colors">
              How to Help
            </a>
            <a href="#contact" className="text-sage-700 hover:text-coral-500 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-coral-500 hover:bg-coral-600 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Adopt Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
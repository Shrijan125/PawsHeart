
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-peach-50 via-sage-50 to-coral-50 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-sage-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-coral-200 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-peach-200 rounded-full opacity-20 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero text */}
          <h1 className="text-5xl md:text-6xl font-bold text-sage-800 mb-6 leading-tight">
            Every Pet Deserves a
            <span className="text-coral-500"> Forever Home</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-sage-700 mb-8 max-w-2xl mx-auto">
            Find your perfect furry companion and discover the unconditional love that only a rescued pet can give.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Heart className="w-5 h-5 mr-2" />
              Meet Your New Best Friend
            </Button>
            <Button variant="outline" className="border-sage-400 text-sage-700 hover:bg-sage-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              View Success Stories
            </Button>
          </div>

          {/* Hero image */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80"
                alt="Happy family with adopted pets"
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <Heart className="w-6 h-6 text-coral-500 animate-heart-beat" />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-coral-500 mb-2">2,847</div>
              <div className="text-sage-700 font-medium">Pets Found Homes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">156</div>
              <div className="text-sage-700 font-medium">Available Now</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-peach-500 mb-2">500+</div>
              <div className="text-sage-700 font-medium">Happy Families</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ways = [
  {
    title: "Adopt a Pet",
    description: "Give a loving animal their forever home and gain a loyal companion for life.",
    icon: "🏠",
    color: "from-coral-400 to-coral-600"
  },
  {
    title: "Volunteer",
    description: "Help care for our animals, assist with events, or use your special skills to make a difference.",
    icon: "🤝",
    color: "from-sage-400 to-sage-600"
  },
  {
    title: "Donate",
    description: "Your generous donations help us provide food, medical care, and shelter for animals in need.",
    icon: "💝",
    color: "from-peach-400 to-peach-600"
  },
  {
    title: "Foster",
    description: "Provide temporary care for pets who need extra attention before finding their permanent homes.",
    icon: "❤️",
    color: "from-coral-400 to-peach-500"
  }
];

const HowToHelp = () => {
  return (
    <section id="help" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            How You Can
            <span className="text-coral-500"> Make a Difference</span>
          </h2>
          <p className="text-xl text-sage-700 max-w-2xl mx-auto">
            Every act of kindness, no matter how small, helps us save more lives and create more happy endings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${way.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <span className="text-3xl">{way.icon}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-sage-800 mb-4">{way.title}</h3>
              <p className="text-sage-700 mb-6 leading-relaxed">{way.description}</p>
              
              <Button 
                variant="outline" 
                className="border-sage-400 text-sage-700 hover:bg-sage-50 rounded-full px-6 py-2 font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center bg-gradient-to-br from-sage-50 to-peach-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-sage-800 mb-4">
            Ready to Make a Difference Today?
          </h3>
          <p className="text-xl text-sage-700 mb-8 max-w-2xl mx-auto">
            Join our community of animal lovers and help us create more happy tails!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Heart className="w-5 h-5 mr-2" />
              Adopt Today
            </Button>
            <Button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Volunteer Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
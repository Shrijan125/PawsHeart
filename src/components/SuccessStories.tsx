import { Heart } from "lucide-react";

const stories = [
  {
    id: 1,
    petName: "Max",
    familyName: "The Johnson Family",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=500&q=80",
    quote: "Max has brought so much joy to our family. He's the perfect adventure companion for our kids!",
    timeAgo: "6 months ago"
  },
  {
    id: 2,
    petName: "Princess",
    familyName: "Sarah & Mike",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80",
    quote: "Princess is the sweetest cat ever. She's made our house feel like a true home.",
    timeAgo: "3 months ago"
  },
  {
    id: 3,
    petName: "Rocky",
    familyName: "The Martinez Family",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80",
    quote: "Rocky was shy at first, but now he's the most loving and loyal dog. Best decision ever!",
    timeAgo: "1 year ago"
  }
];

const SuccessStories = () => {
  return (
    <section id="stories" className="py-28 bg-gradient-to-br from-coral-50 via-peach-50 to-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            Heartwarming
            <span className="text-coral-500"> Success Stories</span>
          </h2>
          <p className="text-xl text-sage-700 max-w-2xl mx-auto">
            These beautiful stories show the incredible bond between rescued pets and their loving families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div 
              key={story.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="relative">
                <img 
                  src={story.image}
                  alt={`${story.petName} with ${story.familyName}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <Heart className="w-5 h-5 text-coral-500 animate-heart-beat" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{story.petName[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sage-800 text-lg">{story.petName}</h3>
                    <p className="text-sage-600 text-sm">{story.familyName}</p>
                  </div>
                </div>

                <blockquote className="text-sage-700 italic mb-4 text-sm leading-relaxed">
                  "{story.quote}"
                </blockquote>

                <p className="text-sage-500 text-xs">{story.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sage-700 mb-6 text-lg">
            Ready to create your own success story?
          </p>
          <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Heart className="w-5 h-5 mr-2 inline" />
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
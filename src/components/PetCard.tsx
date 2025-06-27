
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PetCardProps {
  id: number;
  name: string;
  age: string;
  breed: string;
  personality: string[];
  image: string;
  description: string;
}

const PetCard = ({ name, age, breed, personality, image, description }: PetCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2">
      {/* Pet Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
          <Heart className="w-5 h-5 text-coral-500 hover:animate-heart-beat cursor-pointer" />
        </div>
        
        {/* Personality badges */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {personality.slice(0, 2).map((trait, index) => (
            <Badge 
              key={index}
              className="bg-white/90 text-sage-700 backdrop-blur-sm border-0 rounded-full text-xs"
            >
              {trait}
            </Badge>
          ))}
        </div>
      </div>

      {/* Pet Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-2xl font-bold text-sage-800 mb-1">{name}</h3>
            <p className="text-sage-600 font-medium">{breed} • {age}</p>
          </div>
        </div>

        <p className="text-sage-700 text-sm mb-4 line-clamp-2">{description}</p>

        <Button className="w-full bg-gradient-to-r from-coral-500 to-peach-500 hover:from-coral-600 hover:to-peach-600 text-white rounded-full py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <Heart className="w-4 h-4 mr-2" />
          Meet {name}
        </Button>
      </div>
    </div>
  );
};

export default PetCard;
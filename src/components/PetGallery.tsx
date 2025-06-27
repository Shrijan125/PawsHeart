import PetCard from "./PetCard";

const pets = [
  {
    id: 1,
    name: "Luna",
    age: "2 years",
    breed: "Golden Retriever Mix",
    personality: ["Friendly", "Energetic", "Loyal"],
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80",
    description: "Luna is a sweet and playful girl who loves fetch and belly rubs. She's great with kids and other dogs!"
  },
  {
    id: 2,
    name: "Milo",
    age: "4 years",
    breed: "Tabby Cat",
    personality: ["Gentle", "Cuddly", "Quiet"],
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=500&q=80",
    description: "Milo is a calm and affectionate cat who loves sunny windowsills and gentle pets. Perfect lap companion!"
  },
  {
    id: 3,
    name: "Buddy",
    age: "1 year",
    breed: "Beagle Mix",
    personality: ["Playful", "Smart", "Adventurous"],
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80",
    description: "Buddy is a young pup full of energy and love. He's learning commands quickly and loves outdoor adventures!"
  },
  {
    id: 4,
    name: "Bella",
    age: "3 years",
    breed: "Calico Cat",
    personality: ["Independent", "Loving", "Graceful"],
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80",
    description: "Bella is an elegant cat with a gentle soul. She enjoys quiet moments and will be your loyal companion."
  },
  {
    id: 5,
    name: "Charlie",
    age: "5 years",
    breed: "Labrador Mix",
    personality: ["Calm", "Protective", "Gentle"],
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=500&q=80",
    description: "Charlie is a mature dog with a heart of gold. He's perfect for families looking for a calm, loving companion."
  },
  {
    id: 6,
    name: "Whiskers",
    age: "6 months",
    breed: "Orange Tabby",
    personality: ["Playful", "Curious", "Affectionate"],
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?auto=format&fit=crop&w=500&q=80",
    description: "Whiskers is a kitten full of personality! He loves to explore, play, and purr in your arms."
  }
];

const PetGallery = () => {
  return (
    <section id="pets" className="py-20 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
            Meet Our Amazing
            <span className="text-coral-500"> Friends</span>
          </h2>
          <p className="text-xl text-sage-700 max-w-2xl mx-auto">
            Each of these wonderful pets is looking for their forever family. 
            Could you be the one to give them the love they deserve?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sage-700 mb-6 text-lg">
            Don't see your perfect match? We have many more pets waiting to meet you!
          </p>
          <button className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Available Pets
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetGallery;
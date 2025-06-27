import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-sage-100 to-peach-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mb-6">
              Get in
              <span className="text-coral-500"> Touch</span>
            </h2>
            <p className="text-xl text-sage-700 max-w-2xl mx-auto">
              Have questions about adoption, volunteering, or want to learn more? 
              We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-sage-800 mb-6">Visit Our Shelter</h3>
                <div className="space-y-4 text-sage-700">
                  <p>
                    <strong>Address:</strong><br />
                    123 Paws Street<br />
                    Lovetown, State 12345
                  </p>
                  <p>
                    <strong>Phone:</strong><br />
                    (555) 123-PAWS
                  </p>
                  <p>
                    <strong>Email:</strong><br />
                    hello@pawsheart.org
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-sage-800 mb-6">Visiting Hours</h3>
                <div className="space-y-2 text-sage-700">
                  <p><strong>Monday - Friday:</strong> 10am - 6pm</p>
                  <p><strong>Saturday:</strong> 9am - 5pm</p>
                  <p><strong>Sunday:</strong> 12pm - 4pm</p>
                  <p className="text-sm text-sage-600 mt-4">
                    No appointment needed! Walk-ins welcome.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-sage-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sage-700 font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sage-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sage-700 font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent">
                    <option>Adoption Inquiry</option>
                    <option>Volunteer Interest</option>
                    <option>Donation Question</option>
                    <option>General Question</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sage-700 font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-sage-300 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Heart className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
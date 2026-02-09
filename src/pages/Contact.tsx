import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-primary py-24">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl">
              Have questions about DIIG or interested in partnering with us? 
              We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="text-5xl font-display font-bold text-foreground mb-6">
                  Coming Soon
                </h2>
                <p className="text-xl text-muted-foreground mb-12">
                  Our full contact page is currently under construction
                </p>
                <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
                
                {/* Email Contact */}
                <div className="bg-muted rounded-lg p-8 inline-block">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                      <a 
                        href="mailto:diigbd@gmail.com" 
                        className="text-lg text-primary hover:text-primary/80 transition-colors"
                      >
                        diigbd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
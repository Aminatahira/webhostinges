import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ArrowLeft } from "lucide-react";

export default function About() {
  useEffect(() => {
    // Redirect to arzhost.com about page after 3 seconds
    const timer = setTimeout(() => {
      window.open("https://arzhost.com/about", "_blank");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-arzhost-charcoal">
                ARZ Host
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                className="text-arzhost-text hover:text-arzhost-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-arzhost-gold px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-arzhost-text hover:text-arzhost-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <a
            href="/"
            className="inline-flex items-center text-arzhost-text hover:text-arzhost-gold mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </a>
          <h1 className="text-4xl font-bold text-arzhost-charcoal mb-4">
            About ARZ Host
          </h1>
          <p className="text-lg text-arzhost-text">
            Redirecting you to our official About Us page...
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-arzhost-charcoal">
              Learn More About Us
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-arzhost-text">
              For detailed information about ARZ Host, our mission, team, and
              company history, please visit our official website.
            </p>

            <div className="bg-arzhost-light-gray p-6 rounded-lg">
              <p className="text-sm text-arzhost-text mb-4">
                You will be automatically redirected to our About Us page in a
                few seconds, or click the button below to visit now.
              </p>
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-arzhost-gold mr-3"></div>
                <span className="text-arzhost-text">Redirecting...</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-arzhost-charcoal text-white hover:bg-gray-800"
              onClick={() => window.open("https://arzhost.com/about", "_blank")}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit ARZ Host About Page
            </Button>

            <div className="mt-8 text-sm text-arzhost-text">
              <p>
                <strong>ARZ Host</strong> - Premium VPS hosting solutions
              </p>
              <p>Website: arzhost.com</p>
              <p>Phone: +1 (631) 594-8060</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-arzhost-charcoal text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-2xl font-bold mb-4 text-arzhost-gold">
            ARZ Host
          </h4>
          <p className="text-gray-300 mb-4">
            Premium VPS hosting solutions with unmatched performance and
            reliability.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="/"
              className="text-gray-300 hover:text-arzhost-gold transition-colors"
            >
              Home
            </a>
            <a
              href="https://arzhost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-arzhost-gold transition-colors"
            >
              ARZ Host Website
            </a>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <p className="text-gray-300">
              © 2024 ARZ Host. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

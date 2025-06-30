import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ExternalLink,
  ArrowLeft,
  Phone,
  Globe,
  Mail,
  Clock,
} from "lucide-react";

export default function Contact() {
  useEffect(() => {
    // Redirect to arzhost.com contact page after 3 seconds
    const timer = setTimeout(() => {
      window.open("https://arzhost.com/contact", "_blank");
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
                className="text-arzhost-text hover:text-arzhost-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="/contact"
                className="text-arzhost-gold px-3 py-2 rounded-md text-sm font-medium"
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
            Contact ARZ Host
          </h1>
          <p className="text-lg text-arzhost-text">
            Get in touch with our support team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-arzhost-charcoal">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <Globe className="h-6 w-6 text-arzhost-gold mr-4" />
                <div>
                  <p className="font-semibold text-arzhost-charcoal">Website</p>
                  <a
                    href="https://arzhost.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-arzhost-gold hover:underline"
                  >
                    arzhost.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-6 w-6 text-arzhost-gold mr-4" />
                <div>
                  <p className="font-semibold text-arzhost-charcoal">Phone</p>
                  <a
                    href="tel:+16315948060"
                    className="text-arzhost-text hover:text-arzhost-gold"
                  >
                    +1 (631) 594-8060
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-6 w-6 text-arzhost-gold mr-4" />
                <div>
                  <p className="font-semibold text-arzhost-charcoal">
                    Support Hours
                  </p>
                  <p className="text-arzhost-text">24/7 Available</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-6 w-6 text-arzhost-gold mr-4" />
                <div>
                  <p className="font-semibold text-arzhost-charcoal">
                    Email Support
                  </p>
                  <p className="text-arzhost-text">Available on website</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Redirect Notice */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-arzhost-charcoal">
                Contact Form & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-arzhost-text">
                For the most up-to-date contact information, support tickets,
                and live chat options, please visit our official contact page.
              </p>

              <div className="bg-arzhost-light-gray p-6 rounded-lg">
                <p className="text-sm text-arzhost-text mb-4">
                  You will be automatically redirected to our Contact Us page in
                  a few seconds, or click the button below to visit now.
                </p>
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-arzhost-gold mr-3"></div>
                  <span className="text-arzhost-text">Redirecting...</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-arzhost-charcoal text-white hover:bg-gray-800"
                onClick={() =>
                  window.open("https://arzhost.com/contact", "_blank")
                }
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit ARZ Host Contact Page
              </Button>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-arzhost-charcoal mb-2">
                  Quick Support Options:
                </h4>
                <ul className="text-sm text-arzhost-text space-y-1">
                  <li>• Live chat support on arzhost.com</li>
                  <li>• Support ticket system</li>
                  <li>• Phone support: +1 (631) 594-8060</li>
                  <li>• Emergency support available 24/7</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
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

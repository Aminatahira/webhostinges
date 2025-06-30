import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Server,
  Shield,
  Zap,
  HeadphonesIcon,
  Globe,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const plans = [
    {
      name: "Starter VPS",
      price: "$12.50",
      period: "/month",
      features: [
        "1 CPU Core",
        "2GB RAM",
        "20GB SSD Storage",
        "24/7 Support",
        "Free Setup",
      ],
      popular: false,
    },
    {
      name: "Essential VPS",
      price: "$34.00",
      period: "/month",
      features: [
        "2 CPU Cores",
        "4GB RAM",
        "80GB SSD Storage",
        "Priority Support",
        "Free Migration",
        "Enhanced Security",
      ],
      popular: true,
    },
    {
      name: "Comfort VPS",
      price: "$46.00",
      period: "/month",
      features: [
        "4 CPU Cores",
        "8GB RAM",
        "160GB SSD Storage",
        "Dedicated Support",
        "Free Migration",
        "Advanced Security",
        "Premium Performance",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: <Server className="h-8 w-8 text-arzhost-gold" />,
      title: "High-Performance Servers",
      description:
        "State-of-the-art hardware in premium data centers across China",
    },
    {
      icon: <Shield className="h-8 w-8 text-arzhost-gold" />,
      title: "Advanced Security",
      description: "DDoS protection, firewalls, and 24/7 monitoring",
    },
    {
      icon: <Zap className="h-8 w-8 text-arzhost-gold" />,
      title: "Lightning Fast",
      description: "SSD storage and optimized network connectivity",
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-arzhost-gold" />,
      title: "24/7 Expert Support",
      description: "Professional technical support when you need it",
    },
  ];

  const faqs = [
    {
      question: "What is VPS hosting?",
      answer:
        "VPS (Virtual Private Server) hosting provides dedicated resources within a shared environment, offering better performance and control than shared hosting.",
    },
    {
      question: "Do you provide managed services?",
      answer:
        "Yes, we offer fully managed VPS services including server maintenance, security updates, and technical support.",
    },
    {
      question: "What operating systems do you support?",
      answer:
        "We support various Linux distributions including Ubuntu, CentOS, Debian, and Windows Server.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for all new customers.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Your VPS will be provisioned and ready within 24 hours of payment confirmation.",
    },
  ];

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

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-arzhost-text hover:text-arzhost-gold px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-arzhost-text hover:text-arzhost-gold"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-arzhost-text hover:text-arzhost-gold block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-arzhost-charcoal to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Premium VPS Hosting in China
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              High-performance virtual private servers with lightning-fast
              connectivity, advanced security, and 24/7 expert support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-arzhost-gold text-arzhost-charcoal hover:bg-yellow-400 font-semibold px-8 py-4"
              >
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-arzhost-charcoal px-8 py-4"
              >
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-arzhost-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-arzhost-charcoal mb-4">
              Why Choose ARZ Host?
            </h3>
            <p className="text-lg text-arzhost-text max-w-2xl mx-auto">
              We provide enterprise-grade hosting solutions with unmatched
              performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-arzhost-charcoal">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-arzhost-text">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-arzhost-charcoal mb-4">
              Simple, Transparent Pricing
            </h3>
            <p className="text-lg text-arzhost-text max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include free
              setup and migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-arzhost-gold border-2" : ""} shadow-lg`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-arzhost-gold text-arzhost-charcoal">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-arzhost-charcoal">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-arzhost-charcoal">
                      {plan.price}
                    </span>
                    <span className="text-arzhost-text">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-arzhost-gold mr-3" />
                        <span className="text-arzhost-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? "bg-arzhost-gold text-arzhost-charcoal hover:bg-yellow-400"
                        : "bg-arzhost-charcoal text-white hover:bg-gray-800"
                    }`}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-arzhost-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-arzhost-charcoal mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-arzhost-text">
              Get answers to common questions about our VPS hosting services.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-arzhost-charcoal font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-arzhost-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-arzhost-charcoal to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of satisfied customers who trust ARZ Host for their
            VPS hosting needs.
          </p>
          <Button
            size="lg"
            className="bg-arzhost-gold text-arzhost-charcoal hover:bg-yellow-400 font-semibold px-8 py-4"
          >
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-arzhost-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4 text-arzhost-gold">
                ARZ Host
              </h4>
              <p className="text-gray-300 mb-4">
                Premium VPS hosting solutions with unmatched performance and
                reliability.
              </p>
              <div className="flex space-x-4">
                <Star className="h-5 w-5 text-arzhost-gold" />
                <Star className="h-5 w-5 text-arzhost-gold" />
                <Star className="h-5 w-5 text-arzhost-gold" />
                <Star className="h-5 w-5 text-arzhost-gold" />
                <Star className="h-5 w-5 text-arzhost-gold" />
              </div>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-arzhost-gold transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-arzhost-gold transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-arzhost-gold transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://arzhost.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-arzhost-gold transition-colors"
                  >
                    ARZ Host Website
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">Contact Info</h5>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-arzhost-gold mr-3" />
                  <span className="text-gray-300">arzhost.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-arzhost-gold mr-3" />
                  <span className="text-gray-300">+1 (631) 594-8060</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-arzhost-gold mr-3" />
                  <span className="text-gray-300">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 ARZ Host. All rights reserved. Premium VPS hosting
              solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

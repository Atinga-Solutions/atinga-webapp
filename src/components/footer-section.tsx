import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Globe
} from "lucide-react";
import { AtingaLogo } from "../../public/assets/icons/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Solutions",
      links: [
        { name: "UI/UX Design", href: "/services/design" },
        { name: "Mobile Development", href: "/services/mobile" },
        { name: "Web Development", href: "/services/web" },
        { name: "Cloud Solutions", href: "/services/cloud" },
        { name: "DevOps", href: "/services/devops" },
        { name: "Custom Software", href: "/services/custom" },
        {namer: "Scrum", href: "/services/scrum"},
        
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Press", href: "/press" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "/docs" },
        { name: "API Reference", href: "/api" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Knowledge Base", href: "/knowledge-base" },
        { name: "FAQ", href: "/faq" }
      ]
    }
  ];

  return (
    <footer className="border-t-4 border-primary">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-10 w-40 rounded-full ">
                <Image
                  src={AtingaLogo}
                  alt="Company Logo"
                  fill
                  className="object-contain rounded-full"


                />
              </div>
            </Link>
            <p className="text-blue-800 dark:text-blue-100 mb-6 max-w-md">
              Empowering businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                {/*<div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3">*/}
                  {/*<MapPin className="h-5 w-5 text-primary" />*/}
                </div>
                {/*<span className="text-blue-800 dark:text-blue-100">123 Tech Plaza, Suite 100, San Francisco, CA 94105</span>*/}
              {/*</div>*/}
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-blue-800 dark:text-blue-100">+254 (115)(671)(073)</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-blue-800 dark:text-blue-100">atingasolutions.com</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded-full mr-3">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <span className="text-blue-800 dark:text-blue-100">atingasolutions.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h3 className="font-bold text-lg mb-4 text-primary border-b-2 pb-2 border-blue-200 dark:border-blue-700">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="text-blue-700 dark:text-blue-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-8 my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-100">Stay Updated</h3>
              <p className="text-blue-700 dark:text-blue-200">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-3 rounded-lg border-2 border-blue-300 dark:border-blue-700 focus:border-primary bg-white dark:bg-blue-950 text-blue-900 dark:text-blue-100"
              />
              <button className="bg-primary hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg whitespace-nowrap transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-blue-200 dark:border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-700 dark:text-blue-300 text-sm mb-4 md:mb-0">
            © {currentYear} <span className="font-bold">AtingaSolutions</span>. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="bg-primary text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-primary text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="bg-primary text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
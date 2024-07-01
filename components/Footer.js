import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">Edem Hotel</h3>
            <p className="text-sm">Luxurious comfort </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" legacyBehavior>
                  <a className="hover:text-white transition duration-300">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about" legacyBehavior>
                  <a className="hover:text-white transition duration-300">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/rooms" legacyBehavior>
                  <a className="hover:text-white transition duration-300">
                    Rooms
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:text-white transition duration-300">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="text-2xl" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="text-2xl" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="text-2xl" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-yellow-300 text-center">
          <p>
            &copy; {new Date().getFullYear()} Edem Hotel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { Facebook, MessageCircle, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* IndiaFilings Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">IndiaFilings</h4>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-600 hover:text-blue-600 text-sm">About IndiaFilings</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* Platforms Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Platforms</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Business Search</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Trademark Search</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Filings.AE for UAE</a></li>
            </ul>
          </div>

          {/* Usage Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/guide" className="text-gray-600 hover:text-blue-600 text-sm">Business Setup Guide</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Refund Policy</a></li>
            </ul>
          </div>

          {/* Additional Links Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">More</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Confidentiality Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">Disclaimer Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm">IndiaFilings Review</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              <p>Copyright © 2025 IndiaFilings Private Limited. All rights reserved.</p>
              <p className="mt-1">
                Unless otherwise indicated, all materials on these pages are copyrighted by IndiaFilings Private Limited. All rights reserved. No part of these pages, either text or image may be used for any purpose.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

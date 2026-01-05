import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" text-white mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <p className="text-white text-sm leading-relaxed">
              <strong>GameMarket.gg</strong> is a crypto-powered marketplace to
              buy and sell game accounts, items, services, top-up, and other
              digital assets.
            </p>
          </div>

          {/* Info Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base">Info</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/submit-request"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  Submit a Request
                </Link>
              </li>
              <li>
                <Link
                  href="/bug-bounty"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  Bug Bounty Hunter
                </Link>
              </li>
              <li>
                <Link
                  href="/merchants"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  GM Coins Merchants
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@gamemarket.gg"
                  className="text-white text-sm hover:text-gray-300 transition-colors"
                >
                  support@gamemarket.gg
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us and Copyright */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base">Follow us</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full  flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                {/* <Facebook className="w-5 h-5 text-white" /> */}
                <Image
                  src="/icons/ic-facebook.png"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full  flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Twitter/X"
              >
                <Image
                  src="/icons/ic-x.png"
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full  flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Image
                  src="/icons/ic-instagram.png"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </a>
            </div>
            <div className="space-y-1 pt-4">
              <p className="text-white text-sm">© 2025 GameMarket.gg</p>
              <p className="text-white text-sm">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

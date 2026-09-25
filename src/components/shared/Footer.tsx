import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
                B
              </div>

              <span className="text-2xl font-bold tracking-tight text-slate-800">
                Book<span className="text-indigo-600">Vibe</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Discover your next favorite book, keep track of your reading
              journey, and build your personal collection with Book Vibe.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-800">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-indigo-600"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition-colors hover:text-indigo-600"
                >
                  All Books
                </Link>
              </li>

              <li>
                <Link
                  href="/listed-books"
                  className="transition-colors hover:text-indigo-600"
                >
                  Listed Books
                </Link>
              </li>
            </ul>
          </div>

          {/* My Library */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-800">
              My Library
            </h3>

            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  href="/listed-books"
                  className="transition-colors hover:text-indigo-600"
                >
                  Read Books
                </Link>
              </li>

              <li>
                <Link
                  href="/listed-books"
                  className="transition-colors hover:text-indigo-600"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="transition-colors hover:text-indigo-600"
                >
                  Browse Books
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay conected */}

          {/* Connect With Me */}
<div>
  <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-800">
    Connect With Me
  </h3>

  <p className="text-sm leading-6 text-slate-500">
    Let&apos;s connect and stay in touch.
  </p>

  <div className="mt-5 flex gap-3">
    {/* Facebook */}
    <a
      href="YOUR_FACEBOOK_URL"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
    >
      <FaFacebookF size={17} />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/uzzal6090"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
    >
      <FaGithub size={18} />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/uzzal-hosen-b9ba12395/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
    >
      <FaLinkedinIn size={18} />
    </a>
  </div>
</div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BookVibe. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="#" className="transition-colors hover:text-indigo-600">
              Privacy Policy
            </Link>

            <Link href="#" className="transition-colors hover:text-indigo-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import Image from "next/image";
import Link from "next/link";
import logo from "@/assests/book.ico";

const Navbar = () => {
  return (
    <nav className="bg-base-100/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
     <div className="navbar max-w-6xl mx-auto px-4">

        {/* Logo */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
            >
              <li>
                <Link href="/">Home</Link>
              </li>

          
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/listed-books">Listed Books</Link>
              </li>
              
            </ul>
          </div>

          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold"
          >
            <Image
              src={logo}
              alt="Book Vibe Logo"
              width={38}
              height={38}
            />

            <span>
              Book<span className="text-primary">Vibe</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>

          
            <li>
              <Link href="/books" className="hover:text-primary">
                Books
              </Link>
            </li>

           <li>
                <Link href="/listed-books">Listed Books</Link>
              </li>

            
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          {/* Search */}
          <button className="btn btn-ghost btn-circle hidden sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-4.35-4.35m2.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

          <button className="btn btn-ghost hidden sm:flex">
            Sign In
          </button>

          <button className="btn btn-primary rounded-full px-5">
            Sign Up
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
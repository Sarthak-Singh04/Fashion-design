import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center  py-3 ">
        <form className="md:flex-none w-96 order-2 sm:order-1 flex justify-between">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input type="text" id="search" placeholder="Search" className="input-text" />
        </form>
        <nav className="shrink w-80 sm:order-2">
        <Link href={"/"}>
        <p className="font-bold uppercase text-3xl font-serif">
            Design
          </p>
        </Link>
        
       
        
       
        </nav>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
          <Link href={"/"}>
          <button aria-label="Facebook">
              <ImFacebook />
              </button>
          </Link>
    
           
          <Link href={"/"}>
          <button aria-label="Facebook">
              <ImYoutube />
              </button>
          </Link>
          <Link href={"/"}>
          <button aria-label="Facebook">
              <ImTwitter/>
              </button>
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

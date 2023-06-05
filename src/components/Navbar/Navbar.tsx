import React from 'react';
import { RiLeafFill } from 'react-icons/ri';
import { TbMenu2 } from 'react-icons/tb';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav className=" absolute top-0 z-50 flex w-full flex-row items-center justify-between p-4 px-6 font-bold text-darkGreen">
      <div className="flex flex-row items-center justify-center text-xl">
        <RiLeafFill className="" />
        VERDURE
      </div>
      <button>
        <TbMenu2 className="text-2xl md:hidden" />
      </button>
      <ul className="hidden flex-row gap-8 font-primary text-xl font-normal md:flex">
        <li>
          <button>Features</button>
        </li>
        <li>
          <button>About Us</button>
        </li>
        <li>
          <button>Pricing</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </motion.nav>
  );
};

export { Navbar };

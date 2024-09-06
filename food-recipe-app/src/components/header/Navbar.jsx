import { NavLink } from 'react-router-dom';

import Search from '@/components/header/Search';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={'/'}>Food Recipe App</NavLink>
      </h2>
      <Search />
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={'/'}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/favorites'}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

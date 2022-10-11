import { menuItems } from '../config/menuItems';

import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => (
        	<MenuItems items={menu} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
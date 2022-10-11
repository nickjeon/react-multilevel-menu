import { menuItems } from '../config/menuItems';

import MenuItems from './MenuItems';

const Navbar = () => {
	const depthLevel = 0;

 	return (
    	<nav>
	      <ul className="menus">
	        {menuItems.map((menu, index) => (
	        	<MenuItems items={menu} key={index} depthLevel={depthLevel} />
	        ))}
	      </ul>
	    </nav>
  	);
};

export default Navbar;
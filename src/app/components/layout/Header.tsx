import Wrapper from "../shared/Wrapper";
import { ShoppingCart } from 'lucide-react';
import { Circle } from 'lucide-react';
import { Search } from 'lucide-react'

const Header = () => {
    return (
      <header className="sticky top-6 z-10 rounded-lg shadow-sm bg-white">
        <Wrapper>
          <div className="flex ml-20 mr-20 justify-between py-5 sticky top-0 items-center">
            
            {/* logo */}
            <div className="flex space-x-8 font-extrabold">
                <Circle className="font-bold" />
              Dine Market
            </div>
            
            {/* navigation bar */}
            <ul className="flex space-x-8 ">
              <li>
                Female
              </li>
              <li>
                Male
              </li>
              <li>
                Kids
              </li>
              <li>
                All Products
              </li>
            </ul>
                        
            {/* Search Box */}
            <div className="flex space-x-2">
            <Search />
            <input type="text" placeholder="Search.."></input>    
            </div>

            {/* Shopping Cart */}
            <div>
            <ShoppingCart />
            </div>
          </div>
        </Wrapper>
      </header>
    );
  };
  
  export default Header;
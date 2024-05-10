// import { Button } from 'antd'
// import React from 'react'


// const Header = () => {
//   return (
  
    
   
  
//         <div className="header">
//             <div className='px-20 py-5 shadow-lg'>
//           <div className="flex flex-row justify-between">
//             <>
//             <div className='logo mr-4'>

//             <img
//                                     className="max-w-full mx-auto md:max-w-none h-auto"
//                                     src={'/liskpay.png'}
//                                     width="150"
//                                     height="100"
//                                     alt={'lisklogo'}
//                                 />
//             </div>
            

//               <div className="menuOption border-b-2 border-black pb-1 mr-4">Summary</div>
//               <div className="menuOption mr-4">Activity</div>
//               <div className="menuOption mr-4">{`Send & Request`}</div>
//               <div className="menuOption mr-4">Wallet</div>
//               <div className="menuOption mr-4">Help</div>
//             </>
//             <div className='flex justify-end'>

//           <Button  type={"primary"}>Connect Wallet</Button>
//             </div>
//             </div>
//           </div>
    
//         </div>
//       );
//     };
    


// export default Header



import { Button } from 'antd';
import React, { useState } from 'react';

const Header = () => {
  // State to track which menu item is active
  const [activeMenu, setActiveMenu] = useState('Summary');

  // Function to set the active menu item
  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };

  return (
    <div className="header">
      <div className='px-20 py-5 shadow-lg'>
        <div className="flex flex-row justify-between">
        <div className='logo mr-4'>
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={'/liskpay.png'}
                width="150"
                height="100"
                alt={'lisklogo'}
              />
            </div>
          <div className='flex flex-row gap-8'>
            
            {/* Map through the menu items and add a border if it's the active item */}
            {['Summary', 'Activity', 'Send & Request', 'Wallet', 'Help'].map((item) => (
              <div
                key={item}
                className={`menuOption mr-4 ${
                  activeMenu === item ? 'border-b-2 border-black pb-1' : ''
                }`}
                onClick={() => handleMenuClick(item)} // Set the active menu item on click
              >
                {item}
              </div>
            ))}
          </div>
          <div className='flex justify-end'>
            <Button type={"primary"}>Connect Wallet</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

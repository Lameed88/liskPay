// import { Button } from "antd";
// import React, { useState } from "react";
// import Link from 'next/link';




// const Header = () => {
//   // State to track the active menu item
//   const [activeMenu, setActiveMenu] = useState("Summary");
//   // State to track if the wallet is connected
//   const [isWalletConnected, setIsWalletConnected] = useState(false);

//   // Function to handle menu clicks and set the active menu item
//   const handleMenuClick = (menuItem) => {
//     setActiveMenu(menuItem);
//   };

//   // Function to toggle wallet connection status
//   const handleWalletToggle = () => {
//     setIsWalletConnected((prev) => !prev); // Toggle the state
//   };

//   return (
//     <div className="header">
//       <div className="px-20 py-5 shadow-lg">
//         <div className="flex flex-row justify-between">
//           <div className="flex flex-row">
//             <div className="logo mr-4 cursor-pointer">
              
//             <Link href="/">
  
//                 <img
//                   className="max-w-full mx-auto md:max-w-none h-auto"
//                   src={"/liskpay.png"}
//                   width="150"
//                   height="150"
//                   alt={"lisklogo"}
//                   />
            
//                   </Link>
//             </div>
//             {/* Map through the menu items and conditionally add a border */}
//             {["Summary", "Activity", "Send & Request", "Wallet", "Help"].map(
//               (item) => (
//                 <div
//                   key={item}
//                   className={`menuOption mr-4 ${
//                     activeMenu === item
//                       ? "border-b-2 border-black pb-1 text-cyan-500"
//                       : ""
//                   }`}
//                   onClick={() => handleMenuClick(item)}
//                 >
//                   {item}
//                 </div>
//               )
//             )}
//           </div>
//           <div className="flex justify-end">
//             {/* Switch button text based on wallet connection status */}
//             <Button type={"primary"} onClick={handleWalletToggle}>
//               {isWalletConnected ? "Disconnect Wallet" : "Connect Wallet"}
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// import { useState, useEffect } from "react";
// import { Button, Modal } from "antd";
// import Link from 'next/link';

// import RecentActivity from "./RecentActivity";
// import CurrentBalance from "./CurrentBalance";
// import RequestAndPay from "./RequestAndPay";
// import AccountDetails from "./AccountDetails";

// const Header = () => {
//   const [isWalletConnected, setIsWalletConnected] = useState(false);
//   const [modalVisible, setModalVisible] = useState(!isWalletConnected); // Show modal if wallet is not connected initially

//   useEffect(() => {
//     setModalVisible(!isWalletConnected); // Update modal visibility when isWalletConnected changes
//   }, [isWalletConnected]);

//   const handleWalletToggle = () => {
//     setIsWalletConnected(prevState => !prevState); // Toggle wallet connection state
//   };

//   const handleModalOk = () => {
//     setModalVisible(false); // Close the modal
//     setIsWalletConnected(false); // Disconnect the wallet
//   };

//   return (
//     <div className="header">
//       <div className="px-20 py-5 shadow-lg">
//         <div className="flex flex-row justify-between">
//           <div className="flex flex-row">
//             <div className="logo mr-4 cursor-pointer">
//               <Link href="/">
//                 <img
//                   className="max-w-full mx-auto md:max-w-none h-auto"
//                   src={"/liskpay.png"}
//                   width="150"
//                   height="150"
//                   alt={"lisklogo"}
//                 />
//               </Link>
//             </div>
//             {["Summary", "Activity", "Send & Request", "Wallet", "Help"].map(
//               (item) => (
//                 <div
//                   key={item}
//                   className={`menuOption mr-4`}
//                   style={{ display: isWalletConnected ? 'block' : 'none' }}
//                 >
//                   {item}
//                 </div>
//               )
//             )}
//           </div>
//           <div className="flex justify-end">
//             <Button type={"primary"} onClick={handleWalletToggle}>
//               {isWalletConnected ? "Disconnect Wallet" : "Connect Wallet"}
//             </Button>
//           </div>
//         </div>
//       </div>

//       <Modal
//         title="Please connect your wallet"
//         visible={modalVisible}
//         onOk={handleModalOk}
//         onCancel={() => setModalVisible(false)}
//       >
//         Please connect your wallet to continue.
//       </Modal>

//       {/* Render content only if wallet is connected */}
//       {isWalletConnected && (
//         <div>
//           <div className="flex flex-col-reverse md:flex-row gap-10 mt-5 justify-center">
//             <div className="md:w-1/2">
//               <RecentActivity />
//             </div>
//             <div className="flex flex-col md:w-1/3">
//               <div>
//                 <CurrentBalance />
//               </div>
//               <div>
//                 <RequestAndPay />
//               </div>
//               <div>
//                 <AccountDetails />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;


import { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import Link from 'next/link';

import RecentActivity from "./RecentActivity";
import CurrentBalance from "./CurrentBalance";
import RequestAndPay from "./RequestAndPay";
import AccountDetails from "./AccountDetails";

const Header = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Set initial state to false

  useEffect(() => {
    // Show the modal if wallet is not connected initially
    if (!isWalletConnected) {
      setModalVisible(true);
    }
  }, [isWalletConnected]);

  const handleWalletToggle = () => {
    setIsWalletConnected(prevState => !prevState); // Toggle wallet connection state
  };

  const handleModalOk = () => {
    setModalVisible(false); // Close the modal
    setIsWalletConnected(false); // Disconnect the wallet
  };

  return (
    <div className="header">
      <div className="px-20 py-5 shadow-lg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className="logo mr-4 cursor-pointer">
              <Link href="/">
                <img
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={"/liskpay.png"}
                  width="150"
                  height="150"
                  alt={"lisklogo"}
                />
              </Link>
            </div>
            {["Summary", "Activity", "Send & Request", "Wallet", "Help"].map(
              (item) => (
                <div
                  key={item}
                  className={`menuOption mr-4`}
                  style={{ display: isWalletConnected ? 'block' : 'none' }}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div className="flex justify-end">
            <Button type={"primary"} onClick={handleWalletToggle}>
              {isWalletConnected ? "Disconnect Wallet" : "Connect Wallet"}
            </Button>
          </div>
        </div>
      </div>

      <Modal
        title="Please connect your wallet"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={() => setModalVisible(false)}
      >
        Please connect your wallet to continue.
      </Modal>

      {/* Render content only if wallet is connected */}
      {isWalletConnected && (
        <div>
          <div className="flex flex-col-reverse md:flex-row gap-10 mt-5 justify-center">
            <div className="md:w-1/2">
              <RecentActivity />
            </div>
            <div className="flex flex-col md:w-1/3">
              <div>
                <CurrentBalance />
              </div>
              <div>
                <RequestAndPay />
              </div>
              <div>
                <AccountDetails />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

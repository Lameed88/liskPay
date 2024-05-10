import { Button } from 'antd'
import React from 'react'


const Header = () => {
  return (
  
    
   
  
        <div className="header">
            <div className='px-20 py-5'>
          <div className="flex flex-row justify-start">
            <>

              <div className="menuOption border-b-2 border-black pb-1 mr-4">Summary</div>
              <div className="menuOption mr-4">Activity</div>
              <div className="menuOption mr-4">{`Send & Request`}</div>
              <div className="menuOption mr-4">Wallet</div>
              <div className="menuOption mr-4">Help</div>
            </>
            <div className='flex justify-end'>

          <Button  type={"primary"}>Connect Wallet</Button>
            </div>
            </div>
          </div>
    
        </div>
      );
    };
    


export default Header
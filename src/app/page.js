// import Image from "next/image";
'use client'
import AccountDetails from "@/components/AccountDetails";
import CurrentBalance from "@/components/CurrentBalance";
import Header from "@/components/Header";

import RecentActivity from "@/components/RecentActivity";
import RequestAndPay from "@/components/RequestAndPay";

export default function Home() {
  return (
    <>
  <div > 
    <Header/>
  </div>
{/* <div className="flex flex-col-reverse md:flex-row gap-10 mt-5 justify-center">
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
</div> */}


    </>
  );
}

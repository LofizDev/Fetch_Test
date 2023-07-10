import Image from "next/image";

import homepage from "@/assets/svg/homepage.svg";
import notification from "@/assets/svg/notification.svg";
import wallet from "@/assets/svg/wallet.svg";
import profile from "@/assets/svg/profile.svg";

export default function Footer() {
  return <div className="w-5/6" style={{ margin: "0 auto" }}>
    <div className="flex justify-between py-4">
        <Image className="cursor-pointer" src={homepage} alt="homepage" width={40} height={40} />
        <Image className="cursor-pointer" src={notification} alt="notification" width={40} height={40} />
        <Image className="cursor-pointer" src={wallet} alt="wallet" width={40} height={40} />
        <Image className="cursor-pointer" src={profile} alt="profile" width={40} height={40} />
    </div>
  </div>;
}

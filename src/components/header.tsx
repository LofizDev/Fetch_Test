import Image from "next/image";
import arrowLeft from "@/assets/svg/arrow-left.svg";
import chevronLeft from "@/assets/svg/chevron-left.svg";
import slider from "@/assets/svg/slider.svg";

export default function Header() {
  return (
    <div className="Header bg-black text-white flex flex-col justify-between pb-[25%]">
      <div className="w-5/6 pr-2" style={{ margin: "0 auto" }}>
        <div>
          <Image
            src={arrowLeft}
            alt="arrow-left"
            width="40"
            height="40"
            className="py-8"
          />
        </div>
        <div className="font-bold text-4xl pb-4">Silver Tier</div>
        <div className="relative">
          <div className="text-md text-[#B5B5BE]">
            In Silver Tier, every $1 in rental fee paid, you get 2 coins to
            redeem exclusive rewards.
          </div>
          <div
            className="absolute top-[80px] rounded-xl bg-white bg-repeat p-6"
            style={{ backgroundImage: "url('image.png')", boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
          >
            <div className="text-[#B5B5BE] font-semibold text-sm">Available Coin balance</div>
            <div className="text-[#171725] font-normal text-5xl py-4">340</div>
            <div className="text-black">
              <Image src={slider} alt="slider" width={300} height={24} />
            </div>
            <div className="text-[#92929D] py-4 text-base">
              You have paid rental fee for $1,200. Pay more $800 to achieve Gold
              Tier.
            </div>
            <div className="flex cursor-pointer">
              <div className="text-[#0062FF]">View tier benefits</div>
              <div>
                <Image
                  src={chevronLeft}
                  alt="chevron-left"
                  width="25"
                  height="25"
                />
              </div>
            </div>
            <div className="bg-black text-white w-full py-4 my-4 text-center rounded-md cursor-pointer">
              My Coupons
            </div>
            <div className="text-[#B5B5BE] pb-2 text-center text-sm">Update 02/11/2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

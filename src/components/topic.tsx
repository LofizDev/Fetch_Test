import Image from "next/image";
import grayCoin from '@/assets/svg/gray-coin.svg'

export default function Topic({ name, data }: any) {
  const CURRENT_COIN = 500;
  return (
    <div className="w-5/6" style={{ margin: "0 auto" }}>
      <h1 className="font-bold py-6">{name}</h1>
      <div className="flex">
        {data.map((item: any) => (
          <div
            key={item.id}
            className="max-w-[200px] border-2 rounded-lg border-inherit mr-6"
          >
            <Image
              src="/image-demo.png"
              alt={item.description}
              width="200"
              height="100"
              className="rounded-t-lg min-w-[200px]"
            />
            <div className="p-4">
              {item.coins <= CURRENT_COIN ? (
                <div className="text-[#0062FF] font-semibold">
                  {item.coins} Coins
                </div>
              ) : (
                <div className="flex">
                  <Image src={grayCoin} alt="gray-coin" width={16} height={16} className="mr-2"/>
                  <div className="text-[#696974] font-semibold">
                    {item.coins} Coins
                  </div>
                </div>
              )}
              <div className="text-[#92929D] text-base">{item.description}</div>
              {item.coins > CURRENT_COIN && (
                <div className="text-[#0062FF] text-sm cursor-pointer">Insufficient coins</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

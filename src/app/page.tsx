import Image from 'next/image'
import Header from "@/components/header";
import Topic from "@/components/topic";
import Footer from "@/components/footer";
import data from "@/mockdata/data.json"

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div className='py-40'></div>
      <Topic name={'Petrol'} data={data?.petrol}/>
      <Topic name={'Rental Rebate'} data={data?.rentalRebate}/>
      <Topic name={'Food and Beverage'} data={data?.foodAndBeverage}/>
      <hr className='mt-8'></hr>
      <Footer />
    </div>
  )
}

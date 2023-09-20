import Image from 'next/image'
import{
  FaAngleDown
}from "react-icons/fa";

export default function Home() {
  return (
    <>
    <header className=' fixed top-0 w-full bg-transpernt font-[cavalier] z-50'>
      <nav className='md:px-[100px] md:py-4'>
        <div className="flex w-100 justify-between items-center">
          <div className="brand-logo">
            <Image
            alt=''
            className=''
            src="/img/navlogo.png"
            width={72}
            height={56}
            />
              
          </div>
          <ul className='flex gap-14 text-xl'>
            <li className='hover:text-gray-300 tracking-widest'><a href="">Home</a></li>
            <li className='hover:text-gray-300 tracking-widest flex items-center gap-2'><a href="">Event</a><FaAngleDown  className='text-base'/></li>
            <li className='hover:text-gray-300 tracking-widest'><a href="">Merchandise</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <main className='font-[cinzel-reg]'>
      <section className="hero-section bg-gradient-to-b from-[#364CA7] to-[#4AB3C2] w-full h-screen">
        <div className="grid items-center w-full h-full" >
          <div className="text-center text-[80px] flex flex-col items-center font-thin">
            <h1>Unleash Your </h1>
            <div className="flex items-center gap-4">
            <Image
              alt=''
              className=''
              src="/img/bunga.png"
              width={72}
              height={56}
            />
            <h1>Gladiator</h1>
            <Image
              alt=''
              className=''
              src="/img/bunga.png"
              width={72}
              height={56}
            />
            </div>
          </div>
          <Image
              alt=''
              className=' absolute bottom-0 z-10 '
              src="/img/bottom-hero.png"
              width={1884.2}
              height={479.01}
            />
        </div>
        
          
      </section>
      <section className="about  relative bg-gradient-to-t from-[#364CA7] to-[#4AB3C2]" >
      <Image
              alt=''
              className=' absolute -top-[75%] right-28 left-auto '
              src="/img/rumput.png"
              width={1216.17}
              height={721.78}
            />
        <div className="wrapper  w-full bg-contain bg-center bg-no-repeat" >
            <div className="text-center flex flex-col items-center py-28 gap-11">
              <h2 className=' text-7xl'>about mabacup</h2>
              <p className=' max-w-4xl text-center '>Pre-Event MABACUP 2023 merupakan event pertama yang mengawali keseluruhan rangkaian kegiatan MABACUP 2023. Guna menjadi wadah bagi Mahasiswa Baru untuk mengeksplorasi potensi dan bakatnya, Pre-event hadir dengan lomba “DESAIN MASKOT MABACUP 2023”. Dalam lomba ini, pastikan untuk memperhatikan Orisinalitas, estetika, dan relevansi karyamu, Fellow Gladiator! Pengembangan ide dan konsep yang menarik juga pastinya akan mengantarmu lebih dekat untuk meraih kemenangan di Pre-Event MABACUP 2023!</p>
            </div>
        </div>
      </section>
    </main>
    <footer></footer>
    </>
  )
}

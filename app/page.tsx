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


    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore the Next.js 13 playground.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{' '}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  )
}

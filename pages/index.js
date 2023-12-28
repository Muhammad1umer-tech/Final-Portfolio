import Link from 'next/link';
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
export default function Home() {
  const [text, setText] = useState('');

  useEffect(() => {
    const originalText = 'Muhammad Umer';
    let index = 0;
    const intervalId = setInterval(() => {
      setText(originalText.substring(0, index + 1));
      index++;
      if (index === originalText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the typing speed by changing the interval duration (in milliseconds)
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);
  return (
    <div className="">
      <div className="text-gray-700 text-3xl  overflow-hidden flex items-center h-[165px] mb-10 font-bold">

        <div className=" absolute ml-10 z-[1] bg-white rounded-full overflow-hidden object-fit w-[130px] h-[130px]">
          <Image src="/images/anaspic.jpg" className="h-[100%] w-full object-cover" alt="image" width={100} height={300}/>
          {/* <img src="/images/anaspic.jpg" className="h-[100%] w-full object-cover" /> */}
        </div>
        <p className='z-[1] absolute md:ml-52 ml-48 text-white md:text-4xl text-xl'>{text}
        </p>
        <Image src="/images/cover.jpeg" className="object-cover h-[100%] w-[100%] blur-[6px]" alt="cover" 
        width={1000}
        height={1000}
        />
        {/* <img src="/images/cover.jpeg" className="object-cover h-[100%] w-[100%] blur-[6px]">

        </img> */}
      </div>
      <p className='font-bold text-2xl text-white mb-5'>Projects</p>
      <div className="grid relative z-[2] lg:grid-cols-4 gap-5 mb-16">
        <Link href="https://github.com/Muhammad1umer-tech/ChestXGPT" className=" rounded bg-white md:h-60 h-72 shadow-sm">
          <div className='md:h-[50%] h-[60%] overflow-hidden' >
            <Image alt='image' src='/images/chestXGPT.JPG' width={1000} height={1000}/>
            {/* <img src='/images/th.jpeg' /> */}
          </div>
          <div className='md:h-[50%] h-[40%] flex flex-col  items-center justify-center '>
            <div className=' w-[90%] '>
              <p className='font-bold'>ChestXGPT (Final year Project)</p>
              <p className='text-[0.7rem] md:w-[90%] w-[100%]'>AI-Powered platform that detect disease of a given Chest X-ray image.</p>
            </div>
          </div>

        </Link >
        <div className="rounded bg-white md:h-60  h-72 shadow-sm">
          <div className='md:h-[50%]  h-[60%] overflow-hidden'>
          <Image alt='image' src='/images/azure.webp'  className="object-cover h-[100%] w-[100%] "  width={600} height={900}/>
            {/* <img src='/images/th.jpeg' /> */}
          </div>
          <div className='md:h-[50%] h-[40%] flex flex-col  items-center justify-center '>
            <div className=' w-[90%] '>
              <p className='font-bold'>Microsoft Azure Olympic data Project</p>
              <p className='text-[0.7rem] md:w-[90%] w-[100%]'>Developed Production based Pipelines, and transformed tokyo olympic data.</p>
            </div>
          </div>

        </div>
        <div className="rounded bg-white md:h-60  h-72 shadow-sm">
          <div className='md:h-[50%] h-[60%] overflow-hidden '>
          <Image alt='image' src='/images/new.JPG' width={400} height={50}  className="object-cover h-[100%] w-[100%]"/>
            {/* <img src='/images/th.jpeg' /> */}
          </div>
          <div className='md:h-[50%] h-[40%] flex flex-col  items-center justify-center '>
            <div className=' w-[90%] '>
              <p className='font-bold'>Sql Music-store Analysis</p>
              <p className='text-[0.7rem] md:w-[90%] w-[100%]'>Used Mysql easy, medium, complex concepts to analyse music store data.</p>
            </div>
          </div>

        </div>
        <div className="rounded bg-white md:h-60  h-72 shadow-sm">
          <div className='md:h-[50%] h-[60%] overflow-hidden   '>
          <Image alt='image' src='/images/new1.JPG' width={400} height={500}/>
            {/* <img src='/images/th.jpeg' /> */}
          </div>
          <div className='md:h-[50%] h-[40%] flex flex-col  items-center justify-center '>
            <div className=' w-[90%] '>
              <p className='font-bold'>Pizzeria Data Analytics</p>
              <p className='text-[0.7rem] md:w-[90%] w-[100%]'>Create dataset,
               snowflake schema, transform it using PowerQuery and make dashboard using PowerBi.
              <br/>
              <br/>
              </p>
            </div>
          </div>
        </div>
  
      </div>
      <p className='font-bold text-xl text-white mb-5'>What i know</p>
      <div className="grid relative z-[2] h-full  w-full lg:grid-cols-4 gap-5 mb-16">
        <div className="rounded p-5 bg-[#1c1b23] md:h-fit  w-full h-64 shadow-sm">
          <p className='mb-3 font-bold text-[#8b8a91]'>Microsoft Azure</p>
          <div className='flex flex-wrap'>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-400 border text-gray-400  mr-[4px] rounded-md p-2'>Azure DataFactory</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-red-400 border text-gray-400  mr-[7px] rounded-md p-2'>Azure Dataflow</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Azure Blob Storage</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>Azure Data Lake</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Azure Databricks</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Apache Spark</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Azure SQL Database</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Azure Databricks Cluster</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Azure HD insights Cluster</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Snaypse Analytics</p>
          </div>
        </div>
        <div className="rounded p-5 bg-[#1c1b23] md:h-[494px]  w-full h-64 shadow-sm">
          <p className='mb-3  font-bold text-[#8b8a91]'>Data Analytics</p>
          <div className='flex flex-wrap'>
            <p className='bg-[#14131A] w-fit text-sm my-[5px]  text-gray-400  mr-[7px] rounded-md p-2'>Microsoft Excel</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-yellow-400 border text-gray-400  mr-[7px] rounded-md p-2'>Microsoft PowerBI</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Power Query</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>Mysql</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>QuickDB</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>Star Schema</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>Snowflake Schema</p>
          </div>
        </div>

        <div className="rounded p-5  bg-[#1c1b23] md:h-[494px]  w-full h-64 shadow-sm">
          <p className='mb-3 font-bold text-[#8b8a91]'>Data Science & Libraries</p>
          <div className='flex flex-wrap'>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-400 border text-gray-400  mr-[7px] rounded-md p-2'>Statistics</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-green-400 border mr-[7px] rounded-md p-2'>Pandas</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-yellow-400 border  mr-[7px] rounded-md p-2'>Numpy</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-green-400 border mr-[7px] rounded-md p-2'>Matplotlib</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-green-400 border mr-[7px] rounded-md p-2'>Tensorflow</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-green-400 border mr-[7px] rounded-md p-2'>os</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-green-400 border mr-[7px] rounded-md p-2'>glob</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-green-400 border mr-[7px] rounded-md p-2'>Data Preprocessing</p>
            <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-green-400 border mr-[7px] rounded-md p-2'>PIL</p>
          </div>

        </div>
        <div className="rounded bg-[#1c1b23] md:h-[494px]  w-full h-28 shadow-sm">
          <div className="rounded p-5 bg-[#1c1b23] md:h-56  w-full h-64 shadow-sm">
            <p className='mb-3 font-bold text-[#8b8a91]'>Other</p>
            <div className='flex flex-wrap'>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400 border-red-400   border  mr-[7px] rounded-md p-2'>Python</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>Javascript</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] text-gray-400  mr-[7px] rounded-md p-2'>LeetCode</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-400 border text-gray-400  mr-[7px] rounded-md p-2'>C++</p>  
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>GeeksForGeeks</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>Github</p>
            </div>
            <p className='mb-3 font-bold text-[#8b8a91] mt-2'>Coursework</p>
            <div className='flex flex-wrap'>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-400 border text-gray-400  mr-[7px] rounded-md p-2'>PF</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-400 border text-gray-400  mr-[7px] rounded-md p-2'>OOP</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-400 border text-gray-400  mr-[7px] rounded-md p-2'>DSA</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>OS</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>AI</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>Networks</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>Automata</p>
              <p className='bg-[#14131A] w-fit text-sm my-[5px] border-blue-600   border text-gray-400  mr-[7px] rounded-md p-2'>Compiler Design</p>
            </div>

          </div>
        </div>
      </div>



      <div className='h-96 flex md:mt-0 mt-[10rem] justify-between flex-wrap'>
        <div className='text-white w-full md:w-[65%] m-3 p-4 border border-gray-600'>
          <p className='font-bold text-2xl text-blue-500'>
            About Me
          </p>
          <div className='border-b-[0.2px] border-gray-500 pb-4'></div>
          <div className='mt-4'>
            🔭 A final year computer science student who has a good knowledge of Data structures, Algorithms, Microsoft Azure, 
            Python and wants to contribute in Data Engineering field.
            <br />
            <br />
            <div className='ml-10'>
              Bachelor in Computer Science
            </div>
            <p className='ml-14 font-thin text-sm'>
              7th semester - 3.43CGPA | 3.82GPA
            </p>
          </div>
          <br />
          <div className='mt-4'>
            👯 I’m looking to collaborate on:
            <br />
            <br />
            <div className='ml-10'>
              * Python Projects
            <br />
              * Data Engineering Projects
            <br />
              * Data Analytics Projects
            <br />
              * Big data Projects
            <br />
              * Data Science Projects
              
            </div>
          </div>
          <div className='mt-4'>
            💻 Experience:
            <br />
            <p className='ml-5 italic'> - WAAN tech</p>
            <p className='ml-10 text-sm '>Role: Web Devlopment Intern</p>
            <p className='ml-14 text-sm font-thin'>Made significant contributions to the companys projects, leveraging technologies such as React, Next.js, and related frameworks </p>
          
            <br />
            <br />
            <p className='ml-5 italic'> - WAAN tech</p>
            <p className='ml-10 text-sm '>Role: Web Devlopment Intern</p>
            <p className='ml-14 text-sm font-thin'>Made significant contributions to the companys projects, leveraging technologies such as React, Next.js, and related frameworks </p>
            <br />
          
          </div>
        </div>




        <div className='text-white w-full md:w-[30%]   p-4 rounded m-2 bg-[#1c1b23]'>
          <p className='text-[#8b8a91] text-lg font-bold'>
            Other projects
          </p>
          <div>
            <div className='mt-5 flex justify-evenly '>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt">
                  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z">
                  </path></svg>
              </div>
              <div className='w-[100px] text-[#8b8a91]'>
                <p className='font-bold'>
                  Bank Churn Prediction
                </p>
                <p className='font-thin text-[0.75rem]'>
                  Next.js 13, Drizzle, PostgreSql, Docker, ShadCn
                </p>
              </div>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b8a91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path>
                  <path d="m9 18 6-6-6-6"></path></svg>
              </div>
            </div>
          </div>
          <div>
            <div className='mt-5 flex justify-evenly '>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt">
                  <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z">
                  </path></svg>
              </div>
              <div className='w-[100px] text-[#8b8a91]'>
                <p className='font-bold'>
                  Ez Clothing
                </p>
                <p className='font-thin text-[0.75rem]'>
                  Next.js 13, Drizzle, PostgreSql, Docker, ShadCn
                </p>
              </div>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b8a91" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path>
                  <path d="m9 18 6-6-6-6"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

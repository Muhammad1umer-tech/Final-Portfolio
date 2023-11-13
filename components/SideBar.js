import { forwardRef } from "react";
import Image from 'next/image'
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className=" bg-[#1c1b23] fixed w-56 h-full z-10 m-3 shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <Image
            className="w-32 h-auto"
            src="/ferox-transparent.png"
            alt="company logo"
            width={100}
            height={200}
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-[#31303a] text-orange-500"
                : "text-gray-400 hover:bg-[#31303a] hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        {/* <Link href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </Link> */}
        <Link href="/projects">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/projects"
                ? "bg-[#31303a] text-orange-500"
                : "text-gray-400 hover:bg-[#31303a] hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Projects</p>
            </div>
          </div>
        </Link>
        <p className="font ml-6 text-[#8b8a91]">Socials</p>
        <Link href="https://www.linkedin.com/in/anas-ashfaq-612322267/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
             ${
              router.pathname == "www.linkedin.com/in/anas-ashfaq-612322267&apos;"
                ? "bg-[#31303a] text-orange-500"
                : "text-gray-400 hover:bg-[#31303a] hover:text-[#0277b5]"
            }`
          }
          >
            <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             fill="none" stroke="#0277b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </div>
            <div>
              <p className="">LinkedIn</p>
            </div>
          </div>
        </Link>
        <Link href="https://github.com/AanasAashfaq">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors
             ${
              router.pathname == "https://github.com/AanasAashfaq&apos;"
                ? "bg-[#31303a] text-orange-500"
                : "text-gray-400 hover:bg-[#31303a] hover:text-[#2a9d8f]"
            }`
          }
          >
            <div className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </div>
            <div>
              <p className="">Github</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-custom-primary">
      <div className="container">
        <footer className="pt-8 pb-8 ">
          <div className="mx-auto grid grid-cols-3 xs:grid-cols-4 xl:grid-cols-5 text-white gap-4">
            <div className="col-span-2 lg:col-span-1 xl:col-span-2 flex flex-col space-y-6">
              <h2 className="text-xl sm:text-3xl xl:text-5xl tracking-wider">
                LOGO
              </h2>
              <p className="text-md xl:tracking-wide text-balance">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                quaerat laborum debitis fugit quae! Aliquid, dolorem. Porro
                voluptatem ipsam quas?
              </p>
              <div className="flex items-end">
              <p className="text-xs sm:text-sm xl:tracking-wide">
                © 2024 “Step By Step”
              </p>
              </div>
            </div>
            <div className="space-y-6 ">
              <h2 className="text-sm sm:text-base xl:text-lg font-bold mb-2">
                Get Started
              </h2>
              <ul className="space-y-5 text-gray text-sm sm:text-base">
                <li>
                  <Link href={""} className="hover:underline">
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    My account
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h2 className="text-sm sm:text-base xl:text-lg font-bold mb-2">
                Menu
              </h2>
              <ul className="space-y-5 text-gray text-sm sm:text-base">
                <li>
                  <Link href={""} className="hover:underline">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Price
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Feedbacks
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href={""} className="hover:underline">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-sm space-y-6 " id="footer">
              <h2 className=" sm:text-base xl:text-lg font-bold mb-2">
                Контакты
              </h2>
              <ul className="space-y-5 text-gray sm:text-base x:whitespace-nowrap">
                <li>
                  <a
                    href="tel:+7 777 777 7777"
                    className="flex items-center gap-2"
                  >
                    {/* <img src={phone} className="w-6" alt="" /> */}
                    <span className="">+7 777 777 7777</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2"
                  >
                    {/* <img src={instagram} className="w-6" alt="" /> */}
                    <span className="">instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2"
                  >
                    {/* <img src={whatsapp} className="w-6" alt="" /> */}
                    <span className="">whatsapp</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-2"
                  >
                    {/* <img src={facebook} className="w-6" alt="" /> */}
                    <span className="">facebook</span>
                  </a>
                </li>
                <li>
                  {/* <img src={gmail} className="w-6" alt="" /> */}
                  <span className="">email@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

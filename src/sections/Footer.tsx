import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinked from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:blur before:bottom-0 before:w-full before:bg-[linear-gradient(to_right,#f87bff,#fb29cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image src={logo} height={40} alt="saas logo" className="relative" />
        </div>
        <nav className="flex flex-col gap-6 mt-6 md:flex-row justify-center">
          <a href="#">About</a>
          <a href="#">Feature</a>
          <a href="#">Customers</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinked />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

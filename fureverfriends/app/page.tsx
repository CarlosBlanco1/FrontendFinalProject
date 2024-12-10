"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full transition ease-in-out">
        <video autoPlay loop muted width="100%">
          <source src="./FrontPage.mp4" type="video/mp4" />
        </video>
        <Image
          className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2"
          src={"/fureverLogo.png"}
          alt={""}
          width={400}
          height={400}
          style={{ filter: "invert(1) brightness(200%) contrast(100%)" }}
        />
      </div>
    </>
  );
}

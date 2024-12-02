"use client";

export default function Home() {
  return (
    <>
      <div className="h-full transition ease-in-out">
        <video autoPlay loop muted width="100%">
          <source src="./FrontPage.mp4" type="video/mp4" />
        </video>
          <h1 className="text-white text-9xl font-title absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2">
            Furever Friends
          </h1>
      </div>
    </>
  );
}

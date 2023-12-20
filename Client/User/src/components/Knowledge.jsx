import React from "react";

const Knowledge = () => {
  return (
    <div
      id="aboutus"
      className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4"
    >
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-3"
          src="https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="glang pic"
        />
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-2"
          src="https://plus.unsplash.com/premium_photo-1661416415130-2e6cf748dff2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="glang pic"
        />
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-2"
          src="https://plus.unsplash.com/premium_photo-1682097409792-354d4d544753?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="glang pic"
        />
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-3"
          src="https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="glang pic"
        />
        <img
          className="object-cover w-full h-full p-2 rounded-3xl hover:scale-105 ease-in-out duration-300 row-span-2"
          src="https://images.unsplash.com/photo-1592229505726-ca121723b8ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGhvdGVsfGVufDB8fDB8fHww"
          alt="glang pic"
        />
      </div>
      {/* Right side */}
      <div className="flex flex-col h-full justify-center">
        <h4 className="text-5xl md:text-6xl font-bold hover:shadow-lg hover:shadow-black/70 hover:p-1 rounded-lg hover:bg-blue-100 ease-in duration-300">
          Experience the Magic of Ceylon Sea&nbsp;.
        </h4>
        <p className="text-2xl py-6">
          Discover the allure of a beachside paradise at Celon Sea Hotel. Nestled amidst the serene waves and golden sands, we offer an unforgettable retreat.
        </p>
        <p className="pb-6">
          Indulge in breathtaking views, impeccable hospitality, and luxurious accommodations. Your escape to tranquility awaits amidst the coastal charm..
        </p>
        <div className="space-y-2 sm:space-y-0">
          
          <button className="bg-black text-white hover:scale-105 ease-in duration-300 transition-transform border-black hover:shadow-xl">
            <a href="/" title="meet">
            Plan Your &nbsp;Stay!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;

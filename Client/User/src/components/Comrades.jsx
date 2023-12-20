import React from "react";

const Comrades = () => {
  return (
    <div
      id="comrades"
      className="max-w-[1400px] h-[500px] bg-blue-300 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4"
    >
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Special Offers</h3>
        <p className="pt-4">
        Indulge in our exclusive offers tailored just for you. Whether it's a weekend getaway or an extended stay, we have something special in store.
        </p>
       
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="https://img.freepik.com/free-psd/realistic-modern-double-bedroom-with-furniture-frame_176382-423.jpg?w=1380&t=st=1702546531~exp=1702547131~hmac=b7022c325595b30f54b52ad1630f96292307f81ad0d0dcebf92ff3f7c8682af6"
          alt="comrade pic"
        />
        <img
          className="row-span-2 object-cover w-full h-full rounded-2xl"
          src="https://img.freepik.com/free-photo/umbrellas-hammocks-near-pool_1203-204.jpg?w=1060&t=st=1702549433~exp=1702550033~hmac=43d1fe84980da79a3702f9c15b1194f9144c58296fd656a794946e788f274f30"
          alt="comrade pic"
        />
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="https://img.freepik.com/free-photo/rest-by-swimming-pool_1098-13916.jpg?w=1060&t=st=1702547285~exp=1702547885~hmac=850474cecc04a629d932f96272b3eb574323486c22d21cee486dd269e5edaf3a"
          alt="comrade pic"
        />
      </div>
    </div>
  );
};

export default Comrades;

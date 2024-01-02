import React from "react";

function Userprofile() {
  return (
    <div class="flex flex-col lg:flex-row bg-white">
      <div class=" lg:w-1/4">
        <div class="p-4 border-t mx-8">
          {/* <button class="w-3/4 block mx-auto rounded-full bg-transparent hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg font-semibold text-gray-900 px-6 py-2 border border-gray-900">
            Back to Home
          </button> */}
        </div>
        <div class="sm:flex justify-center sm:h-screen bg-gray-900 rounded-md">
          <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm mt-16 ml-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;

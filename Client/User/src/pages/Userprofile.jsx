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
          <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm mt-16 ml-4">
            <div className="bg-gradient-to-br from-gray-900 to-gray-100 rounded-t-lg h-32 overflow-hidden">
              <img
                className="object-cover object-top w-full"
                src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Mountain"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt="Woman looking front"
              />
            </div>
            <div className="text-center mt-2">
              <h2 className="font-semibold text-white">Sarah Smith</h2>
              {/* userdata */}
            </div>
            <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around"></ul>
            <div className="p-4 border-t mx-8 mt-2">
              <button className="w-1/2 block mx-auto  rounded-md bg-white hover:shadow-lg font-semibold text-black px-7 py-2">
                Logout
              </button>
            </div>
            <div className="p-4 border-t mx-8 mt-2">
              hello
              {/* ADD ICON pack */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;

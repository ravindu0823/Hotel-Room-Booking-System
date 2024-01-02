import React from "react";

function Userprofile() {
  return (
    <div class="flex flex-col lg:flex-row bg-white">
      <div class=" lg:w-1/4">
        <div class="p-4 border-t mx-8">
          <button class="w-3/4 block mx-auto rounded-full bg-transparent hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg font-semibold text-gray-900 px-6 py-2 border border-gray-900">
            Back to Home
          </button>
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
      <div class="bg-gray-300 lg:flex-1 bg-white ">
        <div class="mx-10 mt-10 ">
          <div>
            <h1 class="text-4xl font-bold mt-20 ml-3">My Reservation Details</h1>
            <table className="responsive-table mt-10">
              <tbody>
                <tr>
                  <td>
                    <p className="text-gray-500 text-left ml-4">Contact Number:</p>
                  </td>
                  <td className="mx-2 mb-2">
                    <p className="text-gray-500 text-left ml-5 ">071-9454887</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-gray-500 text-left ml-4">Email:</p>
                  </td>
                  <td className="mx-2 mb-2">
                    <p className="text-gray-500 text-left mx-5">
                      user@example.com
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="text-gray-500 text-left ml-4">Address:</p>
                  </td>
                  <td className="mx-2 mb-2">
                    <p className="text-gray-500 text-left mx-5">
                      123 Street, City
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <div class="flex flex-wrap mt-8">
                <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 px-4 mb-8">
                  <a
                    href="#"
                    class="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      RESERVATION DETAILS
                    </h5>
                    <div class="table-responsive">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                ARRIVAL DATE
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left">
                                12/25/2023
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                DEPARTURE DATE
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left">
                                12/26/2023
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                TYPE OF ROOM
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left ">
                                Normal Double Bed room
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                NUMBER OF ROOMS
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left mx-2">2</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                NUMBER OF CHILDERN
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left mx-2">1</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                NUMBER OF ADULTS
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left mx-2">2</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <h1 className="text-gray-900 dark:text-white text-left text-2xl font-bold">
                                FOOD DETAILS
                              </h1>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                MEALS OF DAY
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left ">LUNCH</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                MEALS TYPE
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left ">VEGI</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="flex justify-between mt-4">
                      <a
                        href="#"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                      >
                        Edit Reservation
                      </a>
                      <a
                        href="#"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                      >
                        Cancel
                      </a>
                    </div>
                  </a>
                </div>
                <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 px-4 mb-8">
                  <a
                    href="#"
                    class="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      RESERVATION DETAILS
                    </h5>

                    <div class="table-responsive">
                      <table class="table">
                        <tbody>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                ARRIVAL DATE
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left">
                                12/25/2023
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                DEPARTURE DATE
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left">
                                12/26/2023
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                TYPE OF ROOM
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left ">
                                Normal Double Bed room
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                NUMBER OF ROOMS
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left mx-2">2</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                NUMBER OF CHILDERN
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left mx-2">1</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                NUMBER OF ADULTS
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left mx-2">2</p>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <h1 className="text-gray-900 dark:text-white text-left text-2xl font-bold">
                                FOOD DETAILS
                              </h1>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                MEALS OF DAY
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left ">LUNCH</p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="text-gray-500 text-left">
                                MEALS TYPE
                              </p>
                            </td>
                            <td className="mx-2 mb-2">
                              <p className="text-gray-500 text-left ">VEGI</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="flex justify-between mt-4">
                      <a
                        href="#"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                      >
                        Edit Reservation
                      </a>
                      <a
                        href="#"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                      >
                        Cancel
                      </a>
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userprofile;

import React from "react";
import SecondNavbar from "../components/SecondNavbar";
function Userprofile() {
  return (
    <div>
        <div>
            <SecondNavbar />
        </div>
      <div class="flex flex-col lg:flex-row bg-white">
        <div class=" lg:w-1/4">
          <div class="sm:flex justify-center sm:h-screen bg-gray-900 rounded-md">
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm mt-14 ml-4">
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
                <div class="flex justify-between mx-8 mt-2">
                  {/* <div class="p-4 border-t flex items-center rounded-full bg-white opacity-30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </div>

                  <div class="p-4 border-t flex items-center rounded-full bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 mr-2 rounded-full bg-white p-1"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6l8 4-8 4-8-4 8-4z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v12"
                      ></path>
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-300 lg:flex-1 bg-black">
          <div class="mx-10 mt-10 ">
            <div>
              <h1 class="text-4xl font-bold mt-14 ml-3">
                My Reservation Details
              </h1>
              <table className="responsive-table mt-10">
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-900 text-left ml-4">
                        Contact Number:
                      </p>
                    </td>
                    <td className="mx-2 mb-2">
                      <p className="text-gray-900 text-left ml-5 ">
                        071-9454887
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-900 text-left ml-4">Email:</p>
                    </td>
                    <td className="mx-2 mb-2">
                      <p className="text-gray-900 text-left mx-5">
                        user@example.com
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-900 text-left ml-4">Address:</p>
                    </td>
                    <td className="mx-2 mb-2">
                      <p className="text-gray-900 text-left mx-5">
                        123 Street, City
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div>
                <div class="flex flex-wrap mt-8 ">
                  <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 px-4 mb-8 ">
                    <div className="block max-w-xl p-6 bg-gray-900 lg:flex-1 border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
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
                                <p className="text-gray-500 text-left mx-2">
                                  2
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="text-gray-500 text-left">
                                  NUMBER OF CHILDERN
                                </p>
                              </td>
                              <td className="mx-2 mb-2">
                                <p className="text-gray-500 text-left mx-2">
                                  1
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="text-gray-500 text-left">
                                  NUMBER OF ADULTS
                                </p>
                              </td>
                              <td className="mx-2 mb-2">
                                <p className="text-gray-500 text-left mx-2">
                                  2
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <h1 className="text-white mt-3 dark:text-white text-left text-2xl font-bold">
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
                                <p className="text-gray-500 text-left ">
                                  LUNCH
                                </p>
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
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-center"
                        >
                          Edit Reservation
                        </a>
                        <a
                          href="#"
                          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md ml-2 text-center"
                        >
                          Cancel
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 px-4 mb-8 ">
                    <div className="block max-w-xl p-6 bg-gray-900 lg:flex-1 border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
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
                                <p className="text-gray-500 text-left mx-2">
                                  2
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="text-gray-500 text-left">
                                  NUMBER OF CHILDERN
                                </p>
                              </td>
                              <td className="mx-2 mb-2">
                                <p className="text-gray-500 text-left mx-2">
                                  1
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p className="text-gray-500 text-left">
                                  NUMBER OF ADULTS
                                </p>
                              </td>
                              <td className="mx-2 mb-2">
                                <p className="text-gray-500 text-left mx-2">
                                  2
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                <h1 className="text-white mt-3 dark:text-white text-left text-2xl font-bold">
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
                                <p className="text-gray-500 text-left ">
                                  LUNCH
                                </p>
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
                          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md text-center"
                        >
                          Edit Reservation
                        </a>
                        <a
                          href="#"
                          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md ml-2 text-center"
                        >
                          Cancel
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 px-4 mb-8">
                    {/* hello */}
                  </div>
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

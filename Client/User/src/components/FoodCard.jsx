import { useState, useEffect } from "react";
import axios, { GET_ALL_FOOD_URL } from "../api/axios";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const FoodCard = ({ food }) => {
  const [image2, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchFoodImage = async () => {
      try {
        // Assuming you have an endpoint for fetching food images
        const response = await axios.get(GET_ALL_FOOD_URL);
        setFoods(response.data.imageURL);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching food image:", error);
        setLoading(false);
      }
    };

    fetchFoodImage();
  }, [food._id]);
  if (loading) {
    return (
      // Replace this with your spinner component or loading indicator
      <div className="justify-center items-center h-screen">
        <div class="flex gap-1">
          <div class="w-5 h-5 rounded-full animate-pulse bg-black ml-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-6">
        <Card className="w-full max-w-full max-w-[26rem] shadow-lg mb-6 m-4">
          <CardHeader floated={false} color="blue-gray">
            <Link to={`/foods/${food._id}`}>
              <img
                className="rounded-t-lg"
                src={food.image}
                alt={food.foodName}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
            </Link>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                {food.foodName}
              </Typography>
              <Typography
                color="blue-gray"
                className="flex items-center gap-1.5 font-normal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.0
              </Typography>
            </div>
            <Typography color="gray">Meal Type: {food.foodType}</Typography>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
            <Tooltip content="Fresh">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-white p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                      <path
                        fillRule="evenodd"
                        d="M2,14 L22,14 L22,14 C22,18.9705627 17.9705627,23 13,23 L11,23 C6.02943725,23 2,18.9705627 2,14 Z"
                        clipRule="evenodd"
                      />
                      <path d="M16.7233675,1.41763641 C17.1846056,1.68393238 17.3426375,2.27371529 17.0763415,2.73495343 C17.070507,2.74505905 17.0644896,2.75505793 17.0582922,2.76494514 L10.5379559,13.1673758 C10.3897629,13.4038004 10.08104,13.4805452 9.83939289,13.3410302 C9.59774579,13.2015152 9.50984729,12.8957809 9.64050046,12.6492297 L15.3891015,1.80123745 C15.6384827,1.33063867 16.2221417,1.15130634 16.6927405,1.40068748 C16.7030512,1.40615136 16.7132619,1.41180193 16.7233675,1.41763641 Z M21.8768598,4.21665558 C22.2332333,4.61244851 22.2012776,5.22219993 21.8054847,5.57857348 C21.796813,5.58638154 21.7880002,5.59403156 21.7790508,5.60151976 L12.3633147,13.4799245 C12.1493155,13.6589835 11.8319871,13.6365715 11.6452796,13.4292118 C11.458572,13.221852 11.4694527,12.9039193 11.6698998,12.7098092 L20.4893582,4.16917098 C20.8719568,3.79866796 21.4824663,3.80847334 21.8529693,4.19107192 C21.8610869,4.19945456 21.8690517,4.20798385 21.8768598,4.21665558 Z" />
                    </svg>
                  </span>
                </Tooltip>
              <Tooltip content="Fresh">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-white p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                      <path
                        fillRule="evenodd"
                        d="M2,14 L22,14 L22,14 C22,18.9705627 17.9705627,23 13,23 L11,23 C6.02943725,23 2,18.9705627 2,14 Z"
                        clipRule="evenodd"
                      />
                      <path d="M16.7233675,1.41763641 C17.1846056,1.68393238 17.3426375,2.27371529 17.0763415,2.73495343 C17.070507,2.74505905 17.0644896,2.75505793 17.0582922,2.76494514 L10.5379559,13.1673758 C10.3897629,13.4038004 10.08104,13.4805452 9.83939289,13.3410302 C9.59774579,13.2015152 9.50984729,12.8957809 9.64050046,12.6492297 L15.3891015,1.80123745 C15.6384827,1.33063867 16.2221417,1.15130634 16.6927405,1.40068748 C16.7030512,1.40615136 16.7132619,1.41180193 16.7233675,1.41763641 Z M21.8768598,4.21665558 C22.2332333,4.61244851 22.2012776,5.22219993 21.8054847,5.57857348 C21.796813,5.58638154 21.7880002,5.59403156 21.7790508,5.60151976 L12.3633147,13.4799245 C12.1493155,13.6589835 11.8319871,13.6365715 11.6452796,13.4292118 C11.458572,13.221852 11.4694527,12.9039193 11.6698998,12.7098092 L20.4893582,4.16917098 C20.8719568,3.79866796 21.4824663,3.80847334 21.8529693,4.19107192 C21.8610869,4.19945456 21.8690517,4.20798385 21.8768598,4.21665558 Z" />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="Take away">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-white p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M7.92847669,8.37139068 L6.07152331,7.62860932 L6.95735128,5.4140394 C7.78213616,3.3520772 9.77919874,2 12,2 C14.2208013,2 16.2178638,3.3520772 17.0426487,5.4140394 L17.9284767,7.62860932 L16.0715233,8.37139068 L15.1856953,6.15682075 C14.6646372,4.85417531 13.4029921,4 12,4 C10.5970079,4 9.33536284,4.85417531 8.81430466,6.15682075 L7.92847669,8.37139068 Z" />
                      <path
                        fillRule="evenodd"
                        d="M7.61683158,7 L16.3831684,7 C17.326244,7 18.1411715,7.65880026 18.3387732,8.58094182 L20.4816304,18.5809418 C20.7130698,19.6609925 20.0251345,20.7241654 18.9450837,20.9556048 C18.8073508,20.985119 18.6668852,21 18.5260256,21 L5.47397444,21 C4.36940494,21 3.47397444,20.1045695 3.47397444,19 C3.47397444,18.8591403 3.48885541,18.7186748 3.51836961,18.5809418 L5.66122675,8.58094182 C5.85882852,7.65880026 6.67375601,7 7.61683158,7 Z M6,19 C6.55228475,19 7,18.5522847 7,18 C7,17.4477153 6.55228475,17 6,17 C5.44771525,17 5,17.4477153 5,18 C5,18.5522847 5.44771525,19 6,19 Z M8,15 C8.55228475,15 9,14.5522847 9,14 C9,13.4477153 8.55228475,13 8,13 C7.44771525,13 7,13.4477153 7,14 C7,14.5522847 7.44771525,15 8,15 Z M10,11 C10.5522847,11 11,10.5522847 11,10 C11,9.44771525 10.5522847,9 10,9 C9.44771525,9 9,9.44771525 9,10 C9,10.5522847 9.44771525,11 10,11 Z M14,11 C14.5522847,11 15,10.5522847 15,10 C15,9.44771525 14.5522847,9 14,9 C13.4477153,9 13,9.44771525 13,10 C13,10.5522847 13.4477153,11 14,11 Z M12,15 C12.5522847,15 13,14.5522847 13,14 C13,13.4477153 12.5522847,13 12,13 C11.4477153,13 11,13.4477153 11,14 C11,14.5522847 11.4477153,15 12,15 Z M16,15 C16.5522847,15 17,14.5522847 17,14 C17,13.4477153 16.5522847,13 16,13 C15.4477153,13 15,13.4477153 15,14 C15,14.5522847 15.4477153,15 16,15 Z M10,19 C10.5522847,19 11,18.5522847 11,18 C11,17.4477153 10.5522847,17 10,17 C9.44771525,17 9,17.4477153 9,18 C9,18.5522847 9.44771525,19 10,19 Z M14,19 C14.5522847,19 15,18.5522847 15,18 C15,17.4477153 14.5522847,17 14,17 C13.4477153,17 13,17.4477153 13,18 C13,18.5522847 13.4477153,19 14,19 Z M18,19 C18.5522847,19 19,18.5522847 19,18 C19,17.4477153 18.5522847,17 18,17 C17.4477153,17 17,17.4477153 17,18 C17,18.5522847 17.4477153,19 18,19 Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Tooltip>
                <Tooltip content="Dining">
                  <span className="cursor-pointer rounded-full border border-gray-900/5 bg-white p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        d="M12.5,19 C8.91014913,19 6,16.0898509 6,12.5 C6,8.91014913 8.91014913,6 12.5,6 C16.0898509,6 19,8.91014913 19,12.5 C19,16.0898509 16.0898509,19 12.5,19 Z M12.5,16.4 C14.6539105,16.4 16.4,14.6539105 16.4,12.5 C16.4,10.3460895 14.6539105,8.6 12.5,8.6 C10.3460895,8.6 8.6,10.3460895 8.6,12.5 C8.6,14.6539105 10.3460895,16.4 12.5,16.4 Z M12.5,15.1 C11.0640597,15.1 9.9,13.9359403 9.9,12.5 C9.9,11.0640597 11.0640597,9.9 12.5,9.9 C13.9359403,9.9 15.1,11.0640597 15.1,12.5 C15.1,13.9359403 13.9359403,15.1 12.5,15.1 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path
                        d="M22,13.5 L22,13.5 C22.2864451,13.5 22.5288541,13.7115967 22.5675566,13.9954151 L23.0979976,17.8853161 C23.1712756,18.4226878 22.7950533,18.9177172 22.2576815,18.9909952 C22.2137086,18.9969915 22.1693798,19 22.125,19 L22.125,19 C21.5576012,19 21.0976335,18.5400324 21.0976335,17.9726335 C21.0976335,17.9415812 21.0990414,17.9105449 21.1018527,17.8796201 L21.4547321,13.9979466 C21.4803698,13.7159323 21.7168228,13.5 22,13.5 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path
                        d="M24,5 L24,12 L21,12 L21,8 C21,6.34314575 22.3431458,5 24,5 Z"
                        fill="#000000"
                        transform="translate(22.500000, 8.500000) scale(-1, 1) translate(-22.500000, -8.500000) "
                      />
                      <path
                        d="M0.714285714,5 L1.03696911,8.32873399 C1.05651593,8.5303749 1.22598532,8.68421053 1.42857143,8.68421053 C1.63115754,8.68421053 1.80062692,8.5303749 1.82017375,8.32873399 L2.14285714,5 L2.85714286,5 L3.17982625,8.32873399 C3.19937308,8.5303749 3.36884246,8.68421053 3.57142857,8.68421053 C3.77401468,8.68421053 3.94348407,8.5303749 3.96303089,8.32873399 L4.28571429,5 L5,5 L5,8.39473684 C5,9.77544872 3.88071187,10.8947368 2.5,10.8947368 C1.11928813,10.8947368 -7.19089982e-16,9.77544872 -8.8817842e-16,8.39473684 L0,5 L0.714285714,5 Z"
                        fill="#000000"
                      />
                      <path
                        d="M2.5,12.3684211 L2.5,12.3684211 C2.90055463,12.3684211 3.23115721,12.6816982 3.25269782,13.0816732 L3.51381042,17.9301218 C3.54396441,18.4900338 3.11451066,18.9683769 2.55459863,18.9985309 C2.53641556,18.9995101 2.51820943,19 2.5,19 L2.5,19 C1.93927659,19 1.48472045,18.5454439 1.48472045,17.9847204 C1.48472045,17.966511 1.48521034,17.9483049 1.48618958,17.9301218 L1.74730218,13.0816732 C1.76884279,12.6816982 2.09944537,12.3684211 2.5,12.3684211 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                    </svg>
                  </span>
                </Tooltip>
              <Tooltip content="Hot">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Tooltip>
              <Tooltip content="And +20 more">
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  +20
                </span>
              </Tooltip>
              <div className="text-left">
                <Link
                  to={`/foods/${food._id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-dark dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default FoodCard;

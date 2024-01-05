import { useState } from "react";
import { FeedbackModel } from "../utils/models";
import axios, { SEND_FEEDBACK } from "../api/axios";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const Contact = () => {
  const [feedback, setFeedback] = useState(FeedbackModel);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        SEND_FEEDBACK,
        JSON.stringify(feedback),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log(response);

      if (!response.statusText) throw new Error("Feedback Submission Failed");

      Swal.fire({
        title: "Hotel Room Booking System",
        text: `Thank you for your feedback! an email has been sent to ${feedback.email}`,
        icon: "success",
      }).then(() => {
        Navigate("/");
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: "Hotel Room Booking System",
        text: `Feedback Submission Failed!`,
        icon: "error",
      });
    }
  };

  return (
    <div id="seek" className="w-full min-h-screen relative">
      <div className="max-w-[1400px] h-[680px] flex flex-col justify-center items-center space-y-2 p-4 mt-2 mb-auto mx-auto">
        <h1 className="inline-block items-center font-bold text-5xl sm:text-6xl tracking-widest leading-6 lg:mt-40 mt-52 mb-auto">
          Contact Us&nbsp;.
        </h1>
        <h3 className="inline-block items-center text-xl font-semibold text-slate-700 tracking-wide leading-4 font-orbitron mt-4 mb-auto">
          We&apos;re just one email away.&nbsp;Hit us up!
        </h3>
        <div>
          <form className="space-y-2 flex flex-col text-justify items-center justify-around p-4 mt-4 mb-auto border-[2px] border-black rounded-2xl bg-black max-w-5xl w-[380px] lg:w-[900px] xl:w-[1200px] sm:w-[600px] md:w-[680px] h-[500px]">
            <input
              className="w-full p-2 m-2 rounded-xl border-slate-700 border bg-white placeholder-gray-800/50 font-oswald tracking-wide leading-snug text-stone-00 uppercase text-lg"
              type="text"
              value={feedback.name}
              onChange={(e) =>
                setFeedback({ ...feedback, name: e.target.value })
              }
              placeholder="NAME"
              required
            />
            <input
              className="w-full p-2 m-2 rounded-xl border-slate-700 border bg-white placeholder-gray-800/50 font-oswald tracking-wide leading-snug text-stone-00 uppercase text-lg"
              type="email"
              value={feedback.email}
              onChange={(e) =>
                setFeedback({ ...feedback, email: e.target.value })
              }
              placeholder="EMAIL"
              required
            />
            <textarea
              className="w-full p-2 m-2 rounded-xl border-slate-700 border bg-white placeholder-gray-800/50 font-oswald tracking-wide leading-snug text-stone-00 uppercase text-lg"
              type="text"
              value={feedback.feedback}
              onChange={(e) =>
                setFeedback({ ...feedback, feedback: e.target.value })
              }
              placeholder="MESSAGE"
              rows="6"
              required
            />
            <button
              className="p-3 m-2 rounded-2xl border-[2px] border-slate-900 hover:bg-white hover:text-black bg-white ease-in duration-300"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

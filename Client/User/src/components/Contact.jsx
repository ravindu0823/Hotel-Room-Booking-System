const Contact = () => {
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
          <form className="space-y-2 flex flex-col text-justify items-center justify-around p-4 mt-4 mb-auto border-[2px] border-black rounded-2xl bg-blue-100 max-w-6xl w-[380px] lg:w-[900px] xl:w-[1200px] sm:w-[600px] md:w-[680px] h-[500px]">
            <input
              className="w-full p-2 m-2 rounded-xl border-slate-700 border bg-[beige] placeholder-gray-800/50 font-oswald tracking-wide leading-snug text-stone-00 uppercase text-lg"
              type="text"
              placeholder="NAME"
              required
            />
            <input
              className="w-full p-2 m-2 rounded-xl border-slate-700 border bg-[beige] placeholder-gray-800/50 font-oswald tracking-wide leading-snug text-stone-00 uppercase text-lg"
              type="email"
              placeholder="EMAIL"
              required
            />
            <textarea
              className="w-full p-2 m-2 rounded-xl border-slate-700 border bg-[beige] placeholder-gray-800/50 font-oswald tracking-wide leading-snug text-stone-00 uppercase text-lg"
              type="text"
              placeholder="MESSAGE"
              rows="6"
              required
            />
            <button className="p-3 m-2 rounded-2xl border-[2px] border-slate-900 hover:bg-[#111] hover:text-white ease-in duration-300">
              SUBMIT
            </button>
          </form>
        </div>
        {/* <div className="flex lg:flex-row justify-around items-center sm:flex-col text-justify p-2 space-x-6 space-y-4">
          <h3 className="self-start text-xl text-slate-800 tracking-normal leading-snug drop-shadow-2xl rounded-lg shadow-black shadow-md p-2 bg-[beige]/70">
            Lorem 123, ipsum dolor, sit amet consectetur adipisicing.
          </h3>
          <p className="self-center text-lg font-inter text-slate-800 tracking-normal leading-snug drop-shadow-2xl rounded-lg shadow-black shadow-md p-2 bg-[beige]/70">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="self-end text-lg font-inter text-slate-800 tracking-normal leading-snug drop-shadow-2xl rounded-lg shadow-black shadow-md p-2 bg-[beige]/70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            praesentium!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;

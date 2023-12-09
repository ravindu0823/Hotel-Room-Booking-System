export function Food() {
    return (
      <>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75">
            <div className="flex justify-center items-center h-full">
              <p className="text-white text-4xl font-bold">Food Management</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Food;
  
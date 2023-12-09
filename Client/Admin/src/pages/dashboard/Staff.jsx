import react from "@heroicons/react";
export function Staff() {
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75">
          <div className="flex h-full items-center justify-center">
            <p className="text-4xl font-bold text-white">Staff Management</p>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-12 flex flex-col gap-12"></div>
    </>
  );
}

export default Staff;

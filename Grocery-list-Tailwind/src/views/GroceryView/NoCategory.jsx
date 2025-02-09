const NoCategory = () => {
  return (
    <>
      <section className="h-fit bg-gray-50 mx-2">
        <div className="h-full ">
          <div className=" flex w-full justify-center px-6 py-7 border-2 rounded-lg font-medium border-dashed border-gray-200  max-w-7xl mx-auto bg-gray-100  mt-5">
            <p className="text-gray-500 text-lg">
              Please select a category to view lists
            </p>
          </div>
          <div className="mb-5">
            <div className="flex-1 px-6 space-y-6" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NoCategory;

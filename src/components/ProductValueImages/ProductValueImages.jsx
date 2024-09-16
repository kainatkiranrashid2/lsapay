const ProductValueImages = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Large square (spans 2 rows and 2 columns on larger screens)  */}
        <div className="bg-gray-200 aspect-square md:row-span-2 md:col-span-2"></div>

        {/* <!-- Top right square --> */}
        <div className="bg-gray-200 aspect-square"></div>

        {/* <!-- Bottom left rectangle (becomes full width on mobile) --> */}
        <div className="bg-gray-200 aspect-[2/1] md:aspect-square md:col-span-2"></div>

        {/* <!-- Bottom right square --> */}
        <div className="bg-gray-200 aspect-square"></div>
      </div>
    </div>
  );
};

export default ProductValueImages;

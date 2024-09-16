const Discover = () => {
  return (
    <div className="container ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-20">
        <h1 className=" max-w-[450px] leading-snug box-border max-w-200 text-2xl md:text-3xl lg:text-5xl text-wrap  font-bold font-Inter text-dark text-left">
          Simple and Flexible Solutions
        </h1>
        <div className="sm:mx-auto max-w-[400px]">
          <p className="text-[10px] md:text-[15px] 2xl[18px] text-dark text-left font-medium font-Inter mb-4">
            Lorem ipsum dolor sit amet consectetur. Risus et tortor laoreet
            semper condimentum sed lectus dui ac. Molestie metus amet consequat
            cursus at dolor.
          </p>
          <button className="bg-[#83D500] py-2 px-4 text-white rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;

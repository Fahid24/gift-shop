export default function popularCategories() {
  return (
    <div className="bg-[#f8f6f6] lg:px-16 py-10 border-t border-gray-300 ">
      <h1 className="text-xl font-semibold text-center">Popular Categories</h1>
      <div className="lg:flex justify-between mt-10 gap-5">
        <button className="hover:shadow-lg rounded-lg px-8 py-3 bg-white">
          COMBO OFFER
        </button>
        <button className="hover:shadow-lg rounded-lg px-10 py-5 bg-white">
          SURPRISE OFFER
        </button>
        <button className="hover:shadow-lg rounded-lg px-8 py-3 bg-white">
          CHOCOLATES{" "}
        </button>
        <button className="hover:shadow-lg rounded-lg px-8 py-3 bg-white">
          BEAUTY CARE
        </button>
        <button className="hover:shadow-lg rounded-lg px-8 py-3 bg-white">
          GADGETS
        </button>
        <button className="hover:shadow-lg rounded-lg px-8 py-3 bg-white">
          BAKING FOODS
        </button>
      </div>
    </div>
  );
}

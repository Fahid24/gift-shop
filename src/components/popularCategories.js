export default function popularCategories() {
  return (
    <div className="bg-slate-100 lg:px-16 py-10 border-t-2 border-gray-300 ">
      <h1 className="text-xl font-semibold text-center">Popular Categories</h1>
      <div className="lg:flex justify-between my-10">
        <button className="hover:shadow-lg rounded-lg px-8 py-3 bg-white">
          COMBO OFFER
        </button>
        <button className="hover:shadow-lg rounded-lg px-8 py-3 bg-white">
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

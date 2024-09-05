import Link from "next/link";

const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();
  return (
    <div>
      <h2 className="text-center text-2xl">All Shoes</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
        {shoes.map((shoe) => (
          <div key={shoe?.id} className="card w-80 bg-base-100 p-5 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary"> {shoe.price}</div>
              </h2>
              <p> {shoe.description}</p>
              <div className="card-actions justify-end mt-2">
                <div className="btn btn-primary btn-outline btn-sm">
                  Buy Now
                </div>
                <div className="btn btn-primary btn-sm">Details</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link className="flex justify-center mt-10" href="/all-shoes">
        <button className="btn btn-secondary">See More</button>
      </Link>
    </div>
  );
};

export default AllShoesPage;

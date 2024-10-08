import Counter from "@/components/Counter/Counter";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    },
  });
  const shoes = await res.json();

  const err = "No Error";
  if ((err = "Error Found")) throw new Error("Error from home page");

  return (
    <div className="text-center mx-auto">
      <h2 className="mt-52 text-4xl">Welcome to First Next App</h2>
      <Counter />
      <div className="flex justify-center gap-5 mt-32 px-5o">
        {shoes?.slice(0, 3).map((shoe) => (
          <div key={shoe?.id} className="card w-80 bg-base-100 shadow-xl">
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
    </div>
  );
};

export default HomePage;

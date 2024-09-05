import Image from "next/image";

const GalleryPage = () => {
  return (
    <div>
      <h2 className="text-green-600 mt-20 mb-5 text-center text-4xl underline">
        Image Optimization: img tag vs Image tag
      </h2>
      <p className="text-center text-2xl">Regular Image Component</p>
      <img
        src="https://nextjs.org/api/docs-og?title=Components%20%3Cimage%3E"
        alt=""
        className="mx-auto"
        width={500}
        height={500}
      />
      <p className="text-center text-2xl my-5">Next js Image Component</p>
      <Image
        src="https://nextjs.org/api/docs-og?title=Components%20%3Cimage%3E"
        alt="Next Image"
        // fill
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;

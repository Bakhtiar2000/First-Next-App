import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(params);
  return (
    <div>
      <h2>Dynamic PAGE for {params?.productId}</h2>
    </div>
  );
};

export default DynamicPage;

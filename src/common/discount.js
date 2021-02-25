//Logic to calculate the freshness level of a product
export const calculateFreshness = (productData) => {
  const getDifferenceInDays = (startDate, endDate) => {
    const diffInMs = Math.abs(endDate - startDate);
    return diffInMs / (1000 * 60 * 60 * 24);
  };

  if (productData.length > 0) {
    let diffwrtCurrentDate, diffwrtCreatedDate, freshnesslevel;
    for (let i = 0; i < productData.length; i++) {
      diffwrtCurrentDate = getDifferenceInDays(
        new Date(),
        new Date(productData[i].expiry)
      );
      diffwrtCreatedDate = getDifferenceInDays(
        new Date(productData[i].createdAt),
        new Date(productData[i].expiry)
      );

      freshnesslevel = (diffwrtCurrentDate / diffwrtCreatedDate) * 100;
      productData[i].freshnesslevel = Math.ceil(freshnesslevel);

      if (Math.ceil(freshnesslevel) <= 90) {
        let discount = Math.ceil(
          (productData[i].price * (100 - freshnesslevel)) / 100
        );
        productData[i].disocuntedPrice = productData[i].price - discount;
      } else {
        productData[i].disocuntedPrice = productData[i].price;
      }
    }
  }
};

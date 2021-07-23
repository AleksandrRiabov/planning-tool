export const getTrailersFromPallets = (palletsQty = 0) => {
   const trailers = Math.floor(palletsQty / 26);
   const pallets = palletsQty % 26;
   return {trailers, pallets}
}

export const getTotal = (data, name) => {
    return data.reduce((total, product) => {
      if (name === "predictedCases") {
        if (product.cases) {
          return total + +product.cases;
        } else {
          return total + +product.predictedCases;
        }
      }
      return total + +product[name];
    }, 0);
  };

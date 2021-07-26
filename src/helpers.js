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


  export const createChartData = (data) => {
    const chartData = {
       labels: [],
       cases: [],
    }
    const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

       data.forEach(product => {
          chartData.labels.push(capitalize(product.name));
          chartData.labels.push("Expected-"+(product.name));
          chartData.cases.push(product.cases);
          chartData.cases.push(product.predictedCases);
       });
    
    return chartData;
 }

 
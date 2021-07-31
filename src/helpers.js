export const getTrailersFromPallets = (palletsQty = 0) => {
   const trailers = Math.floor(palletsQty / 26);
   const pallets = palletsQty % 26;
   return {trailers, pallets}
}

export const getTotal = (data) => {

    return data.reduce((total, product) => {
      const cases = product.cases ? product.cases : 0;
      const predictedCases = product.cases ? product.cases : product.predictedCases;
      return {
        totalCases: total.totalCases + +cases ,
        totalPallets: total.totalPallets + +product.pallets,
        totalPredictedCases: total.totalPredictedCases + +predictedCases,
        totalPredictedPallets: total.totalPredictedPallets + +product.predictedPallets
      }
    },{totalCases: 0, totalPallets: 0, totalPredictedCases: 0, totalPredictedPallets: 0});
  };

  export const getAllTotalsAndAverages = (data) => {
        const allProducts = data.length;
        const totals = data.reduce((total, product) => {
             return {
              cases: total.cases + +product.cases,
              pallets: total.pallets + +product.pallets,
              trailers: total.trailers + +product.trailers,
            }
       });

       return {
         ...totals,
          averageCasses: (totals.cases / allProducts).toFixed(),
          averagePallets: (totals.pallets / allProducts).toFixed(),
          averageTrailers: (totals.trailers / allProducts).toFixed() 
        }
  }

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

  

 


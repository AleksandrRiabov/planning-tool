export const getTrailersFromPallets = (palletsQty = 0) => {
   const trailers = Math.floor(palletsQty / 26);
   const pallets = palletsQty % 26;
   return {trailers, pallets}
}
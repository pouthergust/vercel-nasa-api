export default {
  async fetch(request: Request) {
    const response = await fetch('https://svs.gsfc.nasa.gov/api/13786');
    const products = await response.json();
    return Response.json(products);
  },
};
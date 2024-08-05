const Products = async () => {
  let products = [];
  try {
    const response = await fetch(
      "https://appleme-website.vercel.app/api/products"
    );
    const data = await response.json();
    products = data.products.filter((product) => product.isShowToUser === true);
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>خطایی در دریافت محصولات رخ داده است.</div>;
  }
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>{product.price}</div>
      ))}
    </div>
  );
};

export default Products;

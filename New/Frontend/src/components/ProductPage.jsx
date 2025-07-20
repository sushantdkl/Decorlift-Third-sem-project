import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { userapi } from "../services/userapi.js";

const ProductPage = ({ category, pageTitle }) => {
  const navigate = useNavigate();
  const [viewAll, setViewAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await userapi.get(`/api/products?category=${category}`);
        setProducts(response.data.data);
      } catch (error) {
        console.error(`Failed to fetch ${category} products`, error);
      }
    };
    fetchProducts();
  }, [category]);

  const displayedProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const productsToShow = viewAll ? displayedProducts : displayedProducts.slice(0, 8);

  const handleBuyNow = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    const quantity = 1;
    const totalCost = selectedProduct.price * quantity;
    navigate(
      `/product/${id}?quantity=${quantity}&totalCost=${totalCost}&productTitle=${encodeURIComponent(
        selectedProduct.name
      )}`
    );
  };

  return (
    <div className="font-sans text-black min-h-screen bg-[#fdfdfd]">
      {/* Page header */}
      <div className="max-w-7xl mx-auto mt-14 px-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">{pageTitle}</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-4 pr-10 py-2 border-2 border-gray-300 rounded-full text-sm focus:border-blue-600 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
        </div>
      </div>

      {/* Product gallery */}
      <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsToShow.map(({ id, name, description, price, image }) => (
          <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group relative">
            <img
              src={`../../uploads/${image}`}
              alt={name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-900 mb-1">{name}</h2>
              <p className="text-sm text-gray-600 mb-3">{description}</p>
              <p className="font-bold text-blue-600 text-lg">Rs. {price.toLocaleString()}</p>
            </div>
            <button
              onClick={() => handleBuyNow(id)}
              className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex justify-center items-center text-white font-semibold text-lg transition-opacity"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* View All Products button */}
      {!viewAll && (
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center">
          <button
            onClick={() => setViewAll(true)}
            className="inline-block border-2 border-gray-700 text-gray-700 px-8 py-3 rounded-md font-semibold hover:bg-gray-700 hover:text-white transition"
          >
            View All Products
          </button>
        </div>
      )}
      <div className="py-10"></div>
    </div>
  );
};

export default ProductPage;
// import React, { useEffect, useState } from "react";

// const Home = () => {
//   const [users, setUsers] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       let response = await fetch("https://fakestoreapi.com/products");
//       let data = await response.json();
//       setUsers(data);
//     }
//     getData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-slate-100 p-6">

//       <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
//         Product List
//       </h1>

//       <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {users?.map((user) => (
//           <li
//             key={user.id}
//             className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
//           >
//             <img
//               src={user.image}
//               alt={user.title}
//               className="h-40 mx-auto object-contain mb-4"
//             />

//             <h2 className="font-semibold text-lg text-slate-700 mb-2">
//               {user.title}
//             </h2>

//             <p className="text-green-600 font-bold mb-1">
//               ₹ {user.price}
//             </p>

//             <p className="text-sm text-slate-600 line-clamp-3 mb-3">
//               {user.description}
//             </p>

//             <div className="flex justify-between items-center text-sm text-slate-500">
//               <span>⭐ {user.rating.rate}</span>
//               <span>Reviews: {user.rating.count}</span>
//             </div>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific icons
import { faStar,faXmark}from '@fortawesome/free-solid-svg-icons';
// import CartReducer from "../reducer/CartReducer";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
 
const Home = () => {
  // store cartList in useContext to see global access
  //  const [cartList,dispatch]=useReducer(CartReducer,initialState)
  // renamed to products for better context
  const [products, setProducts] = useState(null); // to render products
  const [allProducts, setAllProducts] = useState(null); // Master list for filtering
  const [searched, setSearched] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [rating, setRating] = useState(false);
  const [searching,setSearching]=useState(false);
 
  const dispatch = useDispatch();

//  const initialState=[]
 useEffect(() => {
    async function getData() {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProducts(data);
      setAllProducts(data); // Keep the original data safe here
    }
    getData();
  }, []);

  // Filter from allProducts so we never "lose" data
  let searchProduct = () => {
    let filterProduct = allProducts.filter((item) =>
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearching(true)
    setProducts(filterProduct);
    setSearched(filterProduct);
    setSearchTerm("");
  };

  // toprateing for search product and all product

  function topRated() {
    setRating(true);
    // 1. Check if we have a searched list, otherwise use the master list
    const baseList = searched !== null ? searched : allProducts;

    if (baseList) {
      // 2. Fixed typo from "reating" to "rating"
      let topRateList = baseList.filter((item) => item.rating.rate >= 4.0);
      setProducts(topRateList);
    }
  }

  // Optimize: Reset from local state, not the API
  function clearAll() {
    setRating(false);
    setSearchTerm("");
    setProducts(allProducts);
    setSearched(null); // IMPORTANT: Reset the search state so topRated knows to use the full list
  }


 

const handleAddToCart = (product) => {
  dispatch(addToCart(product));
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Button aligned to the right */}

      {(searching || rating||searchTerm) && (
        <div className="max-w-7xl mx-auto flex justify-end mb-6">
          <button
            onClick={clearAll}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-900  transition-all duration-300 shadow-sm"
          >
            Clear All
          </button>
        </div>
      )}
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 max-w-7xl mx-auto">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            Trending <span className="text-indigo-600">Products</span>
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Explore our latest arrivals and top-rated gear.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          {/* old input */}
          {/* <div className="relative flex w-full sm:w-80">
            <input
              type="text"
              placeholder="Search Category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
            />
     <button onClick={()=>{setSearchTerm("")}}>x</button>
           { searchTerm && <button 
              onClick={searchProduct} 
              className=" text-black absolute right-2 top-2 bottom-2 px-4 !pb-6  border-blue-800 rounded-2xl text-sm  !bg-indigo-200 font-semibold hover:bg-indigo-700 transition-colors"
            >
              Search
            </button>
           }
          </div>  */}

          <div className="relative flex items-center flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors"
              placeholder="Search restaurants..."
            />

            {/* Clear "X" Button */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute !bg-transparent right-3 text-gray-500 hover:text-gray-700 focus:outline-none text-xl !font-bold"
              >
                <FontAwesomeIcon icon={faXmark}/>
              </button>
            )}
          </div>
          {searchTerm && (
            <button
              onClick={searchProduct}
              className=" text-black  right-2 top-2 bottom-2 px-4 !pb-2  border-blue-800 rounded-2xl text-sm  !bg-indigo-200 font-semibold hover:bg-indigo-700 transition-colors"
            >
              Search
            </button>
          )}

          <button
            onClick={topRated}
            className="whitespace-nowrap flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-50 hover:border-indigo-200 transition-all shadow-sm active:scale-95"
          >
            <FontAwesomeIcon icon={faStar}/> Top Rated
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto">
        {products ? (
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <li
                key={product.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 w-full p-6 bg-white overflow-hidden border-b border-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-slate-700 shadow-sm border border-slate-100">
                    ⭐ {product.rating.rate}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-500 mb-2 block">
                      {product.category}
                    </span>
                    <h2 className="font-bold text-slate-800 text-lg mb-2 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-50">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-slate-900">
                        ${product.price}
                      </span>
                    </div>
                    <button
                    onClick={()=>{handleAddToCart(product)}}
                      className="w-full py-3 bg-slate-900 rounded-xl font-bold text-sm hover:bg-indigo-600 transition-colors shadow-lg">
                      Add to Cart 
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <div className="flex justify-center items-center py-20">
            <h3 className="text-black  font-lg animate-pulse">
              Loading products...
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

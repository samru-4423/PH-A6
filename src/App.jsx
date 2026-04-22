
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Homecard from './Components/Homecard'
import Navbar from './Components/Navbar'
import Overall from './Components/Overall'
import StepsPart from './Components/StepsPart'
import PackagePlan from './Components/PackagePlan'
import Transform from './Components/Transform'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import { toast, ToastContainer } from 'react-toastify'

const cardPromise = fetch('Data.json')
  .then(res => res.json())

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  // add to cart
  const handleAddToCart = (card) => {
    setCartItems(prev => [...prev, card]);
  };

  // remove from cart
  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast.error("Item removed successfully");
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.success("Checkout complete");
  };

  return (

    <>
      <Navbar cartItems={cartItems} setActiveTab={setActiveTab}></Navbar>
      <Banner></Banner>
      <Overall></Overall>
      <div className=' md:w-[80%] mx-auto'>
        <div className='text-center py-15'>
          <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
          <p className='text-[16px] text-gray-400 py-5 px-2 md:px-82'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity. </p>
          <div className='border-2 border-gray-200 md:w-[13%] w-[48%] mx-auto space-x-1 rounded-full'>

            <button
              onClick={() => setActiveTab("products")}
              className={`btn rounded-full flex-1 ${activeTab === "products"
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "bg-transparent border-none text-black"
                }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`btn rounded-full flex-1 ${activeTab === "cart"
                ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "bg-transparent border-none text-black"
                }`}
            >
              Cart ({cartItems.length})
            </button>

          </div>
        </div>

        {/* <div className='grid md:grid-cols-3 grid-cols-1 gap-4 pl-3'>
                {
                    cardContent.map(card => <Card card={card}></Card>)
                }
            </div> */}

      </div>
      {/* <Suspense fallback={<h3 className='text-center'>Loading...</h3>}>
        <Homecard cardPromise={cardPromise}></Homecard>
      </Suspense> */}
      {/* <Cart></Cart> */}

      {activeTab === "products" && (
        <Suspense fallback={<h3 className='text-center'>Loading...</h3>}>
          <Homecard cardPromise={cardPromise} handleAddToCart={handleAddToCart} cartItems={cartItems}></Homecard>
        </Suspense>
      )}

      {activeTab === "cart" && <Cart cartItems={cartItems} handleRemove={handleRemove} handleClearCart={handleClearCart} />}

      <StepsPart></StepsPart>
      <PackagePlan></PackagePlan>
      <Transform></Transform>
      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App

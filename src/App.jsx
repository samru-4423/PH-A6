
import './App.css'

function App() {

  return (
    <>
      <div className="navbar bg-base-100 border-b-2 border-base-300 ">
        <div className="navbar bg-base-100 w-[80%] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Item 1</a></li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <h2 className='font-bold text-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>Products</a></li>
              <li><a>Features</a></li>
              <li><a>Pricing</a></li>
              <li><a>Testimonials</a></li>
              <li><a>FAQ</a></li>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <button className="btn border-none bg-transparent"><img src='./public/shopping-cart.png'></img></button>
            <button className="btn border-none bg-transparent">Login</button>
            <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Get Satrted</button>
          </div>
        </div>
      </div>

      <div className="hero  ">
        <div className="hero-content grid grid-cols-2 w-[80%] mx-auto p-6">
          <div className=''>
            <h1 className="text-6xl font-bold">Supercharge Your Digital Workflow</h1>
            <p className="py-6 text-[18px] text-gray-400">
              Access premium AI tools, design assets, templates, and productivity
              software—all in one place. Start creating faster today. <br />
              Explore Products
            </p>
            <div className='space-x-2'>
              <button className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full">Explore Products</button>
              <button className="btn border-2 border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-4 py-2 rounded-full"><img src="./public/Play.png" alt="" /> Get Started</button>
            </div>
          </div>
          <div className='flex justify-end'>
            <img
              src="./public/banner.png"
              className="w-[75%] rounded-lg"
            />
          </div>
        </div>
      </div>



    </>
  )
}

export default App

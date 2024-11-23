import React, { useState } from 'react'
import { FaSearch, FaShoppingCart ,FaUser } from 'react-icons/fa'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';



const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false) ;
  const [isLogin,setIsLogin] = useState(true);
  const openSignUp  = () => {
    setIsLogin(false);
    setIsModalOpen(true)
  }
  const openLogin  = () => {
    setIsLogin(true);
    setIsModalOpen(true)  ;
  }

  const products = useSelector(state => state.cart.products)
  
   

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center   '>
        <div className='text-lg font-bold'>
          <Link to="/">Nader E-Commerce</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form>
            <input type='text' placeholder='Search product' className='w-full border px-4 py-2 rounded-md' />
            <FaSearch className='absolute top-3 right-3 text-red-500' />
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to="/cart" className='relative'>
            <FaShoppingCart className='text-lg'/>
            {products.length > 0 &&(
              <span className='absolute top-0 text-xs left-3 w-3 bg-red-600 rounded-full flex text-white justify-center items-center'>
                {products.length}
              </span>
            )}
          </Link>
          <button className='btn bg-orange-400 hidden md:block hover:bg-orange-600 rounded-xl' onClick={() => setIsModalOpen(true)}>
            Sign-in
          </button>
          <button className='block md:hidden'>
            <FaUser />
          </button>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> :<Register openLogin={openLogin} />}
      </Modal>

    </nav>
  )
}

export default Navbar ;
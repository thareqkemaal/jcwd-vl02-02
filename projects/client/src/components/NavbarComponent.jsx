import React from 'react'
import logo from '../assets/medical-logo-removebg-preview.png'
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'flowbite-react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../action/useraction';
import Avatar from './Avatar';
import { API_URL } from '../helper';
import { RiShoppingCartLine } from "react-icons/ri";

const NavbarComponent = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const[dropdown, setDropdown]=useState(false)
  
  let {username, status, role, profil_pict}=useSelector((state)=>{
    return{

      username: state.userReducer.username,
       status: state.userReducer.status,
      role: state.userReducer.role,
      profil_pict: state.userReducer.profil_pict,
    }
  })

  const onLogout = () => {
    dispatch(logoutAction())
    navigate('/', { replace: true })
  }
  return (
    <div>
      <div className='shadow-md'>
        <div className='container md:px-14 md:mx-auto'>
          <div className='flex py-3 justify-between'>
            <div className='flex-none'>
              <div className='hidden sm:flex' onClick={() => navigate('/')}>
                <img src={logo} className='h-9' alt='medcare.com' />
                <span className='text-sm bg-gradient-to-r from-green-500 to-blue-600 text-transparent font-extrabold bg-clip-text mt-2'>MedCare</span>
              </div>
            </div>
            <div className='flex grow relative'>
              <input placeholder='Search' className='grow mx-10 w-1/2 border border-slate-600 rounded-lg px-10' />
              <BiSearchAlt2 className='absolute left-12 top-2 fill-slate-500' size={25} />
            </div>
            <div className='flex-none'>
              {
                props.loading ? (
                  <Spinner
                    aria-label="Extra large spinner example"
                    size="xl"
                  />)
                  : username && !props.loading ? (
                    <div className='relative flex items-center w-24 justify-between'>
                      {/* kemal tambah button cart */}
                      <button type='button' onClick={() => navigate('/cart')}>
                        <RiShoppingCartLine className='w-7 h-7 mr-3 text-main-500' />
                      </button>
                       <Avatar
                      onClick={()=>setDropdown(!dropdown)}
                      src={API_URL + profil_pict}
                      w={10}
                      h={10}
                      b={1}
                     width={3}
                      height={3}
                    />
                      {
                        dropdown &&
                        <div>
                          {
                            role === 'User' ?
                              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className="py-1" role="none">
                                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0" onClick={() => navigate('/profile')}>Account settings</a>
                                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Product</a>
                                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Transaction</a>
                                  <form method="POST" action="#" role="none">
                                    <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex={-1} id="menu-item-3" onClick={onLogout}>Sign out</button>
                                  </form>
                                </div>
                              </div>
                              :
                              <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                                <div className="py-1" role="none">
                                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</a>
                                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Add Product</a>
                                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">Product</a>
                                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-2">Detail Transaction</a>
                                  <form method="POST" action="#" role="none">
                                    <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex={-1} id="menu-item-3" onClick={onLogout}>Sign out</button>
                                  </form>
                                </div>
                              </div>
                          }
                        </div>
                      }
                    </div>
                  ) : (
                    <div className='flex '>
                      <button className='transition mr-4 bg-white border border-main-500 focus:ring-main-500 text-main-500 rounded-lg py-1 px-2 mt-1 hover:-translate-y-1 hover:bg-gray-100' onClick={() => navigate('/login')}>Sign In</button>
                      <button className='transition mr-4 bg-main-500 hover:bg-main-700 focus:ring-main-500 text-white rounded-lg py-1 px-2 mt-1 hover:-translate-y-1 ' onClick={() => navigate('/register')} >Sign Up</button>
                    </div>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
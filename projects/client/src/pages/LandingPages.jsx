import React from 'react'
import image from '../assets/undraw_doctors_hwty.svg'
import { GiMedicines, GiChestnutLeaf, GiShinyApple, GiBeerBottle, GiSquareBottle, GiGlassShot, GiNotebook, GiShipBow } from 'react-icons/gi';
import bca from '../assets/Bank BCA Logo (PNG-1080p) - FileVector69.png'
import bri from '../assets/bri.png'
import bni from '../assets/Bank BNI Logo (PNG-1080p) - FileVector69.png'
import gopay from '../assets/Logo GoPay (PNG-1080p) - FileVector69.png'
import ovo from '../assets/ovo.png'
import shoppe from '../assets/ShopeePay Logo (PNG-1080p) - Vector69Com.png'
import Carousel from '../components/Carousel'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_URL } from '../helper';
import { useNavigate } from 'react-router';
import ProductCategory from '../components/ProductCategory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPages = () => {
  const navigate = useNavigate()
  const { email, status, iduser } = useSelector((state) => {
    return {
      email: state.userReducer.email,
      status: state.userReducer.status_name,
      iduser: state.userReducer.iduser
    }
  })

  let dataCategory = [
    {
      icon:GiMedicines,
      name:'Fever',
      fill:'fill-purple-500'
    },
    {
      icon:GiChestnutLeaf,
      name:'Flu',
      fill:'fill-red-500'
    },
    {
      icon:GiBeerBottle,
      name:'Eyes',
      fill:'fill-green-500'
    },
    {
      icon:GiMedicines,
      name:'Hypertension',
      fill:'fill-gray-500'
    },
    {
      icon:GiGlassShot,
      name:'Vitamin',
      fill:'fill-yellow-500'
    },
  ]

  return (
    <div>
      <div>
        
        <div className='px-3 lg:px-[9.5rem]'>
          {/* Verification dipindahkan ke navbar */}
          <Carousel />
          <div className='grid grid-cols-2 my-3 w-full  py-10 shadow-lg bg-gradient-to-br from-[#92C3D1] to-[#C4E0E5] rounded-lg mt-8'>
            <div className=''>
              <img className='h-30 lg:h-52 lg:mx-auto' src={image} alt='medcare.com' />
            </div>
            <div className='mx-auto py-2 lg:mx-1 lg:py-4  md:flex justify-around md:mt-10 lg:mt-10'>
              <div className=''>
                <p className=' text-[#213360] text-sm font-bold lg:text-2xl font-Public ml-5 md:ml-0'>Punya Resep Dokter ?</p>
                <div className='w-80 h-12'>
                  <p className='text-[#525252] hidden md:flex'>Hanya foto resep anda dan unggah max 10mb tanpa perlu antri obat akan dikirimkan ke lokasi anda</p>
                </div>
              </div>
              <div className=' md:pr-2 lg:mt-5'>
                <button type='button' onClick={() => {
                  if (iduser !== null){
                  navigate('/prescription')
                  } else {
                    toast.error('You need to login!', {
                      theme: "colored",
                      position: "top-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: false,
                      progress: undefined,
                  });
                  }
                }
                }
                  className='bg-teal-500 hover:bg-teal-600 ml-5 w-32 h-8 md:ml-0 lg:w-32 lg:h-12 rounded-lg text-white font-Public'
                  >Unggah Resep</button>
              </div>
            </div>
          </div>
          <div className='py-5'>
          <div className='flex justify-between my-2'>
                <p className='text-sm font-bold text-[#213360] '>Kategori</p>
                <p className='text-xs font-bold  text-main-500' onClick={()=>navigate('/product')}>Lihat Semua</p>
              </div>
              <div className='overflow-y-auto w-full'>
                <div className='flex justify-between mx-auto py-5' onClick={()=>navigate('/product')}>
                  {
                    dataCategory.map(data=>(
                      <div key={data.name}>
                        <div className=' min-w-[195px] max-h-[119px] bg-white shadow-md rounded-2xl'> 
                        <div className='py-5 hover:-translate-y-2'>
                          <data.icon size={50} className={`mx-auto ${data.fill}`}/>
                          <p className='text-center pt-4 text-blue-900 text-base font-bold'>{data.name}</p>
                        </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className='flex justify-between mt-8'>
                <p className='text-sm font-bold text-txt-500 font-Public'>Produk Populer</p>
                <p className='text-xs font-bold  text-main-500 font-Public' onClick={()=>navigate('/product')}>Lihat Semua</p>
              </div>
              {/* Gunakan Produk Component */}
              <div className='bg-gradient-to-t from-teal-50 to-white mt-8'>
                <ProductCategory
                id={1}
                />
              </div>
            </div>
            <div className='my-8 '>
              <p className='text-sm font-bold text-blue-800 font-Public'>Jaminan Untuk Anda</p>
            </div>
            <div className='my-2'>
              <div className='grid gap-2 lg:grid-cols-3'>
                <div className='w-full h-32 rounded-lg shadow-lg bg-gradient-to-t from-teal-50 to-white'>
                  <div className='grid grid-cols-3 px-5 py-4'>
                    <GiMedicines size={80} className='fill-red-600' />
                    <div className='col-span-2'>
                      <p className='text-blue-900 font-bold text-lg font-Public'>100% Obat asli</p>
                      <p className='text-sm text-gray-700 font-Public'>Semua Produk yang kami jual dijamin asli dengan kualitas yang baik</p>
                    </div>
                  </div>
                </div>
                <div className='w-full h-32 rounded-lg shadow-lg bg-gradient-to-t from-teal-50 to-white'>
                  <div className='grid grid-cols-3 px-5 py-4'>
                    <GiNotebook size={80} className='fill-green-600' />
                    <div className='col-span-2'>
                      <p className='text-blue-900 font-bold text-lg font-Public'>Terjamin dan Hemat</p>
                      <p className='text-sm text-gray-700 font-Public'>Kami menjamin pengembalian uang dari selisih perbedaan harga</p>
                    </div>
                  </div>
                </div>
                <div className='w-full h-32 rounded-lg shadow-lg bg-gradient-to-t from-teal-50 to-white'>
                  <div className='grid grid-cols-3 px-5 py-4'>
                    <GiShipBow size={80} className='fill-gray-300' />
                    <div className='col-span-2'>
                      <p className='text-blue-900 font-bold text-lg font-Public'>Gratis Ongkir</p>
                      <p className='text-sm text-gray-700 font-Public'>Kami kirim pembelian anda secara gratis tanpa antri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <div className='hidden lg:block w-full bg-gray-100 my-8'>
          <div className='p-4'>
            <p className='text-center text-blue-900 text-sm font-bold font-Public'>Metode Pembayaran</p>
            <div className='container mx-auto px-20 mt-10'>
              <div className='flex justify-center'>
                <img src={bca} className='h-10' alt='medcare.com' />
                <img src={bri} className='h-10 px-10' alt='medcare.com' />
                <img src={bni} className='h-10 px-10' alt='medcare.com' />
                <img src={ovo} className='h-14 px-10' alt='medcare.com' />
                <img src={gopay} className='h-10 px-10' alt='medcare.com' />
                <img src={shoppe} className='h-10 px-10' alt='medcare.com' />
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default LandingPages
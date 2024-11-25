import React from 'react'
import { Outlet } from 'react-router-dom';
import ShopingViewheader from '../../components/ecommerce/header';

const ShopingView = () => {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        <ShopingViewheader/>
      <main className='flex flex-col w-full'>
        <Outlet/>
      </main>
    </div>
  )
}

export default ShopingView;

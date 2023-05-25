import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import Navpannel from './Navpannel'
import store from '../store/store'

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
        <Navpannel />
        <div className='container'>
            <Outlet />
        </div>
        </Provider>
    </>
  )
}

export default RootLayout

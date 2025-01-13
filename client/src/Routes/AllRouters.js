import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sarees from "../pages/Sarees"
import Bottomwear from '../pages/Bottomwear'
import Gowns from "../pages/Gowns"
import Topwear from "../pages/Topwear"
import MenWear from "../pages/MenWear"
import Details from '../pages/Details'
import LandingPage from "../pages/LandingPage"
import AllMenAccessories from "../pages/AllMenAccessories"
import Boys from "../pages/Boys"
import Girls from "../pages/Girls"
import KitchenStorage from "../pages/KitchenStorage"
import Makeup from "../pages/Makeup"
import HomeDecore from "../pages/HomeDecore"
import Skincare from "../pages/Skincare"
import Bags from "../pages/Bags"
import Footwear from "../pages/Footwear"
import CartPage from '../pages/CartPage'
import CheckoutPage from "../pages/CheckoutPage"
import BillingPage from '../pages/BillingPage'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'
import ForgotPassword from '../pages/ForgotPassword'
import ResetPassword from "../pages/ResetPassword"
import SellerDashboard from "../pages/SellerDashboard "
import SellerViewProduct from "../pages/SellerViewProduct"
import Success from '../pages/Success'
import Cancel from '../pages/cancel'
import MobileAccessories from '../pages/MobileAccessories'
import SmartWearables from '../pages/SmartWearables'
const AllRouters = () => {
  return (<>
    <Routes>
      <Route path='/'>
        <Route index element={<LandingPage />} />
        <Route path='/AllSarees' element={<Sarees />} />
        <Route path='/Gowns' element={<Gowns />} />
        <Route path='/Topwear' element={<Topwear />} />
        <Route path='/Bottomwear' element={<Bottomwear />} />
        <Route path='/MenWear' element={<MenWear />} />
        <Route path='/details' element={<Details />} />
        <Route path='/AllMenAccessories' element={<AllMenAccessories />} />
        <Route path='/Boys' element={<Boys />} />
        <Route path='/Girls' element={<Girls />} />
        <Route path='/KitchenStorage' element={<KitchenStorage />} />
        <Route path='/Makeup' element={<Makeup />} />
        <Route path='/HomeDecore' element={<HomeDecore />} />
        <Route path='/Skincare' element={<Skincare />} />
        <Route path='/Bags' element={<Bags />} />
        <Route path='/Footwear' element={<Footwear />} />
        <Route path='/MobileAccessories' element={<MobileAccessories />} />
        <Route path='/SmartWearables' element={<SmartWearables />} />
        <Route path='/cartpage' element={<CartPage />} />
        <Route path='/checkoutPage' element={<CheckoutPage />} />
        <Route path='/billingPage' element={<BillingPage />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/resetPassword/:token' element={<ResetPassword />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/sellerViewProduct" element={<SellerViewProduct />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/cancel" element={<Cancel/>} />
      </Route>
    </Routes>
  </>)
}

export default AllRouters

import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  filterAllSarees,
  filterGowns,
  filterTopwear, 
  filterBottomwear,
  filterMenWear,
  filterAllMenAccessories,
  filterBoys,
  filterGirls,
  filterKitchenStorage,
  filterMakeup,
  filterHomeDecore,
  filterSkincare,
  filterBags,
  filterFootwear,
  filterMobileAccessories,
  filterSmartWearables
} from '../actions/productActions';

const NavbarDropdown = () => {
  //All sareecClick
  let dispatch = useDispatch()
  let handleFilterSarees = () => {
    dispatch(filterAllSarees())
  }

  //silksareeClick
  let handleFilterGowns = () => {
    dispatch(filterGowns());
  }

  let handleFilterTopwear = () => {
    dispatch(filterTopwear())
  }

  let handleFilterBottomwear = () => {
    dispatch(filterBottomwear())
  }
  let handleFilterMenWear = () => {
    dispatch(filterMenWear())
  }
  let handleFilterAllMenAccessories = () => {
    dispatch(filterAllMenAccessories())
  }
  let handleFilterBoys = () => {
    dispatch(filterBoys())
  }
  let handleFilterGirls = () => {
    dispatch(filterGirls())
  }
  let handleFilterKitchenStorage = () => {
    dispatch(filterKitchenStorage())
  }
  let handleFilterMakeup = () => {
    dispatch(filterMakeup())
  }
  let handleFilterHomeDecore = () => {
    dispatch(filterHomeDecore())
  }
  let handleFilterSkincare = () => {
    dispatch(filterSkincare())
  }
  let handleFilterBags = () => {
    dispatch(filterBags())
  }
  let handleFilterFootwear = () => {
    dispatch(filterFootwear())
  }
  let handleFilterMobileAccessories = () => {
    dispatch(filterMobileAccessories())
  }
  let handleFilterSmartWearables = () => {
    dispatch(filterSmartWearables())
  }

  return (<>
    <nav className="navbar navbar-expand-lg navbar-light border-bottom second-navbar mb-2">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mb-2" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-around w-100 mb-0" style={{ fontSize: "13px" }}>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Women Ethnic</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/AllSarees/" onClick={handleFilterSarees}>All Sarees</Link></li>
                <li><Link className="dropdown-item" to="/Gowns/" onClick={handleFilterGowns}>Gowns</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Women Western</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Topwear/" onClick={handleFilterTopwear}>Topwear</Link></li>
                <li><Link className="dropdown-item" to="/Bottomwear/" onClick={handleFilterBottomwear}>Bottomwear</Link></li>
              </ul>
            </li>
            {/* <!-- Add more dropdown items as needed --> */}
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Men</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/MenWear/" onClick={handleFilterMenWear}>MenWear</Link></li>
                <li><Link className="dropdown-item" to="/AllMenAccessories/" onClick={handleFilterAllMenAccessories}>All Men Accessories</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Kids</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Boys/" onClick={handleFilterBoys}>Boy's Wear</Link></li>
                <li><Link className="dropdown-item" to="/Girls/" onClick={handleFilterGirls}>Girl's Wear</Link></li>
              </ul>
            </li><li className="nav-item dropdown">
              <Link className="nav-link" to="" >Home & Kitchen</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/KitchenStorage" onClick={handleFilterKitchenStorage}>Kitchen Storage</Link></li>
                <li><Link className="dropdown-item" to="/HomeDecore" onClick={handleFilterHomeDecore}>Home Decore</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Beauty & Health</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Makeup" onClick={handleFilterMakeup}>Makeup Items</Link></li>
                <li><Link className="dropdown-item" to="/Skincare" onClick={handleFilterSkincare}>Skin Care</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Bags & Footwear</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/Bags" onClick={handleFilterBags}>All Bags</Link></li>
                <li><Link className="dropdown-item" to="/Footwear" onClick={handleFilterFootwear}>Footwear</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="#">Electronics</Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/MobileAccessories" onClick={handleFilterMobileAccessories}>Mobile Accessories</Link></li>
                <li><Link className="dropdown-item" to="/SmartWearables" onClick={handleFilterSmartWearables}>Smart Wearables</Link></li>
             </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}

export default NavbarDropdown

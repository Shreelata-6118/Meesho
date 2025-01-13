//import products from '../api/data';  // Import the data
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FILTER_ALLSAREES = 'FILTER_ALLSAREES';
export const FILTER_GOWNS = "FILTER_GOWNS"
export const FILTER_TOPWEAR = "FILTER_TOPWEAR"
export const FILTER_BOTTOMWEAR = "FILTER_BOTTOMWEAR"
export const FILTER_MENWEAR = "FILTER_MENWEAR"
export const FILTER_ALLMENACCESSORIES = "FILTER_ALLMENACCESSORIES"
export const FILTER_BOYS = "FILTER_BOYS"
export const FILTER_GIRLS = "FILTER_GIRLS"
export const FILTER_KITCHENSTORAGE = "FILTER_KITCHENSTORAGE"
export const FILTER_MAKEUP = "FILTER_MAKEUP"
export const FILTER_HOMEDECORE = "FILTER_HOMEDECORE"
export const FILTER_SKINCARE = "FILTER_SKINCARE"
export const FILTER_BAGS = "FILTER_BAGS"
export const FILTER_FOOTWEAR = "FILTER_FOOTWEAR"
export const FILTER_MOBILEACCESSORIES = "FILTER_MOBILEACCESSORIES"
export const FILTER_SMARTWEARABLES = "FILTER_SMARTWEARABLES"
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SORT_TYPE="SET_SORT_TYPE"
export const SET_GENDER_FILTER='SET_GENDER_FILTER'
export const SET_COLOR_FILTER='SET_COLOR_FILTER'
export const fetchProducts = () => {
};
export const filterAllSarees = () => {
  return {
    type: FILTER_ALLSAREES,
  }
}

export const filterGowns = () => {
  return {
    type: FILTER_GOWNS
  }
}
export const filterTopwear = () => {
  return {
    type: FILTER_TOPWEAR
  }
}

export const filterBottomwear = () => {
  return {
    type: FILTER_BOTTOMWEAR
  }
}
export const filterMenWear = () => {
  return {
    type: FILTER_MENWEAR
  }
}
export const filterAllMenAccessories = () => {
  return {
    type: FILTER_ALLMENACCESSORIES
  }
}
export const filterBoys = () => {
  return {
    type: FILTER_BOYS
  }
}
export const filterGirls = () => {
  return {
    type: FILTER_GIRLS
  }
}
export const filterKitchenStorage = () => {
  return {
    type: FILTER_KITCHENSTORAGE
  }
}
export const filterMakeup = () => {
  return {
    type: FILTER_MAKEUP
  }
}
export const filterHomeDecore = () => {
  return {
    type: FILTER_HOMEDECORE
  }
}
export const filterSkincare = () => {
  return {
    type: FILTER_SKINCARE

  }
}
export const filterBags = () => {
  return {
    type: FILTER_BAGS

  }
}
export const filterFootwear = () => {
  return {
    type: FILTER_FOOTWEAR
  }
}
export const filterMobileAccessories = () => {
  return {
    type: FILTER_MOBILEACCESSORIES
  }
}
export const filterSmartWearables = () => {
  return {
    type: FILTER_SMARTWEARABLES
  }
}

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});


export const setSortType = (sortType) => {
  return {
    type: SET_SORT_TYPE,
    payload: sortType,
  };
};

export const setGenderFilter = (gender) => ({
    type: SET_GENDER_FILTER,
    payload: gender,
  }
)

export const setColorFilter = (colors) => ({
  type: SET_COLOR_FILTER,
  payload: colors,
});





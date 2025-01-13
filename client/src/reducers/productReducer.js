
import {
  FETCH_PRODUCTS,
  FILTER_ALLSAREES,
  FILTER_GOWNS,
  FILTER_TOPWEAR,
  FILTER_BOTTOMWEAR,
  FILTER_MENWEAR,
  FILTER_ALLMENACCESSORIES,
  FILTER_BOYS,
  FILTER_GIRLS,
  FILTER_KITCHENSTORAGE,
  FILTER_MAKEUP,
  FILTER_HOMEDECORE,
  FILTER_SKINCARE,
  FILTER_BAGS,
  FILTER_FOOTWEAR,
  FILTER_MOBILEACCESSORIES,
  FILTER_SMARTWEARABLES,
  SET_SEARCH_QUERY,
  SET_SORT_TYPE,
  SET_GENDER_FILTER,
  SET_COLOR_FILTER,
  
} from '../actions/productActions';


const initialState = {
  products: [],
  filteredProducts: [],
  searchQuery: '',
  selectedGenders: [],
  selectedColors: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,  
        filteredProducts: action.payload,  
      };
    case FILTER_ALLSAREES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'All Sarees'),
      };
    case FILTER_GOWNS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Gowns'),
      };
    case FILTER_TOPWEAR:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Topwear'),
      };
    case FILTER_BOTTOMWEAR:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Bottomwear'),
      };
    case FILTER_MENWEAR:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'MenWear'),
      };
    case FILTER_ALLMENACCESSORIES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'AllMenAccessories'),
      };
    case FILTER_BOYS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Boys'),
      };
    case FILTER_GIRLS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Girls'),
      };
    case FILTER_KITCHENSTORAGE:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'KitchenStorage'),
      };
    case FILTER_MAKEUP:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Makeup'),
      };
    case FILTER_HOMEDECORE:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Home'),
      };
    case FILTER_SKINCARE:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.subCategory === 'Skincare'),
      };
    case FILTER_BAGS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'Bags'),
      };
    case FILTER_FOOTWEAR:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'Footwear'),
      };
    case FILTER_MOBILEACCESSORIES:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === 'Mobile Accessories'),
      };

      case FILTER_SMARTWEARABLES:
        return {
          ...state,
          filteredProducts: state.products.filter(product => product.category === 'Smart Wearables'),
        };


    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
        filteredProducts: state.products.filter(product =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case SET_SORT_TYPE:
      return {
        ...state,
        sortType: action.payload,
      };


    case SET_GENDER_FILTER:
      const { gender } = action.payload;
      const selectedGenders = state.selectedGenders.includes(gender)
        ? state.selectedGenders.filter(g => g !== gender)
        : [...state.selectedGenders, gender];
      return {
        ...state,
        selectedGenders
      };


    case SET_COLOR_FILTER:
      const { colors } = action.payload;
      //toggling here
      const selectedColors = state.selectedColors.includes(colors)
        ? state.selectedColors.filter(c => c !== colors)
        : [...state.selectedColors, colors];
      return { ...state, selectedColors };

    default:
      return state;
  }



};

export default productReducer;
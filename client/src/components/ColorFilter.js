
import React from 'react';
import { useDispatch } from 'react-redux';
import { setColorFilter } from '../actions/productActions';

const ColorFilter = () => {
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    dispatch(setColorFilter({ colors: color }));
  };

  return (
    <div className="color-filter">
      <div className="form-check mb-2">

      </div>
      <h2 style={{ color: '#333', fontSize: "13px" }}>Color</h2>
      <div className="form-check mb-2">
        <label htmlFor="blue" className="form-check-label">Blue</label>
        <input
          className="form-check-input"
          id="blue"
          type="checkbox"
          onChange={() => handleColorChange('Blue')}
        />
      </div>
      <div className="form-check mb-2">
        <label className="form-check-label" htmlFor="green">Green</label>
        <input
          onChange={() => handleColorChange('Green')}
          className="form-check-input"
          id="green"
          type="checkbox"
        />
      </div>
      <div className="form-check mb-2">
      <label className="form-check-label" htmlFor="green">Yellow</label>
        <input
          onChange={() => handleColorChange('Yellow')}
          className="form-check-input"
          id="Yellow"
          type="checkbox"
        />
      </div>
      <div className="form-check mb-2">
        <label htmlFor="white" className="form-check-label">White</label>
        <input
          id="white"
          className="form-check-input"
          type="checkbox"
          onChange={() => handleColorChange('White')}
        />
      </div>
      <div className="form-check mb-2">
        <label htmlFor="Black" className="form-check-label">Black</label>
        <input
          id="Black"
          className="form-check-input"
          type="checkbox"
          onChange={() => handleColorChange('Black')}
        />
      </div>
    </div>
  );
};

export default ColorFilter;


import '../filter/filter.scss';
import search from '../../assets/search.png'
import React from 'react'

function Filter() {
  return (
    <div className="filter">
        <h1>Search result for <b>London</b></h1>
        <div className="top">
            <div className="item">
                <label htmlFor='city'>Location</label>
                <input id='city' placeholder='City Location' type='text'name='city'/>
            </div>
        </div>
        <div className="bottom">
            <div className="item">
                <label htmlFor='type'>Type</label>
                <select name='type' id='type'>
                    <option value="">any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor='property'>Property</label>
                <select name='property' id='property'>
                    <option value="">any</option>
                    <option value="aprtment">Apartment</option>
                    <option value="condo">Condo</option>
                    <option value="house">House</option>
                    <option value="land">land</option>
                </select>
            </div>
            <div className="item">
                <label htmlFor='minPrice'>Minimum Price</label>
                <input id='minPrice' placeholder='any' type='number'name='minPrice'/>
            </div>
            <div className="item">
                <label htmlFor='maxPrice'>Maximum Price</label>
                <input id='maxPrice' placeholder='any' type='number'name='maxPrice'/>
            </div>
            <div className="item">
                <label htmlFor='bedroom'>Bedroom</label>
                <input id='bedroom' placeholder='any' type='text'name='bedroom'/>
            </div>
            <button><img src={search} alt=''/></button>
        </div>
    </div>
  )
}

export default Filter
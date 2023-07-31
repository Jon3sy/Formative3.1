import {useState, useEffect, useContext} from 'react'


// elements imports 
import { Search, Globe, Translate, CardList } from 'react-bootstrap-icons'
import { FidgetSpinner } from 'react-loader-spinner'

//API KEY
const apiKey = import.meta.env.VITE_YOUR_API_KEY

const Homepage = () => {
  return (
    <>
    <FidgetSpinner visible={true}/>
    <p>Home</p>
     <div id='filter-container'>

        <div className='inputs' id='search-box'>
            <label htmlFor="search"> <Search/> </label>
            <input type="text" 
            name='search'
            id='search'
            />
        </div>
        <div className='inputs' id='country-box'>
            <label htmlFor="country"> <Globe/> </label>
            <select 
            name="country" 
            id="country"
            >
                <option value="se">Sweden</option>
                <option value="no">Norway</option>
                <option value="nl">Netherlands</option>
                <option value="de">Germany</option>
                <option value="iv">Latvia</option>
                <option value="it">Lithuania</option>
                <option value="be">Belgium</option>
            </select>
        </div>
        <div className='inputs' id='language-box'>
            <label htmlFor="language"> <Translate/> </label>
            <select 
            name="language" 
            id="language"
            >
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
                <option value="nl">Dutch</option>
                <option value="no">Norwegian</option>
                <option value="sv">Swedish</option>
            </select>
        </div>
         <div className="inputs" id='category-box'>
            <label htmlFor="category"> <CardList/> </label>
            <select 
                name="category" 
                id="category"
            >
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>
        </div>

     </div>
    </>
  )
}

export default Homepage

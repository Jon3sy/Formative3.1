import {useState, useEffect, useContext} from 'react'
import axios from 'axios'



// elements imports 
import { Search, Globe, Translate, CardList } from 'react-bootstrap-icons'
import { FidgetSpinner } from 'react-loader-spinner'

//API KEY
const apiKey = import.meta.env.VITE_YOUR_API_KEY

const Homepage = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [country, setCountry] = useState('se')
    const [language, setLanguage] = useState('en')
    const [category, setCategory] = useState('general')

    const [news, setNews] = useState ([])


    useEffect (() => {
      const getNews = async () => {
        try {
          const response = await axios.get(
            // `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=${category}&q=${searchTerm}&apiKey=${apiKey}`
          );
          const articles = response.data.articles.map((article) => {
            return{
              ...article, 
              onselect: () => HandleArticleSelect(article)
            };
          });
          getNews(articles)
          console.log(getNews)
        }
        catch (error){
          console.log("WOP WOP")
        }
      };
      getNews();
    },[country, language, category, searchTerm, apiKey]
    )
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
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <div className='inputs' id='country-box'>
            <label htmlFor="country"> <Globe/> </label>
            <select 
            name="country" 
            id="country"
            value={country}
            onChange={(e) => setCategory(e.target.value)}
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
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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

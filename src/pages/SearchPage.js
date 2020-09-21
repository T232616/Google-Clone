import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";
import './SearchPage.css';
const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term); //LIVE API CALL

  return (
    <>
      <div className="searchPage">
        <div className="searchpage__header">

          <img
            className="google_logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          />
          <Search className="inputF" hideButtons />
          
        </div>
        <div className="searchpage__header_body">
        
        </div>
        
      </div>
    </>
  );
};
export default SearchPage;

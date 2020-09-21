import React, { createContext, useContext, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./search.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useStateValue} from '../StateProvider';
import { actionTypes } from "../reducer";
const Search = ({ hideButtons = false }) => {
  const history = useHistory();
  const [input, setInput] = useState();
  const [state,dispatch] = useStateValue();
  const search = (e) => {
    e.preventDefault();
    history.push("/search");
    dispatch({
      type:actionTypes.SET_SEARCH_TERM,
      term: input
    })
  };
  return (
    <>
        <form className="search">
          <div className="search_input">
            <SearchIcon className="searchinputIcon" />
            <input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <MicIcon />
          </div>
          {!hideButtons ? (
            <div className="search_buttons">
              <Button
                type="submit"
                onClick={search}
                className="google_buttons"
                variant="outlined"
                style={{ marginRight: "10px" }}
              >
                Google Search
              </Button>
              <Button
                className="google_buttons"
                variant="outlined"
                style={{ marginRight: "10px" }}
              >
                I'm Feeling Lucky
              </Button>
            </div>
          ) : (
            <div className="search_buttons">
              <Button
                type="submit"
                onClick={search}
                className="google_buttonshidden"
                variant="outlined"
                style={{ marginRight: "10px" }}
              >
                Google Search
              </Button>
              <Button
                className="google_buttonshidden"
                variant="outlined"
                style={{ marginRight: "10px" }}
              >
                I'm Feeling Lucky
              </Button>
            </div>
          )}
        </form>

    </>
  );
};

export default Search;


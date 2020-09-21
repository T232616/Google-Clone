import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Home.css";
import Search from './Search';
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home__header">
          <div className="home__headerleft">
            <Link exact className="route" to="/about">
              About
            </Link>
            <Link exact className="route" to="/store">
              Store
            </Link>
          </div>
          <div className="home__headerright">
            <Link exact className="route" to="/gmail">
              Gmail
            </Link>
            <Link exact className="route" to="/images">
              Images
            </Link>
            <AppsIcon className="home_icon" />
            <AccountCircleIcon className="home_icon" />
          </div>
        </div>
        <div className="home__body">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
          <div className="home__inputContainer">
            <Search hideButtons={false} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

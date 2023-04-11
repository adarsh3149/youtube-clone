import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/yt_logo_rgb_light.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const [searchinput, setsearchinput] = useState("");
  const [openD, setopenD] = useState(false);
  const [searchdata, setsearchdata] = React.useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "666991f50bmsh2fb08ad7ac2b8a4p176330jsn14be24b156f1",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const URL2 = `https://youtube-v31.p.rapidapi.com/search?q=${searchinput}&part=snippet%2Cid&maxResults=50&type=video`;

  const Search2 = async () => {
    try {
      let response = await fetch(URL2, options);
      let data = await response.json();
      setsearchdata(data);
      move();
    } catch (error) {
      navigate(`/error`);
      console.log(error);
    }
  };
  console.log();
  const navigate = useNavigate();
  const move = async () => {
    navigate(`/watch/${searchdata?.items[0].id.videoId}`);
  };
  const searchapi = (e) => {
    // e.preventDefault()
    console.log("hello");
    Search2();
  };
  console.log(searchinput);

  return (
    <header className="header">
      <div className="header__left">
        <span className="header__menuIcon">
          <MenuIcon onClick={handleSidebarToggle} />
        </span>
        <Link to="/">
          <img className="header__logo" src={logo} alt="YouTube logo" />
        </Link>
      </div>
      <Paper
        className="header__search"
        sx={{
          borderRadius: "20px",
        }}
      >
        <input
          type="text"
          style={{
            fontSize: "1.5rem",
            width: "100%",
            outline: "none",
            border:"none",
            // borderBottom: "1px solid gray",
            padding: "5px",
          }}
          placeholder="Search"
          value={searchinput}
          onChange={(e) => {
            let original = e.target.value;
            setsearchinput(original);
          }}
          autoComplete="off"
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              searchapi();
            }
          }}
        />
      </Paper>
      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
      </div>
      <Sidebar open={sidebarOpen} onClose={handleSidebarToggle} />
    </header>
  );
}

export default Header;

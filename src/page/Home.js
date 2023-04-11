import React, { useState, useEffect } from "react";
import Card from "./Card";
import Loader from "./Loader";
import "./Home.css";

export default function ClippedDrawer() {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "99c25b4aa7msh39131be0d1fe146p1c024fjsna65d11b31811",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyBRyq2pLAZmTc61G7Dhki-wXUyXd3WCMVQ";

  const searchVideos = async () => {
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setSearch(data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    searchVideos();
  }, []);

  const feedResult = search.map((item, index) => {
    const { thumbnails, title, channelTitle } = item.snippet;
    return (
      <Card
        thumb={thumbnails.high}
        title={title}
        key={index}
        channelName={channelTitle}
        id={item.id}
      ></Card>
    );
  });

  return (
    <div className="clipped-drawer-container">
      {/* <div className="clipped-drawer-header">
        <h2>Most Popular Videos</h2>
      </div> */}
      <div className="clipped-drawer-content">
        {!loading ? (
          <div className="clipped-drawer-cards">{feedResult}</div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { useParams } from "react-router-dom";
import { Box, IconButton, Button } from "@mui/material";
import Card from "./Card";
import Loader from "./Loader";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SinglePage() {
  const [videoDetails, setvideoDetails] = useState([]);
  const [loading, setloading] = useState(true);
  const [topvideo, settopvideo] = useState([]);
  const [like, setlike] = useState(false);
  const [dislike, setdislike] = useState(false);
  const [subs, setsubs] = useState(false);

  const { videoId } = useParams();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "666991f50bmsh2fb08ad7ac2b8a4p176330jsn14be24b156f1",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  const URL = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${videoId}&part=id%2Csnippet&type=video&maxResults=20`;
  const Search = async () => {
    try {
      let response = await fetch(URL, options);
      let data = await response.json();
      setvideoDetails(data);
      setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    Search();
    setloading(true);
    setdislike(false);
    setlike(false);
  }, []);
  useEffect(() => {
    Search();
    setdislike(false);
    setlike(false);
  }, [videoId]);

  const { items } = videoDetails;
  console.log(topvideo);
  const feedresult = items?.map((item, index) => {
    const { thumbnails, title, channelTitle } = item.snippet;
    return (
      <Card
        thumb={thumbnails.high}
        title={title}
        key={index}
        channelName={channelTitle}
        id={item.id.videoId}
      ></Card>
    );
  });
  const notify = () => {
    if (!like) {
      toast("You Liked The Video");
    }
  };
  const notify2 = () => {
    if (!dislike) {
      toast("You Disliked The Video");
    }
  };
  const notify3 = () => {
    if (!subs) {
      toast("You Subscribed The Channel");
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
        color="red"
      />
      <VideoPlayer />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "5rem",
          gap: { xs: "2rem", md: "4rem" },
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: "2rem",
            margin: { xs: "2rem", md: "2rem 10rem" },
            alignItems: "center", justifyContent:"center"
          }}
        >
          <IconButton
            onClick={() => {
              setlike(!like);
              setdislike(false);
              notify();
            }}
          >
            {!like ? (
              <ThumbUpOffAltIcon
                sx={{ color: "Black", fontSize: "2rem" }}
              ></ThumbUpOffAltIcon>
            ) : (
              <ThumbUpAltIcon
                sx={{ color: "Black", fontSize: "2rem" }}
              ></ThumbUpAltIcon>
            )}
          </IconButton>
          <IconButton
            onClick={() => {
              setdislike(!dislike);
              setlike(false);
              notify2();
            }}
          >
            {!dislike ? (
              <ThumbDownOffAltIcon
                sx={{ color: "Black", fontSize: "2rem" }}
              ></ThumbDownOffAltIcon>
            ) : (
              <ThumbDownAltIcon
                sx={{ color: "Black", fontSize: "2rem" }}
              ></ThumbDownAltIcon>
            )}
          </IconButton>
          <Button 
            variant={!subs ? "contained" : "text"}
            color="error"
            sx={{ color: subs?"black":"white",backgoundColor:"red", padding: "1rem 1.6rem", display:"flex", alignItems:"center" }}
            onClick={() => {
              setsubs(!subs);
              notify3();
            }}
          >
            {!subs ? "Subscribe" : "Subscribed"}
          </Button>
        </Box>
        {!loading ? feedresult : <Loader></Loader>}
      </Box>
    </div>
  );
}

export default SinglePage;

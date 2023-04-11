import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Sidebar.css';

function Sidebar({ open }) {
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <ul className="sidebar-list">
        <li className="sidebar-item active">
          <HomeIcon />
          <span>Home</span>
        </li>
        <li className="sidebar-item">
          <WhatshotIcon />
          <span>Trending</span>
        </li>
        <li className="sidebar-item">
          <SubscriptionsIcon />
          <span>Subscriptions</span>
        </li>
        <li className="sidebar-item">
          <VideoLibraryIcon />
          <span>Library</span>
        </li>
        <li className="sidebar-item">
          <HistoryIcon />
          <span>History</span>
        </li>
        <li className="sidebar-item">
          <OndemandVideoIcon />
          <span>Your videos</span>
        </li>
        <li className="sidebar-item">
          <WatchLaterIcon />
          <span>Watch later</span>
        </li>
        <li className="sidebar-item">
          <ThumbUpIcon />
          <span>Liked videos</span>
        </li>
        <li className="sidebar-item">
          <ExpandMoreIcon />
          <span>Show more</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

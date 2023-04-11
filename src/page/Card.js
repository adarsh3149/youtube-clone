import { Link } from 'react-router-dom';
import './Card.css'
export default function ActionAreaCard({thumb,title,channelName,id}) {
  const moveup=()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };

  return (
    <Link to={`/watch/${id}`} style={{ textDecoration:"none"}}>
      <div className="card" onClick={moveup}>
        <img src={thumb.url} alt="thumbnail" class="card-img" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <h4 className="card-subtitle">{channelName}</h4>
        </div>
      </div>
    </Link>
  );
}

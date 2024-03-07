import myPicture from '../assets/sp.png';
import './Picture.css';

function Picture() {
  return (
    <div className="container">
      <img src={myPicture} className="picture" />
    </div>
  );
}

export default Picture;

var Photo = ({photo}) => (
  <div className="photo">
    <div>{photo.title}</div>
    <div>{photo.rating} out of 5</div>
    <img src={photo.url} />
  </div>
);

window.Photo = Photo;
var ListRow = ({photo, handleTitleClick}) => (
  <div 
    className="list-row"
    onClick={() => handleTitleClick(photo)}
  >
    {photo.title}
  </div>
);

window.ListRow = ListRow;
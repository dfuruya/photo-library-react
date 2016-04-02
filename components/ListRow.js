var ListRow = ({photo, handleTitleClick}) => (
  <div 
    className="list-row"
    onClick={() => handleTitleClick(photo)}
  >
    <a>{photo.title}</a>
  </div>
);

window.ListRow = ListRow;
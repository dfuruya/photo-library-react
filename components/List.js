var List = ({list, handleTitleClick}) => {
  var listEntries = list.map((photo, key) =>
    <ListRow
      photo={photo}
      key={key}
      handleTitleClick={handleTitleClick}
    />
  );

  return (
    <div className="list-table">
      <table>
        <thead>
          Image Library
        </thead>
        <tbody>
          {listEntries}
        </tbody>
      </table>
    </div>
  );
};

window.List = List;
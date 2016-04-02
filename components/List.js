var List = ({list, handleTitleClick}) => {
  var listEntries = list.map((photo) =>
    <ListRow
      photo={photo}
      handleTitleClick={handleTitleClick}
    />
  );

  return (
    <div className="list-table">
      <table>
        <thead>
          <p><u>Image Library</u></p>
        </thead>
        <tbody>
          {listEntries}
        </tbody>
      </table>
    </div>
  );
};

window.List = List;
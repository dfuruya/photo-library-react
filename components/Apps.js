class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: photoData,
      currentPhoto: photoData[0]
    }
  }

  handleTitleClick(photo) {
    this.setState({
      currentPhoto: photo
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <List 
          list={this.state.photos} 
          handleTitleClick={this.handleTitleClick.bind(this)}
        />
        <Photo 
          photo={this.state.currentPhoto} 
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

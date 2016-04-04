class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: photoData,
      currentPhoto: photoData[0]
    }
  }

  handleTitle(photo) {
    this.setState({
      currentPhoto: photo
    });
  }

  handleRating(event) {
    this.setState({
      rating: event.target.value
    });
    this.state.currentPhoto.rating = event.target.value;
  }

  handleSubmit(image) {
    this.setState({
      title: image.title,
      url: image.url 
    });
    this.state.photos.push(image);
  }

  render() {
    return (
      <div>
        <Nav 
          list={this.state.photos}
          handleSubmitClick={this.handleSubmit.bind(this)}
        />
        <List 
          list={this.state.photos} 
          handleTitleClick={this.handleTitle.bind(this)}
        />
        <Photo 
          photo={this.state.currentPhoto} 
        />
        <Rating 
          handleRatingClick={this.handleRating.bind(this)}
        />
          
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

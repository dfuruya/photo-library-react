class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRatingClick(event) {
    this.props.handleRatingClick(event);
  }

  render() {
    return (
      <div className="rating">
        Select a rating: 
        <select onChange={this.handleRatingClick.bind(this)}> 
          <option value="0">Select a rating:</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    );
  }
}

window.Rating = Rating;
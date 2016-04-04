class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      rating: 0
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    var newImage = {
      title: this.state.title,
      url: this.state.url,
      rating: 0
    };
    // this.props.list.push(newImage);
    // console.log(this.props.list);
    this.props.handleSubmitClick(newImage);
  }

  handleTitle(event) {
    this.setState({title: event.target.value});
  }

  handleLink(event) {
    this.setState({url: event.target.value});
  }

  render() {
    return(
      <div className="search-bar form-inline">
        <form onSubmit={this.handleSubmit.bind(this)}>
          Image Link: 
          <input 
            type="text"
            value={this.state.url}
            onChange={this.handleLink.bind(this)}
          />
          
          Image Title:
          <input 
            type="text"
            value={this.state.title}
            onChange={this.handleTitle.bind(this)}
          />

          <input 
            type="submit"
            value="Save Photo"
          />
        </form>
      </div>
    )
  }
}

window.Nav = Nav;
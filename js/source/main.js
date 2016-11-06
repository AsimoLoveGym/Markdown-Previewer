class DisplayContainer extends React.Component {
  constructor() {
    super();
    this.state = {value: '# Markdown-Previewer\n\nThis is a **ReactJS & ES6** project for [Free Code Camp challenge](https://www.freecodecamp.com/challenges/build-a-markdown-previewer). Also applied **Babel**.\n\nYou can [view the site here](http://codepen.io/AsimoLoveGym/full/YpPrZL//)\n\n## Reference:\n\nmarkedJS library\n\nhttps://cdnjs.com/libraries/marked\n\nhttps://github.com/chjj/marked\n\nInspired by Matt OTousa\n\nhttp://codepen.io/Tattomoosa/pen/KgZgxv\n\nand \n\nHerman Fassett\n\nhttps://codepen.io/FreeCodeCamp/full/JXrLLE/\n'};
    this.handleChange = this.handleChange.bind(this);
    this.markDown = this.markDown.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  markDown(value) {
    const markedString = marked(value);
    return {__html: markedString};
  }

  render() {
    // const placeHolder = ''


    return(
      <div className="center-block" id="preview-body">
        <h1 className="text-center" id="app-title">Markdown Previewer</h1>
        <div className="col-xs-6">
          <div className="panel panel-default" id="edit-block">
            <div className="panel-heading text-left">Edit file</div>
            <div className="panel-body">
              <textarea id="edit-content" autoFocus={true} value={this.state.value} onChange={this.handleChange}></textarea>
            </div>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel panel-info" id="preview-block">
            <div className="panel-heading text-left"><i className="fa fa-eye"></i> Preview changes</div>
            <div className="panel-body">
              <div id="preview-content" dangerouslySetInnerHTML={this.markDown(this.state.value)}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <DisplayContainer />,
  document.getElementById('display-container')
);

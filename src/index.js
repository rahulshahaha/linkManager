'use strict';

const e = React.createElement;

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {


    return (
      <button onClick={() => this.setState({ liked: true })}>
        Like
      </button>
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(Index), domContainer);
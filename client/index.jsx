import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: {},
      seller: {},
      faq: {}
    }
  }





  render() {
    //debugger;

    return (
      <div class="info">
        <div class="item-info">

        </div>
        <div class="shipping-info">

        </div>
        <div class="faq-info">

        </div>
        <div class="seller-info">

        </div>
      </div>
    )
  }



}

reactDOM.render(<App />, document.getElementById('app'));
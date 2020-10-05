import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';

import SampleData from './sampleData.js';
import Item from './src/Item.jsx';
import Shipping from './src/Shipping.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: {},
      seller: {},
      faq: {},
      countries: ["United States"]
    }
  }

  getData() {
    axios({
      method: 'get',
      url: '/api/item/1'
    })
      .then((res) => {
        console.log('item getting: ', res.data[0])
        this.setState({item: res.data[0]})
        console.log(this.state)
      })
      .then(
        axios({
          method: 'get',
          url: '/api/seller/1'
        })
          .then ((respond) => {
            console.log('seller getting:', respond.data[0])
            this.setState({seller: respond.data[0]})
            console.log(this.state)
          })
          .then(
            axios({
              method: 'get',
              url: '/api/faq/1'
            })
              .then ((resp) => {
                console.log('faq getting:', resp.data[0])
                this.setState({faq: resp.data[0]})
                console.log(this.state)
              })
          )
      )
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    //debugger;

    return (
      <div class="info">
        <div class="info-wrap">

          <Item item={this.state.item} />

          <Shipping seller={this.state.seller} />

          <div class="faq-info">

          </div>

          <div class="seller-info">
          <div className="seller-title">Meet your sellers</div>
          <div className="seller-personal-info">
            <img src="https://i.etsystatic.com/iusa/842395/69699441/iusa_75x75.69699441_3vwd.jpg?version=0" className="seller-image"></img>
            <div className="seller-name">Michelle Duni</div>
            <div className="store-info">
              Owner of <a href="#" className="store-name">Ticketybootique</a>
            </div>
          </div>
          <button className="message-seller-button">Message Michelle</button>
          </div>
        </div>


      </div>
    )
  }



}

reactDOM.render(<App />, document.getElementById('app'));
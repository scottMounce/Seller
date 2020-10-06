import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';

import Item from './src/Item.jsx';
import Shipping from './src/Shipping.jsx';
import Faq from './src/Faq.jsx'
import SellerInfo from './src/SellerInfo.jsx';


class Seller extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      item: {},
      seller: {},
      faq: {}
    }
  }

  getData() {
    axios({
      method: 'get',
      url: 'http://localhost:3004/api/item/1'
    })
      .then((res) => {
        console.log('item getting: ', res.data[0])
        this.setState({item: res.data[0]})
      })
      .then(
        axios({
          method: 'get',
          url: `http://localhost:3004/api/seller/1`
        })
          .then ((respond) => {
            this.setState({seller: respond.data[0]})
          })
          .then(
            axios({
              method: 'get',
              url: 'http://localhost:3004/api/faq/1'
            })
              .then ((resp) => {
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

          <Faq faq={this.state.faq} />

          <SellerInfo seller={this.state.seller} />

        </div>
      </div>
    )
  }
}

reactDOM.render(<Seller />, document.getElementById('seller'));
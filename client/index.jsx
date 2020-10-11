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
      faq: {},
    }
  }



  getData() {
    var url = window.location.pathname;
    if (url.length < 2) {
      url = '1';
    }
    var id = url.substring(url.lastIndexOf('/' + 1));
    axios({
      method: 'get',
      url: `ec2-54-219-14-63.us-west-1.compute.amazonaws.com/api/item${id}`
    })
      .then((res) => {
        console.log('item getting: ', res.data[0])
        this.setState({item: res.data[0]});
        return res
      })
      .then((data) => {
        axios({
          method: 'get',
          url: `ec2-54-219-14-63.us-west-1.compute.amazonaws.com/api/seller/${data.data[0].sellerID}`
        })
          .then ((respond) => {
            this.setState({seller: respond.data[0]})
            return respond
          })
          .then((data) => {
            axios({
              method: 'get',
              url: `ec2-54-219-14-63.us-west-1.compute.amazonaws.com/api/faq/${data.data[0].id}`
            })
            .then ((resp) => {
              this.setState({faq: resp.data[0]})
              console.log(this.state)
            })
          })
      })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    //debugger;
    return (
      <div class="info">
        <div class="info-wrap">

          <Item item={this.state.item} des={this.state.description} />

          <Shipping seller={this.state.seller} />

          <Faq faq={this.state.faq} />

          <SellerInfo seller={this.state.seller} />

        </div>
      </div>
    )
  }
}

reactDOM.render(<Seller />, document.getElementById('seller'));
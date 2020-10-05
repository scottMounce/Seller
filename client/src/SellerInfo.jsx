import React from 'react';

const SellerInfo = ({seller}) => {
  return (
    <div class="seller-info">
      <div className="seller-title">Meet your sellers</div>
        <div className="seller-personal-info">
          <img src={seller.profilePicture} className="seller-image"></img>
          <div className="seller-name">
            {seller.sellerName}
          </div>
          <div className="store-info">
            Owner of <a href="#" className="store-name">{seller.storeName}</a>
          </div>
        </div>
        <button className="message-seller-button">Message {seller.sellerName}</button>
    </div>
  )
}

export default SellerInfo
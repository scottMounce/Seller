import React from 'react';
const Item = ({item}) => {

  return (
    <div class="item-info">
      <div class="handmade">
        <i class="fas fa-hand-paper fa-2x"></i>Handmade
      </div>
      <div class="material">
        <div class="material-title">
          Materials
        </div>
        <div class="material-list">
          {item.materials}
        </div>
      </div>
      <div class="description">
        <div class="description-title">
          Description
        </div>
        <div class="description-body" id="description-body">
          <p>
            {item.description}
          </p>
        </div>
        <div class="learn-more">
          <div class="learn-more-button-wrapper">
            <button id="learn-more-about-this-item" onClick={() => {
              let showItem = document.getElementById('learn-more-about-this-item');
              let hideItem =document.getElementById('less');
              showItem.style.display = "none";
              hideItem.style.display = "block";
              document.getElementById('description-body').setAttribute("class", "full-description-body");
            }}>Learn more about this item</button>

            <button id="less" onClick={() => {
              let showItem = document.getElementById('learn-more-about-this-item');
              let hideItem =document.getElementById('less');
              showItem.style.display = "block";
              hideItem.style.display = "none";
              document.getElementById('description-body').setAttribute("class", "description-body");
            }}>Less</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item









import React from 'react';
const Item = ({item}) => {
  //debugger;
  // let rawDescription = item.description
  // let trimed = rawDescription.split("<br></br>")
  // let description = trimed.map((paragraph) => {
  //   return <div>{paragraph} </div>
  // })
  let text = `Pie...me oh my.\n\nA new favorite in the Ticketybootique, this pumpkin pie costume hat has us in stitches. Carefully sewn so it can be enjoyed for many seasons and fun occasions, what is sweeter than your furry friend's cute face peeping out of a slice of pie, with a little bit of whipped cream on top? We're not sure there is anything better!\n\nMade with soft brown felt, this hat features embellishments such as a scalloped stitch over the crust and a nice sized dollop of bright white whipped cream stitched securely onto the costume. Lightweight so that it's not cumbersome on your pet, this is part of the Easy Wear line for quick and simple photoshoots or costumed dress ups. Simply place the costume on your pet by gently easing their face through the costume hole.\n\n***Cat meowdel is a tiny 5.6 lb cat. Please measure your pets before purchasing***\nThis hat comes in three sizes:\n\nSmall 2.5" diameter (across the hole)\nnd ~8" circumference (around the entire edge of the hole opening)\n\nMedium 3" diameter (across the hole)\nand ~9.5" circumference (around the entire edge of the hole opening)\n\nLarge 3.5" diameter (across the hole)\nand 11" circumference (around the entire edge of the hole opening)\n\nFor an certain fit, feel free to contact the shop for a perfect sizing!`

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
            {text}
          {/* Pie...me oh my. <br/><br/>
          A new favorite in the Ticketybootique, this pumpkin pie costume hat has us in stitches. Carefully sewn so it can be enjoyed for many seasons and fun occasions, what is sweeter than your furry friend's cute face peeping out of a slice of pie, with a little bit of whipped cream on top? We're not sure there is anything better!<br></br>
          <br></br>
          Made with soft brown felt, this hat features embellishments such as a scalloped stitch over the crust and a nice sized dollop of bright white whipped cream stitched securely onto the costume. Lightweight so that it's not cumbersome on your pet, this is part of the Easy Wear line for quick and simple photoshoots or costumed dress ups. Simply place the costume on your pet by gently easing their face through the costume hole. */}
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









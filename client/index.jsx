import React from 'react';
import reactDOM from 'react-dom';
import axios from 'axios';


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


  //hide and show overflow
  // if words over 200, trim and save in trimmed p,


  render() {
    //debugger;

    return (
      <div class="info">
        <div class="info-wrap">
          <div class="item-info">
            <div class="handmade">
              <i class="fas fa-hand-paper fa-2x"></i>Handmade
            </div>
            <div class="material">
              <div class="material-title">
                Materials
              </div>
              <div class="material-list">
                Felt, Thread
              </div>
            </div>
            <div class="description">
              <div class="description-title">
                Description
              </div>
              <div class="description-body">
                <p>
                Pie...me oh my. <br></br>
                <br></br>
                A new favorite in the Ticketybootique, this pumpkin pie costume hat has us in stitches. Carefully sewn so it can be enjoyed for many seasons and fun occasions, what is sweeter than your furry friend's cute face peeping out of a slice of pie, with a little bit of whipped cream on top? We're not sure there is anything better!
                </p>
              </div>
              <div class="learn-more">
                <div class="learn-more-button-wrapper">
                <button class="learn-more-about-this-item">Learn more about this item</button>
                </div>
              </div>
            </div>
          </div>

          <div class="shipping-info">
            <div class="estimated-arrival">
              <div class="estimated-arrival-title">
                Estimated arrival
              </div>
              <div class="estimated-arrival-date">
                Oct 19-21
              </div>
            </div>
            <div class="shipping-timetable">
              <div class="order-date">
                <div class="shipping-icon"><i class="fas fa-hand-paper circle-icon"></i></div>
                <div class="timetable-date">Oct 2</div>
                <div class="order-placed" class="under-dash-line">Order placed</div>
              </div>
              <div class="order-ship">
              <div class="shipping-icon"><i class="fas fa-truck circle-icon"></i></div>
                <div class="timetable-date">Oct 14-16</div>
                <div id="order-ships" class="under-dash-line">Order ships</div>
              </div>
              <div class="order-deliver">
              <div class="shipping-icon"><i class="	fas fa-gift circle-icon"></i></div>
                <div class="timetable-date">Oct 19-21</div>
                <div class="deliverd" class="under-dash-line">Delivered!</div>
              </div>
            </div>
            <div class="shipping-cost">
              <div class="cost-to-ship">
                <div class="shipping-cost-title">
                  Cost to ship
                </div>
                <div class="cost-display">
                  $3.90
                </div>
              </div>
              <div class="exchanges">
                <div class="shipping-cost-title">
                  Exchanges
                </div>
                <div class="exchange-display">
                  Accepted
                </div>
                <div class="exchanges-exception">
                  Exceptions may apply
                </div>
              </div>
            </div>
            <div class="destination">
              <div class="location-selector">
                <button class="selector-head">
                  Deliver to United States, 00000
                </button>
                <div class="selectors">
                  <div class="country">
                    <div class="country-selector-title">
                      Country
                    </div>
                    <select class="country-selector">
                      <option value="United States">UnitedStates</option>
                    </select>
                  </div>
                  <div class="zipcode">
                    <div class="zipcode-title">
                      Zip or postal code
                    </div>
                    <input type="text" class="zipcode-input"></input>
                  </div>
                </div>

              </div>
              <div class="ship-from">
                Ships from United States
              </div>
            </div>
            <div class="store-policies">

            </div>
          </div>

          <div class="faq-info">

          </div>

          <div class="seller-info">
          <div className="seller-title">Meet your sellers</div>
          <div className="seller-personal-info">
            <img src="https://robohash.org/sitsequiquia.png?size=300x300&set=set1" className="seller-image"></img>
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
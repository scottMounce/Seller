import React from 'react';




class Shipping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'United State',
      zipcode: 10000,
    }
  }

  changeCountry(event) {
    this.setState({
      country: event.target.value
    })
  }

  changeZipcode(event) {
    let zip = event.target.value;
    let warning =document.getElementById('invalid-zipcode');
    if (zip.length !== 5) {
      document.getElementById('zipcode-input').setAttribute("class", "zipcode-input-warning");
      warning.style.display = "block";
    } else {
      document.getElementById('zipcode-input').setAttribute("class", "zipcode-input")
      warning.style.display = "none";
      this.setState({
        zipcode: zip
      })
    }
  }

  render() {
    return (
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
            <div class="timetable-date">Oct 4</div>
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
            <button id="selector-head-up" onClick={() => {
              let up = document.getElementById('selector-head-up');
              let down = document.getElementById('selector-head-down');
              let selectors = document.getElementById('selectors')
              up.style.display = "none";
              down.style.display = "block";
              selectors.style.display = "block"
            }}>
              Deliver to {this.state.country}, {this.state.zipcode} <i class="fas fa-angle-down"></i>
            </button>
            <button id="selector-head-down" onClick={() => {
              let up = document.getElementById('selector-head-up');
              let down = document.getElementById('selector-head-down');
              let selectors = document.getElementById('selectors')
              up.style.display = "block";
              down.style.display = "none";
              selectors.style.display = "none"
            }}>
              Deliver to {this.state.country}, {this.state.zipcode} <i class="fas fa-angle-up"></i>
            </button>
            <div class="selectors" id="selectors">
              <div class="country">
                <div class="country-selector-title">
                  Country
                </div>
                <select class="country-selector" onChange={this.changeCountry.bind(this)}>
                  <option value="United States">UnitedStates</option>
                  <option value="Australia">Australia</option>
                  <option value="Canada">Canada</option>
                  <option value="France">Franch</option>

                </select>
              </div>
            <div class="zipcode">
                <div class="zipcode-title">
                  Zip or postal code
                </div>
                <input type="text" class="zipcode-input" id="zipcode-input" onChange={this.changeZipcode.bind(this)}></input>
                <div id="invalid-zipcode">Please enter a valid zip code</div>
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
    )
  }
}

export default Shipping
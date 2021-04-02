import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    ],
    linkto: ["htt://sales/b", "htt://sales/m", "htt://sales/s"],
    delay:[1000,0,1000]
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
    <Zoom delay={this.state.delay[i]} key={i}>
      <div className="pricing_item">
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${this.state.prices[i]}</span>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">
            <span>{this.state.desc[i]}</span>
          </div>
          <div className="pricing_buttons">
            
              <MyButton
              text='Purchase'
              bck='#ffa800'
              color="#fff"
              link={this.state.linkto[i]} />
            
          </div>
        </div>
      </div>
    </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;

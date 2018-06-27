import React, { Component } from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };
  static displayName = 'Card number formating';

  render() {
    return (
      <CardNumberInput
        onChange={this.handleChange}
        cardNumber={this.state.cardNumber}
      />
    );
  }

  handleChange = value => {
    this.setState({ cardNumber: value });
  };
}

export default CardNumberHolder;

import React, { Component } from 'react';

export default class CreditCardInput extends Component {
  static propTypes = {
    types: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = { number: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  process(number) {
    const type = this.checkType(number);
    let text = this.insertSpaces(number);
    text = text.trim();
    return { text, type };
  }

  insertSpaces(text) {
    return text.replace(/(.{4})/g, '$1 ');
  }

  handleChange(e) {
    const newValue = e.target.value;
    const newNumber = this.filterWhitespace(newValue);
    this.setState({ number: newNumber });
  }

  filterWhitespace(text) {
    return text.replace(/\s/g, '');
  }

  checkType(text) {
    const { types } = this.props;
    let correctType = '';
    Object.keys(types).forEach((type) => {
      if (text.match(types[type])) {
        correctType = type;
      }
    });

    return correctType;
  }

  render() {
    let { text, type } = this.process(this.state.number);
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={text} />
        <input type="text" value={type} readOnly />
      </div>
    );
  }
}

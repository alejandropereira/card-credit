import React from 'react';
import CreditCardInput from './credit_card_input';

let types = {
  Visa: /^4/,
  MasterCard: /^5[1-5]/,
  'American Express': /^3[47]/,
};

export const App = () => (
  <CreditCardInput types={types} />
);

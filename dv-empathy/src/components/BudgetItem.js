import React from 'react';

import InputCost from './InputCost';

function BudgetItem(props) {
  const { age, sex, individual_income } = props.item;

  return(
    <div>
      <p>Budget Item:</p>
        age: { age }
        gender: { sex }
        income: { individual_income }
        <InputCost />
    </div>
  )
}


export default BudgetItem;
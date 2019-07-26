import React from 'react';

import ListBudgetItems from './ListBudgetItems';

const CalculatorPage = (props) => {
  return(
    <div>
      <ListBudgetItems data={ props.data } />
    </div>
  );
}

export default CalculatorPage;
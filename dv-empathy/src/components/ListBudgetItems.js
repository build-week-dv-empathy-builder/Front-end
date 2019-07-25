import React from 'react';
import BudgetItem from './BudgetItem';
// List of budget items

function ListBudgetItems(props) {

  const items = props.data;

  return(
    <div>
      { items.map(item => {
        return(
          <BudgetItem item={ item }/>
        )
      })}
    </div>
  );
}

export default ListBudgetItems;
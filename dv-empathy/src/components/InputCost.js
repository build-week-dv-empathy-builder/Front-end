import React from 'react';

import { Button, Input } from 'reactstrap';

class InputCost extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    return(
      <div>
        <h1>Hi from InputCost</h1>
        <Input type="text" />
        <Button color="primary">Submit</Button>
      </div>
    );
  };
}


export default InputCost;
import React, { PureComponent } from 'react';

class Input extends PureComponent {
  render() {
    const { id, onChange, ...rest } = this.props;
    return <input id={id} onChange={(e) => onChange(e, { id })} {...rest} />;
  }
}

export default Input;

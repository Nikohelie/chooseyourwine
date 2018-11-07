import React, { Component } from 'react';

class Checkbox extends Component {
  // state = {
  //   isChecked: false,
  // }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label, isChecked} = this.props;

    // this.setState(({ isChecked }) => (
    //   {
    //     isChecked: !isChecked,
    //   }
    // ));

    handleCheckboxChange(label,isChecked);
  }

  render() {
    console.log("props checkbox",this.props);
    const { label } = this.props;
    //const { isChecked } = this.state;
    console.log(this.props);

    return (
      <div className="checkbox">
        <label>
          <input
                            type="checkbox"
                            value={label}
                            checked={this.props.isChecked}
                            onChange={this.toggleCheckboxChange}
                        />

          {label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
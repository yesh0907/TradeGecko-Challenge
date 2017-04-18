import React, { Component } from 'react';
import AlertContainer from 'react-alert';

class ErrorPopup extends Component {
  /*
    Constructor: to setup the styling of the component
   */
  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'light',
      time: 5000,
      transition: 'scale'
    };
  }

  /*
    Show the alert and update the state.
  */
  showAlert() {
    const { errorMessage, updateState } = this.props;
    this.msg.show(errorMessage, {
      time: 5000,
      type: 'error',
      icon: <i className="fa fa-exclamation-triangle alert-icon medium" aria-hidden="true"></i>
    });

    updateState();
  }


  render() {
    const { hasError } = this.props;

    /*
      Show if only have error
    */
    if (hasError) {
      this.showAlert();
    }

    return (
      <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
    );
  }
}

export default ErrorPopup;

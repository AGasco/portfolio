import React, { PureComponent } from 'react';
import ContactComponent from './Contact.component';
import emailjs from 'emailjs-com';

class ContactContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      //JSON object containing all the info taken from the form
      //This info is then used to send an email to myself
      formInfo: { firstName: '', lastName: '', email: '', message: '' },
      hasSubmitted: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = (e, field) => {
    const { formInfo } = this.state;

    this.setState({ formInfo: { ...formInfo, [field]: e.target.value } });
  };

  onSubmit = (e) => {
    const { formInfo } = this.state;

    e.preventDefault();

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: `${formInfo.firstName} ${formInfo.lastName}`,
        from_email: formInfo.email,
        to_name: 'Antonio Gasco',
        message: formInfo.message
      },
      process.env.REACT_APP_EMAILJS_USER_ID
    );

    this.setState({
      hasSubmitted: true,
      formInfo: {}
    });
  };

  render() {
    const { hasSubmitted, formInfo } = this.state;
    const { elements } = this.props;

    return (
      <ContactComponent
        elements={elements}
        hasSubmitted={hasSubmitted}
        formInfo={formInfo}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

export default ContactContainer;

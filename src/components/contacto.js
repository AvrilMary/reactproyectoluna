import NavBar from "./Nav";
import Footer from "./Footer";
import React, {useState} from "react";
import PropTypes from "prop-types";
import axios from "axios";


const Contacto = (props) => {
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});

/**
  * @function handleFormSubmit
  * @param e { obj } - form event
  * @return void
  */

 const handleFormSubmit = e => {
  e.preventDefault();
  axios({
    method: "post",
    url: `${process.env.REACT_APP_API}`,
    headers: { "content-type": "application/json" },
    data: formData
  })
    .then(result => {
      if (result.data.sent) {
        setmailSent(result.data.sent)
        setError(false)
      } else {
        setError(true)
      }
    })
    .catch(error => setError( error.message ));
};
/**
  * @function handleChange
  * @param e { obj } - change event
  * @param field { string } - namve of the field
  * @return void
  */
 const handleChange = (e, field) => {
  let value = e.target.value;
  setFormData({
    ...formData,
    [field]: value,
  });
};



  const { title,description, successMessage, 
    errorMessage, fieldsConfig } = props.config;

    return (
      <>
      <NavBar/>
      <div className="contact-form">
        <div className="contact-form__header">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
      <div className="contact-form__container">
        <div>
          <form action="#">
            {fieldsConfig &&
              fieldsConfig.map(field => {
                return (
                  <React.Fragment key={field.id}>
                    {field.type !== "textarea" ? (
                      <React.Fragment>
                        <label>{field.label}</label>
                        <input
                          type={field.type}
                          className={field.klassName}
                          placeholder={field.placeholder}
                          value={field.name}
                          onChange={e => handleChange(e, field.fieldName)}
                        />
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <label>{field.label}</label>
                        <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => handleChange(e, field.fieldName)} value={field.name} />
                      </React.Fragment>
                    )}
                  </React.Fragment>
                );
              })}
            <input type="submit" onClick={e => handleFormSubmit(e)} value="Submit" />
            <div>
              {mailSent && <div className="sucsess">{successMessage}</div>}
              {error && <div className="error">{errorMessage}</div>}
            </div>
          </form>
        </div>
        </div>
      </div>
      <Footer/>
      </>
    );


}

export default Contacto;

Contacto.propTypes = {
  config: PropTypes.object.isRequired
};








/*class Contacto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
    handleSubmit(e) {
        e.preventDefault();
  fetch('http://localhost:3002/send', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(
    (response) => (response.json())
      ).then((response)=> {
    if (response.status === 'success') {
      alert("Message Sent.");
      this.resetForm()
    } else if(response.status === 'fail') {
      alert("Message failed to send.")
    }
  })
    }
    resetForm(){
        this.setState({name: '', email: '', message: ''})
      }


    render() {
      return(
        <>
        <NavBar/>
        <div class="form-description">
          <h3>Contacto</h3>
          <h2 class="subtitles">¡Escribirnos!</h2>
          <p class="contactDescription">Una pregunta o solicitud sobre los Retreats que ofrecemos...
          </p>
        </div>
        <div className="App">
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <Footer/>
         </>
      );
    }
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  }
  export default Contacto;
  */



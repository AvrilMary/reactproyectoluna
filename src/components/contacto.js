import React from "react";
import NavBar from "./Nav";
import Footer from "./Footer";

class Contacto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
    render() {
      return(
        <>
        <NavBar/>
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
  }
  export default Contacto;

/*
<>
<NavBar/>
       <div class="form-description">
           <h3>Contacto</h3>
           <h2 class="subtitles">¡Escribirnos!</h2>
               <p class="contactDescription">Una pregunta o solicitud sobre los Retreats que ofrecemos...
               </p>
       </div>


<Footer/>
</>
*/

import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

//stateless se escribe como función

class Login extends Component {
    constructor(props){
      super(props);
      console.log(props)
      this.state={
        modal: false,
        
     }
    }
  
    toggle=()=> {
      this.setState({
        modal: !this.state.modal
      });
    }

    render(){
        return(
          <section>
            <form center className="col-md-8 col-s-4 form-align"  >
            <FormGroup >
              <Label for="exampleEmail" hidden>Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={this.props.handleChange}  />
            </FormGroup>
        
            <FormGroup>
              <Label for="examplePassword" hidden>Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={this.props.handleChange}/>
            </FormGroup>
        
            <Button onClick={this.props.login} size="lg">Iniciar Sesión</Button>
            <div>
              <Badge className="badge-link" href="#" onClick={this.toggle} color="white">Olvidé la contraseña</Badge>
                <Modal isOpen={this.state.modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Restaurar contraseña</ModalHeader>
                    <ModalBody>
                      <p>Escribe el correo para recibir la restauración de contraseña</p>
                   <Input type="email" name="email" id="EmailRest" placeholder="Email"  />
                    </ModalBody>
                <ModalFooter>
                  <Button color="primary"  onClick={this.props.restaurarPassword} size="lg">Enviar correo</Button>{' '}
                  <Button color="secondary" onClick={this.toggle} size="lg">Cancelar</Button>
                </ModalFooter>
              </Modal>
            </div>
          </form>
          {/* <img src="../../" width='100' alt="hamburger" /> */}
          </section>
        
        )
    }
}

export default Login
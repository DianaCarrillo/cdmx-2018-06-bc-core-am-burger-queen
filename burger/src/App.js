import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';
import BreakfastFood from './components/DesayunoComida/BreakfastFood';
import Login from './components/Login/Login'


class App extends Component {
  constructor(){
    super();
    this.state={
      email: '',
      password:'',
      user:null,
   }
  }

 
  componentWillMount () {
    // devuelve un objeto usuario. Cada vez que nos loggeemos o salgamos, el objeto va a tener el usuario o va a salir null
  firebase.auth().onAuthStateChanged(user =>{
  // modifica el estado. Si la clave y el valor son el mismo, se peude poner solo una vez. Es lo mismo que user: user
    this.setState({ user});
   })
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value});
  }

  login = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      console.log(`el usuario ${u} ha iniciado sesión`)
    })
      .catch((error) => {
    alert(error);
  })
}

    handleLogout = ()=> {
      firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log (`Error ${error.code}: ${error.message}`))
    }

  restaurarPassword = () =>{
  firebase.auth().sendPasswordResetEmail(this.state.email) 
  .then(()=>alert('se ha enviado el correo'))
  .catch(function(error) {
    // Error occurred. Inspect errr.code.
    console.log(error)
  });
  }

    renderLoginButton = () => {
      //  preguntamos si el usuario está logueado; es distino de null:
      if (this.state.user){
        return (
        <div className="container">
         <BreakfastFood logout={this.handleLogout}/>
        </div>
          )
        }else{
          return(
            <Login  handleChange={this.handleChange} login={this.login} restaurarPassword={this.restaurarPassword} state={this.state.user}/>  
            )
           }
         }
        
          render() {
            return (
              <div className="App">
               <header className="App-header">
                    <p>
                      Burger Queen
                     </p>
                </header>
                <div className="App-intro">{ this.renderLoginButton() }</div>
              </div>
            );
          }
         } 


export default App;

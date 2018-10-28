import {Button, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import React, { Component } from 'react';
import Comprueba from '../Comprueba'
import Menu from '../../data/menu.json'
import Meals from '../Meals/Meals'

class breakfastfood extends Component{
    constructor(props) {
        super(props);
        this.state ={
         meal : []
        }
    }

    desayunobtn= () => {
        const newArray = []
        console.log(newArray)
        const desayuno = Menu.desayuno
        for (let i in desayuno){
            const precio = (desayuno[i]);
            const newObject ={
                [i]: precio
            }
            newArray.push(newObject)
        }
        this.setState({meal:newArray})
    }

    almuerzobtn = () => {
        const newArray = []
        // console.log(newArray)
        const comida = Menu.almuerzo
        for (let i in comida){
            const precio = (comida[i]);
            const newObject ={
                [i]: precio
            }
            newArray.push(newObject)
        }
        this.setState({meal:newArray})
    }


    // tengo que hacer que el click de desayuno renderize los botones con la data correspondiente y también el almuerzo y cena
render(){
    return(
        <div>
        <InputGroup>
          <Input className="col-s-6 col-md-6" placeholder="Nombre del cliente" />
          <InputGroupAddon><i class="fas fa-check check"></i></InputGroupAddon>
        </InputGroup>
        <div >
            <Button color="primary" onClick={this.desayunobtn} className="almuerzo-desayuno-btn" size="lg">Desayuno</Button>
            <Button color="secondary" onClick={this.almuerzobtn} className="almuerzo-desayuno-btn" size="lg">Almuerzo y cena</Button>
        </div>
           
            <Meals meal={this.state.meal} />
            <Button color="secondary" className="logout-btn" onClick={this.props.logout} size="lg">Cerrar sesión</Button>
        </div>
        )
    }

}

export default breakfastfood;
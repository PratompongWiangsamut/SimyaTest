import React, { Component } from 'react';
import { Card} from "react-bootstrap";
import Input from "../InputUser/InputUser"

  

export default class Homes extends Component {
   
    
  
    render() {
     
    
    return (
    
    <div>
        <header>
        <Card className="bg-dark text-white" style={{ width: '110rem',height:'5rem', top:'1rem',left:'5rem'}}>
            <Card.Body>
            <Card.Text>
            <h1 class="text-center"  >Simya Test</h1>
            </Card.Text>
            </Card.Body>
        </Card>
        </header>
        <Input/>
    </div>
        
    );
  }
  }
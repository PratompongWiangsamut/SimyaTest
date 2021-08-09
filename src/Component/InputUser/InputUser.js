import React, { Component } from "react";
import { Card,Form,Row,Col,Button,Table } from "react-bootstrap";
import Data from "../../leaderboard.json";
export default class Input extends Component {
    state = {
        uId: null,
        bananaList:[],
        errors: {},
        status: 0
        
      }


      handleSubmit = (e) => {
        e.preventDefault()
        console.log((this.state.uId!==null))
        if(this.validate()){
          var UserBanana=[]
          for (const [key, value] of Object.entries(Data)) {
            UserBanana.push(value);
            
          }
          UserBanana.sort((a, b) => a.bananas < b.bananas ? 1 : -1)
          var storeU=[]
          if(this.state.uId!==null){
            for(var i =0;i<UserBanana.length;i++){
                if(UserBanana[i].uid==this.state.uId){
                  var saveU={
                      uid: UserBanana[i].uid,
                      name: UserBanana[i].name,
                      rank: i+1,
                      bananas: UserBanana[i].bananas,
                      currentU: true
                   }
                   storeU.push(saveU);
                }else{
                  var saveU={
                      uid: UserBanana[i].uid,
                      name: UserBanana[i].name,
                      rank: i+1,
                      bananas: UserBanana[i].bananas,
                      currentU: false
                   }
                   storeU.push(saveU);
  
                }
              
            }
          }else{
            for(var j =0;j<UserBanana.length;j++){
                var saveU={
                    uid: UserBanana[j].uid,
                    name: UserBanana[j].name,
                    rank: j+1,
                    bananas: UserBanana[j].bananas,
                    currentU: false
                 }
                 storeU.push(saveU);
              
            }
          }
          

          
          
        var topbanana=[]
         topbanana=storeU.slice(0, 10)
         console.log("topb: ",topbanana);
         var userId = this.state.uId;
         console.log('userID: ',userId)
         console.log('odduserID: ',topbanana[0].uid)
         if(this.state.uId!==null&&!topbanana.some((val)=>val.uid==this.state.uId)){
           console.log('val.uid',!topbanana.some((val)=>val.uid==this.state.uId))
           if(storeU.some((check)=>check.uid==this.state.uId)){

             topbanana[9]= storeU.find((val)=>val.uid==this.state.uId);
           }else{
            alert('UserID is not in list!');
           }
         }
         console.log("top: ",topbanana);
        this.setState({bananaList:topbanana})

         this.setState({status:1});
         
        }
        

        
      }

      validate(){
        let uid = this.state.uId;
        let errors;
        let isValid = true;

        if (!uid) {
          isValid = false;
          errors= "Current user id does not exist! Please specify an existing user id!";
          alert('Current user id does not exist! Please specify an existing user id!');
        }
        this.setState({
          errors: errors
        });
    
        return isValid;
      }





      uid = (e) => {
        this.setState({ uId: e.target.value })
        
      }
      
  
  render() {
 
   
    
     
    console.log("pre-data: ",this.state.bananaList)

    return (
      <Card
        className="bg-light text-black"
        style={{ width: "110rem", top: "1rem", left: "5rem" }}
      >
        <Card.Body>
          <Card.Text>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Control type="text" placeholder="User Id" onChange={this.uid}/>
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2"onClick={this.handleSubmit} >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
          
            <div className="App">
              <div className="posts">
                  
              
                
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Rank</th>
                        <th>Number of bananas</th>
                        <th>isCurrentUser?</th>
                        </tr>
                    </thead>
                    {this.state.bananaList.map((item)=>{
                    var cur;
                    if(item.currentU==false){
                      cur = 'no';
                    }else if(item.currentU==true){
                      cur = 'yes';
                    }
                    return (
                        <tbody>
                        <tr>
                        <td>{item.name}</td>
                        <td>{item.rank}</td>
                        <td>{item.bananas}</td>
                        <td>{cur}</td>
                        </tr>
                      
                    </tbody>
                    )
                }
                )}
                    
                </Table>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

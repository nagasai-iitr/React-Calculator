import React, { Component } from 'react';
import './Style.css'


const calc_style={
   align:'center',
   
}


class Button extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button value={this.props.symbol}  onClick={this.props.func}>{this.props.symbol}</button>
        )
    }
}
class Input extends React.Component{
    constructor(props){
        super(props);
       
       }
    render(){
        return(
            <input type="text" value={this.props.text} className="input" />
        );
    };
};

class Info extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
        return(
            <div className="info">
            <p>First Number: {this.props.num1}</p>
            <p>Operation: {this.props.operation}</p>
            <p>Second Number:{this.props.num2}</p>
            <h3>Answer: {this.props.answer}</h3>
            </div>
        )
    }
}


class Button_Set extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.refresh=this.refresh.bind(this);
        this.state={
            text:null,
            numa:null,
            numb:null,
            sym:null,
            flag:0,
            ans:null,
           
        }
    }
    
    handleClick(event){
        let val=event.target.value;
        let syb_bool=false
        let equal_bool=false
        if((val==='+' || val==='-' || val==="*" || val==='/')){
            syb_bool=true
        }
        if(val==='='){
            equal_bool=true
        }
        if(this.state.text===null && !syb_bool && !equal_bool){
            this.setState({
                text: val,
            })
        }
 else if(((this.state.flag==0 && !equal_bool && this.state.text!=null) ||(this.state.flag==1 && !syb_bool&& !equal_bool)  && this.state.ans===null)){
            this.setState({
                text:this.state.text+val,
            })
        }
        if(syb_bool && this.state.flag===0&& this.state.numa!==null){
            this.setState({
                sym:val,
                flag:this.state.flag+1,
               
            })
        }
        if(this.state.flag===0 && !syb_bool && !equal_bool){
            if(this.state.numa===null){
                this.setState({
                    numa:val
                })
                
            }
           else{
               this.setState({
                   numa:this.state.numa+val
               })
           } 
        }
        if(this.state.flag==1 && !syb_bool && !equal_bool && this.state.ans===null){
            if(this.state.numb===null){
                this.setState({
                    numb:val
                })
                
            }
            
            else{
                this.setState({
                    numb:this.state.numb+val
                })
            } 
            console.log(this.state.numb)
        }

        if(equal_bool&& this.state.numb!==null){
            if(this.state.sym==='+'){
                this.setState({
                    text:parseInt(this.state.numa)+parseInt(this.state.numb),
                    ans:parseInt(this.state.numa)+parseInt(this.state.numb),
                })
            }

            if(this.state.sym==='-'){
                this.setState({
                    text:parseInt(this.state.numa)-parseInt(this.state.numb),
                    ans:parseInt(this.state.numa)-parseInt(this.state.numb),
                })
            }

            if(this.state.sym==='*'){
                this.setState({
                    text:parseInt(this.state.numa)*parseInt(this.state.numb),
                    ans:parseInt(this.state.numa)*parseInt(this.state.numb),
                })
            }

            if(this.state.sym==='/'){
                if(parseInt(this.state.numb)!=0){
                this.setState({
                    text:(parseInt(this.state.numa)/parseInt(this.state.numb)).toFixed(2),
                    ans:(parseInt(this.state.numa)/parseInt(this.state.numb)).toFixed(2),
                })
            }
            else{
                this.setState({
                    text:"Undefined",
                    ans:"Undefined",
                }) 
            }
            }
           // console.log(numb)
        }
     }
     refresh(){
         window.location.reload();
     }

     
     
    render(){
        
        return(
            <div style={calc_style} id="main">
            <div id="buttons_set">
            <h1>React Calculator </h1>
         <Button symbol="1" func={this.handleClick}/>
         <Button symbol="2" func={this.handleClick}/>
         <Button symbol="3" func={this.handleClick}/><br />
         <Button symbol="4" func={this.handleClick}/>
         <Button symbol="5" func={this.handleClick} />
         <Button symbol="6" func={this.handleClick}/><br />
         <Button symbol="7" func={this.handleClick}/>
         <Button symbol="8" func={this.handleClick}/>
         <Button symbol="9" func={this.handleClick}/><br />
         <Button symbol="0" func={this.handleClick}/>
         <Button symbol="+" func={this.handleClick}/>
         <Button symbol="-" func={this.handleClick}/><br />
         <Button symbol="*" func={this.handleClick}/>
         <Button symbol="/" func={this.handleClick}/>
         <Button symbol="=" func={this.handleClick}/><br/>
         <Button symbol="AC" func={this.refresh} /><br />
         <Input text={this.state.text}/><br/>
         </div>
    <Info num1={this.state.numa} num2={this.state.numb} operation={this.state.sym} answer={this.state.ans}/>
    <div id="ac">{this.state.ans!==null && <p>Press AC to continue</p>}</div>
        </div>
        )
    }
}

class Calculator extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Button_Set />
        )
    }
}
export default Calculator













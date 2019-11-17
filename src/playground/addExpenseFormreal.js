import React from 'react';
import {connect} from 'react-redux';
import {addexpense} from '../actions/expenses';
import addpage from './addpage';
import moment from 'moment';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import editpage from './editpage';

//const date = new Date();

const now= moment();

console.log(now.format('MMM Do, YYYY'));



class AddExpenseForm extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            description:props.expense?props.expense.description:'',
        amount:props.expense? (props.expense.amount/100).toString():'',
        note:props.expense?props.expense.note:'',
        createAt:props.expense? moment(props.expense.createAt): moment(),
        haveExpense: props.expense? true:false,
        expensesdesc: props.expensesdesc,
        expensesnote: props.expensesnote,
        thenotes: props.thenotes,
        thedesc:props.thedesc,
        exobject: props.exobject,
     calenderFocused: false,
    error:undefined};


    }

onDescChange= (e)=> {

const description= e.target.value;

this.setState(()=>({description:description}))
};

onAmountChange= (e)=> {

    const amount= e.target.value;

    const regx= /^([0-9]+(\.?[0-9]?[0-9]?)?)/g; 

    const regx2= /^\d{1,}(\.\d{0,2})?$/;

    if (!amount||amount.match(regx2)){
    
    this.setState(()=>({amount}))
    };

}

    onNoteChange= (e)=> {

        const note= e.target.value;
        
        this.setState(()=>({note}))
        };

    onDateChange=(chosenDate)=> {
if(chosenDate){
this.setState(()=> {return {createAt:chosenDate}})}
    }

    onFocusChange=({focused})=> {
this.setState(()=>({calenderFocused:focused}))

    }
/*insert()=> {

if (e.target.value==state.description)


}*/
onSubmit= (e)=>{
e.preventDefault();

/*if (this.props.expensesdesc.indexOf(this.state.description)>-1) {

    this.setState(()=>({error:"already exits"}))
    

}*/

/*if (!this.state.description||!this.state.amount) {

this.setState(()=>({error:"Please enter Amount or Description"}))

} */

if (this.state.haveExpense)

 {

    if (!this.state.description||!this.state.amount) {

        this.setState(()=>({error:"Please enter Amount or Description"}))
        
        }  else { if (this.state.thedesc.indexOf(this.state.description)&&this.state.thenotes.indexOf(this.state.note)>-1) {

            this.setState(()=>({error:"already exits"}))
            
        
        } else{this.setState(()=>({error:undefined}))

        this.props.onSubmit( 
            { description: this.state.description,
                amount: parseFloat(this.state.amount,10)*100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
    
    
            }
        
        )
    
        console.log("submitted", this.state.haveExpense.id)}}
            
            
            
            

    
    
} else { if (!this.state.description||!this.state.amount) {

    this.setState(()=>({error:"Please enter Amount or Description"}))
    
    } else { if (this.state.expensesdesc.indexOf(this.state.description)&&this.state.expensesnote.indexOf(this.state.note)>-1) {

        this.setState(()=>({error:"already exits"}))
        
    
    } else {
    
        this.setState(()=>({error:undefined}))
    
        this.props.onSubmit( 
            { description: this.state.description,
                amount: parseFloat(this.state.amount,10)*100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
    
    
            }
        
        )
    
        console.log("submitted", this.state.expensesnote)
    
    }
    }
    
    
    
    
   

}

};


render() {
return (
<div>
{this.state.error&& <p>{this.state.error}</p>}
<h1>Add expense</h1>


<form onSubmit= {this.onSubmit}>
<input type='text'
placeholder= 'Description'
autoFocus
value= {this.state.description}
onChange= {this.onDescChange}/>

<input type='text'
placeholder= 'Amount'

value= {this.state.amount}
onChange= {this.onAmountChange}
/>

<textarea
type='text'
placeholder= 'Add note (Optional)'
autoFocus
value= {this.state.note}
onChange= {this.onNoteChange}
>
</textarea>

<SingleDatePicker
date= {this.state.createAt}
onDateChange= {this.onDateChange}
focused= {this.state.calenderFocused}
onFocusChange= {this.onFocusChange}
numberOfMonths={1}
isOutsideRange= {()=>false}
showClearDate= {true}
/>

<button >Add Expense</button>


</form>


</div>



)
}



}

export default AddExpenseForm;



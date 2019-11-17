import React from 'react';
import {connect} from 'react-redux';
import {settextfilter} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import {sortbydate, sortbyamount, setstartdate, setpersonfilter, setenddate} from '../actions/filters';



class ExpenseListFilters extends React.Component {
state={ 
focusedInput: null,
peter:false,
gabriella:false,
sienna: false


};

onDatesChange= ({startDate,endDate})=> {

    this.props.dispatch(setstartdate(startDate));
    this.props.dispatch(setenddate(endDate));

}


onFocusChange= (focusedInput)=> {

    this.setState(()=>({focusedInput}))

}

onCheckChange= (e)=> {

 const identify= e.target.name



 

 

  
   
   if ((identify==="peter")||(identify==="sienna")){

    this.setState((prevState)=>({peter:!prevState.peter}))

   if (this.state.peter===false) {
    this.props.dispatch(setpersonfilter(identify))

    } else {

      this.props.dispatch(setpersonfilter(""))
    }
  }
   

  
 
/* if (identify==="gabriella") {

    

   

      this.setState((prevState)=> ({gabriella:!prevState.gabriella}))

      if (this.state.gabriella===false) {

    this.props.dispatch(setpersonfilter(identify)) } else {

        
  this.props.dispatch(setpersonfilter(""))
}

    }
  

   if (identify==="sienna") {

   

    

      this.setState((prevState)=> ({sienna:!prevState.sienna}))
      if (this.state.sienna===false) {

    this.props.dispatch(setpersonfilter(identify)) } else {

     
  this.props.dispatch(setpersonfilter(""))


    }
  }
     */
  
}

   render(){ 
return (<div>

<input type="text" value={this.props.filters.text} onChange= {(e)=>{

    this.props.dispatch(settextfilter(e.target.value))
}}/>
<select value={this.props.filters.sortby}
onChange= {(e)=>{
if (e.target.value=='amount') {
   this.props.dispatch(sortbyamount());
} else if (e.target.value=='date') {
    this.props.dispatch(sortbydate()); 
}


} }
>

<option value='amount'>Amount</option>
<option value='date'>Date</option>

</select>

<DateRangePicker
  startDate={this.props.filters.startdate} // momentPropTypes.momentObj or null,
  startDateId= "start"
  endDate={this.props.filters.enddate} 
  endDateId= "end"
  onDatesChange={this.onDatesChange}
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={this.onFocusChange}
  numberOfMonths={1}
isOutsideRange= {()=>false}
showClearDates= {true}
/>

<div>
<input type="checkbox" name="peter"  id="peter" checked={this.state.peter} onChange= {this.onCheckChange}/>
<label htmlFor="peter">Peter</label>
<input type="checkbox" name="gabriella"  id="gabriella" checked={this.state.gabriella} onChange= {this.onCheckChange}/>
<label htmlFor="gabriella">Gabriella</label>
<input type="checkbox" name="sienna"  id="sienna" checked={this.state.sienna} onChange= {this.onCheckChange}/>
<label htmlFor="sienna">Sienna</label>
</div>

</div>


)}


}

const mapStateToProps = (state)=> {

return {filters: state.filters }

}

export default connect(mapStateToProps)(ExpenseListFilters);
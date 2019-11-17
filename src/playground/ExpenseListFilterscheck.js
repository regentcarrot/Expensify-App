import React from 'react';
import {connect} from 'react-redux';
import {settextfilter} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import {sortbydate, sortbyamount, setstartdate, setenddate} from '../actions/filters';



class ExpenseListFilters extends React.Component {
state={ 
focusedInput: null,
bill:false,
rent:false,
waterbill: false


};

onDatesChange= ({startDate,endDate})=> {

    this.props.dispatch(setstartdate(startDate));
    this.props.dispatch(setenddate(endDate));

}


onFocusChange= (focusedInput)=> {

    this.setState(()=>({focusedInput}))

}

onCheckChange= (e)=> {

   

  const identify= e.target.name;

  if (identify==="bill") {

    this.setState((prevState)=> ({bill:!prevState.bill}))

    if (this.state.bill===false) {

    this.props.dispatch(settextfilter("bill")) } else {

        this.props.dispatch(settextfilter(""))

    }
  }
    
     
  
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
<input type="checkbox" name="bill" id="bill" checked={this.state.bill} onChange= {this.onCheckChange}/>
<label htmlFor="bill">Bill</label>
<input type="checkbox" name="rent" id="rent" checked={this.state.rent} onChange= {this.onCheckChange}/>
<label htmlFor="rent">Rent</label>
<input type="checkbox" name="waterbill" id="waterbill" checked={this.state.waterbill} onChange= {this.onCheckChange}/>
<label htmlFor="waterbill">Waterbill</label>
</div>

</div>


)}


}

const mapStateToProps = (state)=> {

return {filters: state.filters }

}

export default connect(mapStateToProps)(ExpenseListFilters);
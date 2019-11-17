import React from 'react';
import {connect} from 'react-redux';
import {settextfilter} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import {checkexpense} from '../actions/expenses';
import {uncheckexpense} from '../actions/expenses';
import {gcheckexpense} from '../actions/expenses'
import {sortbydate, sortbyamount, setstartdate, setpersonfilter, setenddate} from '../actions/filters';



  class ExpenseListFilters extends React.Component {
    state = {
      calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
      this.props.dispatch(setstartdate(startDate));
      this.props.dispatch(setenddate(endDate));
    };
    onFocusChange = (calendarFocused) => {
      this.setState(() => ({ calendarFocused }));
    }
    render() {
      return (
        <div>
          <input
            type="text"
            value={this.props.filters.text}
            onChange={(e) => {
              this.props.dispatch(settextfilter(e.target.value));
            }}
          />
          <select
            value={this.props.filters.sortby}
            onChange={(e) => {
              if (e.target.value === 'date') {
                this.props.dispatch(sortbydate());
              } else if (e.target.value === 'amount') {
                this.props.dispatch(sortbyamount());
              }
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startdate}
            endDate={this.props.filters.enddate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>
      );
    }
  };
  
  const mapStateToProps = (state) => {
    return {
      filters: state.filters
    };
  };
  
  export default connect(mapStateToProps)(ExpenseListFilters);
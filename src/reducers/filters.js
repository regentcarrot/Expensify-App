
import moment from 'moment';


const filterReducerdefault= {text: '',
person: '',
sortby: 'date', //date or amount
startdate: moment().startOf('month'),
enddate: moment().endOf('month')}

const filterReducer = (state=filterReducerdefault, action) => {
switch(action.type) {
case 'SET_TEXT_FILTER':
    return {...state,
        text:action.text};
case 'SET_PERSON_FILTER':
            return {...state, person:action.person};
case 'SORT_BY_AMOUNT':
    return {...state,sortby:'amount'}; 
 case'SORT_BY_DATE':
    return {...state,sortby:'date'};
case 'SET_START_DATE':
    return {...state,startdate:action.start};
    case 'SET_END_DATE':
            return {...state,enddate:action.end};

default:
return state;

}


}

export default filterReducer;
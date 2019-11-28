import moment from 'moment';

export default (expenses, {text, sortby,startdate,enddate})=> {

    return  expenses.filter((expense)=> {
        
    const createdAtMoment= moment(expense.createAt);
  const startdatematch= startdate? startdate.isSameOrBefore(createdAtMoment, 'day'): true;
  const enddatematch= enddate? enddate.isSameOrAfter(createdAtMoment, 'day'): true;
  const textmatch=expense.description.toLowerCase().includes(text.toLowerCase());
  // expense.barber.toLowerCase().includes(person.toLowerCase());
  
  return startdatematch && enddatematch && textmatch;
      }).sort((a,b)=> {
  if (sortby==='date') {
  return a.createAt<b.createAt?1:-1
  } else if (sortby==='amount') {
  
      return a.amount<b.amount?1:-1
  
   
  }
  })
   };
  
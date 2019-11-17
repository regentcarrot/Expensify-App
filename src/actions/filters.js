


export const settextfilter= (text='')=> ({
    type: 'SET_TEXT_FILTER',
    text,
    
    
    })

    //SET BARBER FILTER

export const setpersonfilter= (person='')=> ({
        type: 'SET_PERSON_FILTER',
        person,
        
        
        })
    //SORT BY DATE
export const sortbydate= ()=> ({
        type:'SORT_BY_DATE',
        
    })
    //SORT BY AMOUNT
    
export const sortbyamount= ()=> ({
        type:'SORT_BY_AMOUNT',
       
    })
    //SET START DATE
export const setstartdate= (start)=> ({
    type:'SET_START_DATE',
    start
    })
    //SET END DATE
export const setenddate= (end)=> ({
        type:'SET_END_DATE',
        end,
        })
    
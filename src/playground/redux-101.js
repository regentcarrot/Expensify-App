import {createStore} from 'redux';

//action generators- functions that return action objects;

/*const incrementcount =(payload={})=> ( {
    type:'INCREMENT',
    incrementby: typeof payload.incrementby==='number'? payload.incrementby:1
})*/

const incrementcount =({incrementby=1}= {})=> ( {
    type:'INCREMENT',
    incrementby: incrementby
})

const decrementcount =({decrementby=1}= {})=> ( {
    type:'DECREMENT',
    decrementby: decrementby
})

const resetcount =({reset=0}= {})=> ( {
    type:'RESET',
    reset:reset
    
})

//reducer - are pure functions/ output only determined by the input. 
//never change state or action

const countreducer= (state={count:0}, action)=>{

    switch (action.type) {
        case 'INCREMENT':
                
            return {
            
                count:state.count+action.incrementby
            };
        case 'DECREMENT':
            return {
                count:state.count-action.decrementby
            };

        case 'RESET' :
            return {
               count:action.reset
            }
        case 'SET':
            return {
                count:action.count

            }
        default: 
        return state;


    }

}

const store= createStore(countreducer);

const unsubscribe= store.subscribe(()=>{

    console.log(store.getState())

})



//actions - its an object that gets sent to the store

//increment, decrement, reset
//i would like to increment the count

store.dispatch(incrementcount({incrementby: 5} ));



store.dispatch(incrementcount());



store.dispatch(decrementcount({decrementby:2}));

store.dispatch(decrementcount());




//i would like to reset the count to zero

store.dispatch(resetcount({reset:0}));

store.dispatch({type:'SET',
                count:101 });


import React, { useReducer } from 'react'

type CounterState = {
    counter1: number,
    counter2: number,
}

type UpdateAction = {
    type: 'increment1' | 'increment2' | 'decrement1' | 'decrement2',
    payload: number,
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction


function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case "increment1":
            return { ...state, counter1: state.counter1 + action.payload }
        case "increment2":
            return { ...state, counter2: state.counter2 + action.payload }
        case "decrement1":
            return { ...state, counter1: state.counter1 - action.payload }
        case "decrement2":
            return { ...state, counter2: state.counter2 - action.payload }
        case "reset":
            return initialState
        default:
            return state
    }
}

const initialState = { counter1: 0, counter2: 0 }

function Counter1() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <p>Counter 1: {state.counter1}</p>
                <button onClick={() => { dispatch({ type: 'increment1', payload: 10 }) }}>Increment Counter 1</button>
                <button onClick={() => { dispatch({ type: 'decrement1', payload: 10 }) }}>Decrement Counter 1</button>
            </div>
            <div>
                <p>Counter 2: {state.counter2}</p>
                <button onClick={() => { dispatch({ type: 'increment2', payload: 10 }) }}>Increment Counter 2</button>
                <button onClick={() => { dispatch({ type: 'decrement2', payload: 10 }) }}>Decrement Counter 2</button>
            </div>
            <button onClick={() => { dispatch({ type: 'reset' }) }}>Reset All</button>
        </div>
    )
}

export default Counter1

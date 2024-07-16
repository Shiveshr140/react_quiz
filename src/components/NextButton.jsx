import React from 'react'

// function NextButton({dispatch, answer}) {
// if(answer === null) return 
//   return (
//     <button className='btn btn-ui'
//        onClick={()=>dispatch({type:"nextQuestion"})}>
//         Next
//     </button>
//   )
// }

// export default NextButton



///// For finishing the quiz

function NextButton({dispatch, answer, numQuestions, index}) {
    if(answer === null) return 
    
    if(index < numQuestions -1 ) return (
        <button className='btn btn-ui'
            onClick={()=>dispatch({type:"nextQuestion"})}>
            Next
        </button>
        )
    if(index === numQuestions -1 ) return (
        <button className='btn btn-ui'
            onClick={()=>dispatch({type:"finish"})}>
            Finish
        </button>
        )
    }
    
    export default NextButton
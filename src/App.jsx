import { useEffect, useReducer } from "react"
import Header from "./components/Header"
import Main from "./components/Main2"
import Error from "./components/Error"
import StartScreen from "./components/StartScreen"
import Questions from "./components/Questions"
import Loader from "./components/Loader"
import NextButton from "./components/NextButton"
import Progress from "./components/Progress"
import FinishScreen from "./components/FinishScreen"
import Footer from "./components/Footer"
import Timer from "./components/Timer"

// function App() {
//   return (
//    <div className="app">
//    <Header/>
   
//    <Main>
//       <p>1/15</p>
//       <p>Questions</p>
//    </Main>
   
//    </div>
//   )
// }


//// **************** Loading question from fake-api
//// We will make fake  call from fake api using json-server, npm i json-server
//// first go to package.json and inside the script add this "server": "json-server --watch data/questions.json --port 8000".
//// U can do npm run server and paste the url localhost:8000/questions 
//// to see the console.log(data) both npm run server and npm run dev both should run.

// const initialState = {
//     questions : [],
//     //// "loading", "error", "ready", "active", "finished"
//     status : "loading"
// }
// function reducer(state, action){
//     switch(action.type){
//       case("dataRecieved"):
//         return (
//           {...state, questions:action.payload, status:"ready"}
//         ) 

//       case("dataFailed"):
//         return (
//           {...state, status:"error"}
//         )
      
//       default:
//         throw new Error("Unkown Action")
      
//     }
// } 

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   useEffect(function(){
//     fetch("http://localhost:8000/questions").then((res)=>{
//       res.json()
//       .then((data)=> dispatch({type:"dataRecieved", payload:data}))
//       .catch((err)=> dispatch({type:'dataFailed'}))   //// here no need to pass the action as we do not need in ui, check this by quiting the server u can see the status in component changed to error
//     })

//   },[])
//   return (
//    <div className="app">
//    <Header/>
   
//    <Main>
//       <p>1/15</p>
//       <p>Questions</p>
//    </Main>
   
//    </div>
//   )
// }


// export default App




////************************* handling loading error, and ready status && starting the quize
//// we will show diffent ui for different status

// const initialState = {
//   questions : [],
//   status : "loading",
// }
// function reducer(state, action){
//   switch(action.type){
//     case "dataRecieved":
//       return (
//         {...state, questions:action.payload, status:"ready"}
//       ) 

//     case "dataFailed":
//       return (
//         {...state, status:"error"}
//       )

//     case "start":
//       return {...state, status:"active"}
    
//     default:
//       throw new Error("Unkown Action")
    
//   }
// } 

// function App() {
// const [state, dispatch] = useReducer(reducer, initialState)

// const {questions, status} = state;
// const numQuestions = questions.length;

// useEffect(function(){
//   fetch("http://localhost:8000/questions").then((res)=>{res.json()
//     .then((data)=> dispatch({type:"dataRecieved", payload:data}))
//     .catch((err)=> dispatch({type:'dataFailed'}))     
//   })

// },[])
// return (
//  <div className="app">
//  <Header/>
 
//  <Main>
//     {status === "loading" && <Loader />}
//     {status === "error" && <Error />}
//     {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
//     {status === "active" && <Questions />}
//  </Main>
 
//  </div>
// )
// }


// export default App;




////************************* Displaying Questions && handling answers
//// for that we know the current question to keep track of it we need a new state(index)
//// another state for answer i.e option selected by user bcs that is also gonna update the screen

// const initialState = {
//   questions : [],
//   status : "loading",
//   index: 0,
//   answer: null,
//   points: 0
// }
// function reducer(state, action){
//   switch(action.type){
//     case "dataRecieved":
//       return (
//         {...state, questions:action.payload, status:"ready"}
//       ) 

//     case "dataFailed":
//       return (
//         {...state, status:"error"}
//       )

//     case "start":
//       return {...state, status:"active"}

//     case "newAnswer":
//       const question = state.questions.at(state.index)
//       return {
//         ...state, answer:action.payload, 
//         points: action.payload === question.correctOption ? state.points + question.points : state.points
//       }
    
//     default:
//       throw new Error("Unkown Action")
    
//   }
// } 

// function App() {
// const [state, dispatch] = useReducer(reducer, initialState)

// const {questions, status, index, answer, points} = state;
// const numQuestions = questions.length;

// useEffect(function(){
//   fetch("http://localhost:8000/questions").then((res)=>{res.json()
//     .then((data)=> dispatch({type:"dataRecieved", payload:data}))
//     .catch((err)=> dispatch({type:'dataFailed'}))     
//   })

// },[])
// return (
//  <div className="app">
//  <Header/>
 
//  <Main>
//     {status === "loading" && <Loader />}
//     {status === "error" && <Error />}
//     {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
//     {status === "active" && <Questions question = {questions[index]} dispatch={dispatch} answer={answer} />}
//  </Main>
 
//  </div>
// )
// }


// export default App;



/////*********************************** Moving to next question &&& displaying the progress

// const initialState = {
//   questions : [],
//   status : "loading",
//   index: 0,
//   answer: null,
//   points: 0
// }
// function reducer(state, action){
//   switch(action.type){
//     case "dataRecieved":
//       return (
//         {...state, questions:action.payload, status:"ready"}
//       ) 

//     case "dataFailed":
//       return (
//         {...state, status:"error"}
//       )

//     case "start":
//       return {...state, status:"active"}

//     case "newAnswer":
//       const question = state.questions.at(state.index)
//       return {
//         ...state, answer:action.payload, 
//         points: action.payload === question.correctOption ? state.points + question.points : state.points
//       }

//     case "nextQuestion":
//       return {
//         ...state, index: state.index+1, answer: null
//       }
    
//     default:
//       throw new Error("Unkown Action")
    
//   }
// } 

// function App() {
// const [state, dispatch] = useReducer(reducer, initialState)

// const {questions, status, index, answer, points} = state;
// const numQuestions = questions.length;
// const maxPossiblePoints = questions.reduce((prev, curr)=>{
//        return prev + curr.points
// },0)
// console.log(maxPossiblePoints)

// useEffect(function(){
//   fetch("http://localhost:8000/questions").then((res)=>{res.json()
//     .then((data)=> dispatch({type:"dataRecieved", payload:data}))
//     .catch((err)=> dispatch({type:'dataFailed'}))     
//   })

// },[])
// return (
//  <div className="app">
//  <Header/>
 
//  <Main>
//     {status === "loading" && <Loader />}
//     {status === "error" && <Error />}
//     {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
//     {status === "active" && (
//     <>
//       <Progress index={index} numQuestions={numQuestions} points={points} 
//                 maxPossiblePoints={maxPossiblePoints} answer={answer} />
//       <Questions question = {questions[index]} dispatch={dispatch} answer={answer} />
//       <NextButton  dispatch={dispatch} answer={answer}  />
//     </>
//     )}
//  </Main>
 
//  </div>
// )
// }


// export default App;




////****************************** Finishing the quize &&&& Restart the quiz

// const initialState = {
//   questions : [],
//   status : "loading",
//   index: 0,
//   answer: null,
//   points: 0,
//   highScore: 0,
// }
// function reducer(state, action){
//   switch(action.type){
//     case "dataRecieved":
//       return (
//         {...state, questions:action.payload, status:"ready"}
//       ) 

//     case "dataFailed":
//       return (
//         {...state, status:"error"}
//       )

//     case "start":
//       return {...state, status:"active"}

//     case "newAnswer":
//       const question = state.questions.at(state.index)
//       return {
//         ...state, answer:action.payload, 
//         points: action.payload === question.correctOption ? state.points + question.points : state.points
//       }

//     case "nextQuestion":
//       return {
//         ...state, index: state.index+1, answer: null
//       }

//     case "finish":
//       return {
//         ...state, status:"finished", highScore: state.points > state.highScore ? state.points : state.highScore
//       }

//     case "restart":
//       return {...initialState, questions: state.questions, status:"ready"}
    
//     default:
//       throw new Error("Unkown Action")
    
//   }
// } 

// function App() {
// const [state, dispatch] = useReducer(reducer, initialState)

// const {questions, status, index, answer, points, highScore} = state;
// const numQuestions = questions.length;
// const maxPossiblePoints = questions.reduce((prev, curr)=>{
//        return prev + curr.points
// },0)
// console.log(maxPossiblePoints)

// useEffect(function(){
//   fetch("http://localhost:8000/questions").then((res)=>{res.json()
//     .then((data)=> dispatch({type:"dataRecieved", payload:data}))
//     .catch((err)=> dispatch({type:'dataFailed'}))     
//   })

// },[])
// return (
//  <div className="app">
//  <Header/>
 
//  <Main>
//     {status === "loading" && <Loader />}
//     {status === "error" && <Error />}
//     {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
//     {status === "active" && (
//     <>
//       <Progress index={index} numQuestions={numQuestions} points={points} 
//                 maxPossiblePoints={maxPossiblePoints} answer={answer} />
//       <Questions question = {questions[index]} dispatch={dispatch} answer={answer} />
//       <NextButton  dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}  />
//     </>
//     )}
//     {status === "finished" && <FinishScreen maxPossiblePoints={maxPossiblePoints} 
//                                points={points} highScore={highScore} dispatch={dispatch}/>  } 
//  </Main>
 
//  </div>
// )
// }


// export default App;




/////*************************************** Setting up the timmer with useEffect

const SECS_PER_QUES = 30;


const initialState = {
  questions : [],
  status : "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
}

function reducer(state, action){
  switch(action.type){
    case "dataRecieved":
      return (
        {...state, questions:action.payload, status:"ready"}
      ) 

    case "dataFailed":
      return (
        {...state, status:"error"}
      )

    case "start":
      return {...state, status:"active", secondsRemaining: state.questions.length * SECS_PER_QUES}

    case "newAnswer":
      const question = state.questions.at(state.index)
      return {
        ...state, answer:action.payload, 
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      }

    case "nextQuestion":
      return {
        ...state, index: state.index+1, answer: null
      }

    case "finish":
      return {
        ...state, status:"finished", highScore: state.points > state.highScore ? state.points : state.highScore
      }

    case "restart":
      return {...initialState, questions: state.questions, status:"ready"}

    case "tick":
      return {...state, secondsRemaining: state.secondsRemaining-1,
              status: state.secondsRemaining ===0 ? "finished": state.status
      }
    
    default:
      throw new Error("Unkown Action")
    
  }
} 

function App() {
const [state, dispatch] = useReducer(reducer, initialState)

const {questions, status, index, answer, points, highScore, secondsRemaining} = state;
const numQuestions = questions.length;
const maxPossiblePoints = questions.reduce((prev, curr)=>{
       return prev + curr.points
},0)

useEffect(function(){
  fetch(`https://localhost:8000/questions`).then((res)=>{res.json()
    .then((data)=> dispatch({type:"dataRecieved", payload:data}))
    .catch((err)=> dispatch({type:'dataFailed'}))     
  })

},[])

return (
 <div className="app">
 <Header/>
 <Main>
    {status === "loading" && <Loader />}
    {status === "error" && <Error />}
    {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
    {status === "active" && (
    <>
      <Progress index={index} numQuestions={numQuestions} points={points} 
                maxPossiblePoints={maxPossiblePoints} answer={answer} />
      <Questions question = {questions[index]} dispatch={dispatch} answer={answer} />
      <Footer>
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} /> 
        <NextButton  dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}  />
      </Footer>

    </>
    )}
    {status === "finished" && <FinishScreen maxPossiblePoints={maxPossiblePoints} 
                               points={points} highScore={highScore} dispatch={dispatch}/>  } 
 </Main>
 
 </div>
)
}


export default App;
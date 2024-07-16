import React, {useEffect} from 'react'

//// One thing u will notice after the timer component is unmount setInterval is stil running and when we restart then it goes fast bsc each time we start the quiz new timer is added 
//// so we need clean up function.

// So all the components will re-render every single second. So let's just quickly review what we learned before and that is that as one component re-renders
// all its child components will re-render as well. So our state lives here in this global app component(as all states in app) and so therefore as our state re-renders
// so will re-render all of these child components. And so this could become a performance issue in a really large application
// with like a thousand components. So in that case, you probably shouldn't have your most parent component re-rendering every single second.
// But in this case, this is really not a problem.


function Timer({dispatch, secondsRemaining}) {
 
 const mins = Math.floor(secondsRemaining/60)
 const secs = secondsRemaining%60 
 
 useEffect(function(){
    const id = setInterval(function(){
        dispatch({type:'tick'})
    },1000)

    return ()=> clearInterval(id)

    },[dispatch])

 return (
    <div className='timer'>{mins<10 && "0"}{mins}:{secs<10 && "0"}{secs}</div>
  )
}

export default Timer;
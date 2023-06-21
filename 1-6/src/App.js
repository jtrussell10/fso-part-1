import { useState } from 'react'

const TheButton = ({label, review, setter}) => {
  return (
  <button onClick={() => setter(review+1)}>{label}</button>)
}

const StatisticsLine = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good+neutral+bad === 0) {
    return (
    <div>
      No feedback given
    </div>)
  }
  return(
    <table>
      <tbody>
    <StatisticsLine text = "Good" value = {good} />
    <StatisticsLine text = "Neutral" value = {neutral} />
    <StatisticsLine text = "Bad" value = {bad} />
    <StatisticsLine text = "All" value = {good + neutral + bad} />
    <StatisticsLine text = "Average" value = {(good-bad) / (good+neutral+bad)} />
    <StatisticsLine text = "Positive" value = {good / (good+neutral+bad) * 100 + "%"} />
      </tbody>
    </table>
  )
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  


  return (
    <div>
      <h2> Give Feedback</h2>
      <TheButton label = "Good" review = {good} setter= {setGood}/>
      <TheButton label = "Neutral" review = {neutral} setter= {setNeutral}/>
      <TheButton label = "Bad" review = {bad} setter= {setBad}/>
      <h2>Statistics</h2>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App
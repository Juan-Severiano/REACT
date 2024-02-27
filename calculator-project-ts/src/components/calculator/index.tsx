import { useState } from 'react'
import './calculator.css'

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [pendingOperator, setPendindOperator] = useState(null);
  const [pendingValue, setPendingValue] = useState(null);
  const [completeOperator, setCompleteOperator] = useState('');


  const keyPadNumber = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const operations = ['+', '-', '*', '/'];

  const handleClick = val => {
    setCurrentValue(prevValue => {
      prevValue === '0' ? val : prevValue + val
    });
    setCompleteOperator(prevOperator => {
      
    })
  }

  return (
    <div>
      
    </div>
  )
}

export default Calculator

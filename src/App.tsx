import { useState } from 'react'
import * as S from './styles'

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <S.Pix>
      <h1>Pix</h1>
      <span>{counter} <button type='button' onClick={() => setCounter((prev) => prev + 1)}>+1</button></span>
    </S.Pix>
  )
}

export default App

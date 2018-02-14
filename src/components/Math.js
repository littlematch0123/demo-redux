// components/Math.js
import React from 'react'
const Math = ({
  num,
  isShow,
  fetchMessage,
  onSetNumClick,
  onAddOneClick,
  onAddTwoClick,
  onSqureClick
}) => (
  <section>
    <p>{num}</p>
    <input type="button" onClick={onSetNumClick} value="设置Num" />
    <input type="button" onClick={onAddOneClick} value="+1" />
    <input type="button" onClick={onAddTwoClick} value="+2" />
    <input type="button" onClick={onSqureClick} value="乘方" />
    {isShow && <p>{fetchMessage}</p>}
  </section>
)

export default Math



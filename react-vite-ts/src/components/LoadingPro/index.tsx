import React, { useState } from 'react'
import Loading from '../Loading'
import './loadingPro.scss'
function loadingPro() {
  const [count, setCount] = useState(0)

  return (
    <div className="box">
      <div className="loading">
        <img src="http://a.top4top.net/p_1990j031.gif" alt="Loading" />
        <div className="mouse original">
          <Loading />
        </div>
      </div>
    </div>
  )
}

export default loadingPro

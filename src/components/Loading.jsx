import React from 'react'
import loadingImg from '../loadingImg.svg';
import '../styles/Loading.scss';

function Loading() {
  return (
    <div className='loading-wrapper'>
        <img src={loadingImg} alt="" />
        <p>Loading...</p>
    </div>
  )
}

export default Loading
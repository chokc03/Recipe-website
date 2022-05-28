/*
  Writer : Kyungchan Cho
  This component has a loading img 
  Fisrt written Date : 2021.12.29
  Updated Date : 2022.05.23
*/

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
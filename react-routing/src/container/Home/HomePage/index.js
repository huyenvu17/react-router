import React, { useState, useEffect } from 'react'

export default function HomePage(props) {
  let [state, setState] = useState({ // tương đương this.state = {}
    //like: 1,
    dsPhim: []
  }); 
  // let handleLike = () => {
  //   setState({like: state.like + 1})
  // }

  //useEffect chay sau khi noi dung duoc render
  useEffect(()=>{
    console.log('useEffect thay the cho didmount va didupdate');
  })
  useEffect(() => {
    console.log('useEffect thay the cho didmount');
  }, [])

  useEffect(() => {
    console.log('didupdate se thuc thi o day');
    return () => {
      console.log('willunmount se thuc thi o day');
    }
  }, [state.dsPhim])
  
  return (
    <div classname="container mt-4">
      {/* <div className="card text-white bg-primary"  style={{width: '20%', height: 'auto', padding: 5}}>
        <img className="card-img-top" src="https://picsum.photos/200/300" />
        <div className="card-body">
          <h4 className="card-title">{state.like} ♥</h4>
          <button className="btn btn-success mt-2" onClick={handleLike}>Like</button>
        </div>
      </div> */}
    </div>

  )
}

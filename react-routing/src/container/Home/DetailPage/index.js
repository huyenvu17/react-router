import React, { Component } from 'react'

export default class MovieDetail extends Component {

  componentDidMount(){
    console.log(this.props)
    const id = this.props.match.params.id;
    console.log(id);
  }
  render() {
    return (
      <div>
        MovieDetail
      </div>
    )
  }
}

// write your CatList component here
import React, { Component } from "react"

class CatList extends Component {

  render() {
    console.log("CatList.js", this.props)
    const catsArray = this.props.catPics.map(catPic => {
      return (
        <li>
          <img src={catPic.url} id={catPic.id} alt={catPic.id} />
        </li>
      )
    })

    return (
      <div>
        <ul>
          {this.props.loading ? "Loading..." : catsArray}
        </ul>
      </div>
    )
  }
}

export default CatList;
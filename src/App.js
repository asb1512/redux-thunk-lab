import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";
import CatList from "./CatList";

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount", this.props);
    fetchCats();
  }

  render() {
    console.log("render()", this.props.catPics); // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.props.loading ?
          "Loading..." : <CatList catPics={this.props.catPics} loading={this.props.loading}/>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    catPics: state.cats,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCats: () => dispatch(fetchCats()),
  };
};
export default connect(mapStateToProps, fetchCats)(App);
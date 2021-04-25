import React,{Component} from 'react';
import Cardlist from '../components/cardList';
import Searchbox from '../components/searchbox'
import {robots} from '../robots';
import {connect} from 'react-redux';
import Scroll from '../components/scroll';
import ErrorBoundary from '../ErrorBoundary'
import {setSearchField,requestRobots} from '../actions'
import './App.css'

const mapStateToProps=(state)=>{
  return {searchField:state.searchRobots.searchField,
          isPending:state.requestRobots.isPending,
          robots:state.requestRobots.robots,
          error:state.requestRobots.error
  }   
}

const mapDispatchToProps=(dispatch)=>{
  return{
    onsearch:(event)=>dispatch(setSearchField(event.target.value)),
    onrequestRobots:()=>dispatch(requestRobots())
  } 
}

class App extends Component{

  // constructor()
  // {
  //   super()
  //   this.state={
  //     robots:robots,
  //     // searchField:''
  //   }
  // }

  componentDidMount(){
    this.props.onrequestRobots();
  }
  
  // onsearch=(searchObject)=>{
  //   this.setState({searchField:searchObject.target.value});
  // }
  

  render(){
  const {searchField,onsearch,robots,isPending}=this.props;
  const filteredRobots=robots.filter(robots=>{
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  })
  return(
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <Searchbox onsearch={onsearch} />
      <Scroll>
      <ErrorBoundary>
      <Cardlist robots={filteredRobots}/>
      </ErrorBoundary>
      </Scroll>
    </div>
  );
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

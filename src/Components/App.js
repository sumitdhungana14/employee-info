import React from 'react';
import '../Styles/App.css';

import List from './List';
import EmployeeInfo from './EmployeeInfo';
import Header from './Header';
import Loading from './Loading';

import WithBackButton from './HOC.js';

const EnhancedHeader = WithBackButton(Header);

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
        employees : [],
        isListDisplayed : true,
        currentID: 0 
    }
  }

  componentDidMount(){
    fetch('https://mock-io.herokuapp.com/users')
    .then(response => response.json())
    .then(result => result.slice(0,20))
    .then(list => this.setState({
      employees: list
    }))
  }

  showEmployeeInfo = (id) => {
    this.setState({
      isListDisplayed: !this.state.isListDisplayed ,
      currentID : id - 1
    })
  }

  onBackClick = () => {
    this.setState({
      isListDisplayed: !this.state.isListDisplayed
    })
  }

  render(){
    return (
      <div className="App">
          {
            this.state.isListDisplayed ? <EnhancedHeader requiresBackButton={false} title="Employee List" /> : ''
          }
          { 
            this.state.isListDisplayed ? 
              !this.state.employees.length ? <Loading /> : <List employees={this.state.employees} onClick={this.showEmployeeInfo}/> : 
              <EmployeeInfo currentEmployee={this.state.employees[this.state.currentID]} onBackClick={this.onBackClick}/>
          }
      </div>
    )
  }
}

export default App;

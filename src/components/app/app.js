import { Component } from 'react/cjs/react.production.min';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {name: 'John Smith', salary: '800', increase: false, rise: false, id: 1},
        {name: 'Marco Polo', salary: '2000', increase: false, rise: false, id: 2},
        {name: 'Stiven Strange', salary: '5000', increase: false, rise: false, id: 3}
      ]
    }
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return {...elem, [prop]: !elem[prop]}
        }
        return elem;
      })
    }))
  }

  deleteItem = (id) => {
    this.setState(({data}) => ({
      data: data.filter(elem => elem.id !== id)
    }))
  }

  onChangeSalary = (id, value) => {
    this.setState(({data}) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return {...elem, salary: value.replace(/\D/g, '')}
        }
        return elem
      })
    }))
  }

  render() {

    const {data} = this.state;
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList
              data={data}
              onToggleProp={this.onToggleProp}
              onDelete={this.deleteItem}
              onChangeSalary={this.onChangeSalary}/>
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Table } from '../components/Table'
import { Header } from '../components/Header'
const API_URL = 'https://randomuser.me/api/?results=150&nat=us'

class IndexPage extends Component {
  state = {
    employees: [],
  };

  async componentDidMount() {
    const response = await fetch(API_URL)
    const data = await response.json()
    const results = data.results
    this.setState({employees: results})
  }
    sortByEmail = () => {
        const sortedEmployees = this.state.employees.sort((a, b) => (a.email > b.email) ? 1 : -1)
        this.setState({employees: sortedEmployees})
    };

  render() {
    return (
      <div>
        <Header/>
        <div className="mt-5">
          <Table
            sortByEmail={this.sortByEmail}
            employees={this.state.employees}
          />
        </div>
      </div>
    );
  }
}

export default IndexPage;
import React, { Component } from 'react'
import './bills.css'

class BillsPage extends Component {

// export default class BillsPage extends Component {
    state = {
        rent: 0,
        electricity: 0,
        internet:0,
        water: 0,
        roommates: 4
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
      };

      addTotal = () => {
        const {rent, electricity, internet, water} = this.state
        const total = [rent,electricity,internet,water].reduce((amt, tot) => {
           return parseInt(amt) + parseInt(tot)
        }, 0)
        return total
      }
    render() {
      return (
        <div>
            <div className="bills-background">
            <div id="head">
                <h1>Bills</h1>  
            </div>
            <div id="start" className="container shadow-lg p-3 mb-5 bg-white rounded">
                <table className="meta">                        
                </table>
                    <table className="inventory">
                        <thead>
                            <tr>
                                <th><span contenteditable>Name</span></th>
                                <th><span contenteditable>Utilities</span></th>
                                <th><span contenteditable>Total</span></th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a className="cut"></a><span contenteditable>Rent</span></td>
                                <td><span contenteditable>Rent</span></td>
                                <td><span data-prefix>$
                                <input placeholder='0.00' type='number' name='rent' value={this.state.rent} onChange={this.handleInputChange}></input>
                                </span></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td><a className="cut"></a><span contenteditable>Duke Energy</span></td>
                                <td><span contenteditable>Electricity</span></td>
                                <td><span data-prefix>$
                                <input placeholder='0.00' type='number' name='electricity' value={this.state.electricity} onChange={this.handleInputChange}></input>
                                </span></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td><a className="cut"></a><span contenteditable>Time Warner Cable</span></td>
                                <td><span contenteditable>Internet</span></td>
                                <td><span data-prefix>$
                                <input placeholder='0.00' type='number' value={this.state.internet} onChange={this.handleInputChange} name='internet'></input>
                                </span></td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td><a className="cut"></a><span contenteditable>City of Charlotte</span></td>
                                <td><span contenteditable>Water</span></td>
                                <td><span data-prefix>$
                                <input placeholder='0.00' type='number' value={this.state.water} onChange={this.handleInputChange} name='water'></input>
                                </span></td>
                            </tr>
                        </tbody>
                                        
                        </table>
                        <a className="add">+</a>
                        <table className="balance">
                            <tr>
                                <th><span contenteditable>Total</span></th>
                                <td><span data-prefix>$</span><span>{this.addTotal()}</span></td>
                            </tr>
                            <tr>
                                <th><span contenteditable>Portion Per Roommate</span></th>
                                <td><span data-prefix>$<input placeholder='0.00' type='number' value={this.addTotal() / this.state.roommates}></input></span></td>
                            </tr>
                </table>
                <h4> Pay Now </h4>
            <div id="payment">
                <a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fcgi-bin%2Fwebscr%3fcmd%3d_account"><button type="paypal" className="btn btn-primary"  id="brand"></button></a>
                <a href="https://venmo.com/account/sign-in"><button type="venmo" className="btn btn-primary" id="venmo"></button></a>

            </div>

                </div>
            </div>
   
        </div>
      )
    }
  }
  

  export default BillsPage;
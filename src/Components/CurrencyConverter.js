import React, {Component} from 'react'

const withCurrency = (BaseComponent) => (
    class Currency extends Component {
        state = {
            currencyChosen: false,
            selectedCurrency: 'Select Currency',
            amount: 0
        }
        render() {
            const currencyData = [
                { name: 'Japanese Yen', symbol: '¥', rate: 113.6 },
                { name: 'British Pound', symbol: '£', rate: 0.77 },
                { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32 },
                { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41 },
                { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01 }
            ]
            let currencyOptions = currencyData.map((currency,id)=>{
                return <option value={id} key={id}>{currency.name}</option>
            })
            return (<div>
                <select>
                    <option value='Select Currency'>Select Currency</option>
                    {currencyOptions}
                </select>
                <div>
                    <button className='add'>+</button>
                    <button className='minus'>-</button>
                    <BaseComponent currency={this.state.selectedCurrency} amount={this.state.amount}/>

                </div>
            </div>)
        }
    }
)
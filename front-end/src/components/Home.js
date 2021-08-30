import React from 'react'

export const Home = ({item}) => {

    const ultimos = item.slice(item.length -10)
    
    const spending = [];
    const income = [];
    const spendingValue = [];
    const incomeValue = [];

    item.forEach(function (item) {
        if(item.type === "egreso") {
            spendingValue.push(item.amount);
        }else{
            incomeValue.push(item.amount);
        }
    });
    item.forEach(function (item) {
        if(item.type === "egreso") {
        spending.push(item.concept);
        }else{
            income.push(item.concept);
        }
    });











    const spendingTotal = spendingValue.reduce((a, b) => a + b, 0);
    const incomeTotal = incomeValue.reduce((a, b) => a + b, 0);
    const total = incomeTotal - spendingTotal
    
    console.log(income)
    console.log(spending)
    console.log(spendingTotal);
    console.log(incomeTotal);






    return (
        <div>
            <h3>Saldo: ${total}</h3>
            <ul>
            {ultimos.map( element => <li key={element.id}>{`${element.type}: ${element.concept} ${element.amount} `}</li> ) }
            </ul>
            <ul>Egresos:
                {spending.map( element => <li key={element.id}>{element}</li> ) }
            </ul>
            <ul>Ingresos:
                {income.map( element => <li key={element && element.id}>{element}</li> ) }
            </ul>
        </div>
    )
}

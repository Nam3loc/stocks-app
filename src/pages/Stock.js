import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data";

export default function Stock(props) {

    const [stock, setStock] = useState(null)
    const { symbol } = useParams();

    const getStock = async () => {
        try {
            const stock = data.find(individualStock => individualStock.symbol === symbol)
            setStock(stock)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getStock()
    }, [])

const loaded =() => {
     return (
    <div>
      <h1>{`${stock.name} (${stock.symbol})`}</h1>
      <h3>Current Price: ${stock.lastPrice}</h3>
      <h4>Change: ${stock.change.toFixed(2)}</h4>
      <h4>Todays High: ${stock.high}</h4>
      <h4>Todays Low: ${stock.low}</h4>
      <h4>Todays Open: ${stock.open}</h4>
      <a href={`https://finance.yahoo.com/quote/${symbol}`}><button>Click for more {stock.symbol} info</button></a>
    </div>
  );
}

const loading = () => {
    return (
        <h1>Please wait, Stock is loading...</h1>
    )
}

return(
    stock ? loaded() : loading()
)

}
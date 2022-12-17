import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataArr from '../components/data';

export default function Dashboard(props) {
    const apiKey = process.env.REACT_APP_API_KEY; 

    const { symbol } = useParams();

    // const url = `https://financialmodelingprep.com/api/v3/stock/list?apikey=${apiKey}`;

    

    const [stock, setStock] = useState(null);

    // const getStock = async () => {
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setStock(data);
    //     } catch(err) {
    //         console.error(err);
    //     }
    // }

    // useEffect(() => {
    //     getStock()
    // }, [])

    const loaded = () => {
        return (
            <div>
                <h1>{props.stocks.name}</h1>
                <h2>{props.stocks.symbol}</h2>
                {/* <h4>{symbol.price}</h4>
                <h4>{stock.exchange}</h4>
                <h4>{stock.exchangeShortName}</h4>
                <h4>{stock.type}</h4> */}
                {/* <button onClick={handleClick}>Button</button> */}
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        stock ? loaded() : loading()
    )
}
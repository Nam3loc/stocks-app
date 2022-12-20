import { Link } from "react-router-dom";
import dataArr from '../data';

export default function Dashboard(props) {
    return (
        <>
            <h1>Most Active Stocks</h1>
            <div className="wrapper">
                <div className="header">
                    <h4 className="leftColumn">Company</h4>
                    <h4 className="middleColumn">Price</h4>
                    <h4 className="rightColumn">Change</h4>
                </div>
                <div className="line"></div>
                <div className="stocksList">
                    {dataArr.map((stocks) => {
                        const { name, symbol, lastPrice, change } = stocks;
                        return (
                            <div className="inner"> 
                                <Link to={`/stocks/${symbol}`}>
                                    <h3 className="company">{`${name} (${symbol})`}</h3> 
                                </Link>
                                <h3 className="price">{lastPrice}</h3>
                                <h3 className="change">{change.toFixed(2)}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
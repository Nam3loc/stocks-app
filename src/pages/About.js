

export default function About(props) {
    return (
        <>
            <h1>About Page</h1>
            <h3>Stocks App</h3>

            <p>This app pulls from the free sotck market API and gets real time data from the stock market.</p>
            <br />
            <p>This API only has 250 pulls per day, so we are limited.</p>
            <br />
            <br />
            <p>If you would like to see the list of stocks click on the Dashboard button in the navbar. If you would like to see more details about the stock, click on the stock in the dashboard and it will take you to a seperate page showing you more info on the stock.</p>
        </>
    )
}
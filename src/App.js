import data from "./data";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
        </div>
    );
}

export default App;

// const [dataObj] = data;
// let dataArray = [];

// console.log("old", dataObj);
// for (let prop in dataObj) {
//     dataObj[prop] = <h3>{dataObj[prop]}</h3>;
//     dataArray.push(dataObj[prop]);
// }

// const dataProps = Object.keys(dataObj);

// console.log("dataProps:", dataProps);

// return <div>{dataArray}</div>;

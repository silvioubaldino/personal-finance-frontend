import { useState } from 'react';
import './App.css';
import DataFilterBTN from './components/DataFilterBTN';
import Filter from './components/Filter';
import Table from './components/Table';
// import CollapsibleTable from "./components/collapseTable";

function App() {
    const [toggleFilter, setToggleFilter] = useState(false);

    return (
        <div className="App">
            <h1>Personal Finance</h1>
            <label>
                Selecione o mês
                <DataFilterBTN />
            </label>
            <button onClick={ () => setToggleFilter(!toggleFilter) }>Filter</button>
            {toggleFilter && <Filter />}
            <Table />
            {/* <CollapsibleTable /> */}
        </div>
    );
}

export default App;

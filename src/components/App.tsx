import Navbar from './navbar/Navbar';
import './App.css';
import CorpoB from './Corpo';


const App = () => {
    return (
        <div className='Corpo'>
            <div className='BarraCima'>
                <Navbar></Navbar>
            </div>


            <div >
                <CorpoB></CorpoB>
            </div>
        </div>
    );
}

export default App;
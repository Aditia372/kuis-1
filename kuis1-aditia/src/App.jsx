import MyList from './components/MyList';
import Header from './components/Header';

function App() {
    const fruits = MyList();
    return (
        <div>
            <Header className="atas"/>
            <div className="fruit-container">
                <ul className="fruit-grid">
                    {fruits.map(fruit => (
                        <li key={fruit.id} className="fruit-item">
                            <h2>{fruit.nama}</h2>
                            <p>Warna: {fruit.warna}</p>
                            <p>Harga: {fruit.harga}</p>
                            <img src={fruit.foto} alt={fruit.nama} width="100" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;

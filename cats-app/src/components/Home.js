import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <Link to='/'>Spring Home</Link> <br/>
            <Link to='/cats'>React App Home</Link><br/>
            <Link to="/cats/1" >Cat</Link><br/>
            <Link to="/cats/main">Cats Main</Link><br/>
        </div>
    )
}

export default Home;

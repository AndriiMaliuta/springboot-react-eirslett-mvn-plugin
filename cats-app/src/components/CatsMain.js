import React from 'react';
import CatList from "./CatList";
import {Link} from 'react-router-dom'

const CatsMain = () => {
    return (
        <div>
            <CatList />
            <div>Cats main page</div>
            {/*<Link to='/cats/list'>Cats List</Link><br/>*/}
            <Link to='/'>Home</Link><br/>
            <Link to='/cats'>Cats</Link><br/>
        </div>

    )
}

export default CatsMain;
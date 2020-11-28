import React, {useState, useEffect} from 'react';

const CatList = () => {

    const [cats, setCats] = useState([])

    useEffect(() => {
        getCats()
    }, [cats])

    const getCats = () => {
        fetch("/rest/api/v1/cats")
            .then(resp => resp.json())
            .then(data => {
                setCats(data)
            })
    }

    return (
    <div>
        <h2>Cats</h2>
        <div>
            TEST
            {cats.map((cat, index) => (<div key={index}>{cat.name}</div>)
            )}
        </div>
    </div>
    )
}

export default CatList;
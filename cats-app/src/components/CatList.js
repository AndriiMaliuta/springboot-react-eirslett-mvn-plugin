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

    function handleCatRemove(catId) {
        const catsNew = cats.filter(cat => catId !== cat.id)
        setCats(catsNew);
        console.log(catsNew)
        console.log('Removing cat ' + catId)
    }

    return (
    <div>
        <h2>Cats</h2>
        <div>
            TEST
            {cats.map((cat, index) => (
                <div className="cat" key={index}>
                    <p className="close-button" onClick={() => handleCatRemove(cat.id)}>X</p>
                    <p>{cat.name}</p>
                    <p>{cat.age}</p>
                    <p>{cat.color}</p>
                </div>)
            )}
        </div>
    </div>
    )
}

export default CatList;
import React from 'react';
import CatList from "./CatList";

const CatsMain = ({name}) => {
    return (
        <>
            <CatList />
            <div>Cats main page</div>
            <div>{name}</div>
        </>

    )
}

export default CatsMain;
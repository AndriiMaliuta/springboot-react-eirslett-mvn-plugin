const Cat = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Cat</h2>
            <div>{props.match.params.id}</div>
        </div>
    )
}

export default Cat

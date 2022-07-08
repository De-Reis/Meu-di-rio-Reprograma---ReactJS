
function Card(props) {
    console.log(props)
    return (
        <>
        <div className="card-container">
            <div className="card">
                <h3>{props.title}</h3>
                <img src={props.image}/>
                <p>{props.description}</p>
            </div>

        </div>
        </>
        
    )
}

export default Card
const PersonInfo = (props) => {
    return (
    <div className="person">
        <div className="avatar">
            <img src={props.avatar} alt={props.name} key={props.id}/>
        </div>
        <div className="person-info" key={props.id}>
            <p className="person-name">{props.name}</p>
            <p>{props.age} years</p>
        </div>
    </div>
    )
}

export default PersonInfo
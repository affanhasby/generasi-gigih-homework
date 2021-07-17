export const GIF = props => {
    return  (
        <div>
            <img src={props.url} alt={props.title}/>
        </div>
    )

};

export const H1 = props => {
    return <h1>{props.title}</h1>
}
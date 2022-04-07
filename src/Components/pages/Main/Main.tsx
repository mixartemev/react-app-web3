const Main = () => {
    const func = () => {};
    return(
        <div className="container">
            <button onClick={func} className="button error">main btn</button>
            <button onClick={func} className="button contract-btn">sec btn</button>
        </div>
    )
}

export default Main;
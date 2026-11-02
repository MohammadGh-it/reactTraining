// rsc
const FunctionComponent = () => {
    const value = prompt("1 or 2");
    return (
        <div>

            <p>hi</p>
            {value === "1" ? <h1>welcome baby!</h1> : <h1>please sign in</h1>}
            <h2>hoy</h2>

        </div>
    );
};

export default FunctionComponent;
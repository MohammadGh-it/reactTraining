const User = ({Fname, Lname, City, Age}) => {
    const myBotton = (e, value)=>{
        console.log("clicked on deleted");
        console.log(e,value);
    };
    const myInput = (e,value)=>{
        console.log(e.target.value);
    };
    return (
        <div>
            <h2>User information</h2>
            <ul>
                <li>
                    <strong>first name:</strong> {Fname}
                </li>
                <li>
                    <strong>last name:</strong> {Lname}
                </li>
                <li>
                    <strong>city:</strong> {City}
                </li>
                <li>
                    <strong>age:</strong> {Age}
                </li>
                <li>
                    <button onClick={(e)=>{myBotton(e,"test")}}>delete</button>
                    <input type="text" onChange={myInput} />
                </li>
            </ul>
        </div>
    );
};

export default User;
const User = ({Fname, Lname, City, Age}) => {
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
            </ul>
        </div>
    );
};

export default User;
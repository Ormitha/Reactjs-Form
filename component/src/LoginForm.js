import React, {useState} from 'react';

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name:"", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !="") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlfor="name">Name:</label>
                    <input type="text" name="name" id="name" onchange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                </div>
                <div className="form-group">
                    <label htmlfor="email">Email:</label>
                    <input type="email" name="email" id="email" onchange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlfor="password">Password:</label>
                    <input type="password" name="password" id="password" onchange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN" />
                
            </div>

        </form>
        
    )
    }

    export default LoginForm;
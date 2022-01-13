import React,{useState} from 'react'
import { useNavigate } from 'react-router';

function Signup(props) {
    const [credentials,setCredentials] = useState({name:"",email: "",password: "",cpassword:""})
    let  navigate = useNavigate();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const {name,email,password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name,email,password })
          });
          const json = await response.json();
          console.log(json);
              //save the auth token and redirect 
              if(json.success){

                  localStorage.setItem('auth-token',json.authToken);
                  navigate("/")
                  props.showAlert("Account Created Successfully","success");
              }
              else{
                 props.showAlert("Invalid Credentials","danger");
              }

    }

    const onChange = (e) => {
        //... spread syntax
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    }
    return (
        <div className="container mt-2">
            <h2 className="my-2">Create an Account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Signup

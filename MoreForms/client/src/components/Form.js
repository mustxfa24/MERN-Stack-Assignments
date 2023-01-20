import { useState } from 'react';

const Form = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
            <label> First Name: </label>
            <input type="text" 
            value={firstName}
            onChange={(e) => {
                setFirstName(e.target.value)
            }}
            />
            { firstName.length < 2  && firstName.length > 0 ? <p> First name must be at least 2 characters</p> : null}
            <br></br>

            <label> Last Name: </label>
            <input type="text" 
            value={lastName}
            onChange={(e) => {
                setLastName(e.target.value)
            }}
            />
            { lastName.length < 2  && lastName.length > 0 ? <p>  Last name must be at least 2 characters</p> : null}
            <br></br>

            <label> Email: </label>
            <input type="text" 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
            />
            { email.length < 5  && email.length > 0 ? <p> Email must be at least 5 characters</p> : null}
            <br></br>

            <label> Password: </label>
            <input type="password" 
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            />
            { password.length < 8  && password.length > 0 ? <p> Password must be at least 8 characters</p> : null}
            <br></br>

            <label> Confirm Password: </label>
            <input type="password" 
            value={confirmPassword}
            onChange={(e) => {
                setConfirmPassword(e.target.value)
            }}
            />
            { password !== confirmPassword ? <p> Passwords must match</p> : null}
            <br></br>
            <button on> Submit </button>
        </form>

        <h2> Your Form Data! </h2>
        <p> First Name: {firstName}</p>
        <p> Last Name: {lastName}</p>
        <p> Email: {email}</p>
        <p> Password: {password}</p>
        <p> Confirm Password: {confirmPassword}</p>
        </div>


    )
}

export default Form;
import React from 'react'

const SignUp = () => {
    return (
        <>
        <section className="showcase login">
            <div className="overlay">
                <form className="form">
                    <input type="text" name="username" id="username" placeholder="User name" required/>
                    <input type="email" name="email" id="email" placeholder="Your email address" required/>
                    <input type="password" name="password" id="pasword" placeholder="Enter your password" required/>
                    <input type="password" name="password2" id="pasword2" placeholder="Confirm your password" required/>
                    <button type="submit">Create your Account</button>
                </form>
            </div>
        </section>
        </>
    );
}

export default SignUp

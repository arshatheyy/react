import Input from 'costuminputg'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handilesubmit = (e) => {
        e.preventDefault()
           console.log(email)
           console.log(password)
    }

    return (
        <center>
            <div className='items-center justify-center w-200 h-full bg-amber-50'>
                <form onSubmit={handilesubmit}>
                    <Input
                        type='email'
                        label='Email address'
                        placeholder='Email address'
                        className='w-[80%] h-10 border-gray-300 rounded-md px-4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type='password'
                        label='Password'
                        placeholder='Enter your password'
                        className='w-[80%] h-10 border-gray-300 rounded-md px-4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className='bg-emerald-200 w-full ' type='submit'>Login</button>
                    <p><Link to='/register'>New User?</Link></p>
                </form>
            </div>
        </center>
    )
}

export default Login 
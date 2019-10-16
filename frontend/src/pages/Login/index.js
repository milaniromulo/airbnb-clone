import React, {useState} from 'react';
import api from '../../services/api';

const Login = () => {

    const [email, setEmail] = useState('')

    async function handleSubmit(e){
        e.preventDefault()
        const response = await api.post('/auth', { email })

        const {_id} = response.data;

        localStorage.setItem('user', _id)
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">e-mail</label>
                <input 
                type="email" 
                id="e-mail" 
                placeholder="Digite seu e-mail" 
                value={email}
                onChange={e => setEmail(e.target.value)}/>

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}

export default Login

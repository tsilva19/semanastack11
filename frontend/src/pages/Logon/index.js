import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon(){

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const res = await api.post('sessions', {id})
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', res.data.name);            
            console.log(res.data.name)
            history.push('./profile');
        } catch (error) {
            alert('Falha no login tente novamente')
        }
    }

    return (
      <div className="logon-container">
          <section className="form">
              <img src={logo} alt="logo do site"/>

              <form onSubmit={handleLogin}>
                  <h1> Faça o Logon</h1>
                  <input placeholder="Sua ID"
                    value= {id}
                    onChange={e => setId(e.target.value)}
                  />
                  <button className="button" type="submit">Entrar</button>
                   <Link className="back-link" to="/register">
                      <FiLogIn size={16} color="orangered"/>
                       Não tenho Cadastro
                    </Link> 
              </form>
          </section>

          <img src={heroesImg} alt="Heroes"/>
      </div>

      
    )
}
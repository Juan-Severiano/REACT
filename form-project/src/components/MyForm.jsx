import { useState } from 'react'
import style from '../assets/css/MyForm.module.css'

const MyForm = ({ user }) => {
    // Gerenciamento de dados
    const [nome, setNome] = useState(user ? user.nome : '')
    const [email, setEmail] =  useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleNome = (e) => {
        setNome(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('E-mail enviado com sucesso')
        console.log(nome, email, bio, role)
        // limpando formulario
        setNome('')
        setEmail('')
        setBio('')
        setRole('')
    }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
            <label htmlFor="nome">
                <span>Nome:</span>
                <input type="text" name='nome' placeholder='Digite seu nome' onChange={handleNome} value={nome} />
            </label>
        </div>
        <label>
            <span>E-mail:</span>
            <input type="email" name='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>
        <label>
            <span>Biografia:</span>
            <textarea name="bio" placeholder='Descrição do usuario' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
        </label>
        <label>
            <span>Tipo de acesso:</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                <option value="user">Usuário</option>
                <option value="adm">Administrador</option>
                <option value="ger">Gerente</option>
                <option value="dev">Desenvolvedor</option>
            </select>
        </label>
        <input type="submit" value='Enviar' />
      </form>
    </div>
  )
}

export default MyForm
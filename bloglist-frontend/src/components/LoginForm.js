import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ username, password, onSubmit }) => {
    return(
        <div className="login-form">
            <h2>Log in to application</h2>
            <form onSubmit={onSubmit}>
                <div>
                Käyttäjätunnus
                    <input
                        {...username}
                        autoComplete="username"
                    />
                </div>
                <div>
                Salasana
                    <input
                        {...password}
                        autoComplete="current-password"
                    />
                </div>
                <button type="submit">Kirjaudu</button>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default LoginForm
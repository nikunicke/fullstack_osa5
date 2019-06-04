import React from 'react'
import { render, waitForElement } from 'react-testing-library'
jest.mock('./services/blogs')
// jest.mock('./services/login')
import App from './App'

describe('<App />', () => {
    test('does not render blogs if logged out', async () => {
        const component = render(
            <App />
        )

        component.rerender(<App />)
        await waitForElement(
            () => component.getByText('Kirjaudu')
        )

        const blog_container = component.container.querySelector('.blogs')
        expect(blog_container).not.toBeInTheDocument()
    })

    test('renders blogs when user is logged in', async () => {
        const user = {
            username: 'nikunicke',
            token: '123123123123',
            name: 'Nikolassos Martyrens'
        }

        localStorage.setItem('loggedUser', JSON.stringify(user))

        const component = render(
            <App />
        )

        component.rerender(<App />)
        await waitForElement(
            () => component.container.querySelector('.blog')
        )

        const blogs = component.container.querySelectorAll('.blog')
        expect(blogs.length).toBe(4)

        const login_container = component.container.querySelector('.login-form')
        expect(login_container).not.toBeInTheDocument()
    })
})
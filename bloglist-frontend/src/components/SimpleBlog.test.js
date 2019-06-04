import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

describe('<SimpleBlog', () => {

    const blog = {
        title: 'Test title',
        author: 'Nikolassos Marttyyri',
        likes: 0,
        url: 'asd/Asd/ASd'
    }

    const onClick = () => blog.likes += 1

    it('renders title/author/likes', () => {

        const component = render(
            <SimpleBlog blog={blog} onClick={onClick} />
        )

        const title_author = component.container.querySelector('.title-author')
        const likes_number = component.container.querySelector('.likes-button')

        expect(title_author).toHaveTextContent(
            `${blog.title} ${blog.author}`
        )
        expect(likes_number).toHaveTextContent(
            `blog has ${blog.likes} likes`
        )
    })

    it('clicking the button calls eventhandler once', async () => {
        const mockHandler = jest.fn()
        const { getByText } = render(
            <SimpleBlog blog={blog} onClick={mockHandler} />
        )

        const button = getByText('like')
        fireEvent.click(button)
        fireEvent.click(button)

        expect(mockHandler.mock.calls.length).toBe(2)
    })
})
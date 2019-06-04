import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Blogs from './Blogs'

describe('<Blogs', () => {
    const blogs = [
        {
            title: 'test title 1',
            author: 'test-author',
            likes: 0,
            url: 'some/www/adress',
            id: '1',
            user: {
                name: 'Randolph'
            }
        },
        {
            title: 'test title 2',
            author: 'another author',
            likes: 5,
            url: 'another/www/adress',
            id: '2',
            user: {
                name: 'Johnny'
            }
        }
    ]

    const user = {
        name: 'Randolph'
    }

    // like = () => blogs.likes += 1
    // remove = () => console.log('remove')

    it('renders only title and author before click', () => {
        const component = render(
            <Blogs
                blogs={blogs} />
        )

        const div = component.getByText(`${blogs[0].title} - ${blogs[0].author}`)
        const divv = component.container.querySelectorAll('.title-author')

        expect(divv[0]).toHaveTextContent(
            `${blogs[0].title} - ${blogs[0].author}`
        )
        expect(div).toHaveTextContent(
            `${blogs[0].title} - ${blogs[0].author}`
        )
        expect(div).not.toHaveTextContent(
            `${blogs[0].likes} likes`
        )
        expect(div).not.toHaveTextContent(
            `added by ${blogs[0].user.name}`
        )
        expect(div).not.toHaveTextContent(
            `${blogs[0].url}`
        )


    })

    it('renders rest of data when clicked on', async () => {
        const component = render(
            <Blogs blogs={blogs} user={user} />
        )

        const button = component.getByText(`${blogs[0].title} - ${blogs[0].author}`)
        fireEvent.click(button)

        const div = component.container.querySelector('.blog-extension')
        expect(div).toHaveTextContent(
            `${blogs[0].likes} likes`
        )

        expect(div).toHaveTextContent(
            `added by ${blogs[0].user.name}`
        )

        expect(div).toHaveTextContent(
            `${blogs[0].url}`
        )

    })
})
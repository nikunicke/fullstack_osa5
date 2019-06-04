import React, { useState, useEffect } from 'react'
import Blogs from './components/Blogs'
import LoginForm from './components/LoginForm'
import AddBlogForm from './components/AddBlogForm'
import Notification from './components/Notification'
import Toggleable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

import { useField } from './hooks'

const App = () => {
    const [ blogs, setBlogs ] = useState([])
    const [ user, setUser ] = useState(null)
    const [ notification, setNotification ] = useState({
        message: null,
        status: null
    })

    const title= useField('')
    const author = useField('')
    const url = useField('')

    const username = useField('text')
    const password = useField('password')

    useEffect(() => {
        blogService.getAll()
            .then(blogs => setBlogs(blogs))
        console.log('Got blogs')
    }, [])

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if(loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            blogService.setToken(user.token)
        }
    }, [])

    const setMessage = (message, status) => {
        setNotification({
            ...notification,
            message: message,
            status: status
        })
        setTimeout(() => {
            setNotification({ ...notification, message: null, status: null })
        }, 5000)
    }


    const addBlogFormRef = React.createRef()

    const addBlog = async (event) => {
        event.preventDefault()
        addBlogFormRef.current.toggleVisibility()
        const blogObject = {
            title: title.input.value,
            author: author.input.value,
            url: url.input.value
        }

        try {
            const addedBlog = await blogService.create(blogObject)
            setBlogs(blogs.concat(addedBlog))
            setMessage(`${addedBlog.title} by ${addedBlog.author} added`, 'success')
            title.reset()
            author.reset()
            url.reset()

        } catch (exception) {
            setMessage(exception.response.data.error, 'error')
        }
    }

    const handleLogin = async event => {
        event.preventDefault()
        try {
            const user = await loginService.login(
                { username: username.input.value, password: password.input.value }
            )

            window.localStorage.setItem(
                'loggedUser', JSON.stringify(user)
            )

            setUser(user)
            blogService.setToken(user.token)
            setMessage(`Welcome ${user.name}`, 'success')
        } catch (exception) {
            setMessage(exception.response.data.error, 'error')
        }
        username.reset()
        password.reset()
    }

    const handleLogOff = (event) => {
        event.preventDefault()
        window.localStorage.removeItem('loggedUser')
        setUser(null)
        setMessage('Successfully logged out', 'success')
    }

    const handleLike = async (post) => {
        post.likes += 1
        try {
            const likedBlog = await blogService.update(post.id, post)
            likedBlog.user = post.user
            setBlogs(blogs.map(blog => blog.id !== post.id ? blog : likedBlog))
        } catch (exception) {
            setMessage(exception.response.data.error, 'error')
            setBlogs(blogs.filter(blog => blog.id !== post.id))
        }
    }

    const handleRemove = async (post) => {
        if (window.confirm(`Removing blog: ${post.title} by ${post.author}`)) {
            try {
                await blogService.remove(post.id)
                setMessage('Blog deleted', 'success')
            } catch (exception) {
                setMessage(exception.response.data.error, 'error')
            }
            setBlogs(blogs.filter(blog => blog.id !== post.id))
        }
    }

    return (
        <div>
            {user === null ?
                <div>
                    <Notification message={notification} />
                    <LoginForm username={username.input} password={password.input} onSubmit={handleLogin} />
                </div> :
                <div>
                    <h2>Blogs</h2>
                    <Notification message={notification} />
                    <p>{user.name} logged in</p>
                    <button onClick={handleLogOff}>Log out</button>
                    <Toggleable buttonLabel="Add blog" ref={addBlogFormRef}>
                        <AddBlogForm onSubmit={addBlog} title={title.input} author={author.input} url={url.input} />
                    </Toggleable>
                    <Blogs blogs={blogs} likeHandler={handleLike} removeHandler={handleRemove} user={user}/>
                </div> }
        </div>
    )
}

export default App



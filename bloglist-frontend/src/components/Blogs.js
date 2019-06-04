import React, { useState } from 'react'

const Blog = ({ blog, likeHandler, removeHandler, user }) => {
    const [visible, setVisible] = useState(false)

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }
    return (
        <div style={blogStyle} className='blog'>
            <div className='title-author' onClick={() => setVisible(!visible)}>
                {blog.title} - {blog.author}
            </div>
            {visible === true ?
                <div className='blog-extension'>
                    <a href={blog.url}>{blog.url}</a>
                    <div>
                        {blog.likes} likes
                        <button onClick={() => likeHandler(blog)}>like</button>
                    </div>
                    <div>added by {blog.user.name}</div>
                    {user.id === blog.user.id || user.id === blog.user ?
                        <button onClick={() => removeHandler(blog)}>Remove</button> :
                        null
                    }
                </div> :
                null
            }
        </div>
    )
}

const Blogs = ({ blogs, likeHandler, removeHandler, user }) => {
    blogs.sort((a, b) => b.likes - a.likes)
    const rows = () => blogs.map(blog => {
        return (
            <Blog
                key={blog.id}
                blog={blog}
                likeHandler={likeHandler}
                removeHandler={removeHandler}
                user={user} />
        )
    })

    return (
        <div className="blogs">
            {rows()}
        </div>
    )
}

export default Blogs
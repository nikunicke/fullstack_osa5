import React from 'react'

const AddBlogForm = ({ onSubmit, title, author, url }) => {
    return (
        <div>
            <h2>Add Blog</h2>
            <form onSubmit={onSubmit}>
                <div>
                    Title: <input {...title} />
                </div>
                <div>
                    Author: <input {...author} />
                </div>
                <div>
                    url: <input {...url} />
                </div>
                <button type="submit">Add blog</button>
            </form>
        </div>
    )
}

export default AddBlogForm
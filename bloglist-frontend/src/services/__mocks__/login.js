const users = [
    {
        blogs: [ ],
        username: 'nikunicke',
        name: 'Nikolassos Martyren',
        id: '5cbf722fb719b317cc947afe'
    },
    {
        blogs: [ ],
        username: 'ironman',
        name: 'Iron Man',
        id: '5cbf724cb719b317cc947aff'
    }
]

const setToken = () => {
    return Promise.resolve(users)
}

export default { setToken }
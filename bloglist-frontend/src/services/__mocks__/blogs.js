const blogs = [
    {
        title: 'React Native Image Upload To Firebase Cloud Storage — iOS',
        author: 'Muhozi Emery',
        url: 'https://medium.com/backticks-tildes/react-native-image-upload-to-firebase-cloud-storage-ios-24b8dc0a9c8b',
        likes: 74,
        user: {
            username: 'Spider Man',
            name: 'Peter Parker',
            id: '5ccdefcf9204e71c6843e39e'
        },
        id: '5cceea6b689d5227c4dcd1bf'
    },
    {
        title: 'WIP: Don\'t return early from React.Component when using React.createRef',
        author: 'Andrew Luca',
        url: 'https://dev.to/iamandrewluca/don-t-return-early-from-react-component-when-using-react-createref-266n',
        likes: 31,
        user: {
            username: 'Spider Man',
            name: 'Peter Parker',
            id: '5ccdefcf9204e71c6843e39e'
        },
        id: '5cdc2e532cca39329cc32621'
    },
    {
        title: '29 Must Read Books For Programmers',
        author: 'Blaine Osepchuk',
        url: 'https://dev.to/bosepchuk/29-must-read-programming-books-2n45',
        likes: 49,
        user: {
            username: 'Spider Man',
            name: 'Peter Parker',
            id: '5ccdefcf9204e71c6843e39e'
        },
        id: '5cdc3c78cffa64276090e1ac'
    },
    {
        title: 'Bulletproof node.js project architecture',
        author: 'Santiago Quinteros',
        url: 'https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf',
        likes: 40,
        user: {
            username: 'Spider Man',
            name: 'Peter Parker',
            id: '5ccdefcf9204e71c6843e39e'
        },
        id: '5cdc4c3bcffa64276090e1ad'
    }
]

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

const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll , setToken }
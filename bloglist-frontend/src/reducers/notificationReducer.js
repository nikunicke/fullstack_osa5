const notificationReducer = (state = { notification: null, time: null }, action) => {
    switch (action.type) {
    case 'SET_NOTIFICATION':
        return { notification: action.notification, time: action.time }
    default:
        return state
    }
}

export const notificationChange = (notification, time) => {
    return {
        type: 'SET_NOTIFICATION',
        notification,
        time
    }
}

export default notificationReducer
let userNameNavActions = {
    showUserName: (uid) => (
        {
            type: 'SHOW_USER_NAME',
            payload: fid
        }
    ),
    hideUserName: (uid) => (
        {
            type: 'HIDE_USER_NAME',
            payload: fid
        }
    )
}

export default userNameNavActions;

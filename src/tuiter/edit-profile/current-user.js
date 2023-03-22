const initialState = {

    _id: '123',
    firstName: 'Arun',
    lastName: 'Padala',
    bannerimage: "../images/banner.jpeg",
    profilepic: 'relativity_space.png',
    handle: '@arunpadala',
    bio: 'Student, Software Engineer, AI, Space, and renewable enthusiast.\n'
         + ' Retuits and likes are not endorsements.\n',
    location:'Boston, MA',
    dob:'11 May 1998',
    dateJoined:'05 May 2005',
    followers:'150',
    following:'150',
    nooftuits: '6221',
    website: 'arunpadala@tuiter.com'
}

const currentUserReducer = () => {
    return initialState
}

export default currentUserReducer;
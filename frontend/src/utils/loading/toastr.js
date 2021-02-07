import React from 'react'
import ReduxToastr from 'react-redux-toastr'

export default props => (
    <ReduxToastr 
        timeOut={5000}
        newestOnTop={false}
        preventDuplicates={false}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar />
)
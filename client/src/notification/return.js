import React from 'react'
import ReduxToastr from 'react-redux-toastr' 
import '../../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css'
import 'node_modules/admin-lte/plugins/jQueryUI/jquery-ui.min'
import 'node_modules/admin-lte/plugins/slimScroll/jquery.slimscroll.min'

export default props => (
    <ReduxToastr timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar/>
)
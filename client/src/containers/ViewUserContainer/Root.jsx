import React from 'react'
import { ViewProfile } from '../../components'
const Root = ({userID}) => {
    return (
    <div>
        <ViewProfile userID={userID} isAdminView />
    </div>
    )
}

export default Root

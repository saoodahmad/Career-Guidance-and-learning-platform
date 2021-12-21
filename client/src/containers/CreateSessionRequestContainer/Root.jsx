import React from 'react'
import { CreateSessionRequest } from '../../components'

const Root = ({mentorID}) => {
    return (
        <div>
           <CreateSessionRequest mentorID={mentorID}/>
        </div>
    )
}

export default Root

import React from 'react'
import { RiseLoader } from 'react-spinners'

export default function loading(props) {
    return (
        <div className='overlay'>
            <div className='spinner'>
                <RiseLoader color={'#fff'} loading={props.loading} />
            </div>
        </div>
    )
}
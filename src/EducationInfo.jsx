import React from 'react'

function EducationInfo(props) {
    return (
        <div className='mt-3'>
            <div className='text-lg font-bold text-purple-600'>{props.level}</div>
            <div><strong>School:</strong> {props.school}</div>
            {
                props.course !== null ? <div><strong>Course:</strong> {props.course}</div> : ""
            }
            <div><strong>Address:</strong> {props.address}</div>
            <div><strong>Year Graduated:</strong> {props.year}</div>
        </div>
    )
}

export default EducationInfo
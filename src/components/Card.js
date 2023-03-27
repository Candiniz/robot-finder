import React from 'react'
import './Card.css'

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <>
        <div className='card-container tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <div>
                <img src={`https://robohash.org/${id}?200x200`} alt='Robot' />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>

        </>
    )
}

export default Card;
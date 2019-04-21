import React from 'react'
import PropTypes from 'prop-types';

const Greeting = ({greeting, name}) => (
    <div style={{color: 'teal'}}>
        <h2>{greeting} {name}</h2>
    </div>
)

// eslint-disable-next-line react/no-typos
Greeting.PropTypes = {
    greeting: PropTypes.string,
    name: PropTypes.string,
}

Greeting.defaultProps = {
    greeting: 'Hello',
}

export default Greeting
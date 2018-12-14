import React from 'react';

// A bold label used as a title

export default function StrongLabel(props) {
    return (
        <label className="strong-label">
            {props.title}
        </label>
    )
}
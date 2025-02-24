import React from 'react';

export default function TitleCard({ associationName, departmentName }) {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{associationName}</h1>
            <h2>{departmentName}</h2>
            <h4>ASSOCIATION CHAPTERS</h4>
        </div>
    );
}

import React from 'react';
import './superHeroTable.css';

const SuperheroTable = (props) => {
    return (
        <table className="table" id="table">
            <thead>
                <tr>
                    <th>Superhero Id</th>
                    <th>Superhero Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
            </thead>
            {props.superheroes.map((hero) => 
            <tr className = "text-center">
                <td>{hero.superheroId}</td>
                <td>{hero.name}</td>
                <td>{hero.primaryAbility}</td>
                <td>{hero.secondaryAbility}</td>
            </tr>)}
        </table>
    );
}

export default SuperheroTable; 
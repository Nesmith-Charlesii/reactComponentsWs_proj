import React from 'react';

const SuperheroTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Superhero Id</th>
                    <th>Superhero Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
            </thead>
            {props.superheroes.map((hero) => 
            <tr>
                <td>{hero.superheroId}</td>
                <td>{hero.name}</td>
                <td>{hero.primaryAbility}</td>
                <td>{hero.secondaryAbility}</td>
            </tr>)}
        </table>
    );
}

export default SuperheroTable; 
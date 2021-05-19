import React from 'react';

const SuperheroCreateForm = (props) => {
    return (
        <form>
            <div className="form-group">
                <label for="id">Superhero Id: </label>
                <input type="text" name="id"/>
                <label for="superheroName">Superhero Name: </label>
                <input type="text" name="superheroName"/>
                <label for="primaryAbility">Primary Ability: </label>
                <input type="text" name="primaryAbility"/>
                <label for="secondaryAbility">Secondary Ability: </label>
                <input type="text" name="secondaryAbility"/>
                <input type="submit" value="Create Hero"/>
            </div>
        </form>
    );
}

export default SuperheroCreateForm; 
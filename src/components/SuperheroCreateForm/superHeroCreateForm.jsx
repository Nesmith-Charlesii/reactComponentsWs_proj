import React from 'react';
import './superHeroCreateFrom.css';

const SuperheroCreateForm = (props) => {
    return (
        <div className="superheroCreateForm">
            <form onSubmit={props.onSubmit} id="superheroForm">
                <h2>Create a Superhero!</h2>

                <div className="form-group my-4">
                    <label for="id">Superhero Id: </label>
                    <input className="form-control" type="text" name="superheroId" onChange={props.onChange} value={props.superheroId}/>

                    <label for="superheroName">Superhero Name: </label>
                    <input className="form-control" type="text" name="name" onChange = {props.onChange} value={props.name}/>

                    <label for="primaryAbility">Primary Ability: </label>
                    <input className="form-control" type="text" name="primaryAbility" onChange = {props.onChange} value={props.primaryAbility}/>

                    <label for="secondaryAbility">Secondary Ability: </label>
                    <input className="form-control" type="text" name="secondaryAbility" onChange = {props.onChange} value={props.secondaryAbility}/>
                    <br/>

                    <input class="btn btn-sm btn-success" type="submit" value="Create Hero" onClick={() => props.add} />
                </div>
            </form>
        </div>
    );
}

export default SuperheroCreateForm; 
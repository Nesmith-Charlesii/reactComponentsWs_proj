import React, {Component} from 'react';
import './superHeroCreateFrom.css';

class SuperheroCreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        }
    }

    handleSubmit(event) {
        //prevent default form behavior
        event.preventDefault();
        const hero = {
            superheroId: this.state.superheroId,
            name: this.state.name,
            primaryAbility: this.state.primaryAbility,
            secondaryAbility: this.state.secondaryAbility
        }
        //Pass hero object as arg to addSuperhero prop function
        this.props.addSuperhero(hero);
    }

    handleChange(event) {
        this.setState({
            //Brackets used because key cannot have periods
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="superheroCreateForm">
                <form onSubmit={(event) => this.handleSubmit(event)} id="superheroForm">
                    <h2>Create a Superhero!</h2>
    
                    <div className="form-group my-4">
                        <label>Superhero Id: </label>
                        <input className="form-control" type="text" name="superheroId" onChange={(event) => this.handleChange(event)} value={this.state.superheroId} />
    
                        <label>Superhero Name: </label>
                        <input className="form-control" type="text" name="name" onChange = {(event) => this.handleChange(event)} value={this.state.name} />
    
                        <label>Primary Ability: </label>
                        <input className="form-control" type="text" name="primaryAbility" onChange = {(event) => this.handleChange(event)} value={this.state.primaryAbility} />
    
                        <label>Secondary Ability: </label>
                        <input className="form-control" type="text" name="secondaryAbility" onChange = {(event) => this.handleChange(event)} value={this.state.secondaryAbility} />
                        <br/>

                        {/*input submit or button submit does not need an onClick attribute because onSubmit handles that function*/}
                        <input className="btn btn-sm btn-success" type="submit" value="Create Hero"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SuperheroCreateForm; 
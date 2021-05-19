import React, {Component} from 'react';
import DisplayName from './DisplayName/displayName';
import NamesList from './NamesList/namesList';
import AlertUser from './AlertUser/alertUser';
import SuperheroTable from './SuperheroTable/superHeroTable';
import SuperheroCreateForm from './SuperheroCreateForm/superHeroCreateForm';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: [
                'Mike', 
                'Nevin', 
                'Aaron', 
                'Tory', 
                'Kelly'
            ],
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {   
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super Strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        }
    }

    Alert = () => {
        alert("devCodeCamp");
    } 

    Add = (input) => {
        this.state.superheroes.push()
    }

    handleSubmit(event) {
        alert("New hero added");
        //prevent default form behavior
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="container-fluid" id="container-fluid">
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <div className="row" id="top-row">
                    <div className="col-6">
                        <SuperheroCreateForm onSubmit={(event) => this.handleSubmit(event)} />
                    </div>
                    <div className="col-6">
                        <SuperheroTable superheroes={this.state.superheroes} />
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex flex-column align-items-center">
                        <NamesList names={this.state.names}></NamesList>
                        <AlertUser alert={() => this.Alert()}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
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

    Add_Hero = () => {
        return(

        );
    }

    render() {
        return (
            <div className="container-fluid">
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <div className="row my-5">
                    <div className="col-6">
                        <NamesList names={this.state.names}></NamesList>
                        <br/>
                        <AlertUser alert={() => this.Alert()}/>
                    </div>
                    <div className="col-4">
                        <SuperheroTable superheroes={this.state.superheroes} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
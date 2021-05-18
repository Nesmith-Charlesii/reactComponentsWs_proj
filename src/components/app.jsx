import React, {Component} from 'react';
import DisplayName from './DisplayName/displayName';
import NamesList from './NamesList/namesList';
import AlertUser from './AlertUser/alertUser';

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
            ]
        }
    }

    Alert = () => {
        alert("devCodeCamp");
    } 

    render() {
        return (
            <div className='container-fluid'>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <NamesList names={this.state.names}></NamesList>
                <AlertUser alert={() => this.Alert()}/>
            </div>
        )
    }
}

export default App;
import React, {Component} from 'react';
import DisplayName from './DisplayName/displayName';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: [
                'Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'
            ]
        }
    }

    render() {
        return (
            <div className='container-fluid'>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
            </div>
        )
    }
}

export default App;
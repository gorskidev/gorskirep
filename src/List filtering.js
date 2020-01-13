import React from 'react';
import ReactDOM from 'react-dom';

const allUsers = ['Michal', 'Michal', 'Adrian', 'Maciek', 'fadadfadzkforf', 'Oj', 'Interesting', 'SOsuf', 'Fadadadad', 'dadada', 'fafafa'];

const UsersList = ({ users }) => {
    if (users.length > 0) {
        return (
        <ul>
            {users.map(user => <li key={user}>{user}</li>)}
        </ul>
        );
    }

    return (
        <p>Brak wyników!</p>
    );
  };

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filteredUsers: allUsers
        }

    }

    filterUsers(e){
        const text = e.currentTarget.value;
        const filteredUsers = this.getFilteredUsersForText(text);
        this.setState({
            filteredUsers
        })
    }
  
    getFilteredUsersForText(text) {
        return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
      }

    render(){
        return(
            <div>
                <input 
                    onInput    = {this.filterUsers.bind(this)}/>
                <UsersList users = {this.state.filteredUsers} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
import React from 'react';
import HomeAction from '../stores/HomeAction';
import ApiStore from '../stores/ApiStore';
import { connectToStores } from 'fluxible-addons-react';

@connectToStores ([ApiStore], (context) => ({
    'ApiStore': context.getStore(ApiStore).getData()
}))
class Home extends React.Component {
    render() {
        console.log(this.props.ApiStore);
        return (
            <div>
                <h2>Home</h2>
                <p>Welcome to the site!</p>
            </div>
        );
    }
}

HomeAction.getUsers;

export default Home;

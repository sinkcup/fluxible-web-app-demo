import React from 'react';

class Home extends React.Component {
    constructor(props, context) {
        super(props);
        this.state = {
            'id': 2,
            'name': 'computer',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('-----handleChange');
        console.log(e.target.value);
        this.setState({ 'id': e.target.value });
        console.log('-----handleChange end');
    }

    render() {
        return (
            <div>
                <h2>Home</h2>
                <p>{this.state.name}</p>
                <select value={this.state.id} ref="id" onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
        );
    }
}

export default Home;

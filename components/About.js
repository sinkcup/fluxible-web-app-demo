import React from 'react';

class About extends React.Component {
    constructor(props, context) {
        super(props);
        this.name = 'Jim';
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('-----handleChange');
        console.log(e.target.value);
        this.name = e.target.value;
        console.log('-----handleChange end');
    }

    render() {
        return (
            <div>
                <h2>About</h2>
                <p>This is a description of the site.</p>
                <input type="text" value={this.name} ref="name" onChange={this.handleChange} />
            </div>
        );
    }
}

export default About;

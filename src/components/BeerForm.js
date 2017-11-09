import React from 'react';

class BeerForm extends React.Component {
    createBeerUser(event) {
        event.preventDefault();

        const user = {
            name: this.name.value,
        }
        this.props.loadBeers(user);
        this.beerForm.reset();
    }

    render() {
        return (
            <form ref={(input) => this.beerForm = input} className="beer-edit" onSubmit={(e) => this.createBeerUser(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Untappd Username" />
                <button type="submit">See your beers</button>
            </form>
        )
    }
}

export default BeerForm;
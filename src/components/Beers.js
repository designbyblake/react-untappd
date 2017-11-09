import React from 'react';
import './Beers.css';

class Beers extends React.Component {
    render() {
        const  beer = this.props.beer.beer,
                brewery = this.props.beer.brewery,
                alt = `Label for ${beer.beer_name}`;

        return ( 
            <li className="beer">
                <img className="beer__label" src={beer.beer_label} alt={alt} />
                <h2 className="beer__name">{beer.beer_name} from {brewery.brewery_name}</h2>
            </li>
        )
    }
}

export default Beers;
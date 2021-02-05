import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import {faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons"

import React from 'react';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            quote: '',
            author: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    colors_arr = ['#ee0202', '#1c00db', '#61d800', '#f0c200', '#ef0078', '#00d2e1', '#ee7802', '#ee02e6', '#87ac00', '#7500d3   '];

    componentDidMount() {
        this.handleSubmit();
    }

    handleSubmit() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    color: this.colors_arr[Math.floor(Math.random() * this.colors_arr.length)],
                    quote: data.content,
                    author: data.author
                });
            })
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: this.state.color }}>
                <div id="quote-box" className="mx-auto card quote-card">
                
                <p id="text" style={{ color: this.state.color }}>
                    <FontAwesomeIcon icon={faQuoteLeft} style={{paddingRight: 10, fontSize: 35}} />
                    {this.state.quote}
                    </p>
                <p id="author" style={{ color: this.state.color }}>- {this.state.author}</p>
                <div className="d-flex buttons">
                    <div className="p-2 my-auto">
                        <a href="#" target="_blank" id="fb" style={{ color: this.state.color }}>
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                    </div>
                    <div className="p-2 my-auto">
                        <a href="https://www.twitter.com/intent/tweet" target="_blank" id="tweet-quote" style={{ color: this.state.color }}>
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                    </div>
                    <div className="p-2 flex-grow-1 my-auto">
                        <button id="new-quote" className="btn btn-info border-0" style={{ backgroundColor: this.state.color }} onClick={this.handleSubmit}>
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
            </div>
        );
    };
}

export default App;

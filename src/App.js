import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

import React from 'react';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'green',
            quote: '',
            author: ''
        };
    }

    handleSubmit() {

    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: this.state.color }}>
                <div id="quote-box" className="mx-auto card quote-card">
                <p id="text" style={{ color: this.state.color }}>
                    loremalksddlas
                    askldlasdasdla
                    askdmslakdlskad
                    askdlasdlkasdla
                    askldmlaskdlak
                    aklsdmlaksdlkasjdlksjdlka
                    aslkdalsdlsadjalksjdlksajdlkasjdlkasjdwi
                    </p>
                <p id="author" style={{ color: this.state.color }}>-author</p>
                <div className="d-flex buttons">
                    <div className="p-2 my-auto">
                        <a href="#" target="_blank" id="fb" style={{ color: this.state.color }}>
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                    </div>
                    <div className="p-2 my-auto">
                        <a href="#" target="_blank" id="tweet-quote" style={{ color: this.state.color }}>
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                    </div>
                    <div className="p-2 flex-grow-1 my-auto">
                        <button id="new-quote" className="btn btn-info border-0" style={{ backgroundColor: this.state.color }}>
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

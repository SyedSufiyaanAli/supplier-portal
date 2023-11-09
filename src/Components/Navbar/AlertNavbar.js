import React, {Component} from "react";
import '../../style/AlertNavbar.css'

class ButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: null,
        };
    }

    handleButtonClick = (buttonName) => {
        this.setState({ activeButton: buttonName });
    };

    render() {
        return (
            <div className="button-container">
                <button 
                    className={`button ${this.state.activeButton === 'Button 1' ? 'active' : '' }`} 
                    onClick={() => this.handleButtonClick('Button 1')} >
                    ASN Alerts
                </button>
                <button 
                    className={`button ${this.state.activeButton === 'Button 2' ? 'active' : ''}`} 
                    onClick={() => this.handleButtonClick('Button 2')}>
                    PO Alerts
                </button>
                <button 
                    className={`button ${this.state.activeButton === 'Button 3' ? 'active' : ''}`}
                    onClick={() => this.handleButtonClick('Button 3')}>
                    Return Alerts
                </button>
                <button
                    className={`button ${this.state.activeButton === 'Button 4' ? 'active' : ''}`}
                    onClick={() => this.handleButtonClick('Button 4')}>
                    Invoices Alerts
                </button>
                <button
                    className={`button ${this.state.activeButton === 'Button 5' ? 'active' : ''}`}
                    onClick={() => this.handleButtonClick('Button 5')}>
                    Deal Alerts
                </button>
            </div>
        );
    }
}

export default ButtonGroup;

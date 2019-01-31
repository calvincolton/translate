import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
  // via this.context:
  // static contextType = LanguageContext;

  renderCTAText = (text) => {
    return text === 'english' ? 'Submit' : 'Voorleggen';
  }

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {text => this.renderCTAText(text)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // via this.context (used for single context objects/pipes):
    // const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
    // return (
    //   <button className="ui button primary">{text}</button>
    // );
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

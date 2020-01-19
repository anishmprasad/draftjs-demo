/* @flow */
import React, { Component } from 'react';
import IconButton from '../EditorComponents/IconButton';

export default class StyleButton extends Component {
	render() {
		let { style, onToggle, ...otherProps } = this.props; // eslint-disable-line no-unused-vars
		let iconName = style.toLowerCase();
		// `focusOnClick` will prevent the editor from losing focus when a control
		// button is clicked.
		return <IconButton {...otherProps} iconName={iconName} onClick={this._onClick} focusOnClick={false} />;
	}

	_onClick = () => {
		this.props.onToggle(this.props.style);
	};
}

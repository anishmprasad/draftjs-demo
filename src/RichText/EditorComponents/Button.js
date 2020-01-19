/* @flow */

import React, { Component } from 'react';
import cx from 'classnames';

import './Button.css';

export default class Button extends Component {
	// props: Props;

	render() {
		let { props } = this;
		let { className, isDisabled, focusOnClick, formSubmit, ...otherProps } = props;
		className = cx(className, 'button');
		let onMouseDown = focusOnClick === false ? this._onMouseDownPreventDefault : props.onMouseDown;
		let type = formSubmit ? 'submit' : 'button';
		return (
			<button type={type} {...otherProps} onMouseDown={onMouseDown} className={className} disabled={isDisabled}>
				{props.children}
			</button>
		);
	}

	_onMouseDownPreventDefault = event => {
		event.preventDefault();
		let { onMouseDown } = this.props;
		if (onMouseDown != null) {
			onMouseDown(event);
		}
	};
}

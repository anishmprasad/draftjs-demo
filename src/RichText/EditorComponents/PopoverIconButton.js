/* @flow */

import React, { Component } from 'react';
import IconButton from './IconButton';
import InputPopover from './InputPopover';

export default class PopoverIconButton extends Component {
	// props: Props;

	constructor(props) {
		super(props);
	}

	render() {
		let { onTogglePopover, showPopover, ...props } = this.props; // eslint-disable-line no-unused-vars
		return (
			<IconButton {...props} onClick={onTogglePopover}>
				{this._renderPopover()}
			</IconButton>
		);
	}

	_renderPopover = () => {
		if (!this.props.showPopover) {
			return null;
		}
		return (
			<InputPopover
				defaultValue={this.props.defaultValue}
				onSubmit={this._onSubmit}
				onCancel={this._hidePopover}
			/>
		);
	};

	_onSubmit = () => {
		this.props.onSubmit(this.props);
	};

	_hidePopover = () => {
		if (this.props.showPopover) {
			this.props.onTogglePopover(this.props);
		}
	};
}

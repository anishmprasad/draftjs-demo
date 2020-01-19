import React, { useState } from 'react';
import logo from './logo.svg';
import Editor from './RichTextEditor';
import './App.scss';

function App() {
	console.log(Editor.createEmptyValue);
	// The toolbarConfig object allows you to specify custom buttons, reorder buttons and to add custom css classes.
	// Supported inline styles: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Inline-Styles.md
	// Supported block types: https://github.com/facebook/draft-js/blob/master/docs/Advanced-Topics-Custom-Block-Render.md#draft-default-block-render-map
	const toolbarConfig = {
		// Optionally specify the groups to display (displayed in the order listed).
		display: [
			'INLINE_STYLE_BUTTONS',
			'BLOCK_TYPE_BUTTONS',
			'LINK_BUTTONS',
			'BLOCK_TYPE_DROPDOWN',
			'HISTORY_BUTTONS'
		],
		INLINE_STYLE_BUTTONS: [
			{ label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
			{ label: 'Italic', style: 'ITALIC' },
			{ label: 'Underline', style: 'UNDERLINE' }
		],
		BLOCK_TYPE_DROPDOWN: [
			{ label: 'Normal', style: 'unstyled' },
			{ label: 'Heading Large', style: 'header-one' },
			{ label: 'Heading Medium', style: 'header-two' },
			{ label: 'Heading Small', style: 'header-three' }
		],
		BLOCK_TYPE_BUTTONS: [
			{ label: 'UL', style: 'unordered-list-item' },
			{ label: 'OL', style: 'ordered-list-item' }
		]
	};
	const defaultValue = 'default text';
	const textType = 'markdown';
	const [value, setValue] = useState(Editor.createValueFromString(defaultValue, textType));
	const [enable, setEnable] = useState(false);
	function onChange(value) {
		let editorstate = value.getEditorState();
		console.log(editorstate.getCurrentContent());
		console.log(editorstate.getCurrentContent().getPlainText());
		setValue(value);
		setEnable(true);
		// if (onChange) {
		//   // Send the changes up to the parent component as an HTML string.
		//   // This is here to demonstrate using `.toString()` but in a real app it
		//   // would be better to avoid generating a string on each change.
		//   onChange(value.toString("html"));
		// }
	}
	return (
		<div className={`rceditor`}>
			<Editor
				toolbarConfig={toolbarConfig}
				toolbar={enable}
				toolbarOnBottom
				value={value}
				onChange={onChange}
				toolbarClassName='toolbar'
			/>
		</div>
	);
}

export default App;

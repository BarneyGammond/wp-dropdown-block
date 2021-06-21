/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
const { __ } = wp.i18n;

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, className } ) {

	return (
		<div {...useBlockProps}>
			<BlockControls>
				<AlignmentToolbar
					value={attributes.alignment}
					onChange={(newVal) => setAttributes({alignment: newVal})} />
			</BlockControls>
			<RichText
				tagName='h3'
				className='card-subheading'
				style={{textAlign: attributes.alignment}}
				value={attributes.content}
				onChange={(newVal) => setAttributes({content: newVal})}
				placeholder="Subheading Goes Here"
			/>
		</div>
	);
}

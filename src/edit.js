/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
 import { __ } from '@wordpress/i18n';

 /**
  * React hook that is used to mark the block wrapper element.
  * It provides all the necessary props like the class name.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
  */
 import { useBlockProps, RichText } from '@wordpress/block-editor';
 
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
 export default function Edit({ attributes, setAttributes, className }) {
 
	const blockProps = useBlockProps()
 
	return (
		<div { ...blockProps }>
			<div>
				<RichText
					tagName="h2" // The tag here is the element output and editable in the admin
					value={ attributes.headerContent } // Any existing content, either from the database or an attribute default
					className={ className }
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( headerContent ) => setAttributes( { headerContent } ) } // Store updated content as a block attribute
					placeholder={ __( 'Dropdown Header' ) } // Display this text before any content has been added by the user
				/>
			</div>
			<div>
				<RichText
					tagName="p" // The tag here is the element output and editable in the admin
					value={ attributes.dropContent } // Any existing content, either from the database or an attribute default
					className="dropdown-body"
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( dropContent ) => setAttributes( { dropContent } ) } // Store updated content as a block attribute
					placeholder={ __( 'Dropdown Content' ) } // Display this text before any content has been added by the user
				/>
			</div>
		</div>
	);
 }
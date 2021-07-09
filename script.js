loadDropdowns = () => {
	dropdownHeaders = Array.from(
		document.getElementsByClassName( 'dropdown-header' )
	);

	dropdownHeaders.forEach( ( element ) => {
		element.addEventListener( 'click', () => {
			if ( element.classList.contains( 'active' ) ) {
				element.parentElement.nextSibling.style.height = '0px';
				element.classList.remove( 'active' );
			} else {
				element.classList.add( 'active' );
				let textHeight =
					element.parentElement.nextSibling.firstChild.offsetHeight;
				element.parentElement.nextSibling.style.height = `${ textHeight }px`;
			}
		} );
	} );
};

document.addEventListener( 'DOMContentLoaded', loadDropdowns );

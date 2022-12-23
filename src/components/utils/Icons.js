/* Values
nutrition
create
barbell-outline
book
paw
restaurant
medkit
library
happy
sad
*/

export function Icons({ type }) {
	if (type.length > 0) {
		return <ion-icon name={type}></ion-icon>;
	}

	return <ion-icon name="close-circle" color="danger"></ion-icon>;
}

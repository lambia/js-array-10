const teachers = [
	'Nathan',
	'Ed',
	'Fabio',
	'Phil',
	'Carlo',
	'Lewis',
	'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

console.log("Array originale: ", teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log("Reserved Teachers: ", reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
	const teacher = teachers[i];

	if(teacher.length >= 5) {
		longNames.push(teacher);
	}

}
console.log("Long Names:", longNames);

// 3. Rimuovi 'Ed' dall'array teachers
const indiceDiEd = teachers.indexOf("Ed");
if(indiceDiEd !== -1) {
	teachers.splice(indiceDiEd, 1);
}
console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = ( teachers.indexOf("Fabio") != -1 );
console.log(isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.join(", ");
console.log(teachersString);
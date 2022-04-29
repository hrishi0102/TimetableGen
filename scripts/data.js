let year = '2024';
let semester = 'Spring';

function School(code, name, courses) {
	this.code = code;
	this.name = name;
	this.courses = courses;
}

function short_name(school) {
	return school.name.split(' ').slice(2).join(' ')
}

function Course(name, nick, slot) {
	this.name = name;
	this.nick = nick;
	this.slot = slot;
}

let schools = {
	'INSTRU': new School('INS', 'Instrumentation', []),
	'ETRX': new School('ET', 'Electronics', []),
	'IT': new School('IT', 'Information Technology', []),
	'CS': new School('CS', 'Computer Sciences', []),
	'EXTC': new School('EX', 'Electronics and Telecommunication', []),
};

let courses = {
	// always use A1, A2, ... for degenerates of slot A
	
	/* Computer Science */
	'CS202': new Course('Analysis of Algorithms (AOA)', 'AOA', 'C'),
	'CS203': new Course('Engineering Mathematics (EM)', 'Maths', 'E'),
	'CS204': new Course('Operating System (OS)', 'OS', 'A'),
	'CS205': new Course('Python (PY)', 'Python', 'B'),
	'CS206': new Course('Microprocessors (MP)', 'MP', 'D'),
	'CS207': new Course('Database Management (DBMS)', 'DBMS', 'F'),


	/* extc */
	'EX405': new Course('Mathematics (EM)', 'Maths', 'E'),
	'EX410': new Course('Integrated Circuits (IC)', 'IC', 'C'),
	'EX406': new Course('Wave Theory And Propagation(WT)', 'Wave Theory', 'A'),
	'EX407': new Course('Control Systems  (CS)', 'CS', 'D'),
	'EX409': new Course('Analog Communications  (AC)', 'AC', 'B'),

	/* IT */
	'IT301': new Course('Automated Theory (AT)', 'AT', 'D'),
	'IT302': new Course('Networking (CNN)', 'CNN', 'B'),
	'IT303': new Course('Computer Organization (COA)', 'COA', 'A'),
	'IT304': new Course('Operating System (OS)', 'OS', 'E'),
	'IT305': new Course('Mathematics (M1)', 'Maths', 'C'),

	// ETRX
	'ET701': new Course('Applied Mathematics IV (AM-4)', 'AM', 'D'),
	'ET702': new Course('Analog And Digital IC Design (IC) ', 'IC', 'F'),
	'ET703': new Course('Principle Of Communication Engg(PCE)', 'PCE', 'C'),
	'ET704': new Course('Electronics Devices And Circuits II (EDC)', 'EDC', 'A'),
	'ET705': new Course('Electromagnetic Wave Theory (EMT) ', 'EMT', 'E'),
	'ET706': new Course('Simulation Software Workshop (SSW) ', 'SSW', 'B'),

	// Instru
	'INS501': new Course('Applied Mathematics IV (AM-4)', 'AM', 'A'),
	'INS502': new Course('Transducers II (Trans 2) ', 'T2', 'F'),
	'INS503': new Course('Analytical Instrumentation(AI))', 'AI', 'B'),
	'INS504': new Course('Signal Conditioning Circuit Design(SCC)', 'SCC', 'C'),
	'INS505': new Course('Application Software Practice (ASP)  ', 'ASP', 'E'),
	'INS506': new Course('Feedback Control system (FCS) ', 'FCS', 'D'),
};

for (let course in courses) {
	for (let school in schools) {
		if (schools[school].code === course.match(/^[^0-9]*/)[0]) {
			schools[school].courses.push(course);
		}
	}
}

// Colorblindness-friendly color palette from: https://davidmathlogic.com/colorblind/
let colors = [
	'#117733',
	'#44aa99',
	'#d55e00',
	'#88ccee',
	'#0072b2',
	'#ddcc77',
	'#cc6677',
	'#aa4499',
	'#882255',
	'#e69f00'
];

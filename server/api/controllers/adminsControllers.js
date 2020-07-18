import { events, companies, students } from '../models/data.json';

const qualityValues = ['good', 'bad'];

export const postEvent = (req, res) => {
	const { event } = req.body;
	if (!event) {
		res.status(422).send();
		return;
	}
	events.push(event);
	console.log(`postEvent: ${event}`);
	res.status(200).send(event);
};

export const postCompany = (req, res) => {
	const { company } = req.body;
	if (!company) {
		res.status(422).send();
		return;
	}
	companies.push(company);
	console.log(`postCompany: ${company}`);
	res.status(200).send(company);
};

export const getStudents = (req, res) => {
	console.log(`getStudents: ${students}`);
	res.status(200).send(students);
};

export const getStudent = (req, res) => {
	const { studentID } = req.params;
	const student = students.filter(({ id }) => id === parseInt(studentID, 10));
	if (student.length < 1) {
		res.status(404).send();
		return;
	}
	res.status(200).send(student[0]);
};

export const updateStudent = (req, res) => {
	const { studentID } = req.params;
	const { quality } = req.body;
	const student = students.filter(({ id }) => id === parseInt(studentID, 10));
	if (student.length < 1 || !quality) {
		res.status(404).send();
		return;
	}
	student[0].quality = quality;
	res.status(200).send(student[0]);
};
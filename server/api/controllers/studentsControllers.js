import { students } from '../models/data.json';

// eslint-disable-next-line import/prefer-default-export
export const postResume = (req, res) => {
	const { student } = req.body;
	if (!student) {
		res.status(422).send();
		return;
	}
	delete student.resume;
	const lastIndex = students[students.length - 1].id;
	student.id = lastIndex + 1;
	student.resume_url = `www.us.com/students/${student.id}/resume`;
	student.quality = 'not_reviewed';
	students.push(student);
	console.log(`postResume: ${student}`);
	res.status(200).send(student);
};

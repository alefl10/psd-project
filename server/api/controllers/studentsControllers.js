import { students } from '../models/data.json';

const resumes = [];

const uploadResumeToAWS = (studentID, resume) => {
	resumes.push(resume);
	resumes.forEach(res => console.log(res));
	return `www.us.com/students/${studentID}/resume`;
};

// eslint-disable-next-line import/prefer-default-export
export const postResume = (req, res) => {
	const { student } = req.body;
	if (!student) {
		res.status(422).send();
		return;
	}
	const lastIndex = students[students.length - 1].id;
	student.id = lastIndex + 1;
	student.resume_url = uploadResumeToAWS(student.id, student.resume);
	student.quality = 'not_reviewed';
	delete student.resume;
	students.push(student);
	console.log(`postResume: ${student}`);
	res.status(200).send(student);
};

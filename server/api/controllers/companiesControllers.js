import { students } from '../models/data.json';

// eslint-disable-next-line import/prefer-default-export
export const getStudents = (req, res) => {
	const goodStudents = students.filter(({ quality }) => quality === 'good');
	res.status(200).send(goodStudents);
};

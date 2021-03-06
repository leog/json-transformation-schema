/**
 * Testing the type - date.
 */

describe('Type - object', () => {

	/* Helpers */
	const { verifyTransformation, generateValidationTests } = require("../../test-helpers");

	/* Data */
	const fixedDate = new Date('2019-01-01T00:00:00.000Z');

	/* Tests */
	test('transform should transform strings to dates', () => {
		const data = fixedDate.toISOString();
		const expectation = fixedDate;
		const schema = {
			type: 'string',
			targetType: 'date',
		};

		verifyTransformation({data, schema, expectation});
	});

	test('transform should transform dates to strings', () => {
		const data = fixedDate;
		const expectation = fixedDate.toISOString();
		const schema = {
			type: 'date',
			targetType: 'string',
		};

		verifyTransformation({data, schema, expectation});
	});

	test('transform should transform dates to strings according to the given format', () => {
		const data = fixedDate;
		const expectation = fixedDate.getUTCFullYear().toString();
		const schema = {
			type: 'date',
			targetType: 'string',
			format: 'yyyy',
		};

		verifyTransformation({data, schema, expectation});
	});

	generateValidationTests('date');
});

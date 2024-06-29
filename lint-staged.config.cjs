module.exports = {
	'**/*.{ts,js,cjs,json,yaml}': 'prettier --write',
	'**/*.tf': ['terraform fmt', (filesnames) => filesnames.map((filename) => `tflint --filter ${filename}`).join(';')],
};

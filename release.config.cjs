const config = {
	branches: ['main'],
	repositoryUrl: 'git+https://github.com/tal-rofe/talrofe',
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				releaseRules: [
					{ type: 'feat', release: 'minor' },
					{ type: 'fix', release: 'patch' },
					{ type: 'perf', release: 'patch' },
					{ type: 'breaking', release: 'major' },
				],
			},
		],
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/git',
		'@semantic-release/github',
		['@semantic-release/npm', { npmPublish: false }],
	],
};

module.exports = config;

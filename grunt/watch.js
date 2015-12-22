module.exports = {
	files: ['config.json', 'contents/**/*.md', 'minimalist/sass/**/*.scss', 'templates/*.jade'],
  tasks: ['wintersmith:local', 'sass', 'copy']
};
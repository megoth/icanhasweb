module.exports = {
  'default': ['dev', 'watch'],
  'dev': ['wintersmith:local', 'sass:default'],
  'prod': ['clean:build', 'wintersmith:prod', 'sass:prod', 'webpack:prod']
}

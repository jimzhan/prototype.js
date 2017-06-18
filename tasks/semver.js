const yargs = require('yargs');
const semver = require('semver');
const logger = require('winston');
const pkg = require('../package.json');


const patch = () => {
  logger.info(`current version: ${pkg.version}`);
  logger.info(`next version: ${semver.inc(pkg.version, 'patch')}`);
};

const minor = () => {
  logger.info(`current version: ${pkg.version}`);
  logger.info(`next version: ${semver.inc(pkg.version, 'minor')}`);
};

const major = () => {
  logger.info(`current version: ${pkg.version}`);
  logger.info(`next version: ${semver.inc(pkg.version, 'major')}`);
};

const options = yargs.usage('USAGE: $0 <command>')  // eslint-disable-line
   .command('patch', 'Increment a version by `patch` level', patch)
   .command('minor', 'Increment a version by `minor` level', minor)
   .command('major', 'Increment a version by `major` level', major)
   .help('help')
   .argv;

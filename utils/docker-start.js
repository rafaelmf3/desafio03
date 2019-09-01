const shell = require('shelljs');

if (!shell.which('docker')) {
  shell.echo('Sorry, this script requires docker');
  shell.exit(1);
}

if (!shell.which('docker-compose')) {
  shell.echo('Sorry, this script requires docker-compose');
  shell.exit(1);
}

shell.cd('utils');
if (shell.exec('docker-compose up -d').code !== 0) {
  shell.echo('Error: Failed to run docker-compose');
  shell.exit(1);
}

shell.echo('Started docker containers');

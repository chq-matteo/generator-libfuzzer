'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the solid ${chalk.red('generator-libfuzzer')} generator!`)
    );

    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'What\'s the name of the project?',
      default: 'fuzz'
    }
  ];


    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('src/fuzz_target.cc'),
      this.destinationPath(this.props.name + 'src/fuzz_target.cc')
    );
    this.fs.copy(
      this.templatePath('Makefile'),
      this.destinationPath(this.props.name + 'Makefile')
    );
  }

  install() {
    this.installDependencies();
  }
};

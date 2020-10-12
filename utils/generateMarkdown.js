// function to generate markdown for README
function generateMarkdown(data) {
  // const title = data.title.split('\\n').join('\n');
  // return title;
  return `# ${data.title}
[![${data.license}](https://img.shields.io/badge/license-${data.license}-brightGreen)](${getLicenseLink(data.license)})

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under ${data.license}. For more information, see {link to license}.

## Contributing
${data.contributing}

## Tests
${data.test}

## Questions
For additional questions, feel free to [send me an email](mailto:${data.email}). You can also find more information on my [GitHub profile](https://github.com/${data.userName}).
`;
}

//generate license link to a file LICENSE with year and owner information
function getLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'GNU GPLv3':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'ISC License':
      return 'https://opensource.org/licenses/ISC';
  }
}



module.exports = generateMarkdown;

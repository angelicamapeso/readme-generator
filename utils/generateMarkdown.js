// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![${data.license}](https://img.shields.io/badge/license-${data.license}-brightGreen)](https://choosealicense.com/licenses/mit/)

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

module.exports = generateMarkdown;

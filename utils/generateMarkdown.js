// function to generate markdown for README
function generateMarkdown(data) {
  const markdown = fillMarkdownTemplate(data);
  return formatNewlineText(markdown);
}

function fillMarkdownTemplate(data) {
  let markdown =  `# ${data.title}
${getBadge(data.license)}

${data.description}

${getTableOfContents(data.contributing, data.test)}

${getSection('Installation', data.installation)}

${getSection('Usage', data.usage)}

${getSection('License', `This project is licensed under ${data.license}. For more information, see ${getLicenseLink(data.license)}.`)}

${getSection('Contributing', data.contributing)}

${getSection('Tests', data.test)}

${getSection('Questions', `For additional questions, feel free to [send me an email](mailto:${data.email}). You can also find more information on my [GitHub profile](https://github.com/${data.userName})`)}.
`;
  return markdown;
}

function getBadge(license) {
  return `[![${license}](https://img.shields.io/badge/License-${license}-brightGreen)](${getLicenseLink(license)})`
}

function getTableOfContents(contributing, test) {
 return `## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
}

function getSection(title, body) {
 return `## ${title}
${body}`;
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

function formatNewlineText(text) {
  return text.split('\\n').join('\n');
}

module.exports = generateMarkdown;

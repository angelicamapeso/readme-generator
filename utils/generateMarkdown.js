// function to generate markdown for README
function generateMarkdown(data) {
  const markdown = fillMarkdownTemplate(data);
  return formatNewlineText(markdown);
}

//function to fill template
//kept separate so that newline characters can be
//inserted to the final string
function fillMarkdownTemplate(data) {
  return `# ${data.title}
${getBadge(data.license)}

${data.description}

${getTableOfContents(data.contributing, data.test)}

${getSection('Installation', data.installation)}

${getSection('Usage', data.usage)}

${getSection('License', `This project is licensed under the [${data.license}](${getLicenseLink(data.license)}).`)}

${getSection('Contributing', data.contributing)}

${getSection('Tests', data.test)}

${getSection('Questions', `For additional questions, feel free to [send me an email](mailto:${data.email}). You can also find more information on my [GitHub profile](https://github.com/${data.userName})`)}.
`;
}

//function to get license badge
function getBadge(license) {
  return `[![${license}](https://img.shields.io/badge/License-${formatURLText(license)}-brightGreen)](${getLicenseLink(license)})`
}

//function to get table of contents
function getTableOfContents(contributing, test) {
 return `## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
}

//generic function for different sections of document
function getSection(title, body) {
 return `## ${title}
${body}`;
}

//function to get license link
function getLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'GNU GPLv3 License':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'ISC License':
      return 'https://opensource.org/licenses/ISC';
  }
}

//function to format string when placed in url
function formatURLText(text) {
  return text.replace(/ /g, '%20');
}

//function to add newline characters to string
//inputted inline characters with inquirer are escaped
function formatNewlineText(text) {
  return text.split('\\n').join('\n');
}

module.exports = generateMarkdown;

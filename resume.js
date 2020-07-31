const data = {
  name: 'Alexandra Caplan',
  mainEmoji: {
    character: '👋',
    ariaLabel: 'wave',
  },
  phoneNumber: '5083853950',
  email: 'alexandracaplan@rbi.com',
  githubHandle: 'https://github.com/AlexandraCaplan',
  linkedInHandle: 'linkedin.com/alexandra-caplan',
  workExperiences: [
    {
      emoji: '🎮',
      jobTitle: 'MBA Intern',
      institution: 'RBI',
      dates: '2019',
      details: [
        'Developed local media strategy for Popeyes franchisees across US markets',
        'Analysed internal and external data to develop company recommendation',
      ],
    },
    {
      emoji: '🎮',
      jobTitle: 'Client Services Manager',
      institution: 'AlphaSights',
      dates: '2016 - 2018',
      details: [
        'Led a team of seven associates',
        'Grew client base to a portfolio of 25 private equity clients',
        'Analysed industry trends and metrics to forecast annual performance ',
      ],
    },
    {
      emoji: '🎮',
      jobTitle: 'Associate',
      institution: 'AlphaSights',
      dates: '2014 - 2016',
      details: [
        'Engaged and persuaded C-Level executives to work with AlphaSights',
        'Researched competitive landscapes and diverwse industry trends',
        'Managed multiple end-to-end projects with tight timelines',
      ],
    },
  ],
  education: [
    {
      emoji: '🧙',
      university: 'London Business School',
      school: 'MBA Program',
      dates: '2018 - 2020',
      details: [
        "Women's Touch Rugby Club President",
        'Interned for Music Start Up - Sofar Sounds',
      ],
    },
    {
      emoji: '🧙',
      university: 'Georgetown University',
      institution: 'College',
      dates: '2014 - 2018',
      details: [
        'Double major in Portuguese and Government',
        "Women's Club Lacrosse",
      ],
    },
  ],
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.ariaLabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent = `github.com/${data.githubHandle}`;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent = `linkedin.com/in/${data.linkedInHandle}`;

function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="">${workExperience.emoji}</span>
      ${workExperience.jobTitle}<span class="comma">,</span>
      <span class="light">${workExperience.institution}</span>
    </h3>
    <ul>
      ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}

const workExperienceContainer = document.querySelector('#work-experience');
const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
workExperienceContainer.innerHTML = allWorkExperiencesHTML;

const renderEducationalExperience = educationalExperience => `
  <div>
    <span class="date">${educationalExperience.dates}</span>
    <h3>
      <span role="img" aria-label="">${educationalExperience.emoji}</span>
      ${educationalExperience.university}<span class="comma">,</span>
      <span class="light">${educationalExperience.school}</span>
    </h3>
    <ul>
      ${educationalExperience.details
        .map(detail => `<li>${detail}</li>`)
        .join('')}
    </ul>
  </div>`;

const educationContainer = document.querySelector('#education');
const eachEducationalExperienceHTML = data.educationalExperiences.map(
  renderEducationalExperience
);
const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
educationContainer.innerHTML = allEducationalExperiencesHTML;

const data = {
  name: 'Alexandra Caplan',
  mainEmoji: {
    character: '👋',
    ariaLabel: 'wave',
  },
  phoneNumber: '5083853950',
  email: 'alexandracaplan@gmail.com',
  githubHandle: 'https://github.com/AlexandraCaplan',
  linkedInHandle: 'linkedin.com/alexandra-caplan',
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

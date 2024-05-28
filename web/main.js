let currentContentBlock = { id: 'philosophy', title: 'Philosophy' };

const navListElements = document.getElementsByClassName('content-block-link');
const navListElementsArray = Array.from(navListElements);

navListElementsArray.forEach((element) => {
  element.addEventListener('click', handleContentBlockLinkClick);
});

function handleContentBlockLinkClick(event) {
  setContentBlock({
    id: event.target.getAttribute('data-content-block'),
    title:
      event.target.innerText === 'GenerativeGig'
        ? 'Philosophy'
        : event.target.innerText,
  });
}

function setContentBlock(newContentBlock) {
  const previousContentBlockElement = document.getElementById(
    currentContentBlock.id
  );
  previousContentBlockElement.style.display = 'none';

  const previousContentBlockLinkElement = document.getElementById(
    `${currentContentBlock.id}-link`
  );
  previousContentBlockLinkElement.style.textDecoration = 'none';

  if (
    currentContentBlock.id === 'generativegig' ||
    currentContentBlock.id === 'alien-paul-x-generativegig' ||
    currentContentBlock.id === 'portal-k09'
  ) {
    const liveActsNavButtonElement = document.getElementById('live-acts');
    liveActsNavButtonElement.style.textDecoration = 'none';
  }

  currentContentBlock = newContentBlock;

  const currentContentBlockElement = document.getElementById(
    currentContentBlock.id
  );
  currentContentBlockElement.style.display = 'block';

  const currentContentBlockLinkElement = document.getElementById(
    `${currentContentBlock.id}-link`
  );
  currentContentBlockLinkElement.style.textDecoration = 'overline';

  if (
    currentContentBlock.id === 'generativegig' ||
    currentContentBlock.id === 'alien-paul-x-generativegig' ||
    currentContentBlock.id === 'portal-k09'
  ) {
    const liveActsNavButtonElement = document.getElementById('live-acts');
    liveActsNavButtonElement.style.textDecoration = 'overline';
  }

  if (window.innerWidth <= 800) {
    const headerContent = document.querySelector('.header-content');

    headerContent.style.display = 'none';

    const titleElement = document.getElementById('page-title');

    titleElement.innerText = currentContentBlock.title;
  }

  const liveActsMenu = document.getElementById('nav-ul-ul-live-acts');

  liveActsMenu.style.display = 'none';
}

window.addEventListener('load', () => {
  if (window.innerWidth <= 800) {
    const titleElement = document.getElementById('page-title');

    titleElement.innerText = currentContentBlock.title;
  }
});

const hamburger = document.querySelector('.hamburger');
const headerContent = document.querySelector('.header-content');

hamburger.addEventListener('click', (event) => {
  headerContent.style.display = 'flex';
});

window.addEventListener('click', (event) => {
  if (
    window.innerWidth <= 800 &&
    event.target !== hamburger &&
    !headerContent.contains(event.target)
  ) {
    headerContent.style.display = 'none';
  }
});

window.addEventListener('resize', function () {
  const titleElement = document.getElementById('page-title');

  if (window.innerWidth >= 801) {
    headerContent.style.display = 'flex';
    titleElement.innerText = '';
  } else {
    titleElement.innerText = currentContentBlock.title;
  }
});

const liveActsNavButtonElement = document.getElementById('live-acts');

liveActsNavButtonElement.addEventListener('click', () => {
  const liveActsMenu = document.getElementById('nav-ul-ul-live-acts');

  if (liveActsMenu.style.display === 'none') {
    liveActsMenu.style.display = 'block';
  } else {
    liveActsMenu.style.display = 'none';
  }
});

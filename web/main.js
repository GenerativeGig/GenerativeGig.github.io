/** Content block */
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

    const contentBlockTitleElement = document.getElementById(
      'content-block-title'
    );

    contentBlockTitleElement.innerText = currentContentBlock.title;
  }

  const liveActsMenu = document.getElementById('nav-ul-ul-live-acts');

  liveActsMenu.style.display = 'none';
}

/** Toggle live acts menu visibility */
/** Toggle hamburger menu visibility */
const liveActsNavButtonElement = document.getElementById('live-acts');
const liveActsMenu = document.getElementById('nav-ul-ul-live-acts');

liveActsNavButtonElement.addEventListener('click', () => {
  if (liveActsMenu.style.display === 'none') {
    liveActsMenu.style.display = 'block';
  } else {
    liveActsMenu.style.display = 'none';
  }
});

const hamburger = document.querySelector('.hamburger');
const headerContent = document.querySelector('.header-content');

hamburger.addEventListener('click', () => {
  headerContent.style.display = 'flex';
});

const closeHamburgerMenuElement = document.getElementById(
  'close-hamburger-menu'
);

closeHamburgerMenuElement.addEventListener('click', () => {
  headerContent.style.display = 'none';
  liveActsMenu.style.display = 'none';
});

/** Load: Content block title */
window.addEventListener('load', () => {
  if (window.innerWidth <= 800) {
    const contentBlockTitleElement = document.getElementById(
      'content-block-title'
    );

    contentBlockTitleElement.innerText = currentContentBlock.title;
  }
});

/** Resize: live acts menu, content block title and header content visibility */
window.addEventListener('resize', function () {
  liveActsMenu.style.display = 'none';

  const contentBlockTitleElement = document.getElementById(
    'content-block-title'
  );

  if (window.innerWidth >= 801) {
    headerContent.style.display = 'flex';
    contentBlockTitleElement.innerText = '';
  } else {
    headerContent.style.display = 'none';
    contentBlockTitleElement.innerText = currentContentBlock.title;
  }
});

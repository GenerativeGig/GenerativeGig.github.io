let currentContentBlock = 'philosophy';

const navListElements = document.getElementsByClassName('content-block-link');
const navListElementsArray = Array.from(navListElements);

navListElementsArray.forEach((element) => {
  element.addEventListener('click', handleContentBlockLinkClick);
});

function handleContentBlockLinkClick(event) {
  setContentBlock(event.target.getAttribute('data-content-block'));
}

function setContentBlock(newContentBlock) {
  const previousContentBlockElement =
    document.getElementById(currentContentBlock);
  previousContentBlockElement.style.display = 'none';

  const previousContentBlockLinkElement = document.getElementById(
    `${currentContentBlock}-link`
  );
  previousContentBlockLinkElement.style.textDecoration = 'none';

  if (
    currentContentBlock === 'generativegig' ||
    currentContentBlock === 'alien-paul-x-generativegig' ||
    currentContentBlock === 'portal-k09'
  ) {
    const liveActsNavButtonElement = document.getElementById('live-acts');
    liveActsNavButtonElement.style.textDecoration = 'none';
  }

  currentContentBlock = newContentBlock;

  const currentContentBlockElement =
    document.getElementById(currentContentBlock);
  currentContentBlockElement.style.display = 'block';

  const currentContentBlockLinkElement = document.getElementById(
    `${currentContentBlock}-link`
  );
  currentContentBlockLinkElement.style.textDecoration = 'overline';

  if (
    currentContentBlock === 'generativegig' ||
    currentContentBlock === 'alien-paul-x-generativegig' ||
    currentContentBlock === 'portal-k09'
  ) {
    const liveActsNavButtonElement = document.getElementById('live-acts');
    liveActsNavButtonElement.style.textDecoration = 'overline';
  }
}

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
  if (window.innerWidth >= 801) {
    headerContent.style.display = 'flex';
  }
});

import CONSTANTS from './../../constants.js';

const { STATIC_IMAGES_PATH } = CONSTANTS;

const featuresCard = [
  {
    img: `${STATIC_IMAGES_PATH}features_icons/handshake.svg`,
    title: 'Consultant Led',
    body: 'Work one-on-one with a Atom branding consultant.',
  },
  {
    img: `${STATIC_IMAGES_PATH}features_icons/crowd.svg`,
    title: 'Crowd Powered',
    body: 'Work with our top rated Creatives and receive a hoge breadth of ideas.',
  },
  {
    img: `${STATIC_IMAGES_PATH}features_icons/diagram.svg`,
    title: 'Trademark Reports',
    body: 'Comprehensive trademark screening on your shortlisted names.',
  },
  {
    img: `${STATIC_IMAGES_PATH}features_icons/megaphone.svg`,
    title: 'Audience Testing',
    body: 'Get rapid feedback from real people on your shortlist of business names.',
  },
];

export default featuresCard;

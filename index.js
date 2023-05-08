import { Podcast } from './Podcast/index.js';

const episodes = [
  {
    num: 127,
    title: 'Hledání plyšového Yettiho',
    guest: 'Vojtěch Ryba',
  },
  {
    num: 128,
    title: 'Moderní hrachová polévka',
    guest: 'Kamila Štancová',
  },
  {
    num: 129,
    title: 'Poloautomatické zrcadlo',
    guest: 'Janka Janovská',
  },
  {
    num: 130,
    title: 'Máčené hlavy parlamentu',
    guest: 'Jonáš Daněk',
  },
  {
    num: 131,
    title: 'Služby na hraně přívěsu',
    guest: 'Tereza Křivánková',
  },
  {
    num: 132,
    title: 'Klasifikace sněžných klokanů',
    guest: 'Josef Stix',
  },
  {
    num: 133,
    title: 'Rybolov v Oceánu bouří',
    guest: 'Ludmila Gajová',
  },
];

const renderPodcast = (items) => {
  const episodesListElm = document.querySelector('.episodes-list');

  episodesListElm.innerHTML = items
    .map(oneEpisode => Podcast(oneEpisode))
    .join('');
}

renderPodcast(episodes);
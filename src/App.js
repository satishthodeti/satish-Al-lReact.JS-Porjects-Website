import DestinationSearch from './components/DestinationSearch'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Click Counter Project',
    gitLink: 'https://github.com/satishthodeti/clickCounter',
    projectLink: 'https://satishreact1.ccbp.tech/',
    imgUrl: 'https://i.ibb.co/qWVps93/Screenshot-2023-04-28-120503.png',
  },
  {
    id: 2,
    name: 'Speedometer Project',
    gitLink: 'https://github.com/satishthodeti/speedometer',
    projectLink: 'https://satishreact2.ccbp.tech/',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/speedometer-img.png',
  },
  {
    id: 3,
    name: 'Fruits Counter Project',
    gitLink: 'https://github.com/satishthodeti/fruits-Counter-',
    projectLink: 'https://satishreact3.ccbp.tech/',
    imgUrl: 'https://i.ibb.co/DGf70WV/Screenshot-2023-04-28-131309.png',
  },
  {
    id: 4,
    name: 'Welcome App Project',
    gitLink: 'https://github.com/satishthodeti/satish-welcomeApp-',
    projectLink: 'https://satishreact4.ccbp.tech/',
    imgUrl: 'https://i.ibb.co/6XBQDg0/Screenshot-2023-04-28-132057.png',
  },
  {
    id: 5,
    name: 'Light Dark Mode Project',
    gitLink: 'https://github.com/satishthodeti/LightDarkModes',
    projectLink: 'https://satishreact5.ccbp.tech/',
    imgUrl: 'https://i.ibb.co/d4HbMtH/Screenshot-2023-04-28-132802.png',
  },
  {
    id: 6,
    name: 'Show/Hide App Project',
    gitLink: 'https://github.com/satishthodeti/showHideApp',
    projectLink: 'https://satishreact6.ccbp.tech/',
    imgUrl: 'https://i.ibb.co/N2ZfDjy/Screenshot-2023-04-28-133304.png',
  },
  {
    id: 7,
    name: 'Even Odd App Project',
    gitLink: 'https://github.com/satishthodeti/speedometer',
    projectLink: 'https://satishreact7.ccbp.tech/',
    imgUrl: 'https://i.ibb.co/4sDHnb6/Screenshot-2023-04-28-133938.png',
  },
  {
    name: 'Login & Logout App Project',
    gitLink: 'https://github.com/satishthodeti/loginLogoutApp',
    projectLink: 'https://satishreact8.ccbp.tech/',
    imgUrl: 'https://i.ibb.co/3BLKRF5/Screenshot-2023-04-28-135135.png',
  },
  {
    id: 9,
    name: 'Random Number Generator Project',
    gitLink: 'https://github.com/satishthodeti/randomNumberGenerator',
    projectLink: 'https://satishreact9.ccbp.tech/',
    imgUrl: 'https://i.ibb.co/9NbXCZ7/Screenshot-2023-04-28-135427.png',
  },
  {
    id: 10,
    name: 'Speedometer Project',
    gitLink: 'https://github.com/satishthodeti/speedometer',
    projectLink: 'https://satishreact2.ccbp.tech/',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/speedometer-img.png',
  },
  {
    id: 11,
    name: 'Speedometer Project',
    gitLink: 'https://github.com/satishthodeti/speedometer',
    projectLink: 'https://satishreact2.ccbp.tech/',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/speedometer-img.png',
  },
  {
    id: 12,
    name: 'Speedometer Project',
    gitLink: 'https://github.com/satishthodeti/speedometer',
    projectLink: 'https://satishreact2.ccbp.tech/',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/speedometer-img.png',
  },
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App

import ReactGA from "react-ga";

const Ga = () => {
    const GA_ID = 'G-DLY9FRMTGB';
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);  
}

export default Ga;
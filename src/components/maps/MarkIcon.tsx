import L from 'leaflet';
import marker from '../../images/';
const iconPerson = new L.Icon({
    iconUrl: require('../img/marker-pin-person.svg'),
    iconRetinaUrl: require('../img/marker-pin-person.svg'),
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };
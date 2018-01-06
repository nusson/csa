import { GOOGLE_MAP_API_KEY as API_KEY } from '@/config/Settings';
import { jsonp } from './Utils';

const gapiurl = `http://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=init`;

export default {
  load(done = () => {}) {
    jsonp(gapiurl, 'init', done);
  },
  createMap(el, options = {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  }) {
    return new google.maps.Map(el, options); // eslint-disable-line no-undef
  },
  geolocalisation(onSuccess = (position) => {
    // map.setCenter({
    //   lat: position.coords.latitude,
    //   lng: position.coords.longitude
    // });
  }, onError = () => {
    // handleLocationError(true, infoWindow, map.getCenter());
  }) {
    // Try HTML5 geolocation.
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      // Browser doesn't support Geolocation
      onError();
    }
  },
};

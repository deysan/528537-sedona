function initMap() {
  var sedona = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {
      lat: 34.868823,
      lng: -111.761111
    },
    styles: [{
        "featureType": "water",
        "stylers": [{
            "visibility": "on"
          },
          {
            "color": "#b5cbe4"
          }
        ]
      },
      {
        "featureType": "landscape",
        "stylers": [{
          "color": "#efefef"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#83a5b0"
        }]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#bdcdd3"
        }]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
          "color": "#ffffff"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#e3eed3"
        }]
      },
      {
        "featureType": "administrative",
        "stylers": [{
            "visibility": "on"
          },
          {
            "lightness": 33
          }
        ]
      },
      {
        "featureType": "road"
      },
      {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [{
            "visibility": "on"
          },
          {
            "lightness": 20
          }
        ]
      },
      {},
      {
        "featureType": "road",
        "stylers": [{
          "lightness": 20
        }]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 34.8681123,
      lng: -111.761111
    },
    icon: "img/icon-map-marker.svg",
    map: sedona
  });
  var InfoWindow = new google.maps.InfoWindow({
    content: "<b>Седона – небольшой городок в Аризоне, заслуживающий большего!</b>"
  })
  InfoWindow.open(sedona, marker);
  marker.addListener("click", function() {
    InfoWindow.open(sedona, marker);
  })
}

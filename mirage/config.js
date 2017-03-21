export default function() {
  this.namespace = '/api';

      let works = [{
        type: 'works',
        id: 'down-east-magazine',
        attributes: {
          title: 'Down East Magazine',
          owner: 'Down East Enterprise',
          category: 'Hired',
          type: 'Website',
          url: 'http://www.downeast.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }
      }, {
        type: 'works',
        id: 'shooting-sportsman-magazine',
        attributes: {
          title: 'Shooting Sportsman Magazine',
          owner: 'Down East Enterprise',
          category: 'Hired',
          type: 'Website',
          url: 'http://www.shootingsportsman.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
        }
      }, {
        type: 'works',
        id: 'shineridersco-com',
        attributes: {
          title: 'Shine Riders Co.',
          owner: 'Shine Riders Co.',
          category: 'Hired',
          type: 'Website',
          url: 'http://www.shineridersco.com',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'luras-fabric-shop',
        attributes: {
          title: 'Luras Fabric Shop',
          owner: 'Luras Fabric Shop',
          category: 'Hired',
          type: 'Website',
          url: 'http://www.lurasfabricshop.com/',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }
      }, {
        type: 'works',
        id: 'nasons-corner-park',
        attributes: {
          title: 'Nasons Corner Park',
          owner: 'Mike TV',
          category: 'Hired',
          type: 'Website',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
        }
      }, {
        type: 'works',
        id: 'sandy-bailey',
        attributes: {
          title: 'Sandy Baily Website',
          owner: 'Sandy Bailey',
          category: 'Hired',
          type: 'Website',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'live-music-9',
        attributes: {
          title: 'Live Music 9',
          owner: 'Me',
          category: 'Artwork',
          type: 'Poster Design',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }
      }, {
        type: 'works',
        id: 'live-music-11',
        attributes: {
          title: 'Live Music 11',
          owner: 'Me',
          category: 'Artwork',
          type: 'Poster Design',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
        }
      }, {
        type: 'works',
        id: 'dantes-inferno-1',
        attributes: {
          title: 'Dantes Inferno #1',
          owner: 'Me',
          category: 'Artwork',
          type: 'Poster Design',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'dantes-inferno-2',
        attributes: {
          title: 'Dantes Inferno #2',
          owner: 'Me',
          category: 'Artwork',
          type: 'Poster Design',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'dantes-inferno-3',
        attributes: {
          title: 'Dantes Inferno #3',
          owner: 'Me',
          category: 'Artwork',
          type: 'Poster Design',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'we-are-the-children',
        attributes: {
          title: 'We are the Children',
          owner: 'Me',
          category: 'Artwork',
          type: 'Poster Design',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'study-1',
        attributes: {
          title: 'Study #1',
          owner: 'Me',
          category: 'Artwork',
          type: 'Pencil Drawing',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'study-2',
        attributes: {
          title: 'Study #2',
          owner: 'Me',
          category: 'Artwork',
          type: 'Pencil Drawing',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'study-3',
        attributes: {
          title: 'Study #3',
          owner: 'Me',
          category: 'Artwork',
          type: 'Pencil Drawing',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'smile',
        attributes: {
          title: 'Smile',
          owner: 'Me',
          category: 'Artwork',
          type: 'Pencil Drawing',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'cow-skull',
        attributes: {
          title: 'Cow Skull',
          owner: 'Me',
          category: 'Artwork',
          type: 'Charcoal Drawing',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'sidney',
        attributes: {
          title: 'Sidney',
          owner: 'Me',
          category: 'Photography',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'morning-fog',
        attributes: {
          title: 'Morning Fog',
          owner: 'Me',
          category: 'Photography',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'plains-rd',
        attributes: {
          title: 'Plains Rd.',
          owner: 'Me',
          category: 'Photography',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'shelby',
        attributes: {
          title: 'Shelby',
          owner: 'Me',
          category: 'Photography',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'williams-rd',
        attributes: {
          title: 'Williams Rd.',
          owner: 'Me',
          category: 'Photography',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }, {
        type: 'works',
        id: 'morning-fog-2',
        attributes: {
          title: 'Morning Fog #2.',
          owner: 'Me',
          category: 'Photography',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }
      }];
      this.get('/works', function(db, request) {
        if(request.queryParams.category !== undefined) {
          let filteredWorks = works.filter(function(i) {
            return i.attributes.category.toLowerCase().indexOf(request.queryParams.category.toLowerCase()) !== -1;
          });
          return { data: filteredWorks };
        } else {
          return { data: works };
        }
      });

}

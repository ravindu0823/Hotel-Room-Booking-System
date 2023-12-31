// MainComponent.js
import RoomCard from '../components/roomcard';

const room = [
  {
    id: 1,
    name: 'Luxury Double Room',
    description: 'Double Bed, One Barth Room, TV, A/C',
    price: '$52.99',
    imageSrc: 'https://img.freepik.com/free-photo/hotel-bedroom-with-double-bed-table-tv-set_1262-3034.jpg?w=1060&t=st=1702706008~exp=1702706608~hmac=539917e56f38969d633d60c86b00e33e8bd1605cb791216c61a68836b4033a3a', // Unsplash image URL
  },

  {
    id: 2,
    name: 'Luxury Beach View Single Room',
    description: 'Double Bed, One Barth Room, TV, A/C',
    price: '$139.99',
    imageSrc: 'https://w0.peakpx.com/wallpaper/261/106/HD-wallpaper-gorgeous-hotel-room-in-bora-bora-beach-hotel-room-trees.jpg', // Unsplash image URL
  },
  {
    id: 3,
    name: 'Luxury Single Room',
    description: 'Double Bed, One Barth Room, TV, A/C',
    price: '$99.99',
    imageSrc: 'https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_1280.jpg', // Unsplash image URL
  },

  // Add more Rooms...
];

const Rooms = () => {
  return (
    <div>     
      <div className="flex flex-wrap justify-center">
        {room.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;

import { useState } from "react";
import "./roomslist.css";

function RoomsList() {
    const [rooms] = useState([
        {
            id: 1,
            name: "Detroit Condo Room",
            description: "This condo sits next to the Ford Field arena where the Detroit Lions play! The room is 15x16 sqft and comes furnished with a bed, nightstand, and television.",
            location: "Detroit",
            state: "MI",
            price: 75,
            imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            amenities: ["WiFi", "TV", "Kitchen", "Parking"]
        },
        {
            id: 2,
            name: "Seattle Waterfront Studio",
            description: "Enjoy stunning views of Puget Sound from this modern studio apartment. Walking distance to Pike Place Market and the Space Needle.",
            location: "Seattle",
            state: "WA",
            price: 120,
            imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            amenities: ["Ocean View", "WiFi", "Gym", "Pool"]
        },
        {
            id: 3,
            name: "Miami Beach Getaway",
            description: "Sun-drenched room with private bathroom in a luxury condo. Just steps from the beach and South Beach nightlife.",
            location: "Miami",
            state: "FL",
            price: 95,
            imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            amenities: ["Beach Access", "WiFi", "Pool", "Spa"]
        }
    ]);

    return (
        <div classname="rooms-page">
<div classname="rooms-header">
<h1>Available Rooms</h1>
Find your perfect temporary home
<div classname="search-container">
<input classname="search-input" placeholder="Search by location..." type="text"/>
<button classname="search-button">Search</button>
</div>
</div>
<div classname="rooms-grid">
                {rooms.map((room) => (
                    <div classname="room-card" key="{room.id}">
<div "center"="" "cover",="" `url("${room.imageurl}")`,="" backgroundimage:="" backgroundposition:="" backgroundsize:="" classname="room-image" style="{{" }}="">
<div classname="price-tag">${room.price}/night</div>
</div>
<div classname="room-details">
<h2>{room.name}</h2>
<div classname="location">
📍
                                {room.location}, {room.state}
                            </div>
{room.description}
<div classname="amenities">
                                {room.amenities.map((amenity, index) => (
                                    {amenity}
                                ))}
                            </div>
<button classname="book-button">Book Now</button>
</div>
</div>
                ))}
            </div>
</div>
    );
}

export default RoomsList;

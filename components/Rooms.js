import React from "react";
import Image from "next/image";

const EdemRooms = [
  {
    room: "/Room1.jpeg",
    price: 300,
    benefits:
      "AC, water heater, TV, fan, Queen bed size, Balcony, Breakfast for one",
  },
  {
    room: "/Room2.jpeg",
    price: 250,
    benefits: "AC, water heater, TV, fan, Queen bed size, Breakfast for one",
  },
  {
    room: "/Room3.jpeg",
    price: 200,
    benefits: "water heater, TV, fan, Queen bed size, Breakfast for one",
  },
  {
    room: "/Room4.jpeg",
    price: 150,
    benefits: "TV, fan, Double bed, Breakfast for one",
  },
];

const Rooms = () => {
  return (
    <div className="lg:mt-20 mt-10 px-5 max-w-7xl mx-auto">
      <div>
        <h1 className="text-xl text-center font-hero font-semibold text-[#eab308]">
          Our Rooms
        </h1>
        <p className="text-center pt-2 text-3xl pb-10">What we offer</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {EdemRooms.map((rooms, index) => {
          return (
            <div key={index} className="border border-yellow-500 p-2">
              <div>
                <Image
                  className="h-[200px] w-[100%] object-cover"
                  src={rooms.room}
                  width={500}
                  height={500}
                  alt="Edem hotel rooms"
                />
              </div>
              <div>
                <p className="bg-yellow-500 p-1 text-center my-2 font-hero">
                  Benefits
                </p>
                <p className="">{rooms.benefits}</p>
              </div>
              <div>
                <p className="bg-yellow-500 p-1 font-bold text-center my-2 font-hero">
                  GHC{rooms.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rooms;

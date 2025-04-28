
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Users } from "lucide-react";

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  available: boolean;
}

interface RoomListingProps {
  room: Room;
  onBookNow: (roomId: string) => void;
}

const RoomListing: React.FC<RoomListingProps> = ({ room, onBookNow }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={room.image} 
          alt={room.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{room.name}</span>
          <span className="text-primary font-bold">${room.price}/night</span>
        </CardTitle>
        <CardDescription className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Bed size={16} />
            <span>{room.capacity === 1 ? '1 Guest' : `${room.capacity} Guests`}</span>
          </span>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground">{room.description}</p>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={() => onBookNow(room.id)} 
          disabled={!room.available}
          className="w-full"
        >
          {room.available ? 'Book Now' : 'Not Available'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomListing;

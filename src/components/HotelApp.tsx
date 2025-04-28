
import React, { useState } from 'react';
import RoomListing, { Room } from './RoomListing';
import BookingForm, { BookingData } from './BookingForm';
import BookingsList from './BookingsList';
import HotelHeader from './HotelHeader';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from 'sonner';
import { Toaster } from "@/components/ui/sonner";

// Sample room data
const sampleRooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe King Room',
    description: 'Spacious room with king-size bed, work desk, and city view.',
    price: 199,
    capacity: 2,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800&h=400',
    available: true
  },
  {
    id: '2',
    name: 'Twin Room',
    description: 'Comfortable room with two twin beds and garden view.',
    price: 149,
    capacity: 2,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800&h=400',
    available: true
  },
  {
    id: '3',
    name: 'Premium Suite',
    description: 'Luxurious suite with separate living area and panoramic views.',
    price: 299,
    capacity: 3,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800&h=400',
    available: true
  },
  {
    id: '4',
    name: 'Family Room',
    description: 'Spacious room perfect for families with children, includes play area.',
    price: 249,
    capacity: 4,
    image: 'https://images.unsplash.com/photo-1576675784201-0e142b423952?auto=format&fit=crop&q=80&w=800&h=400',
    available: true
  },
  {
    id: '5',
    name: 'Budget Single',
    description: 'Cozy and economical option for solo travelers.',
    price: 99,
    capacity: 1,
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&q=80&w=800&h=400',
    available: true
  },
  {
    id: '6',
    name: 'Executive Suite',
    description: 'Premium suite with office space, perfect for business travelers.',
    price: 349,
    capacity: 2,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800&h=400',
    available: true
  }
];

const HotelApp: React.FC = () => {
  const [rooms] = useState<Room[]>(sampleRooms);
  const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(undefined);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [bookingsDialogOpen, setBookingsDialogOpen] = useState(false);
  const [bookings, setBookings] = useState<Array<BookingData & { id: string }>>([]);

  const handleBookNow = (roomId: string) => {
    const room = rooms.find(r => r.id === roomId);
    setSelectedRoom(room);
    setBookingDialogOpen(true);
  };

  const handleBookingComplete = (bookingData: BookingData) => {
    const newBooking = {
      ...bookingData,
      id: `booking-${Date.now()}`
    };
    
    setBookings([...bookings, newBooking]);
    setBookingDialogOpen(false);
    toast.success('Booking confirmed!');
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId));
    toast.success('Booking cancelled successfully');
  };

  const handleViewBookings = () => {
    setBookingsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HotelHeader onViewBookings={handleViewBookings} />
      
      <main className="flex-1 container mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-6">Available Rooms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map(room => (
            <RoomListing 
              key={room.id} 
              room={room} 
              onBookNow={handleBookNow} 
            />
          ))}
        </div>
      </main>

      {/* Booking Form Dialog */}
      <Dialog open={bookingDialogOpen} onOpenChange={setBookingDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <BookingForm 
            room={selectedRoom} 
            onClose={() => setBookingDialogOpen(false)} 
            onBookingComplete={handleBookingComplete} 
          />
        </DialogContent>
      </Dialog>

      {/* Bookings List Dialog */}
      <Dialog open={bookingsDialogOpen} onOpenChange={setBookingsDialogOpen}>
        <DialogContent className="sm:max-w-4xl">
          <BookingsList 
            bookings={bookings} 
            onCancelBooking={handleCancelBooking} 
          />
        </DialogContent>
      </Dialog>

      <Toaster />
    </div>
  );
};

export default HotelApp;

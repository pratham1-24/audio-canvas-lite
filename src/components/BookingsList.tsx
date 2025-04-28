
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { BookingData } from './BookingForm';

interface BookingsListProps {
  bookings: Array<BookingData & { id: string }>;
  onCancelBooking: (id: string) => void;
}

const BookingsList: React.FC<BookingsListProps> = ({ bookings, onCancelBooking }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        {bookings.length === 0 ? (
          <p className="text-center text-muted-foreground py-4">No bookings yet</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Guest</TableHead>
                <TableHead>Check In</TableHead>
                <TableHead>Check Out</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.guestName}</TableCell>
                  <TableCell>{format(new Date(booking.checkIn), "MMM dd, yyyy")}</TableCell>
                  <TableCell>{format(new Date(booking.checkOut), "MMM dd, yyyy")}</TableCell>
                  <TableCell>{booking.guests}</TableCell>
                  <TableCell>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => onCancelBooking(booking.id)}
                    >
                      Cancel
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingsList;

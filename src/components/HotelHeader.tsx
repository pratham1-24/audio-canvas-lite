
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HotelHeaderProps {
  onViewBookings: () => void;
}

const HotelHeader: React.FC<HotelHeaderProps> = ({ onViewBookings }) => {
  return (
    <header className="bg-primary text-white py-4 px-6 md:px-8 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Horizon Hotels</h1>
        
        <div className="flex items-center w-full md:w-1/3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
            <Input 
              placeholder="Search rooms..." 
              className="w-full pl-10 text-foreground bg-white" 
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            onClick={onViewBookings} 
            variant="secondary"
          >
            My Bookings
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HotelHeader;

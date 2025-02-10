import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const DateNav = () => {
  return (
    <div className="border-b bg-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-center gap-4">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-lg font-medium">Today</span>
        <Button variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default DateNav;

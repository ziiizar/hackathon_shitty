import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Heart, Mail, Phone } from "lucide-react";

interface WishGrantingFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  wishDetails?: {
    username: string;
    wish: string;
  };
}

const WishGrantingForm = ({
  isOpen = true,
  onClose = () => {},
  wishDetails = {
    username: "Sarah Johnson",
    wish: "I wish for a new laptop to replace the one I spilled coffee on during my important presentation.",
  },
}: WishGrantingFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Grant a Wish</DialogTitle>
          <DialogDescription>
            Help make someone's bad day better by granting their wish
          </DialogDescription>
        </DialogHeader>

        <Card className="p-6 mb-6 border-2 border-amber-200 bg-amber-50">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="text-red-500" />
            <h3 className="font-semibold">{wishDetails.username}'s Wish</h3>
          </div>
          <p className="text-gray-700">{wishDetails.wish}</p>
        </Card>

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-500" />
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex items-center space-x-2">
              <Phone className="text-gray-500" />
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">How would you like to help?</Label>
            <Textarea
              id="message"
              placeholder="Please describe how you can help grant this wish..."
              className="w-full min-h-[100px]"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Submit Offer</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WishGrantingForm;

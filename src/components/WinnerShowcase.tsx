import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Trophy } from "lucide-react";

interface WinnerShowcaseProps {
  username?: string;
  avatarUrl?: string;
  storyContent?: string;
  wish?: string;
  timestamp?: string;
}

const WinnerShowcase = ({
  username = "Lucky Winner",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=winner",
  storyContent = "I accidentally sent my resignation letter to the entire company instead of HR. Plot twist: I got three better job offers from other departments who saw it.",
  wish = "I wish for a professional resume writer to help me craft the perfect job application documents.",
  timestamp = "Yesterday",
}: WinnerShowcaseProps) => {
  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white sticky top-0 z-10 p-4 border-b">
      <Card className="w-full max-w-[1512px] mx-auto p-6 border-2 border-amber-400 bg-white">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Avatar className="h-16 w-16 border-2 border-amber-400">
              <AvatarImage src={avatarUrl} alt={username} />
              <AvatarFallback>{username[0]}</AvatarFallback>
            </Avatar>
            <Trophy className="absolute -top-2 -right-2 h-6 w-6 text-amber-400" />
          </div>

          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="font-bold text-xl">{username}</h2>
              <Badge
                variant="secondary"
                className="bg-amber-100 text-amber-700"
              >
                Yesterday's Winner
              </Badge>
              <span className="text-sm text-gray-500">{timestamp}</span>
            </div>

            <p className="text-gray-700 mb-4">{storyContent}</p>

            <div className="bg-amber-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-amber-700 mb-2">
                Winner's Wish
              </h3>
              <p className="text-gray-600">{wish}</p>
            </div>

            <Button
              className="bg-amber-500 hover:bg-amber-600 text-white"
              size="lg"
            >
              Grant This Wish
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WinnerShowcase;

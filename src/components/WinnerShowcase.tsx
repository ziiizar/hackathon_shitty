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
  upvotes?: number;
}

const WinnerShowcase = ({
  username = "Lucky Winner",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=winner",
  storyContent = "I accidentally sent my resignation letter to the entire company instead of HR. Plot twist: I got three better job offers from other departments who saw it.",
  wish = "I wish for a professional resume writer to help me craft the perfect job application documents.",
  timestamp = "Yesterday",
}: WinnerShowcaseProps) => {
  return (
    <Card className="w-full bg-white p-6 border border-amber-400 rounded-xl">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="rounded-full border-[3px] border-amber-400 p-1">
              <Avatar className="h-12 w-12">
                <AvatarImage src={avatarUrl} alt={username} />
                <AvatarFallback>{username[0]}</AvatarFallback>
              </Avatar>
            </div>
            <Trophy className="absolute -top-1 -right-1 h-5 w-5 text-amber-400" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">{username}</h2>
              <span className="text-sm text-gray-500 ml-auto">{timestamp}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700">{storyContent}</p>

        <div className="bg-amber-50 p-4 rounded-lg">
          <h3 className="font-semibold text-amber-700 mb-2">Winner's Wish</h3>
          <p className="text-gray-600">{wish}</p>
        </div>

        <Button
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
          size="lg"
        >
          Grant This Wish
        </Button>
      </div>
    </Card>
  );
};

export default WinnerShowcase;

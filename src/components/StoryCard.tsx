import React from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { ArrowBigUp, ArrowBigDown, MessageCircle } from "lucide-react";
import { Separator } from "./ui/separator";

interface StoryCardProps {
  username?: string;
  avatarUrl?: string;
  storyContent?: string;
  upvotes?: number;
  downvotes?: number;
  commentCount?: number;
  timestamp?: string;
}

const StoryCard = ({
  username = "Anonymous User",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  storyContent = "Today I accidentally sent an email meant for my best friend to my entire company. The email contained some rather colorful opinions about our latest project...",
  upvotes = 42,
  downvotes = 12,
  commentCount = 15,
  timestamp = "2 hours ago",
}: StoryCardProps) => {
  return (
    <Card className="w-full max-w-[800px] p-6 mb-4 bg-white">
      <div className="flex items-start space-x-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback>{username[0]}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">{username}</h3>
            <span className="text-sm text-gray-500">{timestamp}</span>
          </div>

          <p className="text-gray-700 mb-4">{storyContent}</p>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover:text-blue-500">
                <ArrowBigUp className="h-6 w-6" />
              </Button>
              <span className="font-medium">{upvotes}</span>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="hover:text-red-500">
                <ArrowBigDown className="h-6 w-6" />
              </Button>
              <span className="font-medium">{downvotes}</span>
            </div>

            <Separator orientation="vertical" className="h-6" />

            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>{commentCount} Comments</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StoryCard;

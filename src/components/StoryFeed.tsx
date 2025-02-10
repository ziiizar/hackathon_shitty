import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import StoryCard from "./StoryCard";

interface Story {
  id: string;
  username: string;
  avatarUrl: string;
  storyContent: string;
  upvotes: number;
  downvotes: number;
  commentCount: number;
  timestamp: string;
}

interface StoryFeedProps {
  stories?: Story[];
}

const StoryFeed = ({
  stories = [
    {
      id: "1",
      username: "Sarah Parker",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      storyContent:
        "Spilled coffee all over my keyboard during an important Zoom meeting. The best part? My camera was on, and everyone saw my panic dance.",
      upvotes: 156,
      downvotes: 23,
      commentCount: 42,
      timestamp: "3 hours ago",
    },
    {
      id: "2",
      username: "Mike Johnson",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      storyContent:
        "Accidentally set my virtual background to a beach while working from home. Forgot to change it before my performance review. Boss asked if I was taking the meeting seriously.",
      upvotes: 89,
      downvotes: 12,
      commentCount: 27,
      timestamp: "5 hours ago",
    },
    {
      id: "3",
      username: "Emily Chen",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      storyContent:
        "Thought I muted myself during a client call. Proceeded to have a full conversation with my cat about dinner plans. Client now knows I name my meals.",
      upvotes: 234,
      downvotes: 45,
      commentCount: 67,
      timestamp: "7 hours ago",
    },
  ],
}: StoryFeedProps) => {
  return (
    <div className="w-full max-w-[800px] mx-auto bg-gray-50 p-4">
      <ScrollArea className="h-[700px] w-full pr-4">
        <div className="space-y-4">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              username={story.username}
              avatarUrl={story.avatarUrl}
              storyContent={story.storyContent}
              upvotes={story.upvotes}
              downvotes={story.downvotes}
              commentCount={story.commentCount}
              timestamp={story.timestamp}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default StoryFeed;

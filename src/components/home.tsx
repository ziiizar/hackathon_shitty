import React from "react";
import WinnerShowcase from "./WinnerShowcase";
import StoryFeed from "./StoryFeed";
import StorySubmissionModal from "./StorySubmissionModal";
import WishGrantingForm from "./WishGrantingForm";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface HomeProps {
  initialStories?: Array<{
    id: string;
    username: string;
    avatarUrl: string;
    storyContent: string;
    upvotes: number;
    downvotes: number;
    commentCount: number;
    timestamp: string;
  }>;
  winnerStory?: {
    username: string;
    avatarUrl: string;
    storyContent: string;
    wish: string;
    timestamp: string;
  };
}

const Home = ({
  initialStories = [
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
  ],
  winnerStory = {
    username: "Emily Chen",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    storyContent:
      "Lost my presentation files right before the client meeting. Had to improvise the entire hour with just my memory and paint skills.",
    wish: "I wish for a reliable cloud backup solution and maybe some presentation skills training.",
    timestamp: "Yesterday",
  },
}: HomeProps) => {
  const [isStoryModalOpen, setIsStoryModalOpen] = React.useState(false);
  const [isWishFormOpen, setIsWishFormOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <WinnerShowcase {...winnerStory} />

      <main className="max-w-4xl mx-auto px-4 py-6 relative">
        <Button
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg"
          onClick={() => setIsStoryModalOpen(true)}
        >
          <Plus className="h-6 w-6" />
        </Button>

        <StoryFeed stories={initialStories} />

        <StorySubmissionModal
          open={isStoryModalOpen}
          onOpenChange={setIsStoryModalOpen}
          onSubmit={(story) => {
            console.log("Story submitted:", story);
            setIsStoryModalOpen(false);
          }}
        />

        <WishGrantingForm
          isOpen={isWishFormOpen}
          onClose={() => setIsWishFormOpen(false)}
          wishDetails={{
            username: winnerStory.username,
            wish: winnerStory.wish,
          }}
        />
      </main>
    </div>
  );
};

export default Home;

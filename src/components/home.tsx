import React from "react";
import Header from "./Header";

import WinnerShowcase from "./WinnerShowcase";
import StoryFeed from "./StoryFeed";
import StorySubmissionModal from "./StorySubmissionModal";
import WishGrantingForm from "./WishGrantingForm";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import WinnerCongratulationsDialog from "./WinnerCongratulationsDialog";
import { useAuth } from "@/lib/auth";

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
  const [showCongratulations, setShowCongratulations] = React.useState(false);
  const { user, profile } = useAuth();

  React.useEffect(() => {
    // Check if the user is the winner and hasn't submitted a wish yet
    if (
      user &&
      profile?.username === winnerStory.username &&
      !winnerStory.wish
    ) {
      setShowCongratulations(true);
    }
  }, [user, profile, winnerStory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div
        className="container mx-auto px-4 grid grid-cols-12 gap-8"
        style={{ marginTop: "80px" }}
      >
        <div className="col-span-8">
          <main className="relative">
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

            <WinnerCongratulationsDialog
              open={showCongratulations}
              onOpenChange={setShowCongratulations}
              onWishSubmit={(wish) => {
                console.log("Wish submitted:", wish);
                // Here you would update the winner's wish in the database
                setShowCongratulations(false);
              }}
            />
          </main>
        </div>
        <div className="col-span-4">
          <div
            className="fixed"
            style={{ width: "calc((100vw - 3rem) * 4/12 - 2rem)" }}
          >
            <h2 className="text-2xl font-bold mb-4">Yesterday's Winner</h2>
            <WinnerShowcase {...winnerStory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

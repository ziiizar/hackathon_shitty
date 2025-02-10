import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { AlertCircle } from "lucide-react";

interface StorySubmissionModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onSubmit?: (story: string) => void;
}

const StorySubmissionModal = ({
  open = true,
  onOpenChange = () => {},
  onSubmit = () => {},
}: StorySubmissionModalProps) => {
  const [story, setStory] = React.useState("");
  const maxChars = 500;

  const handleSubmit = () => {
    if (story.trim()) {
      onSubmit(story);
      setStory("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white">
        <DialogHeader>
          <DialogTitle>Share Your Bad Day Story</DialogTitle>
          <DialogDescription>
            Tell us what went wrong today. Sometimes sharing helps, and who
            knows - your story might win!
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Textarea
            placeholder="Today I accidentally..."
            value={story}
            onChange={(e) => setStory(e.target.value)}
            className="min-h-[150px]"
            maxLength={maxChars}
          />
          <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <AlertCircle className="h-4 w-4" />
              <span>Keep it real but respectful</span>
            </div>
            <span>
              {story.length}/{maxChars}
            </span>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!story.trim() || story.length > maxChars}
          >
            Share Story
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StorySubmissionModal;

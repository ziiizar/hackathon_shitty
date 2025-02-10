import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { Trophy } from "lucide-react";

interface WinnerCongratulationsDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  onWishSubmit?: (wish: string) => void;
}

const WinnerCongratulationsDialog = ({
  open = false,
  onOpenChange,
  onWishSubmit,
}: WinnerCongratulationsDialogProps) => {
  const [wish, setWish] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-amber-400" />
          </div>
          <DialogTitle className="text-2xl text-center">
            Congratulations!
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Your story from yesterday received the most upvotes. You can now
            make a wish that the community might help grant!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Textarea
              placeholder="I wish for..."
              value={wish}
              onChange={(e) => setWish(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <Button
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
            size="lg"
            onClick={() => {
              if (wish.trim()) {
                onWishSubmit?.(wish);
                onOpenChange?.(false);
              }
            }}
            disabled={!wish.trim()}
          >
            Submit My Wish
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WinnerCongratulationsDialog;

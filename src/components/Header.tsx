import {
  Search,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Plus,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import AuthModal from "./auth/AuthModal";
import StorySubmissionModal from "./StorySubmissionModal";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

interface HeaderProps {
  onCreateStory?: () => void;
}

const Header = ({ onCreateStory }: HeaderProps) => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <header className="border-b bg-white fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold">Shitty</h1>

          <div className="flex items-center gap-4">
            <div className="relative w-[400px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input className="w-full pl-10" placeholder="Search stories..." />
            </div>

            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-sm font-medium">Today</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsStoryModalOpen(true)}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Share Story
            </Button>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              <span>12h 23m</span>
            </div>
          </div>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={profile?.avatar_url}
                      alt={profile?.username}
                    />
                    <AvatarFallback>{profile?.username?.[0]}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="default" onClick={() => setShowAuthModal(true)}>
              Sign In
            </Button>
          )}
          <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
        </div>
      </div>
      <StorySubmissionModal
        open={isStoryModalOpen}
        onOpenChange={setIsStoryModalOpen}
        onSubmit={(story) => {
          console.log("Story submitted:", story);
          setIsStoryModalOpen(false);
          onCreateStory?.();
        }}
      />
    </header>
  );
};

export default Header;

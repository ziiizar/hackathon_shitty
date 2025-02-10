import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ProfilePage = () => {
  const { user, profile } = useAuth();
  const [defaultWish, setDefaultWish] = useState(profile?.default_wish || "");
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveWish = async () => {
    try {
      // Here we would update the user's default wish in the database
      console.log("Saving wish:", defaultWish);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving wish:", error);
    }
  };

  return (
    <div className="container mx-auto px-4" style={{ marginTop: "80px" }}>
      <Card className="max-w-2xl mx-auto p-6 bg-white">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={profile?.avatar_url} alt={profile?.username} />
              <AvatarFallback>{profile?.username?.[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{profile?.username}</h1>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Default Wish</h2>
              <Button variant="ghost" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>

            <div className="bg-amber-50 rounded-lg p-4">
              <Label
                htmlFor="defaultWish"
                className="text-amber-800 font-medium mb-2 block"
              >
                This wish will be automatically used if you win
              </Label>
              {isEditing ? (
                <div className="space-y-4">
                  <Textarea
                    id="defaultWish"
                    placeholder="I wish for..."
                    value={defaultWish}
                    onChange={(e) => setDefaultWish(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <Button
                    onClick={handleSaveWish}
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                    disabled={!defaultWish.trim()}
                  >
                    Save Wish
                  </Button>
                </div>
              ) : (
                <p className="text-gray-700">
                  {defaultWish || "No default wish set"}
                </p>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;

import { useUser } from "@/context/user-context";
import Image from "next/image";
import PostProfilePicture from "./PostProfilePicture";
import GetProfilePicture from "./GetProfilePicture";

export const FotoConta = () => {
  const { user } = useUser();

  return (
    <div className="w-1/2  flex flex-col items-center">
      <GetProfilePicture width="300" height="300" />
      <PostProfilePicture />
    </div>
  );
};

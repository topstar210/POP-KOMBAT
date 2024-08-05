import "./avatar.css";
import defaultAvatar from "@/assets/imgs/avatar/1.png";

interface AvatarProps {
  username: string;
  url: string;
}

const Avatar = ({ url, username, ...props }: AvatarProps) => {
  return (
    <div className="user-avatar" {...props}>
      <img src={url || defaultAvatar} alt="Avatar" />
      <span>{username || "UserName"}</span>
    </div>
  );
};

export default Avatar;

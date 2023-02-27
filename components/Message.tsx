import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isWepjeGPT = message.user.name === "WepjeGPT";
  return (
    <div className={`py-5 text-white ${isWepjeGPT && "bg-gray-700/70"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img
          src={message.user.avatar}
          alt="avatar"
          className=" h-8 w-8 rounded-full object-cover"
        />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;

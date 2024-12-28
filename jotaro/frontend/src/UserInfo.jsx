import { useAtom } from "jotai";
import { loadabledUserAtom } from "./atoms";

export const UserInfo = () => {
  const [user] = useAtom(loadabledUserAtom);

  if (user.state === "hasError") return <h1>Error Occured</h1>;
  if (user.state === "loading") return <h1>Loading... </h1>;

  return (
    <div>
      <h1>User Info</h1>
      <p>Name : {user.data.name}</p>
      <p>Email : {user.data.email} </p>
    </div>
  );
};

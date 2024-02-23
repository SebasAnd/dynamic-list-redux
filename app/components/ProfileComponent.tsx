"use client";
import { useAppSelector } from "../store/store";

const ProfileComponent = () => {
  const authUser = useAppSelector((state) => state.auth);
  return (
    <>
      {authUser.user == "" ? (
        <div>you are not logged in </div>
      ) : (
        <div>
          {" "}
          <div> user : {authUser.user} </div>
          <div> password: {authUser.password} </div>
        </div>
      )}
    </>
  );
};
export default ProfileComponent;

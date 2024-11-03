import Image from "next/image";
import BottomNav from "./component/bottom-nav/bottom-nav";
import WebApp from '@twa-dev/sdk'
import { UserProvider } from "../app/component/main/userContexProvider";
import { UserSetter } from "../app/component/main/userContexSetter";

WebApp.showAlert('Hey there!');


export default function Home() {
  return (
    //setting UserProvider as the parent of BottomNav will allow it to use/change all the states and variables inside of the UserProvider (basically everything inside of UserProvider is at global)
    <UserProvider>
      <UserSetter>      
         <BottomNav/>
      </UserSetter>

    </UserProvider>
  );
}

import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

function Greet(props) {
    const isLoggIn = props.isLoggIn;
    if(isLoggIn){
        return <UserGreeting />
    }
    return <GuestGreeting />
}

export default Greet;
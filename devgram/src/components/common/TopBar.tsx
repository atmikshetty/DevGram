import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSignOutAccount } from "@/lib/react-query/QueriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/_auth/context/AuthContext";

const TopBar = () => {

    const {mutate: signOut, isSuccess} = useSignOutAccount();
    const navigate = useNavigate();
    const user = useUserContext();

    useEffect(() =>{
        if(isSuccess){
            navigate(0);
        }
    }, [isSuccess])

  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to='/' className="flex gap-3 items-center">
            <img 
            src="/assets/images/logo-white.svg"
            alt="logo"
            width={100}
            height={250}
            />
        </Link>
      </div>

      <div className="flex gap-4">
        <Button variant="ghost" className="shad-button_ghost" onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" alt="logout" />
        </Button>
        <Link to={`/profile/${user}`}></Link>
      </div>


    </section>
  );
};

export default TopBar;

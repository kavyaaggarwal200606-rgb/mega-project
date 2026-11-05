


import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import Container from "../container";

import Logo from "../logo";
import Logout from "./logout";
import { Link } from "react-router-dom";
import Button from "../commonbut";


function Header() {

    const auth = useSelector((state) => state.auth.status);
    console.log(auth)

    const Navigation = useNavigate()

    const Navitem = [
        {
            name : "home",
            slug : "/",
            active : auth
        },
        {
          name: "Signup",
          slug: "/signup",
          active: !auth,
        },
          {
            name : "login",
            slug : "/login",
            active : !auth
        },
         
          {
            name : "ad-post",
            slug : "/ad-post",
            active : auth
        },
          {
            name : "allpost",
            slug : "/allpost",
            active : auth
        },
    ]




  return (



    
   <header className="bg-gray-500 ">
    {/* <Container>
        <nev>
            <Link to="/">
            <Logo/>
            <p>tatataat</p>
            </Link>
        </nev>
    </Container> */}

    {/* <ul>
        {Navitem.map((item) => {

            item.active ? 
            (<li key={item.name}>
                <Button  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                 onClick={() => Navigation(item.slug)}>{item.name}</Button>
            </li>) : <p>hihi</p>

            (auth && (
                <li>
                <Logout />
                </li>
            ))
            return 0
})}
    </ul> */}

  <Container>
  <nav className="flex items-center justify-between w-full py-2">
    {/* लोगो एरिया */}
    <div className="flex-shrink-0">
      <Link to="/">
        <Logo width="70px" />
      </Link>
    </div>

    {/* नेविगेशन आइटम्स - जो एक लाइन (Row) में दिखेंगे */}
    <ul className="flex items-center gap-3 ml-auto list-none m-0 p-0">
      {Navitem.map((item) => {
        return item.active ? (
          <li key={item.name} className="inline-flex">
            <Button
              className="inline-block px-4 py-2 duration-200 hover:bg-blue-100 rounded-full whitespace-nowrap"
              onClick={() => Navigation(item.slug)}
            >
              {item.name}
            </Button>
          </li>
        ) : null;
      })}

      {/* लॉगआउट बटन भी इसी लाइन में आखिर में आएगा */}
      {auth && (
        <li className="inline-flex">
          <Logout />
        </li>
      )}
    </ul>
  </nav>
</Container>

   </header>
  )
}

export default Header



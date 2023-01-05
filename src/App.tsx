import React, {useEffect} from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import './App.css';
import {Link, Route, Routes, Outlet} from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Signup from "./pages/signup";
import {fetchApi} from "./api/sample";
import Login from "./components/Login";

function App() {
  useEffect(()=>{
    // 새로고침 시 토큰 처리
    // onLoginRefresh();
  }, []);


  return <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
}
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/signup">회원가입</Link>
            <Login />
            <button onClick={()=>{
              fetchApi('/sample', 'get', {})
                .then(res=>{
                  console.log(res)
                })

            }}>
              sample
            </button>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;

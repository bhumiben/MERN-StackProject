
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/About';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreatePosting from './pages/CreatePosting';
import UpdatePosting from './pages/UpdatePosting';
import Posting from './pages/Posting';
export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/posting/:postingId" element={<Posting />} />
    <Route element={<PrivateRoute />} >
    <Route path="/Profile" element={<Profile />} />
    <Route path="/create-posting" element={<CreatePosting />} />
    <Route path="/update-posting/:postingId" element={<UpdatePosting />} />
    </Route>
    </Routes></BrowserRouter>
}

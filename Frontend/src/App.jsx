import { Routes, Route } from "react-router-dom";

import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import ForgetPassPage from './Pages/ForgetPassPage';
import ResetPassPage from './Pages/ResetPassPage';
import ProfileInfoSetPage from './Pages/ProfileInfoSetPage';
import ProfilePage from './Pages/ProfilePage';
import ChatPage from './Pages/ChatPage';
import AdminHomePage from './Pages/AdminHomePage';
import AdminReportPage from './Pages/AdminReportPage';
import AdminPostPage from './Pages/AdminPostPage';
import NotFoundPage from './Pages/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgetPassword" element={<ForgetPassPage />} />
      <Route path="/resetPassword" element={<ResetPassPage />} />
      <Route path="/gettingStart" element={<ProfileInfoSetPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/messages" element={<ChatPage />} />
      <Route path="/home" element={<AdminHomePage />} />
      <Route path="/post" element={<AdminPostPage />} />
      <Route path="/report" element={<AdminReportPage />} />
      <Route path="/*" element={<NotFoundPage />} />

    </Routes>
  );
};

export default App;
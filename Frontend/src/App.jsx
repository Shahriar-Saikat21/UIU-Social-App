import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'

import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';
import ForgetPassPage from './Pages/ForgetPassPage';
import ResetPassPage from './Pages/ResetPassPage';
import ProfileInfoSetPage from './Pages/ProfileInfoSetPage';
import ProfilePage from './Pages/ProfilePage';
import ChatPage from './Pages/ChatPage';
import AdminHomePage from './Pages/AdminHomePage';
import AdminPostPage from './Pages/AdminPostPage';
import NotFoundPage from './Pages/NotFoundPage';
import Layout from './Components/Layout'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout><LoginPage /></Layout>} />
        <Route path="/signup" element={<Layout><SignupPage /></Layout>} />
        <Route path="/forgetPassword" element={<Layout><ForgetPassPage /></Layout>} />
        <Route path="/resetPassword" element={<Layout><ResetPassPage /></Layout>} />
        <Route path="/gettingStart" element={<Layout><ProfileInfoSetPage /></Layout>} />
        <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/messages" element={<Layout><ChatPage /></Layout>} />
        <Route path="/home" element={<Layout><AdminHomePage /></Layout>} />
        <Route path="/post" element={<Layout><AdminPostPage /></Layout>} />
        <Route path="/*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  );
};

export default App;
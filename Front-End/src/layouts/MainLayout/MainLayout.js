import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Chatbot from '../../components/FloatingChat/FloatingChat';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <main className="contenido">
                <Outlet />
            </main>
            <Footer />
            <Chatbot />
        </div>  
    );
};

export default MainLayout;
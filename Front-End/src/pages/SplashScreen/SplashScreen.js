import './SplashScreen.css';
import logosplash from '../../assets/logo3.png'

function SplashScreen() {
    return (
        <div className="splash-container"> 
            <div>
                <img
                    src={logosplash}
                    alt="Logo"
                    className="logosplash"
                />
                <h2 className = "splash-subtitle">
                    Bienvenido a
                </h2>
                <h1 className="splash-title">
                    MediChat
                </h1>
            </div>
        </div>
    );
}

export default SplashScreen;
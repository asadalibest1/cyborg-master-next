// Import React and necessary hooks
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import MainContent from '@/Components/MainContent';
import WelcomeBoard from '@/Components/WelcomeBoard';
import React from 'react';
// import '../styles/globals.css';
// import PreLoader from '@/Components/PreLoader';
function App() {
    // Event handlers such as for form submission or input change can be defined here

    return (
        <div style={{ background: '#1f2122' }}>
            {/* Preloader */}
            {/* <PreLoader /> */}

            {/* Header Area */}
            <Header />

            {/* Main content area */}
            <MainContent>
                <WelcomeBoard/>
            </MainContent>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>

            {/* Modals */}
            {/* Define your modals here */}

            {/* Scripts can be included via useEffect hook or external script files */}
        </div>
    );
}

export default App;

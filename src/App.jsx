import { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import Tabs from './components/Tabs';
import Intro from './components/Intro';
import Post from './components/Post';
import Friends from './components/Friends';
import Photos from './components/Photos';

const App = () => {
    const [activeTab, setActiveTab] = useState('Posts');

    const renderContent = () => {
        switch (activeTab) {
            case 'Posts':
                return (
                    <>
                        <Intro />
                        <Post isTextOnly={true} />
                        <Post />
                    </>
                );
            case 'About':
                return <Post activeTab={activeTab} />;
            case 'Friends':
                return <Friends />;
            case 'Photos':
                return <Photos />;
            default:
                return null;
        }
    };

    return (
        <div className="app-container">
            <Header />
            <div className="profile-page-container">
                <ProfileHeader />
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="profile-content">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default App;
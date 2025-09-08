import '../styles/Tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
    return (
        <nav className="tabs-container">
            <a 
                href="#" 
                className={`tab-item ${activeTab === 'Posts' ? 'active' : ''}`}
                onClick={() => setActiveTab('Posts')}
            >
                Posts
            </a>
            <a 
                href="#" 
                className={`tab-item ${activeTab === 'About' ? 'active' : ''}`}
                onClick={() => setActiveTab('About')}
            >
                About
            </a>
            <a 
                href="#" 
                className={`tab-item ${activeTab === 'Friends' ? 'active' : ''}`}
                onClick={() => setActiveTab('Friends')}
            >
                Friends
            </a>
            <a 
                href="#" 
                className={`tab-item ${activeTab === 'Photos' ? 'active' : ''}`}
                onClick={() => setActiveTab('Photos')}
            >
                Photos
            </a>
        </nav>
    );
};
export default Tabs;
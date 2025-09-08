import '../styles/Post.css';

const Post = ({ activeTab, isTextOnly = false }) => {
    if (activeTab === 'About') {
        return (
            <div className="about-card">
                <h2>About</h2>
                <div className="about-section">
                    <h3>Education</h3>
                    <ul>
                        <li>Studied BS Information Technology at West Prime Horizon Institute, INC.</li>
                        <li>Live in Pagadian City</li>
                    </ul>
                </div>
                <div className="about-section">
                    <h3>Details</h3>
                    <ul>
                        <li><span className="detail-label">Gender:</span> Female</li>
                        <li><span className="detail-label">Birthday:</span> November 06, 2005</li>
                    </ul>
                </div>
                <div className="about-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><span className="detail-label">Email:</span> agabonmilkie@gmail.com</li>
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className="post-card">
            <div className="post-header">
                <img src="/profile-pic.jpg" alt="Profile" className="post-profile-pic" />
                <div className="post-info">
                    <span className="post-author">Milkie Mae Grapa Agabon</span>
                    <span className="post-time">Sep 5 · 🌏 </span>
                </div>
            </div>
            {isTextOnly ? (
                <div className="post-text-content">
                    <p>Gutom!</p>
                </div>
            ) : ( 
                <div className="post-text-content">
                    <p>my instinct never failed me</p>
                </div>
            )}
            <hr className="post-divider" />
            <div className="post-actions">
                <button className="action-button">👍 Like</button>
                <button className="action-button">💬 Comment</button>
                <button className="action-button">🔗 Share</button>
            </div>
        </div>
    );
};

export default Post;
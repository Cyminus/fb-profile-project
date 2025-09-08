import '../styles/Intro.css';

const Intro = () => {
    return (
        <div className="intro-card">
                <div className="post-creator">
                    <img src="/profile-pic.jpg" alt="Profile" className="post-creator-pic" />
                    <input placeholder="What's on your mind?" className="whats-on-mind" type="text" />
                </div>
                <hr />
                <div className="post-options">
                    <button className="option">
                        <span className="icon">🖼️</span> Photo/video
                    </button>
                    <button className="option">
                        <span className="icon">👥</span> Tag people
                    </button>
                    <button className="option">
                        <span className="icon">😊</span> Feeling/activity
                    </button>
                </div>
            </div>
    );
};

export default Intro;
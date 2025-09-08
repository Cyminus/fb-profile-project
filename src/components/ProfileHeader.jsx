import '../styles/ProfileHeader.css';

const ProfileHeader = () => {
    return (
        <div className="profile-header-container">
            <div className="cover-photo-wrapper">
                <img src="/cover-photo.jpg" alt="Cover Photo" className="cover-photo" />
            </div>
            <div className="profile-info-section">
                <div className="profile-picture-wrapper">
                    <img
                        src="/profile-pic.jpg"
                        alt="Profile Picture"
                        className="profile-picture"
                    />
                </div>
                <div className="profile-details">
                    <h1 className="user-name">Milkie Mae Grapa Agabon (Milk)</h1>
                    <p className="stats">
                        <span className="followers">4K followers</span> • <span className="following">67 following</span>
                    </p>
                    <p className="user-bio">
                        Yes! It's me.
                    </p>
                </div>
                <div className="profile-actions">
                    <button className="action-btn primary-btn">
                        <span className="icon">➕</span> Add to Story
                    </button>
                    <button className="action-btn secondary-btn">
                        <span className="icon">✏️</span> Edit Profile
                    </button>
                    <button className="action-btn tertiary-btn">
                        <span className="icon">•••</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
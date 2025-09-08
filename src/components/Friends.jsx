import '../styles/Friends.css';

const Friends = () => {
    return (
        <div className="friends-card">
            <h2>Friends</h2>
            <div className="friends-grid">
                <div className="friend-item">
                    <img src="/friend-1.jpg" alt="Friend 1" />
                    <span>Neil Bocabal Genilla</span>
                </div>
                <div className="friend-item">
                    <img src="/friend-2.jpg" alt="Friend 2" />
                    <span>Cherry Magallon</span>
                </div>
                <div className="friend-item">
                    <img src="/friend-3.jpg" alt="Friend 3" />
                    <span>Jamicah Llenares</span>
                </div>
                <div className="friend-item">
                    <img src="/friend-4.jpg" alt="Friend 4" />
                    <span>Nico Bucabal Genilla</span>
                </div>
                <div className="friend-item">
                    <img src="/friend-5.jpg" alt="Friend 5" />
                    <span>Rochel Herongco</span>
                </div>
                <div className="friend-item">
                    <img src="/friend-6.jpg" alt="Friend 6" />
                    <span>Christyl Jean Lamba</span>
                </div>
            </div>
        </div>
    );
};

export default Friends;
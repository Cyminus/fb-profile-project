import '../styles/Photos.css';

const Photos = () => {
    return (
        <div className="photos-card">
            <h2>Photos</h2>
            <div className="photos-grid">
                <img src="/photo-1.jpg" alt="Photo 1" className="photo-item" />
                <img src="/photo-2.jpg" alt="Photo 2" className="photo-item" />
                <img src="/photo-3.jpg" alt="Photo 3" className="photo-item" />
                <img src="/photo-4.jpg" alt="Photo 4" className="photo-item" />
                <img src="/photo-5.jpg" alt="Photo 5" className="photo-item" />
                <img src="/photo-6.jpg" alt="Photo 6" className="photo-item" />
            </div>
        </div>
    );
};

export default Photos;
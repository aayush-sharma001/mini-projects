import { useState, useEffect } from "react";

const Images = [
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
  "https://img.freepik.com/premium-photo/lake-with-dock-tree-background_1153744-134050.jpg?semt=ais_hybrid&w=740",
  "https://img.lovepik.com/bg/20240123/Amazing-Autumn-Forest-Scenery-A-Beautiful-Natural-Background_2903879_wh1200.jpg",
  "https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg",
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/calming-nature-wallpaper-free-image.jpeg?w=600&quality=80"
];

function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImageIndex = () => {
    setImageIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  };

  const nextImageIndex = () => {
    setImageIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    setImageIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [])

  return (
    <>
      <div style={styles.slider}>
        <div onClick={prevImageIndex} style={styles.button}>◀️</div>
        <img style={styles.image} src={Images[imageIndex]} alt={`Image ${imageIndex + 1}`} />
        <div onClick={nextImageIndex} style={styles.button}>▶️</div>
      </div>

      <div style={styles.dotsContainer}>
        {Images.map((_, index) => (
          <span
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: imageIndex === index ? '#444' : '#ccc'
            }}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </>
  );
}

const styles = {
  slider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px'
  },
  image: {
    width: '600px',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  },
  button: {
    fontSize: '2rem',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: '#444'
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    gap: '8px'
  },
  dot: {
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
};

export default Slider;

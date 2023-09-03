import Button from '@mui/material/Button';
import './styles.css'; // Import your CSS file
import './animation.css'; // Import the animation CSS file
import {Typewriter} from 'react-simple-typewriter'

// Usage!

function CenteredButton() {

    const containerStyles = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 1,
        width: '100%',
    };

    const textStyles = {
        fontSize: '1rem',
        fontFamily: 'Montserrat, sans-serif',
        color: '#fff',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        marginBottom: '1rem', // Add spacing between sentences
    };

    return (
        <div style={containerStyles}>
            <div style={textStyles}>
                <p>
                    <span>Keep a watchful eye on your </span>
                    <span style={{color: '#f5b301', fontWeight: 'bold'}}>
                        <Typewriter
                            words={['Business Strategies', 'UpTime', 'Releases']}
                            loop={0}
                            cursor
                            cursorStyle='!'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </p>
                <p>Visualize the impact of your releases.</p>
                <p>Your safety, powered by our tool.</p>
            </div>

            <Button variant="contained" color="primary" size="large" style={{marginTop: '0.7rem'}}>
                Quick Start
            </Button>
        </div>
    );
}

export default CenteredButton;

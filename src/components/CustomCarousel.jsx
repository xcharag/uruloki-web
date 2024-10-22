import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';

const CustomCarousel = () => {
    const items = [
        { text: '🔮 Explora el Mundo de Magic', buttonLabel: 'Explorar', backgroundImage: 'url(/assets/bg-magic.jpg)' },
        { text: '🎲 Descubre Nuevos Juegos de Mesa', buttonLabel: 'Aprender Mas', backgroundImage: 'url(/assets/bg-tabletop.jpg)' },
        { text: '🧙🏾 Juegos de Miniaturas y Rol', buttonLabel: 'Rolear!', backgroundImage: 'url(/assets/bg-dnd.jpg)' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % items.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <Box
            sx={{
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: '40vh' },
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '8px',
                margin: '1em 2em',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    height: '100%',
                    position: 'relative',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentSlide * 100}%)`,
                    width: `${items.length * 100}%`,
                }}
            >
                {items.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            flex: '0 0 100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            backgroundImage: item.backgroundImage,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            padding: '1em',
                            boxSizing: 'border-box',
                            position: 'relative',
                        }}
                    >

                        <Box
                            sx={{
                                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark background with transparency
                                padding: '1em', // Add some padding
                                borderRadius: '8px', // Round corners
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    marginBottom: '1em',
                                    fontSize: {
                                        xs: '1.2rem',
                                        sm: '1.5rem',
                                        md: '2rem',
                                        lg: '2.5rem',
                                    },
                                    lineHeight: 1.2,
                                    maxWidth: '90%', // Set a max width to prevent overflow
                                    overflow: 'hidden',
                                    whiteSpace: 'normal',
                                    wordWrap: 'break-word',
                                    textAlign: 'center', // Center text for better layout
                                }}
                            >
                                {item.text}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}
                            >
                                {item.buttonLabel}
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Navigation Dots */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10px',
                    display: 'flex',
                    gap: '8px',
                }}
            >
                {items.map((_, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor:
                                index === currentSlide ? 'secondary.main' : 'white',
                            cursor: 'pointer',
                        }}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default CustomCarousel;
import { Box} from '@mui/material';
import CustomCarousel from "../CustomCarousel.jsx";

const Banner = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                margin: '1em 2em',
                overflow: 'hidden',
                borderRadius: '8px',
            }}
        >
            <CustomCarousel />
        </Box>
    );
};

export default Banner;

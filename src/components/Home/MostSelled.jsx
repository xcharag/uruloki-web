import {Box, Card, CardContent, CardMedia, Typography, Badge, Grid,} from "@mui/material";

const MostSelledCard = () => {
    const example_products = [
        { id: 1, name: 'Producto 1', price: 100, image: 'https://www.hasbro.com/common/productimages/en_US/7EABAF9750569047F5778F4663C79E75/ee616120d6a46a0dc71d39ce6857290414129b14.jpg' },
        { id: 2, name: 'Producto 2', price: 200, image: 'https://m.media-amazon.com/images/I/81fi04DEenL.jpg' },
        { id: 3, name: 'Producto 3', price: 300, image: 'https://placehold.co/400' },
        { id: 4, name: 'Producto 4', price: 400, image: 'https://placehold.co/600x400' },
        { id: 5, name: 'Producto 5', price: 500, image: 'https://placehold.co/500x400' },
        { id: 6, name: 'Producto 6', price: 600, image: 'https://placehold.co/600x400/png' },
    ];

    return (
        <Box
            sx={{
                backgroundColor: 'white',
                color: 'black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2em',
                borderRadius: '12px',
                margin: '5em 2em 3em 1em',
                position: 'relative',
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '1em',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem' },
                    }}
                >
                    Productos más vendidos
                </Typography>

                {/* "Ver Todos" Button-Like Box */}
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        padding: '0.3em 0.5em',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                        },
                    }}
                >
                    Ver Todos
                </Box>
            </Box>

            {/* Grid Layout for Responsive Cards */}
            <Grid container spacing={2} sx={{ width: '100%' }}>
                {example_products.map((product) => (
                    <Grid
                        item
                        xs={6} // 2 cards per row on mobile
                        sm={4} // 3 cards per row on tablets
                        md={2} // 6 cards per row on larger screens
                        key={product.id}
                    >
                        <Card
                            sx={{
                                maxWidth: '100%',
                                borderRadius: '12px',
                                boxShadow: 2,
                                overflow: 'hidden',
                                textAlign: 'center',
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt={product.name}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {product.price} Bs
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MostSelledCard;

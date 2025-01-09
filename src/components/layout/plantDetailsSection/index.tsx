"use client";

import { useState, useMemo } from "react";
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import Image from "next/image";

import theme from "@/styles/theme/theme";
import { catalogInPlant, catalogPlantSeries, PlantVarient } from "@/types/plants.types";
import { capitalizeWords } from "@/utils/wordFormatting";
import ProductImageCarousel from "@/components/elements/productImageCarousal";

interface PlantDetailsProps {
    plantSeries: catalogPlantSeries;
    variant: PlantVarient;
}

export default function PlantDetailsSection({ plantSeries, variant }: PlantDetailsProps) {
    const validSizes = ["small", "medium", "large", "extra-large"] as const;

    // Track the currently selected size
    const [selectedSize, setSelectedSize] = useState(
        variant.size || plantSeries.plants[0]?.size
    );

    // Track quantity for the "Add to Cart"
    const [quantity, setQuantity] = useState(1);

    // If no valid size is found
    if (!selectedSize) {
        return (
            <Box
                sx={{
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h3">No valid sizes found</Typography>
            </Box>
        );
    }

    // If the selected size is invalid, show a 404-like message
    if (!validSizes.includes(selectedSize)) {
        return (
            <Box
                sx={{
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h3">Page Not Found: 404</Typography>
            </Box>
        );
    }

    // Get the currently selected plant variant
    const plantVariant = useMemo(() => {
        return plantSeries.plants.find((plant) => plant.size === selectedSize);
    }, [plantSeries.plants, selectedSize]);

    // If no matching variant is found
    if (!plantVariant) {
        return (
            <Box
                sx={{
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h3">No matching plant variant found</Typography>
            </Box>
        );
    }

    // Handlers
    const handleAddToCart = () => {
        // Example logic
        console.log(`Add ${quantity} item(s) of size ${selectedSize} to cart!`);
    };

    const handleBuyNow = () => {
        // Example logic
        console.log(`Buy now clicked for size ${selectedSize}!`);
    };

    return (
        <section>
            <Stack
                direction="row"
                sx={{
                    maxWidth: "1680px",
                    px: 1,
                    margin: "auto",
                    width: "100%",
                    py: 8,
                    justifyContent: "center",
                }}
            >
                <Box sx={{ width: "50%" }}>
                    <ProductImageCarousel product={plantVariant} />
                </Box>

                <Stack spacing={3} sx={{ flexGrow: 1, maxWidth: "50%" }}>
                    <Typography variant="h3" sx={{ fontWeight: 400 }}>
                        {capitalizeWords(plantSeries._id)}
                    </Typography>

                    <Typography>{plantVariant.description}</Typography>

                    <Typography variant="h4" color="green" sx={{ py: 2 }}>
                        price: ${plantVariant.price}
                    </Typography>

                    {/* Size selection buttons */}
                    <Stack direction="row" spacing={1}>
                        {validSizes.map((size) => {
                            const isAvailable = plantSeries.plants.some((p) => p.size === size);
                            if (!isAvailable) return null;

                            return (
                                <Button
                                    key={size}
                                    variant={selectedSize === size ? "contained" : "outlined"}
                                    onClick={() => {
                                        setSelectedSize(size);
                                        setQuantity(1); // Optional: reset quantity on size change
                                    }}
                                >
                                    {capitalizeWords(size)}
                                </Button>
                            );
                        })}
                    </Stack>


                    <Stack direction="column" spacing={2} width="100%" sx={{py:3}}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Button
                                variant="outlined"
                                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                            >
                                -
                            </Button>
                            <Typography sx={{minWidth: '15px'}} textAlign='center' >{quantity}</Typography>
                            <Button variant="outlined" onClick={() => setQuantity((q) => q + 1)}>
                                +
                            </Button>
                            <Button variant="contained" color="primary" sx={{ width: '100%' }} onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                        </Stack>
                        <Button variant="contained" color="secondary" onClick={handleBuyNow} sx={{ height: '50px' }}>
                            Buy Now
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </section>
    );
}

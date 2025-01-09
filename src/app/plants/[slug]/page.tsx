import PlantDetailsSection from "@/components/layout/plantDetailsSection";
import { catalogPlantSeries, PlantVarient } from "@/types/plants.types";
import { api } from "@/utils/api";
import { Box, Typography } from "@mui/material";


interface PageProps {
    params: {
        slug: string;
    };
    searchParams: PlantVarient;
}




// export default async function PlantProductPage(props: { params: Promise<{ slug: string }> }) {
export default async function PlantProductPage({ params, searchParams }: PageProps) {

    const { slug } = await params;
    let variant: PlantVarient = await searchParams;

    console.log("plant Varient", variant)


    const getPlantDetails = async () => {
        try {
            const { data }: { data: catalogPlantSeries } = await api.get(`plants/collection/${slug}`);
            return data
        } catch (err) {
            console.error("failed fetching product details", err)
        }
    }


    const plantDetails: catalogPlantSeries | undefined = await getPlantDetails()

    if (!plantDetails) {
        return (
            <Box
                sx={{
                    height: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant='h3'>
                    Page Not Found: 404
                </Typography>
            </Box>
        )
    } else if (plantDetails?.plants.length === 0) {
        return (
            <Box
                sx={{
                    height: '60vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography variant='h3'>
                    Page Not Found: 404
                </Typography>
            </Box>
        )
    }


    return (
        <>
            <PlantDetailsSection plantSeries={plantDetails} variant={variant} />
        </>
    )

}
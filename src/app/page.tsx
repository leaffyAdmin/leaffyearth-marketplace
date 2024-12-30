import Header from "@/components/layout/header/header";
import { Typography } from "@mui/material";


export const metadata = {
  title: 'leaffyEarth | Home of Plants & Planters',
  description: 'Explore a wide range of plants and planters at leaffyEarth.',
  openGraph: {
    title: 'leaffyEarth | Home of Plants & Planters',
    description: 'Explore a wide range of plants and planters at leaffyEarth.',
    url: 'https://yourdomain.com',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        alt: 'leaffyEarth',
      },
    ],
  },
}


export default function Home() {


  return (
    <main>
      <Header />
    </main>
  );
}

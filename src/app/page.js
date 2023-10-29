import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@mui/material'
import { Main } from '@/components/Home/Main'
import { Services } from '@/components/Home/Services'
import { GoToHome } from '@/components/Home/GoToHome'
import Social from '@/components/Home/Social'

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // bgcolor: "#F0EEF0"
      }}
    >
      <Main />
      <Services />
      <GoToHome />
      <Social />
    </Box>
  )
}

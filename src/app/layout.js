import "./globals.css";
import { Navbar } from "@/components/Global/Navbar";
import { Footer } from "@/components/Global/Footer";
import { Box } from "@mui/material";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						overflowX: "hidden"
					}}
				>
					<Navbar />
					{children}
					<Footer />
				</Box>
			</body>
		</html>
	);
}

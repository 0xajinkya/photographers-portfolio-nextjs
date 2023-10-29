import { ViewPortfolioButton } from "@/components/Global/ViewPortfolio";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const GoToHome = () => {
	return (
		<Box
			sx={{
				px: ["10px", "10px", "100px"],
				py: "90px",
				gap: ["40px", "40px", "0px"],
				bgcolor: "#F0EEF0",
				display: "flex",
				flexDirection: ["column", "column", "row"],
				alignItems: "center"
			}}
		>
			<Box
				sx={{
					flex: 1.5,
					display: "flex",
					gap: "80px"
				}}
			>
				<Image
					src={"/photos/1.png"}
					width={300}
					height={400}
					style={{
						objectFit: "cover",
						boxShadow: "10px 10px 0px 2px rgba(0,0,0,1)",
						transform: "rotate(10deg)",
						marginTop: "40px"
					}}
					alt="Photo 1"
				/>
				<Image
					src={"/photos/2.png"}
					width={300}
					height={400}
					style={{
						objectFit: "cover",
						boxShadow: "10px 10px 0px 2px rgba(0,0,0,1)",
						transform: "rotate(10deg)"
					}}
					alt="Photo 2"
				/>
			</Box>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: "30px",
					position: "relative",
					alignItems: ["center", "center", "flex-start"]
				}}
			>
				<Typography
					sx={{
						fontSize: "50px",
						fontFamily: "Montserrat",
						fontWeight: 600,
						zIndex: 999,
						textAlign: ["center", "center", "left"]
					}}
				>
					My All Latest Featured Work
				</Typography>
				<Typography
					sx={{
						fontFamily: "Montserrat",
						textAlign: ["center", "center", "left"]
					}}
				>
					Let&apos;s take your photograph to the next level. See real wonderful and beautiful
					moment of your life.
				</Typography>
				<Box>
					<Image
						src={"/images/curve.svg"}
						width={450}
						height={300}
						alt="Curve line"
						style={{
							objectFit: "cover",
							position: "absolute",
							top: "-15px",
							left: "-25px"
							// zIndex: -1
						}}
					/>
				</Box>
				<ViewPortfolioButton />
			</Box>
		</Box>
	);
};

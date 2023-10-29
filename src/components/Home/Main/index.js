import { ViewPortfolioButton } from "@/components/Global/ViewPortfolio";
import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Main = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: ["column", "column", "row"],
				alignItems: "center",
				bgcolor: "#F0EEF0",
				px: ["20px", "20px", "100px"],
				py: "10px",
				height: ["auto", "auto", "80vh"]
			}}
		>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					gap: "35px",
					ml: ["200px", "200px", "0px"],
					mt: ["30px", "30px", "0px"]
				}}
			>
				<Typography
					sx={{
						fontSize: ["40px", "40px", "50px"],
						fontFamily: "Montserrat",
						fontWeight: 600
					}}
				>
					Capturing
					<br /> Beauty Photo
				</Typography>
				<Typography
					sx={{
						fontSize: "15px",
						fontFamily: "Montserrat"
					}}
				>
					Let&apos;s take your photograph to the next level. Capturing your wonderful and
					beautiful moment of your life.
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: ["column-reverse", "column-reverse", "row"],
						gap: "20px",
						alignItems: "center"
					}}
				>
					<ViewPortfolioButton />
					<Box
						sx={{
							display: ["none", "none", "flex"]
						}}
					>
						<Button
							sx={{
								":hover": {
									bgcolor: "transparent"
								}
							}}
							disableRipple
						>
							<ArrowRight
								sx={{
									color: "black"
								}}
							/>
							<Typography
								sx={{
									fontSize: "12px",
									fontFamily: "Gabarito",
									color: "black"
								}}
							>
								Demo Video
							</Typography>
						</Button>
					</Box>
				</Box>
			</Box>
			<Box
				sx={{
					flex: 0.5,
					display: ["none", "none", "flex"]
				}}
			>
				<Image
					src={"/images/harshal.png"}
					width={600}
					height={600}
					style={{
						objectFit: "cover",
						objectPosition: "center",
						position: "absolute",
						top: "35px",
						left: "32%"
					}}
					alt="Harshal"
				/>
			</Box>
			<Box
				sx={{
					flex: 0.5,
					display: ["flex", "flex", "none"]
				}}
			>
				<Image
					src={"/images/harshal.png"}
					width={600}
					height={600}
					style={{
						objectFit: "cover",
						objectPosition: "center",
						position: "absolute",
						top: "20px",
						left: "-50%"
					}}
					alt="Harshal"
				/>
			</Box>
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					gap: "50px",
					mt: ["30px", "30px", "0px"]
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						alignItems: "center"
					}}
				>
					<Image
						src={"/logo/wizard.png"}
						width={50}
						height={50}
						alt="Wizard"
						style={{
							backgroundColor: "#FB6767",
							borderRadius: "10px",
							padding: "5px",
							border: "2px solid black"
						}}
					/>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 600,
							fontFamily: "Montserrat"
						}}
					>
						Professional Photo Editor
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						alignItems: "center"
					}}
				>
					<Image
						src={"/logo/shield.png"}
						width={50}
						height={50}
						alt="Shield"
						style={{
							backgroundColor: "#98F6FB",
							borderRadius: "10px",
							padding: "5px",
							border: "2px solid black"
						}}
					/>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 600,
							fontFamily: "Montserrat"
						}}
					>
						5 years experience
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "10px",
						alignItems: "center"
					}}
				>
					<Image
						src={"/logo/camera.png"}
						width={50}
						height={50}
						alt="Camera"
						style={{
							backgroundColor: "#FBFB98",
							borderRadius: "10px",
							padding: "5px",
							border: "2px solid black"
						}}
					/>
					<Typography
						sx={{
							fontSize: "18px",
							fontWeight: 600,
							fontFamily: "Montserrat"
						}}
					>
						Pro Photographer
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

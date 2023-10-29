"use client";

import { ViewPortfolioButton } from "@/components/Global/ViewPortfolio";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Social = () => {
	const router = useRouter();

	return (
		<Box
			sx={{
				px: ["10px", "10px", "100px"],
				py: "60px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "60px",
				overflowX: "hidden"
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: "15px",
					position: "relative"
				}}
			>
				<Typography
					sx={{
						fontSize: "50px",
						fontFamily: "Montserrat",
						fontWeight: 600
					}}
				>
					Where can <br />
					you find me?
				</Typography>
				<Typography
					sx={{
						fontFamily: "Montserrat",
						textAlign: "center"
					}}
				>
					Let&apos;s me serve you with the best possible photography services
				</Typography>
				<Box
					sx={{
						display: ["none", "none", "flex"]
					}}
				>
					<Image
						src={"/images/curve.svg"}
						width={450}
						height={300}
						alt="Curve line"
						style={{
							objectFit: "cover",
							position: "absolute",
							top: "-5px",
							left: "70px",
							zIndex: -1
						}}
					/>
				</Box>
				<Box
					sx={{
						display: ["flex", "flex", "none"]
					}}
				>
					<Image
						src={"/images/curve.svg"}
						width={350}
						height={300}
						alt="Curve line"
						style={{
							objectFit: "cover",
							position: "absolute",
							top: "-10px",
							left: "10px",
							zIndex: -1
						}}
					/>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: ["column", "column", "row"],
					justifyContent: "center",
					alignItems: "center",
					gap: ["30px", "30px", "100px"]
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						gap: "15px"
					}}
				>
					<Link href={"https://www.instagram.com/mr._______harsh_"} target="_blank">
						<Image
							src={"/logo/inst.png"}
							width={150}
							height={150}
							alt="Travel"
							style={{
								objectFit: "cover"
							}}
						/>
					</Link>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						gap: "15px"
					}}
				>
					<Link href={"https://wa.me/+917263911672"} target="_blank">
						<Image
							src={"/logo/whatsapp.png"}
							width={150}
							height={150}
							alt="Personal"
							style={{
								objectFit: "cover",
								objectPosition: "top"
							}}
						/>
					</Link>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						gap: "15px"
					}}
				>
					<Link href={"mailto:harshalalande250@gmail.com"}>
						<Image
							src={"/logo/gmail.png"}
							width={150}
							height={150}
							alt="Travel"
							style={{
								objectFit: "cover"
							}}
						/>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default Social;

import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ViewPortfolioButton = () => {
	return (
		<Button
			sx={{
				width: "150px",
				height: "150px",
				borderRadius: "100%",
				p: 0,
				position: "relative",
                color: "black",
				":hover": {
					backgroundColor: "transparent"
				}
			}}
			disableRipple
		>
			<Image
				src={"/logo/viewp.png"}
				width={150}
				height={150}
				alt={"View Portfolio"}
				style={{
					position: "absolute"
				}}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				style={{
					width: "100px",
					height: "30px"
				}}
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
				/>
			</svg>
		</Button>
	);
};

import { Home } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const CustomButton = ({ text, style, textStyle }) => {
	return (
		<Button
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "10px",
				color: "black",
        borderRadius: "20px",
				":hover": {
					bgcolor: "transparent"
				},
        ...style
			}}
		>
			<Typography
				sx={{
					fontSize: "14px",
					fontFamily: "Gabarito",
          ...textStyle
				}}
			>
				{text}
			</Typography>
		</Button>
	);
};

export const Navbar = () => {
	return (
		<Box
			sx={{
				bgcolor: "#F0EEF0",
				px: "100px",
				py: "10px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center"
			}}
		>
			<Box
				sx={{
					display: "flex",
					gap: ["10px", "10px", "0px"],
					flexDirection: ["row", "row", "column"],
					justifyContent: "center",
					gap: "0px",
					alignItems: "center"
				}}
			>
				<Image src={"/logo/logo.png"} alt={"Harshal Photography"} width={30} height={30} />
				<Typography
					sx={{
						fontSize: "12px",
						fontFamily: "Gabarito"
					}}
				>
					Harshal Photography
				</Typography>
			</Box>
			<Box
				sx={{
					display: ["none", "none", "flex"],
					gap: "10px"
				}}
			>
				<CustomButton text={"Home"} />
				<CustomButton text={"Gallery"} />
			</Box>
			<Box>
        <CustomButton 
          text={"Contact Us"}
          style={{
            borderBottom: "1px solid black",
            py: "2px",
            borderRadius: "0px"
          }}
          textStyle={{
            fontWeight: 600,
            fontSize: "15px"
          }}
        />
      </Box>
		</Box>
	);
};

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const Services = () => {
	return (
		<Box
			sx={{
				px: ["20px", "20px", "100px"],
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
						fontWeight: 600,
            textAlign: ["center", "center", "left"]
					}}
				>
					Service I Provide
				</Typography>
				<Typography
					sx={{
						fontFamily: "Montserrat",
						textAlign: "center",
            textAlign: ["center", "center", "left"]
					}}
				>
					Let&apos;s see the services I am providing for your beautiful moment services <br />{" "}
					I am providing for your beautiful
				</Typography>
				<Box
          sx={{
            display: ["none", "none", "flex"]
          }}
        >
					<Image 
            src={"/images/curve.svg"}
            width={500}
            height={300}
            alt="Curve line"
            style={{
              objectFit: "cover",
              position: "absolute",
              top: "-85px",
              left: "30px",
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
            width={250}
            height={300}
            alt="Curve line"
            style={{
              objectFit: "cover",
              position: "absolute",
              top: "-15px",
              left: "40px",
              zIndex: -1
            }}
          />
				</Box>
			</Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          justifyContent: 'center',
          alignItems: "center",
          gap: "100px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: ["center", "center", "flex-start"],
            gap: "15px"
          }}
        >
          <Image 
            src={"/images/travel.png"}
            width={200}
            height={400/3}
            alt="Travel"
            style={{
              objectFit: "cover",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Gabarito",
              fontSize: "25px",
              fontWeight: 600
            }}
          >
            Travel
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              textAlign: ["center", "center", "left"]
            }}
          >
            Let&apos;s take your photograph to the wonderful and beautiful moment
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: ["center", "center", "flex-start"],
            gap: "15px"
          }}
        >
          <Image 
            src={"/images/personal.png"}
            width={200}
            height={400/3}
            alt="Personal"
            style={{
              objectFit: "cover",
              objectPosition: "top"
            }}
          />
          <Typography
            sx={{
              fontFamily: "Gabarito",
              fontSize: "25px",
              fontWeight: 600
            }}
          >
            Personal
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              textAlign: ["center", "center", "left"]
            }}
          >
            Let&apos;s take your photograph to the wonderful and beautiful moment
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: ["center", "center", "flex-start"],
            gap: "15px"
          }}
        >
          <Image 
            src={"/images/wedding.png"}
            width={200}
            height={400/3}
            alt="Travel"
            style={{
              objectFit: "cover",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Gabarito",
              fontSize: "25px",
              fontWeight: 600
            }}
          >
            Wedding
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat",
              textAlign: ["center", "center", "left"]
            }}
          >
            Let&apos;s take your photograph to the wonderful and beautiful moment
          </Typography>
        </Box>
      </Box>
		</Box>
	);
};

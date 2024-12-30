import { useState } from "react";
import { Box, Stack, IconButton, ButtonBase } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const images = [
  "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", 
  "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg"
];


const ImageSlider = ({currentIndex, setCurrentIndex} : {currentIndex : number, setCurrentIndex : (index : number) => void}) => {
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  // Handlers for navigation
  const nextSlide = () => {
    setSlideDirection("right");
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideDirection("left");
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  return (
    <Stack
      sx={{ width: { xs: "80vw", md: "50vw" } }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "90vw", md: "40vw" },
          height: { xs: "90vw", md: "32vw" },
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(/images/product/${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            animation: `${slideDirection === "right" ? "slideInRight" : "slideInLeft"} 0.6s ease`,
          }}
        />

        <IconButton
          onClick={prevSlide}
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={nextSlide}
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "#fff",
            "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          }}
        >
          <ChevronRight />
        </IconButton>
      </Box>

      {/* Dots */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          padding: "20px 0",
        }}
      >
        {images.map((_, index) => (
          <ButtonBase
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: "10px",
              height: "10px",
              backgroundColor: "#0f0f0f",
              opacity: index === currentIndex ? 1 : 0.5,
              borderRadius: "25%",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default ImageSlider;

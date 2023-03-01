import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Puzzle from "react-image-puzzle";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
export default function Home() {
  const [image, setImage] = useState("");
  return (
    <>
      <Head>
        <title>Image Puzzle</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        Image Puzzle
        <button type="file">
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files[0] && e.target.files[0].type.includes("image"))
                setImage(URL.createObjectURL(e.target.files[0]));
                else toast.error("Please select an image file", {
                  delay: 1000,
                  position: "bottom-center",
                });
            }}
          />
        </button>
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {image && (
          <div>
            <Puzzle
              image={image}
              level={3}
              size={400}
              onDone={() => {
                console.log("Finished");
                toast.success("Congrats!", {
                  delay: 1000,
                  position: "bottom-center",
                });
              }}
            />
            <Toaster />
          </div>
        )}
      </div>
    </>
  );
}

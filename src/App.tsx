"use client";
import { Play, Users, FileText, Calendar } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState(
    "https://drive.google.com/file/d/1hb0U380Eh0qH6kVt6l6ar4XJWD2ygpDp/view?usp=sharing&fbclid=IwY2xjawMmsLJleHRuA2FlbQIxMQABHlHFo5GrmRa7C0O2Xtt5gzJ9_jgxQzeqFt0_LzPXxivQZ04nvm03ga3ZjB_k_aem_BJ3VfILDrBwJemQ3Dzxj1A"
  ); // You'll provide the Google Drive link here
  const handleVideoClose = () => {
    setShowVideo(false);
    setVideoUrl("");
  };

  return (
    <>
      {/* Video Modal Window */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-gray-900 rounded-lg p-4 max-w-4xl w-full mx-4">
            <button
              onClick={handleVideoClose}
              className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl font-bold z-10"
            >
              ×
            </button>
            <div className="aspect-video">
              <iframe
                src={videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function ClubWelcomePage() {
  const theme = {
    blue: "#2C75C3", // A
    orange: "#F4A300", // C
    red: "#C0392B", // M
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden ">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ background: `${theme.blue}20` }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ background: `${theme.orange}20` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse delay-2000"
          style={{ background: `${theme.red}10` }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="relative z-10 grid lg:grid-cols-2 min-h-screen ">
        {/* Left Side - Welcome & Logo */}
        <div className="flex flex-col items-center justify-center p-8 lg:p-16 xl:p-20">
          <div className="max-w-lg lg:max-w-xl xl:max-w-2xl text-center space-y-8 lg:space-y-10">
            <div className="text-center flex flex-col items-center">
              <div className="relative inline-block mb-8">
                {/* Bigger Glow */}
                <div
                  className="absolute -inset-4 rounded-[2rem] blur-xl opacity-40 animate-pulse"
                  style={{
                    background: `linear-gradient(45deg, ${theme.blue}, ${theme.orange}, ${theme.red})`,
                  }}
                ></div>

                {/* Bigger Box */}
                <div
                  className="relative w-80 h-80 lg:w-72 lg:h-72 rounded-[2rem] flex items-center justify-center mx-auto lg:mx-0 border-4 backdrop-blur-md shadow-xl"
                  style={{
                    background: `${theme.blue}20`,
                    borderColor: `${theme.blue}50`,
                  }}
                >
                  {/* Bigger Logo */}
                  <img
                    src="logoacm.png"
                    alt="Club Logo"
                    className="scale-100 lg:scale-100"
                  />
                </div>
              </div>
            </div>

            {/* Welcome Content */}
            <div className="space-y-6 lg:space-y-8">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm lg:text-base font-medium backdrop-blur-sm border"
                style={{
                  background: `${theme.orange}20`,
                  borderColor: `${theme.orange}50`,
                  color: "white",
                }}
              >
                <Users className="w-4 h-4 lg:w-5 lg:h-5" />
                Ahla chabeb!
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-balance leading-tight">
                Welcome to{" "}
                <span
                  className="text-transparent font-black"
                  style={{
                    background: `linear-gradient(90deg, ${theme.blue}, ${theme.orange}, ${theme.red})`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  ACM SUP'COM
                </span>
              </h1>

              <p className="text-lg lg:text-xl xl:text-2xl text-gray-300 text-pretty leading-relaxed">
                what is CP and why work on it?
                <br /> hetha lkol 7keneh fi live fi sef
                <br /> link below ⬇️⬇️
                <br /> Fill the form to become a member
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Video & Actions */}
        <div className="flex flex-col items-center justify-center p-8 lg:p-16 xl:p-20">
          <div className="max-w-lg lg:max-w-xl xl:max-w-2xl text-center space-y-8 lg:space-y-10">
            {/* Video Section */}
            <VideoSection />

            {/* Action Buttons */}
            <div className="space-y-6 lg:space-y-8">
              <button
                className="w-full h-16 lg:h-20 xl:h-24 text-lg lg:text-xl xl:text-2xl font-semibold text-white rounded-lg lg:rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 relative group"
                style={{
                  background: `linear-gradient(45deg, ${theme.blue}, ${theme.orange})`,
                  boxShadow: `0 4px 15px ${theme.orange}30`,
                }}
                onClick={() => {
                  console.log(
                    "[v0] Video button clicked - Google Drive link needed"
                  );
                  window.open(
                    "https://drive.google.com/file/d/1hb0U380Eh0qH6kVt6l6ar4XJWD2ygpDp/view?usp=sharing&fbclid=IwY2xjawMmsLJleHRuA2FlbQIxMQABHlHFo5GrmRa7C0O2Xtt5gzJ9_jgxQzeqFt0_LzPXxivQZ04nvm03ga3ZjB_k_aem_BJ3VfILDrBwJemQ3Dzxj1A/preview",
                    "_blank"
                  );
                }}
              >
                <div className="flex items-center justify-center">
                  <Play className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 mr-3 lg:mr-4 group-hover:scale-110 transition-transform duration-300" />
                  Watch Summer Live
                </div>
                <div
                  className="absolute inset-0 rounded-lg lg:rounded-xl animate-pulse opacity-20"
                  style={{
                    background: `linear-gradient(45deg, ${theme.blue}80, ${theme.orange}80)`,
                  }}
                ></div>
              </button>

              <button
                className="w-full h-16 lg:h-20 xl:h-24 text-lg lg:text-xl xl:text-2xl font-semibold text-white rounded-lg lg:rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-600/50 hover:bg-gray-700/50 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                onClick={() => {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdNO7f2RbMpDWY1-xz-JHWmHHSOeIh3NfEDQvPdDfFbZ3tJPg/viewform?fbclid=IwY2xjawMr_fJleHRuA2FlbQIxMQABHs2YfsLDtDOe9HfrMmbUQSsrusJpZ2onv46SdInHJTQ8rEdRAZq6AJ06o0LQ_aem_Ygj_3vf_au7zIGToyOFj_Q",
                    "_blank"
                  );
                }}
              >
                <div className="flex items-center justify-center">
                  <FileText className="w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 mr-3 lg:mr-4 group-hover:scale-110 transition-transform duration-300" />
                  Fill Out Form
                </div>
              </button>
            </div>

            <div className="relative">
              <div
                className="absolute -inset-0.5 rounded-lg lg:rounded-xl blur opacity-25"
                style={{ background: theme.red }}
              ></div>
              <div
                className="relative border rounded-lg lg:rounded-xl p-6 lg:p-8 text-center backdrop-blur-sm"
                style={{
                  backgroundColor: `${theme.red}20`,
                  borderColor: `${theme.red}50`,
                }}
              >
                <Calendar
                  className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3 lg:mb-4"
                  style={{ color: theme.red }}
                />
                <p className="text-sm lg:text-base xl:text-lg text-gray-300">
                  Thank you for being part of our amazing community. More
                  exciting events coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

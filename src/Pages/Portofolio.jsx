import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { motion, AnimatePresence } from "framer-motion";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CardProject from "../components/CardProject";
import Certificate from "../components/Certificate";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Code,
  Award,
  ArrowLeft,
  Folder,
  Image as ImageIcon,
} from "lucide-react";

import { Photo } from "@mui/icons-material";

/* ---------------- Toggle Button ---------------- */

// const ToggleButton = ({ onClick, isShowingMore, show }) => {
//   if (!show) return null;

//   return (
//     <div className="mt-6 flex justify-center">
//       <button
//         type="button"
//         onClick={onClick}
//         className="px-3 py-1.5 text-slate-300 hover:text-white text-sm font-medium transition-all flex items-center gap-2 bg-white/5 hover:bg-white/10 rounded-md border border-white/10"
//       >
//         {isShowingMore ? "See Less" : "See More"}
//       </button>
//     </div>
//   );
// };

ToggleButton.propTypes = {
  onClick: PropTypes.func,
  isShowingMore: PropTypes.bool,
  show: PropTypes.bool,
};

/* ---------------- Tab Panel ---------------- */

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number,
};

/* =========================================================
   TECH FOLDERS
========================================================= */

const photoFolders = [
  {
    name: "Streest Photography",
    photos: [
      {
        image: "/public/S1.jpeg",
      },
      {
        image: "/public/S2.jpeg",
      },
      {
        image: "/public/S3.jpeg",
      },
        {
        image: "/public/S4.jpeg",
      },
      {
        image: "/public/S5.jpeg",
      },
      {
        image: "/public/S6.jpeg",
      },
    ],
  },
  {
    name: "Product Photography",
    photos: [
      {image: "/public/f5.png"},
      {image: "/public/f8.png"},
      {image: "/public/f10.png"},
      {image: "/public/P2.jpeg"},
      {image: "/public/P3.jpeg"},
      {image: "/public/P1.jpeg"},
      {image: "/public/P4.jpeg"},
      {image: "/public/P5.png"},
      {image: "/public/P6.png"},
      {image: "/public/P7.png"},
      {image: "/public/P8.jpeg"},
      {image: "/public/P9.jpeg"},
      {image: "/public/P10.png"},
      {image: "/public/P11.png"},
      {image: "/public/P12.png"},
      {image: "/public/P13.png"},
      {image: "/public/P14.png"},
      {image: "/public/P15.png"},
      {image: "/public/P16.png"},
      {image: "/public/P17.png"},
      {image: "/public/P18.png"},
      {image: "/public/P19.jpeg"},
      {image: "/public/P20.jpeg"},
      {image: "/public/P21.jpeg"},
    ],
  },
  {
    name: "PhotoShoot",
    photos: [
      {image: "/public/PS1.png", },
      {image: "/public/PS2.png",},
      {image: "/public/PS3.png",},
      {image: "/public/PS4.png",},
      {image: "/public/PS5.jpeg",},
      {image: "/public/PS6.jpeg",},
      {image: "/public/PS7.png", },
      {image: "/public/PS7.jpeg",},
      {image: "/public/PS9.png",},
      {image: "/public/PS10.png",},
      {image: "/public/PS12.png",},
      {image: "/public/PS13.png",},
      {image: "/public/PS14.png",},
      {image: "/public/PS15.png",},
      {image: "/public/PS16.png",},
      {image: "/public/PS17.png",},
    ],
  },

  {
    name: "Event Photography",
    photos: [
      {image: "/public/E1.jpeg"},
      {image: "/public/E2.jpeg"},
      {image: "/public/E3.jpeg"},
      {image: "/public/E4.jpeg"},
      {image: "/public/E5.jpeg"},
      {image: "/public/E6.jpeg"},
      {image: "/public/E7.jpeg"},
      {image: "/public/E8.jpeg"},
      {image: "/public/E9.jpeg"},
      {image: "/public/E10.jpeg"},
      {image: "/public/E11.jpeg"},
      {image: "/public/E12.jpeg"},
      {image: "/public/E13.jpeg"},
      {image: "/public/E14.jpeg"},
      {image: "/public/E15.jpeg"},
      {image: "/public/E16.jpeg"},
      {image: "/public/E17.jpeg"},
      {image: "/public/E18.jpeg"},
      {image: "/public/E19.jpeg"},
      {image: "/public/E20.jpeg"},
      {image: "/public/E21.jpeg"},
    ],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    image: "/content.png",
    name: "TUK TUK Shortfilm",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/mLbnuNUXVgc",
  },
  {
    image: "/new.png",
    name: "ABA Chines New Year 2026",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://www.youtube.com/watch?v=YCsXB14MPl4",
  },

  {
    image: "/beer.png",
    name: "Greed life beer",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://www.youtube.com/watch?v=AACHLRIi04I",
  },

  {
    image: "/worthy.png",
    name: "I am Worthy.",
    description: "Shorten long URLs with analytics.",
    tech: "React, Node.js, MongoDB",
    link: "https://youtu.be/WxgtNsXbRM4",
  },

  {
    image: "/basket.png",
    name: "Flat Bamboo Basket",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/3HdXF1cx_to",
  },

  {
    image: "/later.png",
    name: "Regret Later",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/vGE6JmfMnYc",
  },

  {
    image: "/night.png",
    name: "At Night",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/sdkHgWLPNwc",
  },

  {
    image: "/form.png",
    name: "From What ?",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/q18xUt5zz64",
  },

  {
    image: "/water.png",
    name: "Water Festival",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/Hr62GqtiLMY",
  },

  {
    image: "/living.png",
    name: "RLiving and Buddhism",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/T37HOpZaHew",
  },

  {
    image: "/little.png",
    name: "Little by little",
    description: "Simple calculator project.",
    tech: "HTML, JS, Tailwind",
    link: "https://youtu.be/er5jD1PGLtA",
  },

  // {
  //   image: "/content.png",
  //   name: "Video Content",
  //   description: "Simple calculator project.",
  //   tech: "HTML, JS, Tailwind",
  //   link: "https://youtu.be/-uOu9gVXmeE",
  // },
 
];

/* =========================================================
   CERTIFICATES
========================================================= */

const certificates = [
  {
    image: "/certificate.png",
    title: "Web and Mobile App Development",
    date: "2026",
    description:
      "Completed training in Web and Mobile App Development, including frontend development, backend development, database management, and modern web technologies.",
  },
  {
    image: "/public/C1.jpeg",
    title: "BEARKTHROUGH FILM FESTIVAL",
    date: "2024",
    description:
      "Best Short Film Selection at the Breakthrough Short Film Festival.",
  },
   {
    image: "/public/C3.jpeg",
    title: "UN Women Cambodia PROTECT project",
    date: "2025",
    description:
      "Film documentary selection by UN Women Cambodia, under the PROTECT project funded by the European Union 🇪🇺",
  },
  {
    image: "/public/C2.jpeg",
    title: "FECA COMPETITION 2025",
    date: "2025",
    description:
      "2nd Place Winner in the Financial Education and Literacy Competition (FECA 2025).",
  },
 
    {
    image: "/public/C3.jpeg",
    title: "UN Women Cambodia PROTECT project",
    date: "2025",
    description:
      "Film documentary selection by UN Women Cambodia, under the PROTECT project funded by the European Union 🇪🇺",
  },
];
/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);

  const [showAllProjects, setShowAllProjects] =
    useState(false);

  const [showAllCertificates, setShowAllCertificates] =
    useState(false);

  /* Folder navigation */
  const [selectedFolder, setSelectedFolder] =
    useState(null);

  const initialItems = 20;

  /* ---------------- AOS ---------------- */

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  /* ---------------- Local Storage ---------------- */

  const fetchData = useCallback(() => {
    localStorage.setItem(
      "projects",
      JSON.stringify(projects)
    );

    localStorage.setItem(
      "certificates",
      JSON.stringify(certificates)
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /* ---------------- Tab Change ---------------- */

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // Reset folder when leaving Photo tab
    if (newValue !== 2) {
      setSelectedFolder(null);
    }
  };

  /* ---------------- Toggle More ---------------- */

  const toggleShowMore = (type) => {
    if (type === "projects") {
      setShowAllProjects((p) => !p);
    } else {
      setShowAllCertificates((p) => !p);
    }
  };

  /* =========================================================
     OPEN FRONTEND / BACKEND FOLDER
  ========================================================= */

  const openFolder = (folder) => {
    setSelectedFolder(folder);
  };

  /* =========================================================
     BACK TO FOLDERS
  ========================================================= */

  const goBack = () => {
    setSelectedFolder(null);
  };

  /* =========================================================
     PHOTO TAB
  ========================================================= */

  const renderPhotoTab = () => {
    /* -------------------------------------------------------
       1. FOLDER LEVEL
       FRONTEND + BACKEND
    ------------------------------------------------------- */

    if (!selectedFolder) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {photoFolders.map((folder, index) => (
            <motion.div
              key={folder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="
                rounded-3xl
                border border-white/10
                bg-slate-900/50,
                hover:bg-slate-800/70
                p-8
                transition-all duration-300
                shadow-xl
              "
            >
              {/* ONLY FOLDER ICON IS CLICKABLE */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => openFolder(folder)}
                  className="
                    group
                    relative
                    cursor-pointer
                    border-0
                    bg-transparent
                    p-0
                    focus:outline-none
                  "
                  aria-label={`Open ${folder.name}`}
                >
                  {/* Folder tab */}
                  <div
                    className="
                      absolute
                      -top-3
                      left-3
                      w-16
                      h-7
                      bg-yellow-400
                      rounded-t-lg
                    "
                  />

                  {/* Folder */}
                  <div
                    className="
                      relative
                      w-36
                      h-28
                      bg-yellow-400
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      shadow-xl
                      transition-all
                      duration-300
                      group-hover:scale-105
                      group-hover:bg-yellow-300
                    "
                  >
                    <Folder
                      size={70}
                      strokeWidth={1.5}
                      className="text-yellow-900"
                      fill="currentColor"
                    />
                  </div>
                </button>
              </div>

              {/* Folder name - NOT clickable */}
              <h2 className="text-center text-xl font-bold text-white mt-6">
                {folder.name}
              </h2>

              {/* Number of images - NOT clickable */}
              <p className="text-center text-sm text-slate-400 mt-2">
                {folder.photos.length} website images
              </p>

              {/* Text - NOT clickable */}
              <p className="text-center text-sm text-purple-400 mt-4">
                Click the folder icon to open →
              </p>
            </motion.div>
          ))}
        </motion.div>
      );
    }

    /* -------------------------------------------------------
       2. WEBSITE IMAGES
       Folder -> Directly to website screenshots
    ------------------------------------------------------- */

    return (
      <div>
        {/* ================= BACK BUTTON ================= */}

        <button
          type="button"
          onClick={goBack}
          className="
            mb-8
            flex items-center gap-2
            px-4 py-2
            rounded-lg
            bg-white/5
            hover:bg-white/10
            border border-white/10
            text-slate-300
            hover:text-white
            transition-all
            cursor-pointer
            relative z-50
          "
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        {/* ================= FOLDER HEADER ================= */}

       <div className="flex items-center gap-4 mb-8">

        {/* Folder Icon */}
        <div className="relative flex-shrink-0">
          <div className="absolute -top-2 left-2 w-10 h-5 bg-yellow-400 rounded-t-md" />

          <div className="relative w-20 h-16 bg-yellow-400 rounded-lg flex items-center justify-center shadow-xl">
            <Folder
              size={38}
              className="text-yellow-900"
              fill="currentColor"
            />
          </div>
        </div>

        {/* Folder Name */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {selectedFolder.name}
          </h2>

          <p className="text-slate-400 mt-1">
            {selectedFolder.photos.length} website images
          </p>
        </div>

      </div>

        {/* ================= WEBSITE IMAGES ================= */}

        {selectedFolder.photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence>
              {selectedFolder.photos.map((photo, index) => (
                <motion.div
                  key={`${photo.image}-${index}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="
                    overflow-hidden
                    rounded-2xl
                    border border-white/10
                    bg-slate-900
                    shadow-xl
                    group
                  "
                >
                  <div className="overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title || selectedFolder.name}
                      className="
                        w-full
                        h-64
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 text-slate-400">
            No website images available.
          </div>
        )}
      </div>
    );
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <div
      className="md:px-[10%] px-[5%] w-full bg-[#030014]"
      id="Portofolio"
    >
      {/* ================= HEADER ================= */}

      <div className="text-center pb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
          Portfolio Showcase
        </h2>
      </div>

      <Box>
        {/* ================= TABS ================= */}

        <AppBar
          position="static"
          sx={{ bgcolor: "transparent" }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab
              icon={<Code />}
              label="Projects"
              sx={{ color: "#ffffff" }}
            />

            <Tab
              icon={<Award />}
              label="Certificates"
              sx={{ color: "#ffffff" }}
            />

            <Tab
              icon={<Photo />}
              label="Photo"
              sx={{ color: "#ffffff" }}
            />
          </Tabs>
        </AppBar>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <TabPanel value={value} index={0}>
          <div className="grid md:grid-cols-3 gap-5">
            {projects
              .slice(0, initialItems)
              .map((p, i) => (
                <CardProject
                  key={i}
                  Img={p.image}
                  Title={p.name}
                  Description={p.description}
                  Link={p.link}
                  id={p.tech}
                />
              ))}

            <AnimatePresence>
              {showAllProjects &&
                projects
                  .slice(initialItems)
                  .map((p, i) => (
                    <motion.div
                      key={`extra-project-${i}`}
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: i * 0.05,
                      }}
                    >
                      <CardProject
                        Img={p.image}
                        Title={p.name}
                        Description={p.description}
                        Link={p.link}
                        id={p.tech}
                      />
                    </motion.div>
                  ))}
            </AnimatePresence>
          </div>

          <ToggleButton
            onClick={() =>
              toggleShowMore("projects")
            }
            isShowingMore={showAllProjects}
            show={
              projects.length > initialItems
            }
          />
        </TabPanel>

        {/* =================================================
            CERTIFICATES
        ================================================= */}

      <TabPanel value={value} index={1}>
        <div className="grid md:grid-cols-3 gap-5">
          <AnimatePresence>
            {(showAllCertificates
              ? certificates
              : certificates.slice(0, initialItems)
            ).map((c, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-slate-900/50
                  p-3
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-500/50
                  hover:shadow-purple-500/10
                "
              >
                <Certificate
                  ImgSertif={c.image}
                  title={c.title}
                  issuer={c.issuer}
                  date={c.date}
                  description={c.description}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <ToggleButton
          onClick={() =>
            toggleShowMore("certificates")
          }
          isShowingMore={showAllCertificates}
          show={
            certificates.length > initialItems
          }
        />
      </TabPanel>

        {/* =================================================
            PHOTO
        ================================================= */}

        <TabPanel value={value} index={2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={
                selectedFolder
                  ? selectedFolder.name
                  : "folders"
              }
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              {renderPhotoTab()}
            </motion.div>
          </AnimatePresence>
        </TabPanel>
      </Box>
    </div>
  );
}
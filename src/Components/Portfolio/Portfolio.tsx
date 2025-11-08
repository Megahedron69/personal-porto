import { IonIcon } from "@ionic/react";
import { type FC, useState, useCallback, useMemo } from "react";
import { chevronDown, eyeOutline } from "ionicons/icons";
import { filterObj, projectPallete } from "../../Utils/Constants";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import "../../assets/css/ProjectStyles.css";

const Portfolio: FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleFilterClick = useCallback((title: string) => {
    setActiveFilter(title);
    setDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(
    () => setDropdownOpen((prev) => !prev),
    []
  );

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projectPallete
      : projectPallete.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filterObj.map((item, index) => (
            <div key={index}>
              <li className="filter-item">
                <button
                  className={`filter-chip ${
                    activeFilter === item.title ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(item.title)}
                >
                  <IonIcon icon={item.icon} style={{ marginRight: "4px" }} />
                  {item.title}
                </button>
              </li>
            </div>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${dropdownOpen ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            <div className="select-value" data-select-value="">
              {activeFilter || "Select category"}
            </div>
            <div className="select-icon">
              <IonIcon icon={chevronDown} />
            </div>
          </button>
          <ul className={`select-list ${dropdownOpen ? "active" : ""}`}>
            {filterObj.map((item, index) => (
              <div key={index}>
                <li className="select-item">
                  <button
                    className={activeFilter === item.title ? "active" : ""}
                    onClick={() => handleFilterClick(item.title)}
                    data-select-item=""
                  >
                    {item.title}
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item, index) => (
              <motion.li
                key={index}
                className="project-item active"
                data-filter-item=""
                data-category={item.category}
                variants={projectVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                layout
              >
                <NavLink to={item.url}>
                  <motion.figure
                    className="project-img"
                    layoutId={`image-${item.name}`}
                    initial={{ opacity: 0.8, scale: 1 }}
                    whileHover={{ scale: 1, opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="project-item-icon-box">
                      <IonIcon icon={eyeOutline} />
                    </div>
                    <img
                      src={item.coverImg}
                      alt={item.imgAlt}
                      loading="eager"
                    />
                  </motion.figure>
                  <h3 className="project-title">{item.name}</h3>
                  <p className="project-category">{item.category}</p>
                </NavLink>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;

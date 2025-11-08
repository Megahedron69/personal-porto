import type { FC } from "react";
import Timeline from "./Timeline";
import { EduTimeLine, CareerTimeline } from "../../Utils/Constants";
import { IonIcon } from "@ionic/react";
import { rocketOutline, bookOutline, trendingUpOutline } from "ionicons/icons";
import { skillTree } from "../../Utils/Constants";
import SkillCategory from "./Skills";

const programmingLanguages = skillTree.slice(0, 15);
const databaseSkills = skillTree.slice(15, 20);
const tools = skillTree.slice(20, 32);
const frameworks = skillTree.slice(32);

const Resume: FC = () => {
  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <Timeline
        TimelineObj={EduTimeLine}
        title={"Education"}
        icon={bookOutline}
      />
      <Timeline
        TimelineObj={CareerTimeline}
        title="Career"
        icon={trendingUpOutline}
      />
      <section className="skill">
        <div className="title-wrapper">
          <div className="icon-box">
            <IonIcon icon={rocketOutline} />
          </div>
          <h3 className="h3">My Skills</h3>
        </div>
        <ul className="skills-list content-card">
          <SkillCategory
            title="Programming Languages"
            skills={programmingLanguages}
          />
          <SkillCategory title="Database" skills={databaseSkills} />
          <SkillCategory title="Tools" skills={tools} />
          <SkillCategory title="Frameworks" skills={frameworks} />
        </ul>
      </section>
    </article>
  );
};

export default Resume;

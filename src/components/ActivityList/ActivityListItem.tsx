import styles from "./DeveloperListItem.module.css";
import { DeveloperState } from "./DeveloperState";
import { ColoredIcon, SystemIcon } from "@/cores/Icon";
import { Link } from "@/cores/Link";
import type { Developer } from "@/data/activities";

type Props = {
  Developer: Developer;
};

export const DeveloperListItem = (props: Props): JSX.Element => {
  const { Developer } = props;

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <ColoredIcon name={Developer.type} width={20} height={20} />
      </div>

      <div>
        <div className={styles.state}>
          <DeveloperState Developer={Developer} />
        </div>
        <div className={styles.Developer}>
          {Developer.url ? (
            <Link external href={Developer.url}>
              {Developer.title}
            </Link>
          ) : (
            <span>{Developer.title}</span>
          )}
        </div>
        {Developer.type === "event" && Developer.slide && (
          <Link external href={Developer.slide.url} className={styles.slide}>
            <div className={styles.speakerdeck}>
              <SystemIcon name="speakerdeck" width={22} height={22} />
            </div>
            <div>{Developer.slide.title}</div>
          </Link>
        )}
      </div>
    </div>
  );
};

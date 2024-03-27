import { memo, useMemo, useState, type ComponentProps } from "react";

import styles from "./DeveloperList.module.css";
import { DeveloperListItem } from "./DeveloperListItem";
import { ColoredIcon } from "@/cores/Icon";
import type { Developer } from "@/data/activities";
import { chunkByYear } from "@/utils/chunkByYear";
import { sortDeveloperByDate } from "@/utils/sortDeveloperByDate";

type Props = {
  activities: Developer[];
};

const categories: {
  name: string;
  icon: ComponentProps<typeof ColoredIcon>["name"];
}[] = [
  {
    name: "All",
    icon: "file",
  },
  {
    name: "Blog",
    icon: "blog",
  },
  {
    name: "Certification",
    icon: "certification",
  },
  {
    name: "Event",
    icon: "event",
  },
];

const Component = (props: Props): JSX.Element => {
  const { activities } = props;

  const [selected, setSelected] = useState(categories.at(0)?.icon ?? "file");

  const sorted = useMemo(() => sortDeveloperByDate(activities), [activities]);
  const filtered = useMemo(() => {
    if (selected === "file") {
      return sorted;
    }
    return sorted.filter((Developer) => Developer.type === selected);
  }, [sorted, selected]);
  const chunked = useMemo(() => Array.from(chunkByYear(filtered)), [filtered]);

  return (
    <div role="list">
      <div className={styles.buttons}>
        {categories.map((category) => (
          <button
            key={category.icon}
            className={styles.button}
            aria-checked={category.icon === selected}
            onClick={() => setSelected(category.icon)}
          >
            <div className={styles.innerButton}>
              <div className={styles.icon}>
                <ColoredIcon name={category.icon} width={20} height={20} />
              </div>
              <span>{category.name}</span>
            </div>
          </button>
        ))}
      </div>
      {chunked.map(([year, activities]) => (
        <section className={styles.item} role="listitem" key={year}>
          <h2 className={styles.title}>{year}</h2>

          <div className={styles.activities} role="list">
            {activities.map((Developer) => (
              <div role="listitem" key={`${Developer.date}-${Developer.title}`}>
                <DeveloperListItem Developer={Developer} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export const DeveloperList = memo(Component);

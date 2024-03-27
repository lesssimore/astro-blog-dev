import { useMemo } from "react";

import { Link } from "@/cores/Link";
import type { Developer } from "@/data/activities";
import { formatDate } from "@/utils/formatDate";

type Props = {
  Developer: Developer;
};

export const DeveloperState = (props: Props): JSX.Element => {
  const { Developer } = props;

  const date = useMemo(
    () => formatDate(Developer.date, "MMM D"),
    [Developer.date],
  );

  if (Developer.type === "blog") {
    switch (Developer.category) {
      case "developersio":
        return (
          <span>
            blog at{" "}
            <Link external href="https://dev.classmethod.jp/">
              DevelopersIO
            </Link>{" "}
            on {date}
          </span>
        );

      case "zenn":
        return (
          <span>
            blog at{" "}
            <Link external href="https://zenn.dev/">
              Zenn
            </Link>{" "}
            on {date}
          </span>
        );
    }
  }

  if (Developer.type === "certification") {
    return <span>get certified on {date}</span>;
  }

  if (Developer.type === "event") {
    return <span>event on {date}</span>;
  }

  throw new Error("type is invalid");
};

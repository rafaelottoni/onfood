import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { DishSkeletonProps } from "./types";

export function DishSkeleton({ count }: DishSkeletonProps) {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div>
        <Skeleton
          count={1}
          height={200}
          width="100%"
          style={{ marginBottom: "20px" }}
        />
        <div className="relative mb-1">
          <Skeleton inline={true} height={24} width="40%" count={1} />
          <Skeleton
            inline={true}
            height={24}
            width="20%"
            count={1}
            style={{ marginLeft: "40%" }}
          />
        </div>
        <Skeleton count={1} height={24} width="50%" />
      </div>,
    );
  }

  return (
    <SkeletonTheme baseColor="#ccc" highlightColor="#eee">
      {skeletons}
    </SkeletonTheme>
  );
}

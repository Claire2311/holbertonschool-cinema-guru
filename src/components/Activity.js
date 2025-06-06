import "./components.css";

function Activity({ activity }) {
  const date = new Date(activity.updatedAt);
  return (
    <li className="activity-item">
      <p>
        <span>{activity.user.username}</span> added{" "}
        <span>{activity.title.title}</span>{" "}
        {activity.activityType === "watchLater"
          ? "to watch later"
          : "to favorite"}{" "}
        -{" "}
        {date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })}
      </p>
    </li>
  );
}

export default Activity;

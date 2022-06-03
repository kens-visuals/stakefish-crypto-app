export default function LinkItem({ url, icon, name }) {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1"
      >
        {icon}
        {name}
      </a>
    </li>
  );
}

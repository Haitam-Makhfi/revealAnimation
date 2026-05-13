export default function Nav() {
  return (
    <nav className="fixed top-0 w-screen flex items-center justify-between p-8">
      <h1 className="font-montreal-bold text-4xl uppercase">Division 4</h1>
      <ul className="flex items-center gap-4 font-science-gothic-regular text-sm">
        <li>about</li>
        <li>work</li>
        <li>services</li>
      </ul>
    </nav>
  );
}

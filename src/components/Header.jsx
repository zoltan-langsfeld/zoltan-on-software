const Header = () => {
  return (
    <div className="sticky top-0">
      <div className="mx-auto flex max-w-3xl items-center justify-between p-4">
        <a
          href="/zoltan-on-software"
          className="font-sans2 text-2xl tracking-widest font-light"
        >
          ZOLTAN ON SOFTWARE
        </a>
        {/* toggle for dark and light mode */}
        <div className="w-6 h-6 rounded-full transition-colors bg-primary-text" />
      </div>
    </div>
  );
};

export default Header;

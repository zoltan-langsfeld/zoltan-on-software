const Header = () => {
    return (
        <>
            <a href={`${import.meta.env.BASE_URL}`}>Home</a>
            <a href={`${import.meta.env.BASE_URL}/blog`}>Blog</a>
            <a href={`${import.meta.env.BASE_URL}/about`}>About</a>
        </>
    );
};

export default Header;

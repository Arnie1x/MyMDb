import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="sticky flex flex-row justify-between items-center p-3 px-10 top-0 z-50 h-20 glass">
            <Link to={"/"}>
                <h1 className="text-3xl text-verdigris active:text-verdigris hover:text-green duration-200 font-bold">MyMDb</h1>
            </Link>
            <div className="flex flex-row gap-4">
                <Link to={"/"} className="active:text-verdigris hover:text-green duration-300">
                    <h1 className="text-xl">Home</h1>
                </Link>
                <Link to={"/favorites"} className="active:text-verdigris hover:text-green duration-200">
                    <h1 className="text-xl">Favorites</h1>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
import Navbar from "@/Components/NavBar";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
                {children}
        </div>
    );
}

export default MainLayout;
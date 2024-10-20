import logo_teachhunte from "../../assets/logo_ofc.png"

export default function Header({
    children,
    className
}) {
    return (
        <header className={`
            bg-white bg-opacity-15 m-[30px] rounded-full
            flex flex-col items-center p-5
            sm:flex-row sm:justify-between
            ${className}
        `}>
            <img src={logo_teachhunte} alt="logo_teachhunter" className="max-w-[150px] w-full mb-3 sm:mb-0"/>
            {children}
        </header>
    )
}
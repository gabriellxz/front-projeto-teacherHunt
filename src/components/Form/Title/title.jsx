export default function Title({
    children,
    title,
    className
}) {
    return(
        <div className={className}>
            <p className="text-white font-bold text-[20px] uppercase text-center">{title}</p>
            {children}
        </div>
    )
}
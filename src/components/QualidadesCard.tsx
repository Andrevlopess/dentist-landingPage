
const QualidadesCard = ({ quality }: { quality: string }) => {
    return (
        <div className="flex items-center gap-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_18_148)">
                    <path d="M14 0.5L4.7 10.7273L2 8.68225H0.5L4.7 15.5L15.5 0.5H14Z" fill="#0360D9" />
                </g>
                <defs>
                    <clipPath id="clip0_18_148">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <h2 className="text-lg hover:text-blue-900 text-blue-text">{quality}</h2>
        </div>
    )
}
export default QualidadesCard
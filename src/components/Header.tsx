

const Header = () => {
    return (
        <header className="w-full py-10 px-24 flex justify-between items-center">
            <h1 className="text-gray-600 text-3xl font-black">andre <span className="text-blue-500">dentist</span></h1>

            <div className="flex gap-4 justify-between">
                <label>Serviços</label>
                <label>Quem somos</label>
                <label>Contato</label>
            </div>

            <div className="flex justify-center items-center bg-blue-500 p-4 rounded-full">
                <h2 className="font-semibold text-white">+55 11 95412 2342</h2>

            </div>
        </header>
    )
}

export default Header
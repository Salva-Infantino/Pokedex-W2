const Header = ({type}) => {

        return (
            <>
            {
                type === 'app' ?
                <h1 className="mb-5">Pokedex</h1> :
                type === 'pokemon' &&
                <div className="d-flex justify-content-between align-items-center py-3 fs-4">
                    <a href="/" className="text-white">
                        <i className="bi bi-arrow-left"></i>
                    </a>
                    <div className="d-flex justify-content-center align-items-center" role="button">
                        <i className="bi bi-heart"></i>
                        {/* <i className="bi bi-heart-fill"></i> */}
                    </div>
                </div>
            }
            </>
        )
}

export default Header;
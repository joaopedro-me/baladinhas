const NavbarB = () => {
    return (
        <div>

            <h3 className='modal-titulo'>Participantes</h3>
            <div className="uk-flex uk-flex-row uk-flex-between" id="navbar-modal">
                <div className="uk-navbar">
                    <span className="uk-navbar-toggle-icon"></span>
                    <span className="uk-margin-small-left">Pessoa</span>
                </div>

                <div className="uk-navbar">
                    <span className="uk-navbar-toggle-icon"></span>
                    <span className="uk-margin-small-left">Status</span>
                </div>

                <div className="uk-navbar">
                    <span className="uk-navbar-toggle-icon"></span>
                    <span className="uk-margin-small-left">Remover</span>
                </div>
            </div>
        </div>
    );
};

export default NavbarB;

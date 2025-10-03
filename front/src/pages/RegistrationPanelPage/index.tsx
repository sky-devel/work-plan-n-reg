import { Link } from "react-router-dom"

function RegistrationPanelPage() {
    return (
        <>
            <div className="mainRP">
                <h1>Панель регистрации работ</h1>
                <Link to={'/'}>--план работ--</Link>
            </div>
        </>
    )
}

export default RegistrationPanelPage

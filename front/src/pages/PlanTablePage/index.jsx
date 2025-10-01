import { Link } from "react-router-dom"

function PlanTablePage() {
    return (
        <>
            <div className="mainPT">
                <h1>План Работ</h1>
                <Link to={'/registration'}>--регистрация работ--</Link>
            </div>
        </>
    )
}

export default PlanTablePage

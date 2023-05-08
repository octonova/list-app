import './app-filter.css';

const AppFilter = (props) => {

    const btnData = [
        { name: "all", label: "Все сотрудники" },
        { name: "like", label: "На повышение" },
        { name: "largeSalary", label: "З/П больше 1000$" }
    ]

    const butns = btnData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-light";

        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                onClick={() => props.onSelectFilter(name)}
                key={name}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group" >
            {butns}
        </div>
    )
}

export default AppFilter;
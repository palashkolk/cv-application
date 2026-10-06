function Experience({ data, setData, isSubmitted }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((data) => ({ ...data, [name]: value, }));
    };
    
    if (isSubmitted) {
        return (
            <section className="cv-section-preview">
                <h2>Experience</h2>
                <p><strong>Company:</strong>{data.company || "N/A"} </p>
                <p><strong>Position:</strong>{data.position || "N/A"}</p>
                <p><strong>Responsibilities:</strong>{data.responsibilities || "N/A"}</p>
                <p><strong>Date:</strong>{data.date || "N/A"}</p>
            </section>
        )
    }

    return (
        <section className="cv-section-form">
            <h2>Experience</h2>
            <div className="input-group">
                <label htmlFor="name">Company</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={data.company}
                    onChange={handleChange}
                    placeholder="Microsoft"  />
            </div>
            <div className="input-group">
                <label htmlFor="email">Position</label>
                <input
                    type="text"
                    id="position"
                    name="position"
                    value={data.position}
                    onChange={handleChange}
                    placeholder="Manager"  />
            </div>
            <div className="input-group">
                <label htmlFor="phone">Responsibilities</label>
                <input
                    type="text"
                    id="reponsibilities"
                    name="reponsibilities"
                    value={data.responsiblities}
                    onChange={handleChange}
                    placeholder="Dictating orders"  />
            </div>
            <div className="input-group">
                <label htmlFor="phone">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    placeholder="01/05/2025"  />
            </div>

        </section>
    )
    
}
export default Experience;
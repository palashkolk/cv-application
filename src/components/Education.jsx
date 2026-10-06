function Education({ data, setData, isSubmitted }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((data) => ({ ...data, [name]: value, }));
    };

    if (isSubmitted) {
        return (
            <section className="cv-section-preview">
                <h2>Education</h2>
                <p><strong>School:</strong>{data.school || "N/A"} </p>
                <p><strong>Title:</strong>{data.title || "N/A"}</p>
                <p><strong>Date:</strong>{data.date || "N/A"}</p>
            </section>
        );
    }

    return (
        <section className="cv-section-form">
            <h2>Education</h2>
            <div className="input-group">
                <label htmlFor="name">School</label>
                <input
                    type="text"
                    id="school"
                    name="school"
                    value={data.school}
                    onChange={handleChange}
                    placeholder="ABC School"  />
            </div>
            <div className="input-group">
                <label htmlFor="email">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    placeholder="MSc"  />
            </div>
            <div className="input-group">
                <label htmlFor="phone">Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={data.date}
                    onChange={handleChange}
                    placeholder="04/01/2015"  />
            </div>

        </section>
    )
    
}
export default Education;
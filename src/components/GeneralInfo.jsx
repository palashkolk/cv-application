function GeneralInfo({ data, setData, isSubmitted }) {
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((data) => ({ ...data, [name]: value, }));
    };
    


    
    if (isSubmitted) {
        return (
            <section className="cv-section-preview">
                <h2>General Information</h2>
                <p><strong>Name:</strong>{data.name || "N/A"} </p>
                <p><strong>Email:</strong>{data.email || "N/A"}</p>
                <p><strong>Phone:</strong>{data.phone || "N/A"}</p>
            </section>
        );
    };

    return (
        <section className="cv-section-form">
            <h2>General Information</h2>
            <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Ram Rahim"
                />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="ramrahim@example.org"
                />
            </div>
            <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    placeholder="+91 9331005522"
                />
            </div>
        </section>
    );
    
};
export default GeneralInfo;
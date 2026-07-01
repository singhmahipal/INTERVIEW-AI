import { useContext, useState } from "react";

export const interviewContext = useContext();

export const interviewProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState(null);
    const [reports, setReports] = useState([]);

    return (
        <interviewContext.Provider value={loading, setLoading, report, setReport, reports, setReports}>
            {children}
        </interviewContext.Provider>
    )
}
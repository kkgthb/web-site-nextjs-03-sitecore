// Credit:  https://github.com/vercel/next.js/discussions/38263#discussioncomment-3162871

import { useState, useEffect } from "react";

const useFormattedDate = (date) => {
    const [formattedDate, setFormattedDate] = useState(null);

    useEffect(
        () => setFormattedDate(new Date(date).toLocaleString("en-US")),
        []
    );

    return formattedDate;
};

export default useFormattedDate;
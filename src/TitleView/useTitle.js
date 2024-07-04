import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Foodie Service`;
    }, [title])
};

export default useTitle;
import React, { useState } from "react";

function useStorage () {
    const arrayName = ['Huyen', 'Hoa', 'Hung', 'Long'];
    const [indexName, setIndexName] = useState(null);

    const searchItem = (item) => {
        const index = arrayName.findIndex(i => i === item)
        setIndexName(index + 1);
    }

    return {arrayName, searchItem, indexName};
}

export default useStorage;

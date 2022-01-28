import React, { useMemo } from 'react'

export const useLists = (lists, query) => {
    const searchedLists = useMemo(() => {
        return lists.filter(list => list.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, lists])

    return searchedLists;
}

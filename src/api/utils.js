export function sort(arr, key) {
    return arr.sort(function (a, b) {
        const nameA = a[key].toLowerCase(), nameB = b[key].toLowerCase();
        if (nameA < nameB) //sort string ascending
            return -1;
        if (nameA > nameB)
            return 1;
        return 0; //default return value (no sorting)
    });
}

export const filter_search = (Country, filter) => filter ? Country.toUpperCase().indexOf(filter.toUpperCase()) > -1 : Boolean;

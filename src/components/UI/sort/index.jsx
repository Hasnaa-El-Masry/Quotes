import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import classes from './styles.module.scss';

const sortData = (data, ascending) => {
    return data.sort((a, b) => {
        if (ascending) {
            return a.id > b.id ? 1 : -1
        } else {
            return a.id < b.id ? 1 : -1
        }
    }
    )
}

const Sort = ({ data, onSort }) => {
    let [search, setSearch] = useSearchParams();

    const isSortingAsc = search.get('sort') === 'asc';

    const sortHandler = () => {
        search.set('sort', isSortingAsc ? 'des' : 'asc');
        setSearch(search);
        onSort(sortData(data, isSortingAsc))
    }

    return (
        <div className={classes.sorting}>
            <button onClick={sortHandler}>Sort {isSortingAsc ? 'Descending' : 'Ascending'}</button>
        </div>
    )
}

export default Sort
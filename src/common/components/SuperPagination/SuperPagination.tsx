import React, {ChangeEvent, useMemo} from 'react'
import SuperSelect from '../SuperSelect/SuperSelect'
import Pagination from '@mui/material/Pagination'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage)
    const arrayOptions = useMemo(() => {
        const result: {id: number, value: string}[] = [];
        for(let i = 1; i <= 10; i++) {
            result.push({id: i, value: i+''});
        }
        return result
    }, [])

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
        onChange(page, itemsCountForPage)

    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(1, +event.currentTarget.value)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
                shape="rounded"
                color="primary"
                size="small"
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={arrayOptions}
                onChange={onChangeSelect}
                style={{width: ''}}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination

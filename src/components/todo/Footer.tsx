import * as React from 'react'
import {VisibilityFilters} from "../../constants/todo";
import FilterLink from '../../containers/todo/FilterLink';

const Footer = () => (
    <p>
        Show:
        {' '}
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            Active
        </FilterLink>
        {', '}
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            Completed
        </FilterLink>
    </p>
);
​
export default Footer;

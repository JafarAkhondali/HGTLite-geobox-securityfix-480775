import React, {Component} from 'react'
import {extend} from 'lodash'
import {
    SearchkitManager, SearchkitProvider,
    SearchBox, RefinementListFilter, Pagination,
    HierarchicalMenuFilter, HitsStats, SortingSelector, NoHits,
    ResetFilters, RangeFilter, NumericRefinementListFilter,
    ViewSwitcherHits, ViewSwitcherToggle, DynamicRangeFilter,
    InputFilter, GroupedSelectedFilters,
    Layout, TopBar, LayoutBody, LayoutResults,
    ActionBar, ActionBarRow, SideBar,Hits
} from 'searchkit'
import FileHits from '../component/FileHits'
import '../style/styles.scss'

// const host = "http://demo.searchkit.co/api/movies"
const host = "http://localhost:9200/esgeoindex"
const searchkit = new SearchkitManager(host)

class SearchkitPage extends Component {
    render() {
        return (
            <SearchkitProvider searchkit={searchkit}>
                <Layout>
                    <TopBar>
                        <div className="my-logo rgb-white-pure">所有文件</div>
                        <SearchBox autofocus={true} placeholder={"输入文件名"} searchOnChange={true}
                                   prefixQueryFields={["id^1", "Travel_Rate^2"]}/>
                    </TopBar>

                    <LayoutBody>

                        <SideBar>过滤器占位</SideBar>

                        <LayoutResults>
                            <Hits hitsPerPage={3} itemComponent={FileHits} />
                        </LayoutResults>

                    </LayoutBody>
                </Layout>
            </SearchkitProvider>
        );
    }
}

export default SearchkitPage;

import React from 'react'
import { Link } from 'react-router'

//NavLink的作用在于可以统一配置Link组件的属性，起到了分类的作用
export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
})
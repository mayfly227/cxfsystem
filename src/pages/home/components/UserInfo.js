import React, {Component} from 'react'
import {Card, Icon, List, NavBar} from "antd-mobile";
import {connect} from 'react-redux'
import {actionCreators} from "../store";


class UserInfo extends Component{
    constructor(props) {
        super(props);
        this.getUid = this.getUid.bind(this);
        this.handleOnLeftClick = this.handleOnLeftClick.bind(this);

    }

    getUid(){
        return this.props.match.params.id
    }

    handleOnLeftClick(){
        this.props.history.push('/manageUsers')
    }

    componentDidMount(){
    //加载用户信息，写入store
        this.props.dispatch(actionCreators.getUserInfo(this.getUid()));
        console.log(this)
    //加载action信息，写入store
    }
    render() {
        return (
            <div>
                <NavBar
                    icon={<Icon type='left'/>}
                    rightContent={[
                        <Icon key='0' type='search' style={{marginRight:14}}/>,
                        <Icon key='1' type='ellipsis' onClick={this.getUid}/>
                    ]}
                    onLeftClick={this.handleOnLeftClick}
                    >成员管理</NavBar>
                <Card>
                    <Card.Header
                        title={this.props.username}
                        thumb={<i className='icon-chengyuan iconfont fs-22px'> </i>}
                        extra={<span>当前分数：{this.props.now_score}</span>}
                      />
                    <Card.Body>
                    <div>这位同学的参加的活动如下:</div>
                    </Card.Body>
                </Card>
                <List>
                    <List.Item>test</List.Item>
                    <List.Item>test</List.Item>
                    <List.Item>test</List.Item>
                    <List.Item>test</List.Item>
                </List>

            </div>
        );
    }
}

const mapState = (state)=>{
    return{
        username:state.getIn(['Home','now_user']),
        now_score:state.getIn(['Home','now_score']),
        action_list:state.getIn(['Home','action_list'])
    }
};

export default connect(mapState)(UserInfo)
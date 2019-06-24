import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
//无状态组件
const TodoListUI = (props)=>{
    return (
        <div style={{ marginTop: '20px', marginLeft: '20px' }}>
            <Input onChange={props.inputChange} value={props.inputValue} placeholder="请填写内容" style={{ width: '300px', marginRight: '10px' }}></Input>
            <Button type="primary" onClick={props.btnClick}>提交</Button>
            <div style={{ width: '300px' }}>
                <List
                    size="small"
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => <List.Item onClick={()=>{props.itemClick(index)}} >{item}</List.Item>}
                />
            </div>
        </div>
    )
}

export default TodoListUI;
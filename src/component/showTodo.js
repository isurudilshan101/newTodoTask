import React from 'react';
 import { List, Typography, Divider } from "antd";

export default function showTodo(props) {

 

  return (
    <div>
       <div>
        <h1>SHOW MY TODOS</h1>

        <List
          bordered
           dataSource={props.list}
          renderItem={(item) => (
            <List.Item>
              <Typography.Text mark> </Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}


 

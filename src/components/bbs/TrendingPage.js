import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const Trending = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
    <Card.Content>
        <Card.Meta>작성자 아이디</Card.Meta><br/>
        <Card.Header>포스트 제목</Card.Header><br/>
        <Card.Meta>
            <span className='date'>2019년 3월 4일 10개의 댓글</span>
        </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <p>
        포스트 내용 간단 요약1<br/>
        포스트 내용 간단 요약2<br/>
        포스트 내용 간단 요약3
      </p>
    </Card.Content>
  </Card>
)

export default Trending;
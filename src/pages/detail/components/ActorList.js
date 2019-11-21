import React, { PureComponent } from 'react'

import { Card, Col, Row } from 'antd'
const IMG_PROXY = '//images.weserv.nl/?url='

class ActorList extends PureComponent {
  render() {
    const { casts } = this.props
    return (
      <Row gutter={16}>
        {casts.map(item => {
          return (
            <Col span={6} key={item.id}>
              <Card
                size='small'
                hoverable
                cover={
                  <img
                    alt={item.name}
                    src={ IMG_PROXY + item.avatars.small}
                  />
                }
              >
                <Card.Meta
                  title={item.name}
                  description={item.name_en}
                />
              </Card>
            </Col>
          )
        })}
      </Row>
    )
  }
}

export default ActorList

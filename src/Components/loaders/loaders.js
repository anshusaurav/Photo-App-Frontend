import React from 'react'
import { Card, Placeholder, Segment } from 'semantic-ui-react'

export function SingleImageLoaderMedium () {
  return (
    <Placeholder style={{ height: 150, width: 150 }}>
      <Placeholder.Image />
    </Placeholder>
  )
}
export function SingleImageLoaderMediumRounded () {
  return (
    <Placeholder style={{ height: 150, width: 150, borderRadius: '50%' }}>
      <Placeholder.Image />
    </Placeholder>
  )
}
export function SingleImageLoaderLarge () {
  return (
    <Placeholder style={{ height: 300, width: 300 }}>
      <Placeholder.Image />
    </Placeholder>
  )
}

export function FeedHeaderLoader () {
  return (
    <Card fluid style={{ borderRadius: 0, border: '1px solid #efefef' }}>
      <Segment attached>
        <Placeholder fluid style={{ marginBottom: 0 }}>
          <Placeholder.Header image>
            <Placeholder.Line length='short' />
            <Placeholder.Line length='very short' />
          </Placeholder.Header>
        </Placeholder>
      </Segment>
      <Segment attached>
        <Placeholder fluid style={{ marginBottom: 0 }}>
          <Placeholder.Image fluid='true' style={{ minHeight: 480 }} />
        </Placeholder>
      </Segment>
      <Segment attached>
        <Placeholder fluid style={{ marginBottom: 24 }}>
          <Placeholder.Paragraph>
            <Placeholder.Line length='very short' />
            <Placeholder.Line length='very short' />
            <Placeholder.Line length='long' />
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    </Card>
  )
}

export function ExploreCompleteLoader () {
  const arr = new Array(18).fill(1)
  return (
    <div className='explore-loader-div'>
      {arr.map(elem => {
        return (
          <Placeholder fluid style={{ marginTop: 0 }}>
            <Placeholder.Image fluid />
          </Placeholder>
        )
      })}
    </div>
  )
}

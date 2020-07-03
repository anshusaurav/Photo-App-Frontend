import React from 'react'
import { Card, Placeholder, GridColumn } from 'semantic-ui-react'

export function SingleImageLoaderMedium () {
  return (
    <Placeholder style={{ height: 150, width: 150 }}>
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
    <Placeholder fluid>
      <Placeholder.Header image>
        <Placeholder.Line length='short' />
        <Placeholder.Line length='very short' />
      </Placeholder.Header>

      <Placeholder.Image fluid style={{ minHeight: 480 }} />

      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder>
  )
}


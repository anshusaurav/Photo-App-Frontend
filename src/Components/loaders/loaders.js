import React from 'react'
import { Card, Placeholder, Grid, Segment } from 'semantic-ui-react'

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

export function TempExploreLoader () {
  const arr = new Array(18).fill(1)
  return (
    <div className='explore-loader-div'>
      {arr.map(elem => {
        return (

            <Placeholder fluid style={{marginTop: 0}}>
              <Placeholder.Image fluid />
            </Placeholder>
          
        )
      })}
    </div>
  )
}
export function ExploreCompleteLoader () {
  return (
    <>
      <Grid relaxed>
        <Grid.Row columns={15}>
          <Grid.Column width={10}>
            <Placeholder fluid style={{ height: 414, width: 400 }}>
              <Placeholder.Image fluid />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5} rows={2}>
            <Grid.Row width={5} fluid>
              <Placeholder fluid style={{ height: 192, width: 200 }}>
                <Placeholder.Image fluid />
              </Placeholder>
            </Grid.Row>

            <Grid.Row width={5} fluid>
              <Placeholder fluid style={{ height: 192, width: 200 }}>
                <Placeholder.Image />
              </Placeholder>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={15}>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={15}>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid relaxed>
        <Grid.Row columns={15}>
          <Grid.Column width={5} rows={2}>
            <Grid.Row width={5} fluid>
              <Placeholder fluid style={{ height: 192, width: 200 }}>
                <Placeholder.Image fluid />
              </Placeholder>
            </Grid.Row>

            <Grid.Row width={5} fluid>
              <Placeholder fluid style={{ height: 192, width: 200 }}>
                <Placeholder.Image />
              </Placeholder>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column width={10}>
            <Placeholder fluid style={{ height: 414, width: 400 }}>
              <Placeholder.Image fluid />
            </Placeholder>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={15}>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={15}>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
          <Grid.Column width={5}>
            <Placeholder fluid style={{ height: 192, width: 200 }}>
              <Placeholder.Image />
            </Placeholder>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

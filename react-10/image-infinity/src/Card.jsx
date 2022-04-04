import React from 'react'
import { useState, useEffect } from 'react'
import callGetImageAPI from './api.js'
import { Grid, Image } from 'semantic-ui-react'

const prettyName = (name) => {
  // let arr = name.split(" ").map(w => w.charAt(0).toUpperCase() + w.substring(1, w.length));
  // let rs = "";
  // while (arr.length > 0) {
  //   rs += arr.shift() + " ";
  // }
  // return rs;
  return name;
}

const Card = (props) => {
  return (
    <div className="ui special cards">
      <div className="card mt-5">
        <div className="blurring dimmable image">
          <div className="image">
            <img src={props.image} />
          </div>
        </div>
        <div className="content">
          <a className="header">{prettyName(props.author)}</a>
          <div className="meta">
            <span className="date">Created in {props.created_at}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const GridRows = (props) => {
  const [images, setImages] = useState(Array(12).fill(null));

  useEffect(() => {
    callGetImageAPI(props.searchText, props.page)
      .then(res => {
        console.log(res.data)
        let arr = res.data.results.map((e) => ({url: e.urls.thumb, id: e.id, user: e.user.name, date: e.created_at}))
        setImages(arr);
      })
      .catch(error => {
        console.log(error);
      });
  }, [props.searchText, props.page])

  return (
    <div className='mt-3'>
      <a className="ui teal label">
        <i className="image outline icon" />
        Topic
          <div className="detail">{props.searchText}</div>
      </a>
      <a className="ui green label">
        <i className="hashtag icon" />
        Page
          <div className="detail">{props.page}</div>
      </a>
      <Grid columns={4}>
        <Grid.Row>
          {images.filter(i => i).map((i) =>
            <Grid.Column key={i.id}>
              <Card image={i.url}
                author={i.user}
                created_at={i.date.substring(0,10)}
              />
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </div>
  )


}

export default GridRows
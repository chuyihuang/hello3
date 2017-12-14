import React, { Component } from 'react';
import { PacmanLoader } from 'react-spinners';

export default class EventsList extends Component {

  state = {
    list: [],
    loading: true
  }

  componentDidMount() {
    (async () => {
      const data = await fetch('https://taichung-frontend.kktix.cc/events.json', {method: 'GET', headers: {
        'Accept': 'application/json'
      }}).then((res) => res.json());
      this.setState({
        list: data.entry,
        loading: false
      });
    })();
  }

  renderList = () => {
    return this.state.list.map((item, index) => {
      return (
        <li key={`event_${index}`}>
          <div>
            <h2>
              活動名稱: {item.title}
            </h2>
          </div>
          <div>時間: {item.content}</div>
          <div>
            <p>{item.summary}</p>
          </div>
          <div><a href={item.url}>活動網址</a></div>
        </li>
      )
    })
  }

  render() {
    console.log('我render');
    if (this.state.loading) {
      return (
        <PacmanLoader
        color={'#123abc'}
        loading={true}
      />
      )
    } else {
      return (
        <ul>
          {this.renderList()}
        </ul>
      )
    }

  }
}
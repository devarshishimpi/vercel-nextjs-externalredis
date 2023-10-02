import React from 'react';

class IndexPage extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pageViews`);
    const json = await res.json();
    return { count: json.count };
  }

  render() {
    return (
      <div>
        <p>This page has been viewed {this.props.count} times.</p>
      </div>
    );
  }
}

export default IndexPage;

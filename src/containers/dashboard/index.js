import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import * as actions from '../../store/actions';
import Feeds from '../../components/Feeds';
import Spinners from '../../components/UI/Spinners/Spinners'


const Dashboard = props => {
    const [data, setData] = useState([]);

    useEffect(() => {
        props.onFetchFeeds()
      });
    
      let recentFeedMarkup = props.feeds ? (
        props.feeds.map((feed) => <Feeds feed={feed}/>)
      ) : ( <Spinners /> )
    return (
        <Grid container spacing={16}>
            <Grid item sm={8} xs={12}> 
                {recentFeedMarkup}
            </Grid>
            <Grid item sm={4} xs={12}> 
                <p>profile.....</p>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
      feeds: state.feeds.feeds,
      loading: state.feeds.loading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onFetchFeeds: () => dispatch(actions.fetchFeeds())
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import PostList from './PostList';
import AuthorDataModel from '../models/PostDetailsModel';

const AuthorList: React.FunctionComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(data => setPosts(data));

  }, []);

  const filterByAuthor = (post: AuthorDataModel) => {
    return setPosts(posts.filter((individual: AuthorDataModel) => individual.author.name === post.author.name));
  };

  return (
    <View style={styles.columnView}>
      <View style={styles.authorList}>
        {
          _.uniqBy(posts, 'author.name').map((post: AuthorDataModel) => (
            <TouchableOpacity key={post.id} >
              <ListItem
                key={post.id}
                onPress={() => filterByAuthor(post)}
                title={post.author.name}
                bottomDivider
              />
            </TouchableOpacity>
          ))
        }
      </View>
      <PostList posts={posts} style={styles.postList} />
    </View>
  );
};

const styles = StyleSheet.create({
  authorList: {
    flexGrow: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  postList: {
    justifyContent: 'flex-start',
  },
  columnView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginRight: 50,
  },
});

export default AuthorList;

import 'react-native-gesture-handler';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, Icon, ListItem } from 'react-native-elements';

import PostDetailsModel from '../models/PostDetailsModel';
import PostList from './PostList';

const AuthorList: React.FunctionComponent = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [shouldShowBackButton, setshouldShowBackButton] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const resetPosts = () => {
    setFilteredPosts([]);
    setshouldShowBackButton(false);
  };

  const filterByAuthor = (post: PostDetailsModel) => {
    let filteredPosts = posts.filter((individual: PostDetailsModel) => individual.author.name === post.author.name);
    setFilteredPosts(filteredPosts);
    // setPosts(filteredPosts);
    setshouldShowBackButton(true);
  };

  const showCorrectPosts = () => {
    return !_.isEmpty(filteredPosts) ? filteredPosts : posts;
  };

  return (
    <ScrollView style={{ paddingTop: 25 }}>
      <View>
        {shouldShowBackButton ? <Button title='Back' buttonStyle={{ backgroundColor: '#88adab' }} onPress={() => resetPosts()} />
          : null}
        {
          _.uniqBy(showCorrectPosts(), 'author.name').map((post: PostDetailsModel) => (
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
      <PostList posts={showCorrectPosts()} style={styles.postList} />
    </ScrollView >
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

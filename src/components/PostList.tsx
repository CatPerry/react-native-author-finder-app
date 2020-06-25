import 'react-native-gesture-handler';
import React from 'react';
import _ from 'lodash';
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import PostDetailsModel from '../models/PostDetailsModel';

interface Props {
  posts: PostDetailsModel[];
  style?: any;
}

const PostList = (props: Props) => {
  const navigation = useNavigation();

  const passAllAuthorDataFilter = (post: PostDetailsModel) => {
    const allAuthorData: PostDetailsModel[] = props.posts.filter((author: PostDetailsModel) => author.author.name === post.author.name);
    // onPress, navigate to PostDetails page with all Book data listed
    navigation.navigate('PostDetails', {
      allAuthorData
    });
  };

  return (
    <SafeAreaView style={{ width: '100%', justifyContent: 'flex-start', marginRight: 30, }}>
      {
        _.orderBy(props.posts, ['publishedAt'], ['desc']).map((post: PostDetailsModel) => (
          <TouchableOpacity key={post.id} style={styles.postList} onPress={() => passAllAuthorDataFilter(post)}>
            <Card key={post.id} containerStyle={{ padding: 0, width: '100%' }} >
              <ListItem
                key={post.id}
                title={post.title}
                subtitle={post.author.name}
                bottomDivider
              />
              <Text style={styles.cardStyle}>{post.body}</Text>
              <Text>{post.publishedAt}</Text>
            </Card>
          </TouchableOpacity>
        ))
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postList: {
    flexGrow: 1,
    width: '100%',
    flexWrap: 'wrap',
  },
  cardStyle: {
    padding: 15,
    flexWrap: 'wrap',
  }
});

export default PostList;

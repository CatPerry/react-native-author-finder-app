import 'react-native-gesture-handler';
import React from 'react';
import _ from 'lodash';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import PostDetailsModel from '../models/PostDetailsModel';

interface Props {
  posts: PostDetailsModel[];
  style?: any;
}

const PostList = (props: Props) => {
  const navigation = useNavigation();

  const filterBySelectedAuthor = (post: PostDetailsModel) => {
    const selectedAuthorData: PostDetailsModel[] = props.posts.filter((author: PostDetailsModel) => author.author.name === post.author.name);
    navigation.navigate('PostDetails', {
      selectedAuthorData
    });
  };

  return (
    <SafeAreaView style={{ width: '100%', justifyContent: 'flex-start', /** marginRight: 20, */ }}>
      <ScrollView>
        {
          _.orderBy(props.posts, ['publishedAt'], ['desc']).map((post: PostDetailsModel) => (
            <TouchableOpacity key={post.id} style={styles.postList} onPress={() => filterBySelectedAuthor(post)}>
              <Card
                key={post.id}
                containerStyle={{ padding: 2, marginTop: 20 }}
              >
                <ListItem
                  key={post.id}
                  title={post.title}
                  titleStyle={{ color: '#6169c4', fontSize: 22, fontStyle: 'italic' }}
                  subtitle={post.author.name}
                  bottomDivider
                />
                <Text style={{ padding: 15 }}>{post.body}</Text>
                <Text>{post.publishedAt}</Text>
              </Card>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postList: {
    flexGrow: 1,
    width: '100%',
    flexWrap: 'wrap',
  }
});

export default PostList;

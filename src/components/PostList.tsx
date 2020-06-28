import 'react-native-gesture-handler';
import React from 'react';
import _ from 'lodash';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import PostDetailsModel from '../models/PostDetailsModel';
import Markdown from 'react-native-markdown-display';
import { format, parseISO } from 'date-fns';

interface Props {
  posts: PostDetailsModel[];
  style?: any;
}

const PostList = (props: Props) => {
  const navigation = useNavigation();

  const filterBySelectedAuthor = (post: PostDetailsModel): void => {
    const selectedAuthorData: PostDetailsModel[] = props.posts.filter(
      (author: PostDetailsModel) => author.author.name === post.author.name
    );
    navigation.navigate('PostDetails', {
      selectedAuthorData,
    });
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        justifyContent: 'flex-start',
      }}
    >
      <ScrollView>
        {_.orderBy(props.posts, ['publishedAt'], ['desc']).map(
          (post: PostDetailsModel) => (
            <TouchableOpacity
              key={post.id}
              style={styles.postList}
              onPress={() => filterBySelectedAuthor(post)}
            >
              <Card
                key={post.id}
                containerStyle={{ padding: 2, marginTop: 20 }}
              >
                <ListItem
                  key={post.id}
                  title={post.title}
                  titleStyle={{
                    color: '#6169c4',
                    fontSize: 22,
                    fontStyle: 'italic',
                  }}
                  subtitle={post.author.name}
                  bottomDivider
                />
                <Markdown mergeStyle={true} style={{ body: { padding: 15 } }}>
                  {post.body}
                </Markdown>
                <Text style={{ paddingLeft: 15 }}>
                  {format(parseISO(post.publishedAt), 'dd-MM-yyyy HH:MMaaaa')}
                </Text>
              </Card>
            </TouchableOpacity>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postList: {
    flexGrow: 1,
    width: '100%',
    flexWrap: 'wrap',
  },
});

export default PostList;

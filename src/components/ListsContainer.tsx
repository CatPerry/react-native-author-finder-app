import 'react-native-gesture-handler';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import PostDetailsModel from '../models/PostDetailsModel';
import PostList from './PostList';

const ListsContainer: React.FunctionComponent = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [shouldShowBackButton, setshouldShowBackButton] = useState(false);

  const fetchData = async () => {
    const API_PATH =
      Platform.OS === 'android' ? '192.168.1.151:4000' : 'localhost:4000';

    await fetch(`http://${API_PATH}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const resetPosts = (): void => {
    setFilteredPosts([]);
    setshouldShowBackButton(false);
  };

  const filterByAuthor = (post: PostDetailsModel): void => {
    let filteredPosts = posts.filter(
      (individual: PostDetailsModel) =>
        individual.author.name === post.author.name
    );
    setFilteredPosts(filteredPosts);
    setshouldShowBackButton(true);
  };

  const showCorrectPosts = (): PostDetailsModel[] => {
    return !_.isEmpty(filteredPosts) ? filteredPosts : posts;
  };

  const renderButton = (): React.ReactNode => {
    return (
      <Button
        title="Back"
        buttonStyle={{
          backgroundColor: '#6169c4',
          justifyContent: 'flex-start',
        }}
        onPress={() => resetPosts()}
        icon={
          <AntDesign
            name="leftcircle"
            size={24}
            color="white"
            style={{ paddingLeft: 5, paddingRight: 9 }}
          />
        }
      />
    );
  };

  return (
    <ScrollView style={{ paddingTop: 25 }}>
      <View>
        {shouldShowBackButton ? renderButton() : null}
        {_.uniqBy(showCorrectPosts(), 'author.name').map(
          (post: PostDetailsModel) => (
            <TouchableOpacity key={post.id}>
              <ListItem
                key={post.id}
                onPress={() => filterByAuthor(post)}
                title={post.author.name}
                bottomDivider
              />
            </TouchableOpacity>
          )
        )}
      </View>
      <PostList posts={showCorrectPosts()} style={styles.postList} />
    </ScrollView>
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

export default ListsContainer;

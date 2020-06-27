import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Markdown from 'react-native-markdown-display';

import PostDetailsModel from '../models/PostDetailsModel';

const PostDetails: React.FunctionComponent = ({ route }) => {
  const { selectedAuthorData } = route.params;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: '100%' }}
      >
        {selectedAuthorData.map((data: PostDetailsModel) => {
          return (
            <View key={data.title} style={styles.markdownContainer}>
              <Text style={styles.headerText}>{data.title}</Text>
              <Text style={styles.subheadText}>{data.author.name}</Text>
              <Markdown>
                {data.body}
              </Markdown>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  markdownContainer: {
    backgroundColor: '#FFF',
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 15,
    borderColor: '#c7c9c8',
    borderWidth: 0.5
  },
  headerText: {
    color: '#6169c4',
    fontSize: 28,
    fontStyle: 'italic'
  },
  subheadText: {
    color: '#848785',
    fontSize: 20,
    marginBottom: 20,
  }
});

export default PostDetails;

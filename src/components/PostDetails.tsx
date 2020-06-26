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
            <View key={data.title} style={{ backgroundColor: '#FFF', paddingTop: 25, paddingLeft: 25, paddingRight: 25 }}>
              <Text style={styles.headerText}>Book: {data.title}</Text>
              <Text style={styles.headerText}>{data.author.name}</Text>
              <Markdown >
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
  headerText: {
    fontSize: 28,
    color: '#848785',
  },
  subheadText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#848785',
  }
});

export default PostDetails;

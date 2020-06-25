import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import Markdown from 'react-native-markdown-display';

const PostDetails: React.FunctionComponent = ({ route }) => {
  const { allAuthorData } = route.params;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: '100%', paddingLeft: 25, paddingRight: 25 }}
      >
        {allAuthorData.map((data: any) => {
          return (
            <>
              <Text><h2>Book Title: <em>{data.title}</em></h2></Text>
              <Markdown>
                {data.body}
              </Markdown>
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostDetails;

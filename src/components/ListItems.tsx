// import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { TouchableOpacity, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { ListItem } from 'react-native-elements';

const ListItems: React.FunctionComponent = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/posts')
      .then(response => response.json())
      .then(data => setAuthors(data));

  }, []);

  return (
    // <NavigationContainer>
    <View>
      {
        _.uniqBy(authors, 'author.name').map((indivdual) => (
          <TouchableOpacity>
            <ListItem
              key={indivdual.id}
              // leftAvatar={{ source: { uri: l.avatar_url } }}
              title={indivdual.author.name}
              // subtitle={l.subtitle}
              bottomDivider
            />
          </TouchableOpacity>
        ))
      }
    </View>
    // </NavigationContainer>
  );
};

export default ListItems;

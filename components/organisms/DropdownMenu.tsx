import { StyleSheet, View, FlatList, Text } from 'react-native';

function DropdownMenu() {
  type ItemProps = { title: string; style?: object };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'My Profile',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Settings',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Logout',
    },
  ];

  const Item = ({ title, style }: ItemProps & { style?: object }) => (
    <View style={[style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            style={{
              padding: 10,
              marginVertical: 4,
              marginHorizontal: 12,
              borderBottomWidth: 1,
            }}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#818181',
    borderRadius: 10,
    position: 'absolute',
    marginTop: 60,
    width: 150,
    right: 10,
  },
  title: {
    fontSize: 16,
  },
});

export default DropdownMenu;

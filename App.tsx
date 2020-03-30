import React from 'react';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import SoundButton from './src/components/SoundButton';
import images from './src/img/_images';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
          <SoundButton sound="rain" image={images.rain} />
          <SoundButton sound="forest" image={images.forest} />
        </View>
        <View style={styles.row}>
          <SoundButton sound="waves" image={images.waves} />
          <SoundButton sound="wind" image={images.wind} />
        </View>
        <View style={styles.row}>
          <SoundButton sound="stream" image={images.stream} />
          <SoundButton sound="night" image={images.night} />
        </View>
        <SoundButton sound="fireplace" image={images.fireplace} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
});
export default App;

import React, {useState} from 'react';
import Sound from 'react-native-sound';
import images from '../img/_images';
import {
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
type Props = {
  sound: string;
  image: any;
};

export const SoundButton: React.FC<Props> = (props) => {
  const soundFile = props.sound + '.mp3';
  const [isPlaying, setIsPlaying] = useState(false);
  Sound.setCategory('Playback');
  const [sound] = useState<Sound>(
    new Sound(soundFile, Sound.MAIN_BUNDLE, soundLoadCallback),
  );

  function soundLoadCallback(error: any) {
    if (error) {
      console.warn('Error: ' + JSON.stringify(error));
      return;
    }
    console.log('Sound file loaded.');
  }
  const toggleSound = () => {
    console.log('Sound playing: ' + sound.isPlaying());
    if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
  };

  const stopSound = () => {
    sound.stop(() => {
      setIsPlaying(false);
      console.log(`Stopped ${soundFile}.`);
    });
  };

  const playSound = () => {
    console.log(`Playing ${soundFile}...`);
    setIsPlaying(true);
    sound.play(soundFinished);
  };

  const soundFinished = (success: boolean) => {
    if (success) {
      console.log(`${soundFile} finished.`);
      playSound();
    } else {
      console.warn('Playback failed due to audio decoding errors.');
    }
  };
  return (
    <TouchableOpacity onPress={toggleSound} style={styles.container}>
      <ImageBackground source={props.image} style={styles.image}>
        {isPlaying && (
          <View style={styles.overlay}>
            <Image source={images.pause} style={styles.pause} />
          </View>
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  overlay: {
    backgroundColor: '#ffffff99',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pause: {
    width: '30%',
    height: '30%',
  },
});
export default SoundButton;

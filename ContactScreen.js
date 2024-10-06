import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

const ContactScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <TouchableOpacity onPress={() => openLink('mailto:your.email@example.com')}>
        <Text style={styles.link}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://www.linkedin.com/in/your-profile')}>
        <Text style={styles.link}>LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://github.com/your-username')}>
        <Text style={styles.link}>GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://www.instagram.com/thierrydamiba/')}>
        <Text style={styles.link}>Instagram</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  // ... your styles here
};

export default ContactScreen;
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // Animation for rising up
  const riseAnim = useRef(new Animated.Value(300)).current; // Start position (off-screen)

  useEffect(() => {
    // Animation to move the form up when the component mounts
    Animated.timing(riseAnim, {
      toValue: 0, // End position (on-screen)
      duration: 800, // Animation duration in milliseconds
      useNativeDriver: true,
    }).start();
  }, [riseAnim]);

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/images/2nd-type-logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Login Form with Animation */}
      <Animated.View style={[styles.formContainer, { transform: [{ translateY: riseAnim }] }]}>
        <Text style={styles.title}>Log In</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity
            style={styles.showButton}
            onPress={() => setPasswordVisible(!isPasswordVisible)}
          >
            <Text style={styles.showText}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>

        {/* Footer */}
        <TouchableOpacity>
          <Text style={styles.footerText}>No account yet?</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  }, 
  logoContainer: {
    marginTop: 60,
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    resizeMode: 'contain',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#191851', // Dark blue background
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: 'center',
    position: 'absolute', // Use absolute positioning for animation
    bottom: 0, // Start at the bottom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  showButton: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  showText: {
    color: '#1F1C47',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#FDB316', // Yellow button color
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default LoginScreen;

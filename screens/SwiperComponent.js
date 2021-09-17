import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Swiper from "react-native-swiper";

const SwiperComponent = () => {
  return (
    <Swiper
      dotStyle={{
        marginTop: -200,
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: "#fff",
      }}
      activeDotColor="#fff"
      activeDotStyle={{
        marginTop: -200,
        width: 30,
        height: 6,
        borderRadius: 10,
        backgroundColor: "#fff",
        activeDotColor: "#fff",
      }}
    >
      <View style={styles.slide}>
        <Image
          source={require("../images/swiper.png")}
          style={{
            marginLeft: 10,
            marginBottom: 130,
            height: 650,
            width: 420,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../images/swiper2.png")}
          style={{
            marginLeft: 10,
            marginBottom: 130,
            height: 650,
            width: 420,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={require("../images/swiper3.png")}
          style={{
            marginLeft: 10,
            marginBottom: 130,
            height: 650,
            width: 420,
            marginTop: 60,
            resizeMode: "stretch",
          }}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default SwiperComponent;

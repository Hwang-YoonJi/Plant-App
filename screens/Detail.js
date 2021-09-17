import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SwiperComponent from "./SwiperComponent";

const Detail = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flexDirection: "row", width: "100%", height: "85%" }}>
        <View style={{ width: "10%", paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../images/back.png")}
              style={{ marginTop: 40 }}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={require("../images/sun.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={require("../images/tem.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={require("../images/water.png")} />
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 50,
              width: 50,
              borderRadius: 5,
              elevation: 5,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <Image source={require("../images/wind.png")} />
          </View>
        </View>
        <View style={{ width: "90%", marginLeft: 50 }}>
          <SwiperComponent />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: -60,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 30, color: "#62636a" }}>
          Anglica
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            paddingLeft: 185,
            fontSize: 20,
            color: "#00a46c",
          }}
        >
          $400
        </Text>
      </View>
      <Text
        style={{
          paddingVertical: 15,
          fontWeight: "bold",
          paddingLeft: 20,
          color: "#b1e5d3",
          fontSize: 20,
        }}
      >
        Russia
      </Text>
      <View style={{ flexDirection: "row", width: "100%" }}>
        <View
          style={{
            width: "50%",
            backgroundColor: "#00a46c",
            height: 70,
            borderTopRightRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 17 }}>Buy Now</Text>
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 25,
            height: 70,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#62636a" }}>
            Description
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;

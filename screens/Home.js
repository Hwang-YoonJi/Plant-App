import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: "#00a46c",
          height: "30%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require("../images/menu.png")}
          style={{ height: 30, width: 30, marginTop: 40 }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text style={{ fontSize: 28, color: "#fff", fontWeight: "bold" }}>
              Plant App
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Image
              source={require("../images/leaf.png")}
              style={{ height: 60, width: 60 }}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={["rgba(0,164,109,0.4)", "transparent"]}
        style={{ left: 0, right: 0, height: 100, marginTop: -45 }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Search"
            placeholderTextColor="#b1e5d3"
            style={{ fontWeight: "bold", fontSize: 20, width: 260 }}
          />
          <Image
            source={require("../images/search.png")}
            style={{ height: 25, width: 25 }}
          />
        </View>
      </LinearGradient>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#585a61" }}
            >
              Recommended
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: "#b1e5d3",
                width: 115,
                marginTop: -3,
              }}
            ></View>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#00a46c",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 13, color: "#fff" }}>
                More
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          style={{ height: 290 }}
        >
          <LinearGradient
            colors={["rgba(0,164,109,0.09)", "transparent"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: 100,
              marginTop: 200,
              top: 0,
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail")}
            style={{
              height: 250,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              backgroundColor: "#fff",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image source={require("../images/plant1.png")} />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>SANSEVIERA</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 20,
                }}
              >
                $400
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                paddingTop: 4,
                color: "#b1e5d3",
              }}
            >
              RUSSIA
            </Text>
          </TouchableOpacity>

          <View
            // onPress={() => navigation.navigate("Detail")}
            style={{
              height: 250,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              backgroundColor: "#fff",
              marginLeft: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image source={require("../images/plant2.png")} />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>ANGELICA</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 37,
                }}
              >
                $200
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                paddingTop: 4,
                color: "#b1e5d3",
              }}
            >
              ZAMAICA
            </Text>
          </View>

          <View
            // onPress={() => navigation.navigate("Detail")}
            style={{
              height: 250,
              elevation: 2,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              backgroundColor: "#fff",
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 15,
              marginBottom: 10,
              width: 160,
            }}
          >
            <Image source={require("../images/plant3.png")} />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>ROSEUM</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 47,
                }}
              >
                $350
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 10,
                fontWeight: "bold",
                paddingTop: 4,
                color: "#b1e5d3",
              }}
            >
              RUSSIA
            </Text>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            width: "100%",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{ fontSize: 17, fontWeight: "bold", color: "#585a61" }}
            >
              Featured Plants
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: "#b1e5d3",
                width: 123,
                marginTop: -3,
              }}
            ></View>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <View
              style={{
                backgroundColor: "#00a46c",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 13, color: "#fff" }}>
                More
              </Text>
            </View>
          </View>
        </View>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          style={{ height: 300 }}
        >
          <LinearGradient
            colors={["rgba(0,164,109,0.09)", "transparent"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: 130,
              marginTop: 180,
              top: 0,
            }}
          />
          <View
            style={{
              height: 250,
              width: 280,
              backgroundColor: "#fff",
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 15,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
            }}
          >
            <Image
              source={require("../images/plant4.png")}
              style={{
                width: 280,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>SAMANTHA</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 130,
                }}
              >
                $180
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 20,
                fontWeight: "bold",
                paddingTop: 6,
                color: "#b1e5d3",
              }}
            >
              AFRICA
            </Text>
          </View>
          <View
            style={{
              height: 250,
              width: 280,
              backgroundColor: "#fff",
              marginRight: 20,
              marginTop: 20,
              borderRadius: 15,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
            }}
          >
            <Image
              source={require("../images/plant5.png")}
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                width: 280,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                paddingTop: 10,
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>SANSEVIERA</Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#00a46c",
                  paddingLeft: 130,
                }}
              >
                $400
              </Text>
            </View>
            <Text
              style={{
                paddingHorizontal: 20,
                fontWeight: "bold",
                paddingTop: 6,
                color: "#b1e5d3",
              }}
            >
              RUSSIA
            </Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

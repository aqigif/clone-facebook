import React, { Component } from "react";
import {
  Image,
  TextInput,
  ScrollView,
  Text,
  Modal,
  View,
  ImageBackground,
  Button,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { withNavigation } from "react-navigation";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: [],
      actionModal: false
    };
  }
  setActionModal(visible) {
    this.setState({ actionModal: visible });
  }

  render() {
    return (
      <View>
        <View style={styles.postLine} />
        <View style={styles.postItem}>
          <View style={styles.postHead}>
            <View style={styles.avatarWrapper}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Image
                  source={{ uri: this.props.avatar }}
                  style={styles.avatar}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.postDetail}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text style={styles.posterName}>{this.props.name}</Text>
              </TouchableOpacity>
              <Text style={styles.postDate}>
                {this.props.time} •{" "}
                <Image
                  source={require("../assets/icon/public.png")}
                  style={styles.publicIcon}
                />
              </Text>
            </View>
            <TouchableOpacity
              style={styles.postAction}
              onPress={() => {
                this.setActionModal(!this.state.actionModal);
              }}
            >
              <Image
                source={require("../assets/icon/dotAction.png")}
                style={styles.dotIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.postBody}>
            <View style={styles.postContentWrapper}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Text
                  style={{ fontSize: 16, color: "#1C1E21", marginBottom: 10 }}
                >
                  {this.props.status}
                </Text>
                <Text style={styles.hastag}>{this.props.hastag}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={this._onPressButton}>
                <View style={styles.reactContainer}>
                  <View style={styles.reactWrapper}>
                    <Image
                      source={require("../assets/icon/react.png")}
                      style={styles.reactIcon}
                    />
                    <Text style={styles.reactTotal}>{this.props.react}</Text>
                  </View>
                  <View>
                    <Text style={styles.commentShare}>
                      {this.props.comment} Comments • {this.props.share} Shares
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.reactActionWrapper}>
            <View style={styles.reactAction}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Image
                  source={require("../assets/icon/like.png")}
                  style={styles.reactActionIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.commentAction}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Image
                  source={require("../assets/icon/comment.png")}
                  style={styles.commentActionIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.shareAction}>
              <TouchableOpacity onPress={this._onPressButton}>
                <Image
                  source={require("../assets/icon/share.png")}
                  style={styles.shareActionIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.postLine} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.actionModal}
          onRequestClose={() => {
            this.setActionModal(!this.state.actionModal);
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: "#00000090" }}
            onPressOut={() => {
              this.setActionModal(false);
            }}
          >
            <TouchableWithoutFeedback style={{ flex: 1 }}>
              <View
                style={{
                  justifyContent: "space-around",
                  top: "40%",
                  backgroundColor: "#fff",
                  width: "100%",
                  height: "60%"
                }}
              >
                <TouchableOpacity style={styles.buttonMoreAction}>
                  <Image
                    style={{ height: 23, width: 15.5 }}
                    source={require("../assets/icon/save.png")}
                  />
                  <Text style={styles.textMoreAction}>Save Post</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonMoreAction}
                  onPress={() => {
                    this.props.navigation.navigate('CreatePostScreen', {
                        feed: this.props.status,
                        postId: this.props.id,
                        action:"update"
                    }), this.setActionModal(false)
                }}>
                  <Image
                    style={{ height: 23, width: 23 }}
                    source={require("../assets/icon/edit.png")}
                  />
                  <Text style={styles.textMoreAction}>Edit Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMoreAction}>
                  <Image
                    style={{ height: 23, width: 23 }}
                    source={require("../assets/icon/public.png")}
                  />
                  <Text style={styles.textMoreAction}>Edit Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMoreAction}>
                  <Image
                    style={{ height: 20, width: 24 }}
                    source={require("../assets/icon/hide.png")}
                  />
                  <Text style={styles.textMoreAction}>Hide from timeline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMoreAction}>
                  <Image
                    style={{ height: 24, width: 21 }}
                    source={require("../assets/icon/delete.png")}
                  />
                  <Text style={styles.textMoreAction}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMoreAction}>
                  <Image
                    style={{ height: 24, width: 21 }}
                    source={require("../assets/icon/notification.png")}
                  />
                  <Text style={styles.textMoreAction}>
                    Turn off notifications for this post
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMoreAction}>
                  <Image
                    style={{ height: 24, width: 24 }}
                    source={require("../assets/icon/link.png")}
                  />
                  <Text style={styles.textMoreAction}>Copy link</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  postLine: {
    height: 5,
    width: "100%",
    flex: 1,
    backgroundColor: "#DCDEE3"
  },
  postItem: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },

  buttonMoreAction: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft:20,
    alignItems: "flex-start"
  },
  textMoreAction: (style = { fontSize: 16, marginLeft: 10 }),
  postHead: {
    flexDirection: "row",
    paddingTop: 10,
    flex: 1
  },
  avatarWrapper: { flex: 1, justifyContent: "center", alignItems: "center" },
  postDetail: {
    flex: 9,
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  posterName: { color: "#1C1E21", fontWeight: "bold" },
  postAction: { flex: 1, justifyContent: "center", alignItems: "center" },

  publicIcon: { width: 13, height: 13 },
  dotIcon: { width: 17, height: 5 },
  avatar: { width: 40, height: 40, borderRadius: 40 / 2 },
  postBody: {
    paddingTop: 20,
    flex: 2,
    paddingBottom: 5
  },
  hastag: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1C1E21",
    marginBottom: 10
  },
  reactContainer: { flexDirection: "row", justifyContent: "space-between" },
  reactWrapper: { flexDirection: "row" },
  reactIcon: { width: 51, height: 17 },
  reactTotal: { textAlign: "left" },
  commentShare: { textAlign: "right" },

  reactActionWrapper: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: "#DCDEE3"
  },
  reactAction: { flex: 1, justifyContent: "center", alignItems: "center" },
  reactActionIcon: { width: 51, height: 20 },
  commentAction: { flex: 1, justifyContent: "center", alignItems: "center" },
  commentActionIcon: { width: 84, height: 20 },
  shareAction: { flex: 1, justifyContent: "center", alignItems: "center" },
  shareActionIcon: { width: 60, height: 20 },

  photoPostContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  photoPostWrapper: {
    height: 320,
    width: 320,
    margin: 2.5
  },
  photoPost: {
    width: "100%",
    height: "100%"
  },
  postLine: {
    height: 5,
    width: "100%",
    flex: 1,
    backgroundColor: "#DCDEE3"
  }
});
export default withNavigation(PostList);

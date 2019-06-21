<View style={styles.head}>
            <View style={styles.camera}>
            <TouchableOpacity onPress={this._onPressButton}>
            <Image source={require('../assets/img/camera.png')} 
                style={{width:24,height:22}}
                />
                </TouchableOpacity>
              </View>
            <View style={styles.searchBar}>
              <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
              />
            </View>
            <View style={styles.messenger}>
    <TouchableOpacity onPress={this._onPressButton}>
              <Image source={require('../assets/img/messenger.png')} 
                  style={{width:24,height:24}}
                  />
                  </TouchableOpacity>
            </View>
          </View>
          <View style={styles.navbar}>
            <View style={styles.home}>
    <TouchableOpacity onPress={this._onPressButton}>
              <Image source={require('../assets/img/homeActive.png')} 
                  style={{width:25,height:25}}
                  />
                  </TouchableOpacity>
            </View>
            <View style={styles.group}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image source={require('../assets/img/group.png')} 
                  style={{width:25,height:25}}
                  />
                  </TouchableOpacity>
            </View>
            <View style={styles.watch}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image source={require('../assets/img/watch.png')} 
                  style={{width:24,height:22}}
                  />
                  </TouchableOpacity>
            </View>
            <View style={styles.profile}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image source={require('../assets/img/profile.png')} 
                  style={{width:24,height:24}}
                  />
                  </TouchableOpacity>
            </View>
            <View style={styles.notification}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image source={require('../assets/img/notification.png')} 
                  style={{width:21,height:24}}
                  />
                  </TouchableOpacity>
            </View>
            <View style={styles.more}>
            <TouchableOpacity onPress={this._onPressButton}>
              <Image source={require('../assets/img/more.png')} 
                  style={{width:25,height:25}}
                  />
                  </TouchableOpacity>
            </View>
          </View>
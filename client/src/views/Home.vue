<template>
  <v-container>
    <img src="https://www.timusnetworks.com/timuscms/upload/timus-logo-icon.png" width="32px" height="32px">
    <v-row align="center" justify="center">
      <h4>Energy Usage Tracking System</h4>
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to Your Account</h4>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field label="Email" outlined dense color="blue" autocomplete="false" class="mt-16" />
                        <v-text-field label="Password" outlined dense color="blue" autocomplete="false" type="password" />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox label="Remember Me" class="mt-n1" color="blue"> </v-checkbox>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile @click="$router.push('/landing')">Log in</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="  text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center ">Don't Have an Account Yet?</h3>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="  text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center ">Alredy Signed up?</h3>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Sign Up for an Account</h4>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-text-field label="Name" outlined dense color="blue" autocomplete="false" class="mt-4" />
                          </v-col>
                        </v-row>
                        <v-text-field label="Email" outlined dense color="blue" autocomplete="false" />
                        <v-text-field label="Password" outlined dense color="blue" autocomplete="false" type="password" />
                        <v-row>
                          <v-col cols="12" sm="12">

                            <v-select clearable chips label="Choose your authorization"
                              :items="['Admin', 'Editor']"></v-select>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile @click="$router.push('/landing')">Sign up</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    step: 1
  }),
  props: {
    source: String
  },
  methods: {
    toScreen() {
      this.$router.push('/screens')
    }
  }

}
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>
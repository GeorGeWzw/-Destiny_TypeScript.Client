import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state={
  TagList:[
    {lable:"首页",path:"/Home",IsColse:false},
  ],
}
const mutations={
  //写入一个新的
  Savetag(state:any,data:any)
  {
    if(data!="")
    {
      state.TagList.push(data)
    }
  }
}

const actions={}
const modules={}

export default new Vuex.Store({
  state,mutations,actions,modules
  
});

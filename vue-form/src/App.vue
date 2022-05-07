<template>
  <form v-on:submit.prevent="submitForm">
    <div>
        <!--label은 Input을 바라본다. -->
        <label for="username">id : </label>
        <input id="username" type="text" v-model="username">
    </div>
    <div>
        <label for="password">pw : </label>
        <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  //data : function 구조 return을 반환 (컴포넌트 단위로 공유되지않게 function을 이용해서 새 객체를 return )
  data : function(){
    return {
      //input값을 받을 수 있게 데이터를 만듬 
      username : '', //''타입이 문자열이여서 ''로 설정 
      password : ''
    }
  }, 
  methods: {
    submitForm : function(){
      //form특성인 새로고침을 막는 메서드 
      //event.preventDefault();
      
      //안에있는 값을 서버에 보낸다. 
      //this는 메서드에서 데이터를 접근한다. this를 사용해서 
      console.log(this.username, this.password);
      //http프로토콜을 이용한 통신 라이브러리이다. post는 데이터를 생성하거나 조작할때
      //users : rest API 규칙에 이해 데이터를 보내고 결과를 받을 수 있다. 
      var url = 'https://jsonplaceholder.typicode.com/users';
      //2) 객체로 선언하고 입력받은 username, password값을 넘긴다. 
      var data = {
        username : this.username,
        password : this.password
      }
      axios.post(url, data) //1) url을 보내고 data를 넘긴다
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
    }
  }
}
</script>

<style>

</style>
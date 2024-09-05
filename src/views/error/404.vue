<!-- <script setup lang="ts">
import { useRouter } from "vue-router";
import noExist from "@/assets/status/404.svg?component";

defineOptions({
  name: "404"
});

const router = useRouter();
</script>

<template>
  <div class="flex justify-center items-center h-[640px]">
    <noExist />
    <div class="ml-12">
      <p
        v-motion
        class="font-medium text-4xl mb-4 dark:text-white"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 80
          }
        }"
      >
        404
      </p>
      <p
        v-motion
        class="mb-4 text-gray-500"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 120
          }
        }"
      >
        抱歉，你访问的页面不存在
      </p>
      <el-button
        v-motion
        type="primary"
        :initial="{
          opacity: 0,
          y: 100
        }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 160
          }
        }"
        @click="router.push('/')"
      >
        返回首页
      </el-button>
    </div>
  </div>
</template> -->


<!-- <template>
  <el-card>
    <div>
      <button>掘 金</button>
      
      <button>YY DS</button>
    </div>
  </el-card>
</template>

<script setup lang="ts">
defineOptions({
  name: "404"
});
</script>

<style >
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }

  html,
  body {
    display: grid;
    height: 100%;
    overflow: hidden;
    place-items: center;
    background: #000;
 
  }

  button {
       font-family: 'Courier New', Courier, monospace;
    position: relative;
    height: 200px;
    width: 200px;
    margin: 0 35px;
    border-radius: 50px;
    border: none;
    outline: none;
    background: #111;
    color: #fff;
    font-size: 40px;  
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
  }

  button:first-child:hover {
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
  }

  button:last-child:hover {
    background: linear-gradient(90deg, #fa7199, #f5ce62, #e43603, #fa7199);
    background-size: 400%;
  }

  button:first-child::before,
  button:last-child::before {
    content: '';
    position: absolute;
    background: inherit;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px;
    border-radius: 50px;
    filter: blur(20px);
    opacity: 0;
    transition: opacity .5s;
  }

  button:first-child:hover:before,
  button:last-child:hover:before {
    opacity: 1;
    z-index: -1;
  }

  button:hover {
    z-index: 1;
    animation: glow 8s linear infinite;
  }

  @keyframes glow {
    0% {
      background-position: 0%;
    }

    100% {
      background-position: 400%;
    }
  }
</style>  -->


<template>
  <el-card>
    <div>
      <button @mouseenter="startTimer" @mouseleave="resetText">{{ button1Text }}</button>
      <button @mouseenter="startTimer" @mouseleave="resetText">{{ button2Text }}</button>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({
  name: "404"
});

const button1Text = ref("");
const button2Text = ref("");
let timer: NodeJS.Timer | null = null;

const startTimer = (event: MouseEvent) => {
  const button = event.target as HTMLButtonElement;
  timer = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    if (button.innerText === "") {
      button1Text.value = currentTime;
      button2Text.value = currentTime;
    } else {
      if (button === document.querySelector("button:first-child")) {
        button1Text.value = currentTime;
      } else if (button === document.querySelector("button:last-child")) {
        button2Text.value = currentTime;
      }
    }
  }, 1000);
};

const resetText = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  button1Text.value = "";
  button2Text.value = "";
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  display: grid;
  height: 100%;
  overflow: hidden;
  place-items: center;
  background: #000;
}

button {
  font-family: "Courier New", Courier, monospace;
  position: relative;
  height: 200px;
  width: 200px;
  margin: 0 35px;
  border-radius: 50px;
  border: none;
  outline: none;
  background: #6ebde5;
  color: #fff;
  font-size: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
}

button:first-child:hover {
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
}

button:last-child:hover {
  background: linear-gradient(90deg, #fa7199, #f5ce62, #e43603, #fa7199);
  background-size: 400%;
}

button:first-child::before,
button:last-child::before {
  content: "";
  position: absolute;
  background: inherit;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  border-radius: 50px;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s;
}

button:first-child:hover:before,
button:last-child:hover:before {
  opacity: 1;
  z-index: -1;
}

button:hover {
  z-index: 1;
  animation: glow 8s linear infinite;
}

@keyframes glow {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
</style>


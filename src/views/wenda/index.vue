<!-- <template>
  <div class="qa-page">
    <el-input v-model="searchQuery" placeholder="搜索问答..." class="search-bar"></el-input>
    <el-select v-model="selectedCategory" placeholder="选择分类" class="category-select">
      <el-option v-for="category in categories" :key="category" :label="category" :value="category"></el-option>
    </el-select>
    <el-date-picker v-model="selectedDate" type="date" placeholder="选择日期" class="date-picker"></el-date-picker>
    
    <el-card v-for="qa in filteredQAs" :key="qa.id" class="qa-card" shadow="hover">
      <div class="qa-content">
        <h3>{{ qa.question }}</h3>
        <p>{{ qa.answer }}</p>
      </div>
      <el-button type="text" @click="reply(qa.id)">回复</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'wenda', // 添加组件名称
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      selectedDate: null,
      categories: ['技术', '生活', '其他'],
      qas: [
        { id: 1, question: '如何使用 Vue.js?', answer: '你可以从官方文档开始学习。', category: '技术', date: '2023-10-01' },
        // 更多问答数据
      ],
    };
  },
  computed: {
    filteredQAs() {
      return this.qas.filter(qa => {
        return (
          (!this.searchQuery || qa.question.includes(this.searchQuery)) &&
          (!this.selectedCategory || qa.category === this.selectedCategory) &&
          (!this.selectedDate || qa.date === this.selectedDate)
        );
      });
    },
  },
  methods: {
    reply(id) {
      // 实现回复功能
      console.log(`回复问答ID: ${id}`);
    },
  },
};
</script>

<style scoped>
.qa-page {
  padding: 20px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
}

.qa-card {
  margin-bottom: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.qa-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.search-bar, .category-select, .date-picker {
  margin-bottom: 20px;
  width: 100%;
}
</style> -->




<!-- <template>
  <div class="message-wall">
    <div class="controls">
      <el-button type="primary" @click="addMessage">添加</el-button>
      <el-button type="danger" @click="deleteMessages">删除</el-button>
    </div>
    <div class="messages">
      <el-card
        v-for="(message, index) in messages"
        :key="index"
        class="message-card"
        shadow="hover"
      >
        <div class="message-content">
          <h4>{{ message.author }}</h4>
          <p>{{ message.text }}</p>
          <p>{{ message.date }}</p>
        </div>
        <div class="actions">
          <el-button type="text" @click="toggleReply(index)">
            <div class="tianjia">➕</div>
          </el-button>
          <el-button type="text" @click="removeMessage(index)">
            <div class="shanchu">➖</div>
          </el-button>
        </div>
        <div v-if="message.showReply" class="reply-section">
          <div v-for="(reply, rIndex) in message.replies" :key="rIndex">
            <p><strong>{{ reply.author }}</strong>: {{ reply.text }} <em>{{ reply.date }}</em></p>
          </div>
          <el-input
            v-model="newReply.text"
            placeholder="输入回复..."
            class="reply-input"
          ></el-input>
          <el-button type="primary" @click="addReply(index)">回复</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "wenda",
  data() {
    return {
      messages: [
        { author: '胡事成', text: '自分自身を信じてみるだけでいい。', date: '2023-10-10', replies: [], showReply: false },
        // 更多留言
      ],
      newReply: { text: '', author: '回复者' },
    };
  },
  methods: {
    addMessage() {
      this.messages.push({ author: '新用户', text: '新留言内容', date: new Date().toISOString().split('T')[0], replies: [], showReply: false });
    },
    deleteMessages() {
      this.messages = [];
    },
    toggleReply(index) {
      this.messages[index].showReply = !this.messages[index].showReply;
    },
    removeMessage(index) {
      this.messages.splice(index, 1);
      console.log(`删除留言: ${index}`);
    },
    addReply(index) {
      if (this.newReply.text.trim()) {
        this.messages[index].replies.push({
          text: this.newReply.text,
          author: this.newReply.author,
          date: new Date().toISOString().split('T')[0],
        });
        this.newReply.text = '';
      }
    },
  },
};
</script>

<style scoped>
.message-wall {
  padding: 20px;
}

.controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.messages {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.message-card {
  width: calc(33.333% - 20px);
  transition: transform 0.3s, box-shadow 0.3s;
}

.message-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.message-content {
  margin-bottom: 10px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.reply-section {
  margin-top: 10px;
}

.reply-input {
  margin-top: 10px;
  width: 100%;
}
</style> -->


<template>
  <div class="路径">
    <div class="div">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ed17f4225be46c1b89ad5aea1fdc277ce51a03bde743839cf5f1f3c7a66e852?placeholderIfAbsent=true&apiKey=8263eee779fe46cfa2cc795d40d4498b"
        class="img"
      />
      <div class="昵称">胡事成</div>
    </div>
    <div class="div-2">
      <div class="div-3">
        <div>
          自分自身を信じてみるだけでいい。 <br />きっと、生きる道が見えてくる
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/56953a033ecfe30e1df7eaeb8e98ea868c4854ccd527017649e71a327a22d74f?placeholderIfAbsent=true&apiKey=8263eee779fe46cfa2cc795d40d4498b"
          class="img-2"
        />
      </div>
      <div class="delete图标"></div>
    </div>
  </div>
</template>



<style scoped>
.路径 {
  border-radius: 30px;
  background-color: rgba(242, 225, 225, 1);
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: start;
  padding: 6px 32px 17px 18px;
}
@media (max-width: 991px) {
  .路径 {
    padding-right: 20px;
  }
}
.div {
  display: flex;
  gap: 15px;
  white-space: nowrap;
  line-height: 1;
}
@media (max-width: 991px) {
  .div {
    white-space: initial;
  }
}
.img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 30px;
}
.昵称 {
  margin: auto 0;
}
.div-2 {
  display: flex;
  gap: 1px;
  line-height: 18px;
  margin: 23px 0 0 14px;
}
@media (max-width: 991px) {
  .div-2 {
    margin-left: 10px;
  }
}
.div-3 {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: 0;
  width: fit-content;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 21px;
  margin-top: 9px;
}
.delete图标 {
  align-self: end;
  display: flex;
  margin-top: 62px;
  width: 21px;
  height: 21px;
}
@media (max-width: 991px) {
  .delete图标 {
    margin-top: 40px;
  }
}
</style>
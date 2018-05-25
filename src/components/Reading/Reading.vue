<template>
  <div class="reading" :style="{minHeight: minHeight + 'px'}">
      <div class="blog" v-for="(item, index) in blogs" :key="index">
        <div class="avatar">
          <img src="../../assets/images/avatar.png" alt="我只是静态图片，可以考虑自己扩展功能噢">
        </div>
        <div class="main">
          <p class="title">{{item.title}}</p>
          <p class="content">{{item.content}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import setMinHeight from '@/common/js/util.js'
import blogApi from '@/api/blog-api.js'
export default {
  data () {
    return {
      minHeight: 0,
      blogs: [
        {
          _id: 'id1',
          title: '原始博客标题1，请先发博客~',
          content: '哈哈哈哈哈，我是原始博客内容，请先发博客啊啊啊'
        },
        {
          _id: 'id2',
          title: '原始博客标题2，请先发博客~',
          content: '哈哈哈哈哈，我是原始博客内容，请先发博客啊啊啊'
        }
      ]
    }
  },
  created () {
    setMinHeight(this, 104)
    this.getBlogs()
  },
  methods: {
    getBlogs () {
      blogApi.getBlogs().then((res) => {
        if (res.status === 200) {
          this.blogs = res.data
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/style/variable.less');
  .reading {
    font-family: @font-family;
    font-size: @font-size;
    .blog {
      display: flex;
      padding: 0.2rem 0.2rem 0.1rem 0.2rem;
      box-sizing: border-box;
      .avatar {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .main {
        padding-left: 0.3rem;
        .content, .title {
          width: 5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #909399;
        }
        .title {
          margin-bottom: 0.1rem;
          color: #303133;
        }
      }
    }
  }
</style>

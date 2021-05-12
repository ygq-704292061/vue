//     https://autumnfish.cn/search
    var app = new Vue({
        el: '#app',
        data: {
            keywords:"",
            dataList: [],
            musicUrl:'',
            imgUrl:'',
            commentList:[],
            mvUrl:''
        },
        methods: {
            queryMusic: function () {
                var that = this;
                axios.get("https://autumnfish.cn/search?keywords="+this.keywords)
                .then(function(response){
                    that.dataList = response.data.result.songs;
                },function(){

                })
            },
            playMusic:function(item){
                var that=this;
                axios.get("https://autumnfish.cn/song/url?id="+item).then(function(response){
                    that.musicUrl = response.data.data[0].url;
                },function(){});

                axios.get("https://autumnfish.cn/song/detail?ids="+item).then(function(response){
                    that.imgUrl = response.data.songs[0].al.picUrl;
                },function(err){})

                axios.get("https://autumnfish.cn/comment/hot?type=0&id="+item).then(function(response){
                    that.commentList = response.data.hotComments;
                },function(err){})     
                
                
            },
            playMv:function(item){
                var that = this;
                axios.get("https://autumnfish.cn/mv/url?id="+item).then(function(response){
                    that.mvUrl = response.data.data.url;
                },function(err){})
            }
            
        }
    })
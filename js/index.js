$(document).ready(function(){
	var audio=$("#audio")[0];
	var headLeft=$(".back");
	var headRight=$(".headRight");
	var two=$(".two");
	var one=$(".one");
	var yuan=$(".yuan");
	var play2=$(".play2");
	var play=$(".pause");
	var pause=$(".pause1");
	var pre=$(".pre");
	var next=$(".next");
	var process=$(".process");
	var process1=$(".process1");
	var pI=$(".p-i");
	var time1=$(".time1");
	var time2=$(".time2");
	var width=process.width();
	var headTop=$(".headTop");
	var headBottom=$(".headBottom");
	var img=$(".img");
	var footer=$(".footer");
	var pos;
	var now=0;
	var now1=0;
	var yuantop=$(".yuanTop");
	var yuanbot=$(".yuanBottom");
	var vI=$(".v-i");
	var volume=$(".metu");
	var volume1=$(".metu1");
    var vi=$(".v-i");
    var width1=volume.width();
	var gd=$(".gd");
	var tu=$(".tu");
	var tulist=$(".tulist");
	var add=$(".add");
	var del=$(".delete");
	var box=$(".box");
	var index;
	var metu=$(".metuj");
	var metu1=$(".metuj1");
//  存储路径
	var musics = [{
		src: "./play/无果.mp3",
		src1:"./img/1.jpg",
		name: "无果",
		author: "严艺丹",
		state:"0",
		gclb:"<li>无·果 (《新白发魔女传》电视剧插曲) - 严艺丹</li><li>作词：严艺丹 作曲：赵博</li><li>叹 那一滴的滑落</li><li>是擦不去悲喜 残留着的温热</li><li>落在掌心 化不开的无奈</li><li>不舍得 紧握</li><li>看 那一地的花落</li><li>是开不出姻缘 缠绕着的分割</li><li>瓣影零落 怎么凋谢了</li><li>别离时盛开的承诺</li><li>那是你说 往事开花无果</li><li>最暖的陪伴总在回头时消散</li><li>伸出手抓不住遗憾</li><li>也可以学着多一点勇敢</li><li>两个方向各自走完</li><li>最长的永久还是只并肩一半</li><li>记住了路过的悲欢</li> <li>而缘份尽了情还不忍断</li><li>留一朵无果的期盼</li><li>无·果 (《新白发魔女传》电视剧插曲) - 严艺丹</li><li>作词：严艺丹 作曲：赵博</li><li>叹 那一滴的滑落</li><li>是擦不去悲喜 残留着的温热</li><li>落在掌心 化不开的无奈</li><li>不舍得 紧握</li><li>看 那一地的花落</li><li>是开不出姻缘 缠绕着的分割</li><li>瓣影零落 怎么凋谢了</li><li>别离时盛开的承诺</li><li>那是你说 往事开花无果</li><li>最暖的陪伴总在回头时消散</li><li>伸出手抓不住遗憾</li><li>也可以学着多一点勇敢</li><li>两个方向各自走完</li><li>最长的永久还是只并肩一半</li><li>记住了路过的悲欢</li> <li>而缘份尽了情还不忍断</li><li>留一朵无果的期盼</li><li>留一朵无果的期盼</li>"    
	}, {
		src: "./play/G.E.M.邓紫棋 - 泡沫.mp3",
		src1:"./img/2.jpg",
		name: "G.E.M.邓紫棋 - 泡沫",
		author: "邓紫棋 ",
		state:"0",
		gclb:"<li>泡沫</li><li>作曲：G.E.M. 作词：G.E.M.</li><li>演唱：邓紫棋</li><li>演唱：邓紫棋</li><li>就像被骗的我　是幸福的</li><li>追究什么对错　你的谎言　基于你还爱我</li><li>泡沫美丽的泡沫　虽然一刹花火</li><li>你所有承诺　虽然都太脆弱</li><li>但爱像泡沫　如果能够看破　有什么难过</li><li>早该知道泡沫　一触就破</li><li>就像已伤的心　不胜折磨</li><li>也不是谁的错　谎言再多　基于你还爱我</li><li>美丽的泡沫　虽然一刹花火</li><li>你所有承诺　虽然都太脆弱</li><li>爱本是泡沫　如果能够看破　有什么难过</li><li>爱本是泡沫　如果能够看破　有什么难过</li><li>再美的花朵　盛开过就凋落</li><li>再美的花朵　盛开过就凋落</li><li>爱本是泡沫　如果能够看破　有什么难过</li><li>为什么难过　有什么难过　为什么难过</li><li>全都是泡沫　只一刹的花火</li><li>你所有承诺　全部都太脆弱</li><li>而你的轮廓　怪我没有看破　才如此难过</li><li>相爱的把握　要如何再搜索</li><li>相拥着寂寞　难道就不寂寞</li><li>爱本是泡沫　怪我没有看破　才如此难过</li><li>在雨下的泡沫　一触就破</li><li>当初炽热的心　早已沉没</li><li>说什么你爱我　如果骗我　我宁愿你沉默</li>"
	}, {
		src: "./play/薛之谦 - 意外.mp3",
		src1:"./img/3.jpg",
		name: "意外",
		author: "薛之谦 ",
		state:"0",
		gclb:"<li>歌名：意外</li><li>作词：杨子朴 作曲：杨子朴</li><li>歌手：薛之谦</li><li>我在清晨的路上</li><li>谁被我遗忘</li><li>我在深夜里旅行</li><li>谁被我遗忘</li><li>肩上的破旧行囊</li><li>能收藏多少坚强</li><li>不如全身赤裸</li><li>还给我那脆弱</li><li>明知这是一场意外</li><li>你要不要来</li><li>明知这是一场重伤害</li><li>你会不会来</li><li>当疯狂慢慢从爱情离开</li><li>还有什么你值得感慨</li><li>如果风景早已都不存在</li><li>我想我谁不都爱</li>"
	}]
	localStorage.musics = JSON.stringify(musics);
// 时间函数
    function time(v){
   	  v=Math.floor(v);
   	  var m=Math.floor(v/60);
   	  var s=v%60;
   	  m = (m < 10) ? ("0" + m) : m;
	  s = (s < 10) ? ("0" + s) : s;
	  return m + ":" + s;
    }
	
//  切换页面	
	headLeft.on("click",function(){
		one.css("display","none");
		two.css("display","block");
		
	})
	yuan.on("click",function(){
		two.css("display","none");
		one.css("display","block");
	})
	
//  播放  暂停
    play2.on("click", function(){
		if(audio.paused) {
		    audio.play();
		}else {
			audio.pause();
		}
	})
	$(audio).on("play", function(){
        play.css("display","none");
        pause.css("display","block");
        img.addClass("zhuan")
        img.css("animation-play-state","running");
	})
	$(audio).on("pause", function() {
        pause.css("display","none");
        play.css("display","block");
        img.css("animation-play-state","paused");
	})
	
//  上一首
    function pre1(){
    	now--;
	    if(now<0){
	    	now=musics.length-1;
	    }
    	audio.src=musics[now].src;
    }
    pre.on("click",function(){
    	img.removeClass("zhuan");
    	pre1();
    })
//  下一首
    function next1(){
    	now++;
    	if(now>=musics.length){
    		now=0;
    	}
    	audio.src=musics[now].src;
    }    
    next.on("click",function(){
    	img.removeClass("zhuan");
    	next1();
    })
    
    $(audio).on("canplay",function(){
    	audio.play();
    	time2.html(time(audio.duration));
    })
    
//  进度条
    pI.on("click",false);
    $(audio).on("timeupdate", function() {
		time1.html(time(audio.currentTime));
		time2.html(time(audio.duration));
		pI.css("left", width * (audio.currentTime / audio.duration) - pI.width() / 2);
		process1.css("width",width * (audio.currentTime / audio.duration));
		var geciHeight=$("#geci .geci").height()
		var height=geciHeight* audio.currentTime / audio.duration ;
		$("#geci .geci").css("top","100"-height)
		var index=Math.floor(($(".geci li").length)*audio.currentTime / audio.duration);
		$(".geci li").css("color","#48f194").eq(index).css("color","#fff")

	})
    process.on("touchend",function(e){
    	var e= e.originalEvent.changedTouches[0].clientX-process.offset().left;
		audio.currentTime = (audio.duration * e / width);
    })
    pI.on("touchstart", function(e) {
		var start = pI.width() / 2 - (e.originalEvent.changedTouches[0].clientX-pI.offset().left);
		$(document).on("touchmove", function(e) {
			var left = e.originalEvent.changedTouches[0].clientX- process.offset().left + start;
			if(left >= width || left <= 0) {
				return;
			}
			audio.currentTime = left / width * audio.duration;
		})
		return false;
	})
	$(document).on("touchend", function() {
		$(document).off("touchmove")
	})
//  音量
    headRight.on("touchstart",function(){
    	box.fadeToggle("slow","linear");
    })
 
    vi.on("touchstart",false)
    $(audio).on("volumechange", function() {
		vi.css("left", width1 * audio.volume - vi.width() / 2);
		volume1.css("width",audio.volume*width1);
	})
	volume.on("touchend",function(e){
		volumeleft=e.originalEvent.changedTouches[0].clientX-volume.offset().left;
		if(volumeleft<0||volume>width1){
			return;
		}
		metu.removeAttr("val")	
		audio.volume=volumeleft/width1;
		return false;
	})
	
	vi.on("touchstart",function(e){			
		var start1=vi.width()/2-(e.originalEvent.changedTouches[0].clientX-vi.offset().left);
		$(document).on("touchmove",function(e){
			var left1=e.originalEvent.changedTouches[0].clientX-volume.offset().left+start1;
				if(left1>=width1||left1<=0){
					return;	
				}
			audio.volume=left1/width1;
			return false;
		})	
		return false;
	})
	vi.on("touchend",function(){
		$(document).off("touchmove")
		return false;
	})
//  静音    
    metu.on("touchstart",function(){
    	if($(this).attr("val")){
    		audio.volume=$(this).attr("val");
    		$(this).removeAttr("val");
    		
    	}else{
    		$(this).attr("val",audio.volume);
    		audio.volume=0;
    		metu.css("display","none");
    		metu1.css("display","block");
    	}
    })
    metu1.on("touchend",function(){
    	metu1.css("display","none");
    	metu.css("display","block");
    })
    
    
//  列表右滑

    footer.eq(1).on("touchstart",function(e){
    	 pos=e.originalEvent.changedTouches[0].clientX;
    })
    footer.eq(1).on("touchend",function(e){
    	var p=e.originalEvent.changedTouches[0].clientX;
    	if(p-pos>=50){
    		next1();
    		render(musics,gd)
    	}
    	if(p-pos<-50){
    		pre1();
    		render(musics,gd)
    	}
    })
    
//  增加歌曲
    function render(obj){				
		gd.empty();
		for(var i=0;i<obj.length;i++){
			if(i==now){
				audio.src=obj[i].src;
				audio.play()
				c="active"
			}else{
				c=""
			}
			$("<li class='"+c+"'><span class='jt'>&gt;</span><div class='sTop'>"+musics[i].name+"</div><div class='sBottom'>"+musics[i].author+"</div></li>").
			appendTo(gd)
		}
	}
    render(musics,gd)
	gd.on("click", "li", function() {
		index = $(this).index();
		if(index==now){
			if(audio.paused){
				audio.play();	
			}else{
				audio.pause()
			}
			return;
		}
		now=index;
		render(musics,gd);
	})

//  添加歌曲
    add.on("touchend","li",function(){
		var d=JSON.parse($(this).attr("data"));
		musics.push(d);
		localStorage.musics=JSON.stringify(musics);
		render(musics,gd);
		return false;
	})
    
//  删除歌曲
    del.on("touchend",function(){
    	if(now1==now){
			musics.splice(now1,1)
			localStorage.musics=JSON.stringify(musics);
			render(musics,gd);
		}
		if(now1<now){
			now--;
			musics.splice(now1,1)
			localStorage.musics=JSON.stringify(musics);
			render(musics,gd);
		}
		if(now1>now){
			musics.splice(now1,1)
			localStorage.musics=JSON.stringify(musics);
			render(musics,gd);
		}
    })
//  
    $(audio).on("loadstart",function(){
		headTop.html(musics[now].name);
		headBottom.html(musics[now].author);
		img.attr("src",musics[now].src1);
		yuantop.html(musics[now].name);
		yuanbot.html(musics[now].author);
		$("#geci").html("");
        $('<ul class="geci"><li>'+musics[now].gclb+'</li></ul>').appendTo($("#geci"));
    })
    
    
    $(audio).on("ended",function(){
    	next1();
    })
    
})
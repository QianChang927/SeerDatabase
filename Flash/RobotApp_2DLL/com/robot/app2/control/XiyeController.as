package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.loading.Loading;
   import flash.display.MovieClip;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class XiyeController
   {
      
      private static var _riddles:Array = [["以下不是战神联盟成员的是","雷伊 卡修斯 瑞尔斯 盖亚"],["天马一族的皇者是","圣光天马 黄金天马 克萨雷恩 帕伽索斯"],["邪恶四大灵王不包括下面","巨石灵王 帕罗狄亚 尤米娜 艾辛格"],["赛尔号的船长是谁","罗杰船长 杰克船长 汤姆船长 泰瑞船长"],["修炼极品精灵推荐的个体值为","20 30 31 32"],["缪斯与耶里梅斯的关系","父女 夫妻 母子 兄妹"],["金翅托鲁克的儿子是","金翅托鲁斯 赫拉 宙斯 普拉多"],["雷伊的终极技能是 ","雷神天明闪 极光刃 极电千鸟 瞬雷天闪"],["谱尼被封印在哪里","船长室 瞭望露台 勇者之塔神秘领域 精灵太空站"],["赛尔号游戏更新的时间为","每月1号 每周一 每周五 每月15号"],["创世兵魂来自以下哪个星系","罗格星系 螺旋星系 泰坦星系 卡兰星系"],["卡修斯超进化之后的称号是","战神 雷神 山神 大地之神"],["魔灵王与奥罗纳尔的关系是","主仆 父子 师徒 兄妹"],["卡修斯超进化的道具不包括以下哪个？","天神石 地祇石 山岳石 钻石"],["尤曼斯和赛尔在德拉诺荒漠获得什么东西？【答案隐藏在本周主线剧情中】","精元 地祇石 钻石 经验券"]];
      
      private static var _lastPlayTime:Date;
       
      
      public function XiyeController()
      {
         super();
      }
      
      public static function playPreTask() : void
      {
         var mcloader:MCLoader = null;
         SocketConnection.send(1022,86073519);
         mcloader = new MCLoader(ClientConfig.getMapAnimate("xiyejun"),null,Loading.TITLE_AND_PERCENT,"加载..");
         mcloader.addEventListener(MCLoadEvent.SUCCESS,function(param1:*):void
         {
            var d1:Array;
            var d2:Array;
            var d3:Array;
            var taskQuePro:TaskQuneProcessor;
            var mapMv:MovieClip = null;
            var e:* = param1;
            KTool.hideMapAllPlayerAndMonster();
            mapMv = mcloader.loader.content["mv"];
            mapMv.parent.removeChild(mapMv);
            d1 = [[NPC.SEER,["西野君，你怎么来这里了！卡修斯在炫彩神殿封神！这里是神王殿堂！"],["都一样！都一样！"]],[NPC.XIYEJUN,["来得太早，就四处逛逛嘛！（小声说：难道我会告诉你，我是因为飞船控制器失灵，才会摔倒这里吗？呵呵！）"],["没事就好！"]]];
            d2 = [[NPC.XIYEJUN,["我是人见人爱、花见花开的天才西野君！"],["相同的话，不要说第二遍了！"]],[NPC.XIYEJUN,["我之所以人见人爱、花见花开，就是因为我帅气的眼镜！"],["可是你的眼睛在脸上戴着呀！"]],[NPC.XIYEJUN,["因为我有无数帅气的眼镜！有很多！！！可是刚才飞船出事故，我掉下来的时候，我随身携带的眼镜全部散架了！现在连零件都丢失了一些！"],["飞船出事故？"]]];
            d3 = [[NPC.XIYEJUN,["参加卡修斯封神大典，肯定要打扮的帅气逼人！说不定，还能够遇到缪斯少主！"],["好吧！"]],[NPC.SEER,["可是，我该怎么帮助你呢？"],["听我细细说！"]],[NPC.XIYEJUN,["你有两种方式，第一种：你可以跟我比拼谁更了解赛尔号，如果你赢了，我会给你一些剩余的材料的！"],["这个，我考虑考虑！"]],[NPC.XIYEJUN,["第二种——就是刚才我看到一只鸭子鬼鬼祟祟的。那些丢失的材料肯定是被他偷走了，你帮我拿回来！"],["我明白了！"]]];
            taskQuePro = new TaskQuneProcessor();
            taskQuePro.addFullMv(ClientConfig.getFullMovie("xiyejun"));
            taskQuePro.addMapMv(mapMv,1,"mv");
            taskQuePro.addDialog(d1);
            taskQuePro.addMapMv(mapMv,2,"mv");
            taskQuePro.addDialog(d2);
            taskQuePro.addMapMv(mapMv,3,"mv");
            taskQuePro.addDialog(d3);
            taskQuePro.addMapMv(mapMv,4,"mv");
            taskQuePro.procesEndFun = function():void
            {
               SocketConnection.send(1022,86073520);
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
               KTool.showMapAllPlayerAndMonster();
               MapObjectControl.hideOrShowAllObjects(true);
               BufferRecordManager.setMyState(1129,true);
               mcloader.clear();
               DisplayUtil.removeForParent(mapMv);
               ToolBarController.showOrHideAllUser(ToolBarController.panel.panelIsShow);
               ModuleManager.showModule(ClientConfig.getAppModule("TheMysteriousXiyejunPanel"));
            };
            taskQuePro.start();
            MapObjectControl.hideOrShowAllObjects(false);
         });
         mcloader.doLoad();
      }
      
      public static function hasFinishPreTask() : Boolean
      {
         return BufferRecordManager.getMyState(1129);
      }
      
      public static function playRiddles() : void
      {
         KTool.getMultiValue([5100],function(param1:Array):void
         {
            var random:Array;
            var fun:Function;
            var index:int = 0;
            var question:String = null;
            var answers:Array = null;
            var arr:Array = param1;
            if(SystemTimerManager.time - arr[0] < 60 * 2)
            {
               NpcDialog.show(NPC.XIYEJUN,["还没到两分钟哦！过会儿再来答题吧！"],["哦！"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("XiyejunGlassMakePanel"));
               }]);
               return;
            }
            random = KTool.getRandom(_riddles,1)[0];
            index = _riddles.indexOf(random) + 1;
            question = String(random[0]);
            answers = (random[1] as String).split(" ");
            fun = function(param1:int):void
            {
               var i:int = param1;
               SocketConnection.sendWithCallback(CommandID.XIYEJUN_DATI,function(param1:SocketEvent):void
               {
                  var e:SocketEvent = param1;
                  var reward:int = int((e.data as ByteArray).readUnsignedInt());
                  if(reward == 0)
                  {
                     NpcDialog.show(NPC.XIYEJUN,["啧啧啧！哎呀呀！回答错误！只有回答正确，才能够获得我的奖励哦！0xff00002分钟0xFFFFFF之后，再来接受考验哦！"],["我要组装眼镜！","我去看看别的！"],[function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("XiyejunGlassMakePanel"));
                     }]);
                  }
                  else
                  {
                     NpcDialog.show(NPC.XIYEJUN,["恭喜你！答对啦！我很欣慰！送你一个眼镜材料，快去组装眼镜换取你丰厚的礼包吧！记得0xff00002分钟0xFFFFFF之后，再来接受考验哦！"],["我要组装眼镜！","我去看看别的！"],[function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("XiyejunGlassMakePanel"));
                     }]);
                  }
               },index,i);
            };
            NpcDialog.show(NPC.XIYEJUN,["没错！我就是人见人爱，花见花开的美少年——西野君！哦，不！是天才西野君！你只要答对我的问题，证明自己的实力，我就会送你一些散落的眼镜材料哦！"],["别废话，开始答题啦！","我好崇拜你噢！（哦！）"],[function():void
            {
               NpcDialog.show(NPC.XIYEJUN,[question],answers,[function():void
               {
                  fun(1);
               },function():void
               {
                  fun(2);
               },function():void
               {
                  fun(3);
               },function():void
               {
                  fun(4);
               }]);
            }]);
         });
      }
   }
}

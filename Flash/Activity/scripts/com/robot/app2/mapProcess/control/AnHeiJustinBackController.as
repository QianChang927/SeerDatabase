package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AnHeiJustinBackController
   {
      
      private static var _foreverVal:int;
      
      private static var _taskMc:MovieClip;
      
      private static var _map:BaseMapProcess;
      
      private static const MapIDs:Array = [11160,11161,11162];
      
      private static const _mapAnimate:String = "AnHeiJustinBack_Animate";
      
      private static const npcNames:Array = [NPC.SENPUTE,NPC.LUOSIKE,NPC.HAQIUSI,NPC.YINXINGCHIKE];
       
      
      public function AnHeiJustinBackController()
      {
         super();
      }
      
      public static function startStep1() : void
      {
         freshStatus(function():void
         {
            if(BitUtils.getBit(_foreverVal,0) == 0)
            {
               KTool.changeMapWithCallBack(1,function():void
               {
                  loadTaskMc(function():void
                  {
                     playStory(step1Stroy(0),null,false);
                     StatManager.sendStat2014("0226贾斯汀回归","播放完第一节动画","2016运营活动");
                  });
               });
            }
            else
            {
               MapManager.changeMap(11159);
            }
         });
      }
      
      public static function startStep2() : void
      {
         freshStatus(function():void
         {
            var count:uint = 0;
            var flag:Boolean = false;
            var i:int = 0;
            while(i < 3)
            {
               flag = BitUtils.getBit(_foreverVal,i + 5) > 0;
               if(flag)
               {
                  count++;
               }
               i++;
            }
            if(count == 3)
            {
               loadTaskMc(function():void
               {
                  playStory(step2Stroy(),startStep3,false);
               });
            }
            else
            {
               ModuleManager.showAppModule("AnHeiJustinBackTipsPanel",count);
            }
         });
      }
      
      public static function startStep3() : void
      {
         freshStatus(function():void
         {
            KTool.changeMapWithCallBack(11162,function():void
            {
               loadTaskMc(function():void
               {
                  if(BitUtils.getBit(_foreverVal,8) == 0)
                  {
                     playStory(step3Stroy(0),function():void
                     {
                        SocketConnection.sendWithCallback(43699,function():void
                        {
                           _taskMc.gotoAndStop(9);
                           _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
                        },9);
                     },false);
                  }
                  else if(BitUtils.getBit(_foreverVal,9) == 0)
                  {
                     if(_taskMc.parent == null)
                     {
                        MapManager.currentMap.btnLevel.addChild(_taskMc);
                     }
                     _taskMc.gotoAndStop(9);
                     _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
                  }
                  else
                  {
                     playStory(step3Stroy(1),function():void
                     {
                        SocketConnection.sendWithCallback(43699,function():void
                        {
                           MapManager.changeMap(4);
                        },11);
                     });
                  }
               });
            });
         });
      }
      
      private static function loadTaskMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               _taskMc.addEventListener(MouseEvent.CLICK,onClick);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else if(fun != null)
         {
            fun();
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         switch(e.target.name)
         {
            case "mailBtn":
               playStory(step1Stroy(1),function():void
               {
                  ModuleManager.showAppModule("AnHeiJustinBackLetterPanel");
               },false);
               break;
            case "kubeisaBtn":
               NpcDialog.show(NPC.KUBEISALONG,["组织的力量无法抵挡，你们趁早投降，否则一个不留！"],["受死吧！","我用钻石砸死你！","我等会再来教训你！"],[function():void
               {
                  StatManager.sendStat2014("0226贾斯汀回归","开始虚拟对战","2016运营活动");
                  FightManager.tryFight(367,[0,0,0,0]);
               },function():void
               {
                  KTool.buyProductByCallback(246816,1,function():void
                  {
                     SocketConnection.sendWithCallback(43699,function():void
                     {
                        startStep3();
                     },16);
                  });
               }]);
         }
      }
      
      public static function continueAfterLetter() : void
      {
         DisplayUtil.removeForParent(_taskMc);
         KTool.changeMapWithCallBack(11159,function():void
         {
            playStory(step1Stroy(2),function():void
            {
               Alarm2.show("贾斯汀给了你3份礼物，可用于放置在赛尔号飞船里。",function():void
               {
                  playStory(step1Stroy(3),function():void
                  {
                     SocketConnection.sendWithCallback(43699,function():void
                     {
                        MainManager.selfVisible = false;
                        DisplayUtil.removeForParent(_taskMc);
                        getBossStatus();
                     },1);
                  },false);
               });
            },false);
         });
      }
      
      private static function freshStatus(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([8560],function(param1:Array):void
         {
            _foreverVal = param1[0];
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function getBossStatus() : void
      {
         freshStatus(function():void
         {
            var count:uint = 0;
            var flag:Boolean = false;
            var i:int = 0;
            while(i < 4)
            {
               flag = BitUtils.getBit(_foreverVal,i + 1) > 0;
               if(flag)
               {
                  count++;
               }
               _map.conLevel["btn_" + i].visible = _map.conLevel["flag_" + i].visible = !flag;
               i++;
            }
            if(count == 4)
            {
               loadTaskMc(function():void
               {
                  _taskMc.gotoAndStop(4);
                  _taskMc.mc.gotoAndStop(1);
                  playStory(step1Stroy(4),function():void
                  {
                     startStep2();
                  },false);
               });
            }
         });
      }
      
      public static function initFor11159(param1:BaseMapProcess) : void
      {
         _map = param1;
         MainManager.selfVisible = false;
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            _map.conLevel["btn_" + _loc2_].addEventListener(MouseEvent.CLICK,onBtnClick);
            _loc2_++;
         }
         getBossStatus();
      }
      
      public static function destroyFor11159() : void
      {
         MainManager.selfVisible = true;
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            _map.conLevel["btn_" + _loc1_].removeEventListener(MouseEvent.CLICK,onBtnClick);
            _loc1_++;
         }
         _map = null;
      }
      
      private static function onBtnClick(param1:MouseEvent) : void
      {
         var index:uint = 0;
         var e:MouseEvent = param1;
         index = uint(e.target.name.split("_")[1]);
         NpcDialog.show(npcNames[index],["小肥羊，我怎么会让你跑了？尝尝大爷我的厉害吧！"],["吃我一拳！","我用钻石砸死你！","大爷我错了您饶了我吧！"],[function():void
         {
            FightManager.fightNoMapBoss("",6581 + index);
         },function():void
         {
            KTool.buyProductByCallback(246815,1,function():void
            {
               SocketConnection.sendWithCallback(43699,function():void
               {
                  getBossStatus();
               },12 + index);
            });
         }]);
      }
      
      public static function initForStep2(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         freshStatus(function():void
         {
            if(BitUtils.getBit(_foreverVal,7) == 1)
            {
               startStep3();
            }
            else
            {
               _map.conLevel["badGiftMc"].gotoAndStop(1);
               _map.conLevel["badGiftMc"].addEventListener(MouseEvent.CLICK,onSetGift);
            }
         });
      }
      
      public static function destroyForStep2() : void
      {
         _map.conLevel["badGiftMc"].removeEventListener(MouseEvent.CLICK,onSetGift);
         _map = null;
      }
      
      private static function onSetGift(param1:MouseEvent) : void
      {
         var index:uint = 0;
         var e:MouseEvent = param1;
         if((e.currentTarget as MovieClip).currentFrame == 1)
         {
            _map.conLevel.mouseChildren = _map.conLevel.mouseEnabled = false;
            index = uint(MapIDs.indexOf(MapManager.currentMap.id));
            SocketConnection.sendWithCallback(43699,function():void
            {
               var t:uint = 0;
               _map.conLevel["badGiftMc"].gotoAndStop(3);
               t = setTimeout(function():void
               {
                  clearTimeout(t);
                  startStep2();
                  StatManager.sendStat2014("0226贾斯汀回归","成功摆放礼包" + (index + 1),"2016运营活动");
                  _map.conLevel.mouseChildren = _map.conLevel.mouseEnabled = true;
               },2100);
            },6 + index);
         }
      }
      
      private static function playStory(param1:Array, param2:Function = null, param3:Boolean = true) : void
      {
         var storyArr:Array = param1;
         var fun:Function = param2;
         var showIcon:Boolean = param3;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         if(_taskMc.parent == null)
         {
            MapManager.currentMap.btnLevel.addChild(_taskMc);
         }
         MapNamePanel.hide();
         ToolBarController.panel.hide();
         MapManager.currentMap.topLevel.mouseChildren = true;
         MapManager.currentMap.topLevel.mouseEnabled = true;
         LevelManager.iconLevel.visible = false;
         TaskDiaLogManager.single.playStory(storyArr,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(showIcon)
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               MapNamePanel.show();
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function step1Stroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 0:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,1,"mc"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["奇怪了，怎么会有人给我写信呢？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不知道是谁写给我的……还是先看看好了。"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["连署名都没有，字迹也很潦草，看起来是遇到了非常紧急的情况。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["旧的太空站已经被废弃了，怎么会有人出现在那里呢？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["罢了，我还是去看看吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["贾……贾斯汀站长！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["谱尼在上，天呐，您还活着！天呐，这真是太好了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我们都以为您被海盗们抓走了，我还以为再也见不到您了，呜呜呜……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["唉，我能逃出来，也是一个意外。曾经的太空站不复存在了，英卡洛斯……它还好吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["英卡洛斯每天心急如焚，恨不得直接杀入海盗中将你救回来！如果它知道您回来了，一定会很开心的！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["哈哈，很快我们就能见面了！想想现在差不多也到了开学庆典的时候，你顺便帮我把这些礼物带给小赛尔们把！"]));
               break;
            case 3:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["谢谢站长，我一定会送到的！咦，站长，您不顺便跟我一起回去吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["别急，我还有些事情要处理一下，你很快就会在赛尔号上看到我的！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那真是太棒了！如果您能出现在开学庆典上，那这次的庆典简直完美至极！"],["好，我们……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["不好！你快走！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SENPUTE,["哼哼，想不到还有一个落单的小家伙。兄弟们，把他也给一并处理了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["海盗们又追来了！站长，我来帮您解决他们！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["他们人多势众，你肯定不是对手，你还是快走吧！不要管我了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我怎么能丢下您不管！尝尝我的厉害吧，可恶的海盗们！"]));
               break;
            case 4:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["想不到你已经变得这么强了！太棒了，赶快带着我的祝福回赛尔号去吧！这两只小虾米就交给我，我稍后就来！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好的，贾斯汀站长！您小心啊！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["哼，就凭他们两个，我分分钟就能解决掉！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["…………"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["计划成功了。兄弟们，现在就等着看好戏吧！"],["嘿嘿嘿……"]));
         }
         return _loc2_;
      }
      
      private static function step2Stroy() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,5,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["罗杰船长，说出来你绝对不会相信！你猜猜我今天见到谁了？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["哦？看你开心的样子，是不是见到你的梦中女神了？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["啊呀，不是不是！这次的开学盛典一定会格外喜庆，因为有一个我们都想见到的人就要回归赛尔号了！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我今天见到贾斯汀站长啦！喏，这些礼物就是他让我带回来的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["贾斯汀？不，这不可能……明明昨天晚上我还梦到……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["糟了，这些礼物！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,6,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["终于……我又回到了赛尔号！"]));
         return _loc1_;
      }
      
      private static function step3Stroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 0:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["贾斯汀？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["哈哈哈，你好啊，老朋友。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你绝对不会是贾斯汀！假借礼物之名安放炸弹，伤及无辜，扰乱秩序，你究竟是谁！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["倒是有点眼光，但我就是贾斯汀啊！不过，已经不是你认识的贾斯汀了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["黑暗的盛宴即将开始，我们伟大的组织是无敌的！我既然已经站在了这里，你将不会再看到恒星的光芒！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["哼，就让你做个明白鬼吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,7,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["原来如此！你们对贾斯汀做了什……我知道了，是他的芯片！你们改造了他的芯片！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["不愧是罗杰，还是有点小聪明的。但是马上，你就要消失了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["上吧，库贝萨隆！干掉他们！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,8,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YUNTIANLINGZUN,["可惜，要让你失望了。正值庆典期间，他们由我来守护！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你的礼包炸弹造成了很大的伤亡，你会为此付出代价！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["可恶……万万没想到，净天云神会在这个时候超进化……库贝萨隆，计划有变，你断后挡住他们，我先撤一步！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,9,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["就这么落荒而逃，也太没有风度了。也好，我正好也可以检验一下自己的力量。这只库贝萨，就交给我来对付吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["您要小心啊！"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YUNTIANLINGZUN,["哼，不堪一击。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["谢谢您！这次暗黑贾斯汀出现，不知道海盗那边又有了怎样的计划。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好可怕，他们居然改造了贾斯汀站长的芯片！希望站长现在一切都好……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["我了解贾斯汀，他绝对能够化险为夷的。老朋友，迪恩正在路上，你可千万要挺住啊……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.YUNTIANLINGZUN,["不管怎么说，我们击退了暗黑贾斯汀，就等于是提前终止了海盗们的计划，这是一件值得庆祝的事情。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["嗯？小赛尔，你怎么在叹气呀？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这个假冒贾斯汀站长跟我说，如果我帮他放好礼包，他会给我一份大礼作为奖励的……唉，这下奖励全没了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我的赛尔豆，我的经验券，我的泰坦之灵，呜呜呜……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["哈哈哈哈，原来是这样。小赛尔，你帮我们引出了暗黑贾斯汀，提前破解了海盗的阴谋，这是大功一件！来来来，这个礼包就送给你了！"],["哇！谢谢船长！"]));
         }
         return _loc2_;
      }
   }
}

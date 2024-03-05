package com.robot.app2.control.starPetRing
{
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.TwelveRoundsFightController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.DialogUtil;
   import com.robot.app.task.taskUtils.taskDialog.TaskQuneProcessor;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.display.MovieClip;
   
   public class StarPetRingActivityControll
   {
      
      private static var _tc:TwelveRoundsFightController = new StarPetRingTwentyRoundsControll();
      
      private static var _bossArr:Array = ["布里克 ","圣光天马","帕罗狄亚","巨蘑怪","魔域仙子","尤米娜","巨齿鲨","艾里克","里奥杰斯","雷纳尔多","尤尼卡","阿洛比斯","阿克妮丝","萨菲罗"];
      
      private static var _npcDialogID:Array = [NPC.BULIKE,NPC.SHENGGUANGTIANMA,NPC.PALUODIYA,NPC.JUMOGUAI,NPC.MOYUXIANZI,NPC.YUMINA,NPC.JVCHISHA,NPC.AILIKE,NPC.LIAOJIESI,NPC.LEINAERDUO,NPC.YOUNIKA,NPC.ALUOBISI,NPC.AKENISI,NPC.SAFEILUO];
      
      private static var _hasPlayMovie:Boolean = false;
      
      private static var hasPlayFirstDayTask:Boolean;
       
      
      public function StarPetRingActivityControll()
      {
         super();
      }
      
      public static function setUp() : void
      {
         LocalMsgController.addLocalMsg("StarPetMsgPanel",0,false,null,null,1);
      }
      
      public static function clickEquip(param1:* = null) : void
      {
         StatManager.sendStat2014("暑期超强回归明星精灵大擂台第二弹","点击装置",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("StarPetSummerMainPanel"));
      }
      
      private static function initForMap() : void
      {
         petBtn.gotoAndStop(2);
         MapListenerManager.add(petBtn as InteractiveObject,onPetClick);
         MapListenerManager.add(exchangeBtn as InteractiveObject,onExchangeBtnClick,"兑换装置");
         MapListenerManager.add(inforBtn as InteractiveObject,onInforBtnClick,"活动详情");
         MapListenerManager.add(evolutionBtn as InteractiveObject,onEvolutionBtn,"超进化装置");
         if(_tc.isInActivityTime)
         {
            if(!_hasPlayMovie)
            {
               _hasPlayMovie = true;
               playStartMv();
            }
            else
            {
               updataeScene();
            }
         }
         else if(_tc.isIncoming)
         {
            if(!hasFinshPreTask)
            {
               playPreTask();
            }
            else
            {
               updataeScene();
            }
         }
      }
      
      private static function playStartMv() : void
      {
         if(bossIndex == 0 && Boolean(_tc.isInActivityTime))
         {
            playFirstDayStartTask();
         }
         else
         {
            AnimateManager.playMcAnimate(mapMv,7 + bossIndex,"mv",function():void
            {
               updataeScene();
            });
         }
      }
      
      private static function roundChangeFun(param1:int) : void
      {
         if(bossIndex == 0 && param1 == 0)
         {
            playFirstDayStartTask();
         }
         petBtn.gotoAndStop(1);
      }
      
      private static function playFirstDayStartTask() : void
      {
         var dialogsArray:Array = null;
         if(hasPlayFirstDayTask)
         {
            updataeScene();
            return;
         }
         hasPlayFirstDayTask = true;
         dialogsArray = [[NPC.SHENGGUANGTIANMA,[redNickName + "你果然准时，准备好了吗？明星精灵大擂台马上就要开始咯！"],["恩恩，我已经准备好了！"]],[NPC.SHENGGUANGTIANMA,["太好了，那我们就开始吧！擂台期间你0xff0000每3分钟0xffffff可以挑战当日擂主。挑战后可以获得0xff0000明星精灵召唤卡和擂主专属纹章0xffffff，收集满一定数量就可以百分百获得你想要的精灵咯！"],["哇，这么简单？"]],[NPC.SHENGGUANGTIANMA,["呵呵，好自信啊！你认为自己一定会是常胜用户吗？咱们还是用实力展现吧！行动吧！英勇的战士！"],["来吧！各位我接受你们的挑战！"]]];
         if(bossIndex == 0)
         {
            petBtn.gotoAndStop(2);
            AnimateManager.playMcAnimate(mapMv,6,"mv",function():void
            {
               DialogUtil.playDilogs(dialogsArray,[function():void
               {
                  AnimateManager.playMcAnimate(mapMv,7 + bossIndex,"mv",function():void
                  {
                     updataeScene();
                  });
               }]);
            });
         }
      }
      
      private static function fightBoss() : void
      {
         FightManager.fightWithBoss(_bossArr[bossIndex],bossIndex);
      }
      
      private static function get bossIndex() : int
      {
         var _loc1_:int = SystemTimerManager.sysDate.date - 8;
         return _loc1_ < 0 ? 0 : _loc1_;
      }
      
      private static function updataeScene() : void
      {
         if(bossIndex == 0 && Boolean(_tc.isIncoming) && SystemTimerManager.sysDate.hours < 15)
         {
            KTool.getFrameMc(mapMv,6,"mv",function(param1:MovieClip):void
            {
               param1.gotoAndStop(1);
               petBtn.gotoAndStop(2);
            });
            return;
         }
         KTool.getFrameMc(mapMv,7 + bossIndex,"mv",function(param1:MovieClip):void
         {
            param1.gotoAndStop(param1.totalFrames);
         });
         if(Boolean(_tc.isInActivityTime) && Boolean(_tc.canFight))
         {
            petBtn.gotoAndStop(1);
         }
         else
         {
            petBtn.gotoAndStop(2);
         }
      }
      
      private static function get vsIconTextArry() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         while(_loc2_ < 20)
         {
            _loc1_[_loc2_] = "第" + (_loc2_ + 1) + "轮对战开始，快来挑选最炫最酷的明星精灵吧！";
            _loc2_++;
         }
         return _loc1_;
      }
      
      private static function playPreTask() : void
      {
         var dialogsArray1:Array;
         var dialogsArray2:Array;
         var dialogsArray3:Array;
         var dialogsArray4:Array;
         var dialogsArray5:Array;
         var taskQunePro:TaskQuneProcessor = null;
         _tc.inPreTask = true;
         dialogsArray1 = [[NPC.SEER,["咦！这里怎么会出现能量门呢？颜色好奇怪啊！想必这里一定要发生什么大事了！"],["让我看看究竟是哪方神圣？"]]];
         dialogsArray2 = [[NPC.SHENGGUANGTIANMA,[redNickName + "真的是你！你是感应到我的召唤吗？看来你的实力已经开始超出我的预估了！"],["圣光天马，能见到你我太高兴了！"]],[NPC.SEER,["圣光天马…相信你不会无缘无故出现在斗者擂台，这次有什么大事发生吗？"],["你还记得他们吗？"]]];
         dialogsArray3 = [[NPC.SEER,["圣光天马，这是什么，能量门是怎么了？"],["还记得那些被你帮助过的伙伴吗？"]]];
         dialogsArray4 = [[NPC.SEER,["哇！！！这么多的伙伴都来了，这下可热闹了，你们是来给我拜年的吗？"],["不仅仅是拜年哦！"]],[NPC.SHENGGUANGTIANMA,["这次的明星精灵大聚会，是一年一度的大型擂台赛，为了友谊，更为了体现我们明星精灵的实力0xff0000" + MainManager.actorInfo.nick + "0xffffff你也一起参加吧！"],["真的吗？我也可以？"]],[NPC.SHENGGUANGTIANMA,["那当然啦！在这些选手中每天都会挑选出一位代表接受大家的挑战，你记得来哦！2月8日—2月21日，0xff0000下午14:00—15:000xffffff.我会在这里等待你哦！"],["恩恩，我不会错过这次机会的！"]]];
         dialogsArray5 = [[NPC.SHENGGUANGTIANMA,[redNickName + "   0xff00002月8日—2月21日，下午14:00—15:000xffffff，我会在这里等待你的光临哦！明星精灵大擂台，百万经验免费送哦！"],["真是太激动了，我这就去准备!"]]];
         taskQunePro = new TaskQuneProcessor();
         taskQunePro.addMapMv(mapMv,1,"mv");
         taskQunePro.addDialog(dialogsArray1);
         taskQunePro.addMapMv(mapMv,2,"mv");
         taskQunePro.addDialog(dialogsArray2);
         taskQunePro.addMapMv(mapMv,3,"mv");
         taskQunePro.addDialog(dialogsArray3);
         taskQunePro.addMapMv(mapMv,4,"mv");
         taskQunePro.addDialog(dialogsArray4);
         taskQunePro.addMapMv(mapMv,5,"mv");
         taskQunePro.addDialog(dialogsArray5);
         taskQunePro.procesEndFun = function():void
         {
            _tc.inPreTask = false;
            updataeScene();
            BufferRecordManager.setState(MainManager.actorInfo,554,true);
            taskQunePro.destory();
            if(ToolBarController.panel.panelIsShow)
            {
               ToolBarController.showOrHideAllUser(true);
            }
            MainManager.selfVisible = true;
            exchangeBtn.visible = true;
         };
         taskQunePro.start();
         if(ToolBarController.panel.panelIsShow)
         {
            ToolBarController.showOrHideAllUser(false);
         }
         MainManager.selfVisible = false;
         exchangeBtn.visible = false;
      }
      
      private static function onExchangeBtnClick(param1:*) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("StarPetRingExchangePanel"));
      }
      
      private static function onInforBtnClick(param1:*) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("StarPetRingInforPanel"));
      }
      
      private static function onEvolutionBtn(param1:*) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("StarPetEvolutionPanel"));
      }
      
      private static function onPetClick(param1:*) : void
      {
         var bossId:int = 0;
         var e:* = param1;
         if(_tc.isInActivityTime)
         {
            if(_tc.canFight)
            {
               NpcDialog.show(_npcDialogID[bossIndex],[redNickName + "今天的擂主是我" + _bossArr[bossIndex] + "哦！让我看看你的真是实力吧！我的擂主专属许愿卡可不是这么容易获得的哦！"],[_bossArr[bossIndex] + "，我要挑战你"],[function():void
               {
                  fightBoss();
               }]);
            }
            else
            {
               NpcDialog.show(_npcDialogID[bossIndex],[redNickName + "实力有所进步嘛！别着急，耐心点！每次挑战后需要等待3分钟后才可以继续挑战我哦！"],["恩恩，我明白了！！"]);
            }
         }
         else if(_tc.isIncoming)
         {
            if(SystemTimerManager.sysDate.hours < 15)
            {
               bossId = bossIndex == 0 ? int(NPC.SHENGGUANGTIANMA) : int(_npcDialogID[bossIndex]);
               NpcDialog.show(bossId,[redNickName + "时间还没到哦，0xff00002月8日—2月21日，下午14:00—15:000xffffff，我们会在这里等待你的光临哦！"],["恩，我会来的！！"]);
            }
            else
            {
               NpcDialog.show(_npcDialogID[bossIndex],["今天的擂台大比拼就到这里结束吧！对你今天的表现我感到自豪，" + redNickName + "继续努力哦！明天的擂主是" + _bossArr[bossIndex + 1] + "，千万别掉以轻心哦！"],["恩恩，我还会再来的！！"]);
            }
         }
      }
      
      private static function get hasFinshPreTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,554);
      }
      
      private static function get mapMv() : MovieClip
      {
         return MapManager.currentMap.controlLevel["mapMv"];
      }
      
      private static function get petBtn() : MovieClip
      {
         return mapMv["pet"];
      }
      
      private static function get exchangeBtn() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["exchange"];
      }
      
      private static function get inforBtn() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["infor"];
      }
      
      private static function get evolutionBtn() : DisplayObject
      {
         return MapManager.currentMap.depthLevel["evolution"];
      }
      
      private static function get redNickName() : String
      {
         return "0xff0000" + MainManager.actorInfo.nick + "0xffffff";
      }
   }
}

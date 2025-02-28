package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.taskDialog.TaskStoryPlayer;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.BonusInfo;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class StrongKnightBattleController
   {
      
      private static const PRE_TASK:int = 991;
      
      private static const BONUS_ID:int = 252;
      
      private static var _map:BaseMapProcess;
      
      private static var _taskMc:MovieClip;
      
      private static var _fightType:String;
      
      private static var itemObj:Object = {
         "ice":{
            "item":1700429,
            "count":0,
            "limit":3
         },
         "grass":{
            "item":1700430,
            "count":0,
            "limit":3
         },
         "light":{
            "item":1700431,
            "count":0,
            "limit":2
         }
      };
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","*","4-10","3","*","2016")]);
       
      
      public function StrongKnightBattleController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         if(!AC.isInActivityTime)
         {
            return;
         }
         _map = map;
         SocketConnection.send(1022,86067347);
         ResourceManager.getResource(ClientConfig.getMapAnimate("map_967_strong_knight"),function(param1:MovieClip):void
         {
            taskMc = param1;
            taskMc.buttonMode = true;
            _map.conLevel.addChild(taskMc);
            if(!isTaskDone)
            {
               CommonUI.addYellowExcal(_map.topLevel,593,160);
               MapObjectControl.hideOrShowAllObjects(false);
               taskMc.gotoAndStop(6);
            }
            else
            {
               taskMc.gotoAndStop(7);
            }
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            taskMc.addEventListener(MouseEvent.CLICK,onTask);
         });
      }
      
      public static function onEquip() : void
      {
         if(MapManager.currentMap.id != 967)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("StrongKnightMsgPanel"));
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("StrongKnightMainPanel"));
         }
      }
      
      public static function onNPC() : void
      {
         NpcDialog.show(NPC.GELEER,["你就是" + MainManager.actorInfo.formatNick + "？听说你实力很强大，你敢接受我的挑战吗？"],["我敢接受挑战！","我没时间！"],[function():void
         {
            if(MapManager.currentMap.id != 967)
            {
               MapManager.changeMap(967);
            }
            else
            {
               startPreTask();
            }
         }]);
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var e:PetFightEvent = param1;
         if(_fightType == "geleer")
         {
            if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               MapObjectControl.hideOrShowAllObjects(false);
               AnimateManager.playMcAnimate(taskMc,5,"mc5",function():void
               {
                  var _loc2_:Boolean = false;
                  var _loc3_:Object = null;
                  taskMc.gotoAndStop(7);
                  var _loc1_:BonusInfo = BonusController.getDelayBonusInfo(BONUS_ID);
                  if(_loc1_)
                  {
                     _loc2_ = false;
                     for each(_loc3_ in _loc1_.itemList)
                     {
                        if(_loc3_.id == 1500308)
                        {
                           Alarm.show("恭喜获得格勒尔的精元，多次挑战，奖励更丰厚！");
                           _loc2_ = true;
                           break;
                        }
                     }
                     if(!_loc2_)
                     {
                        Alarm.show("你获得了格勒尔离开时丢下的奖励，战胜5次，必定获得他的精元！");
                     }
                  }
                  BonusController.showDelayBonus(BONUS_ID);
                  BonusController.removeDelay(BONUS_ID);
                  MapObjectControl.hideOrShowAllObjects(true);
               });
            }
            else
            {
               NpcDialog.show(NPC.GELEER,[MainManager.actorInfo.formatNick + "，即使你找到足够的三种能源，但是你的实力还是太弱了！想要探索泰坦星系，继续努力吧！"],["挑战海盗！","我放弃！"],[function():void
               {
                  fight("haidao");
               }]);
            }
         }
         else if(_fightType == "haidao")
         {
            KTool.getLimitNum(14051,function(param1:int):void
            {
               if(param1 > 20)
               {
                  Alarm.show("你挑战次数已达上限，不再获得奖励！");
               }
            });
         }
      }
      
      private static function onTask(param1:MouseEvent) : void
      {
         switch(param1.target.name)
         {
            case "geleer":
               if(!isTaskDone)
               {
                  onNPC();
               }
               else
               {
                  fight("geleer");
               }
               break;
            case "haidao":
               fight("haidao");
               SocketConnection.send(1022,86067350);
         }
      }
      
      public static function fight(param1:String) : void
      {
         var type:String = param1;
         _fightType = type;
         if(type == "geleer")
         {
            getItemCount(function():void
            {
               if(!isItemEnough)
               {
                  NpcDialog.show(NPC.GELEER,["没有找到足够的三种能源，我是不会让你们通过的！乖乖去挑战海盗，收集三种能源吧！"],["挑战海盗！","打开面板","我放弃！"],[function():void
                  {
                     fight("haidao");
                  },function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("StrongKnightMainPanel"));
                  }]);
               }
               else
               {
                  MapObjectControl.hideOrShowAllObjects(false);
                  AnimateManager.playMcAnimate(taskMc,4,"mc4",function():void
                  {
                     SocketConnection.sendWithCallback(46087,function(param1:SocketEvent):void
                     {
                        BonusController.addDelay(BONUS_ID);
                        MapObjectControl.hideOrShowAllObjects(true);
                        FightManager.fightNoMapBoss("格勒尔",380);
                     });
                  });
               }
            });
         }
         else if(type == "haidao")
         {
            FightManager.fightNoMapBoss("海盗",381);
         }
      }
      
      public static function getItemCount(param1:Function = null) : void
      {
         var func:Function = param1;
         ItemManager.updateItems([itemObj.ice.item,itemObj.grass.item,itemObj.light.item],function():void
         {
            var _loc1_:String = null;
            for(_loc1_ in itemObj)
            {
               itemObj[_loc1_].count = ItemManager.getNumByID(itemObj[_loc1_].item);
            }
            if(null != func)
            {
               func(itemObj);
            }
         });
      }
      
      private static function startPreTask() : void
      {
         var story:Array;
         var storyPlayer:TaskStoryPlayer = null;
         MapObjectControl.hideOrShowAllObjects(false);
         KTool.hideMapAllPlayerAndMonster();
         CommonUI.removeYellowExcal(_map.topLevel);
         SocketConnection.send(1022,86067348);
         story = [[TaskStoryPlayer.MAP_MOVIE,[taskMc,1,"mc1"]],[TaskStoryPlayer.DIALOG,[NPC.GELEER,["卡希尔！哦，不！应该是圣甲之灵卡希尔。实力好像比以前更强大了啊！"],["废话少说！"]]],[TaskStoryPlayer.DIALOG,[NPC.KAXIER,["你在这里做什么？我不希望你和弗斯特一样，成为我们的敌人！"],["那你可能要失望了！"]]],[TaskStoryPlayer.DIALOG,[NPC.GELEER,["想要寻找泰坦星系的秘密，先过了我这一关！"],["怕你不成？"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,2,"mc2"]],[TaskStoryPlayer.DIALOG,[NPC.GELEER,["自不量力！就这点实力还想来探索泰坦星系？"],["可恶！"]]],[TaskStoryPlayer.DIALOG,[NPC.SEER,["我们跟你井水不犯河水，你到底想怎么样？"],["这是我的职责！"]]],[TaskStoryPlayer.DIALOG,[NPC.GELEER,["卡希尔离开这里之后，魔灵星就交由我守卫！想要进入魔灵星，得先过了我这一关！"],["怎么过？"]]],[TaskStoryPlayer.DIALOG,[NPC.GELEER,["海盗趁我不备，抢了这里的能源。你只要找到三种，我就放你们走！" + MainManager.actorInfo.formatNick + "，看你的实力了！"],["又是可恶的海盗！"]]],[TaskStoryPlayer.MAP_MOVIE,[taskMc,3,"mc3"]]];
         storyPlayer = new TaskStoryPlayer();
         storyPlayer.addStory(story);
         storyPlayer.storyEndCallback = function():void
         {
            storyPlayer.destory();
            MapObjectControl.hideOrShowAllObjects(true);
            KTool.showMapAllPlayerAndMonster();
            BufferRecordManager.setMyState(PRE_TASK,true,function():void
            {
               SocketConnection.send(1022,86067349);
               taskMc.gotoAndStop(7);
               NpcDialog.show(NPC.SEER,["我一定会击败你们，拿回魔灵星的能源"],["（打击海盗，收集能源，挑战格勒尔）"],[function():void
               {
                  ModuleManager.showModule(ClientConfig.getAppModule("StrongKnightMainPanel"));
               }]);
            });
         };
         storyPlayer.start();
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            if(taskMc)
            {
               taskMc.removeEventListener(MouseEvent.CLICK,onTask);
               DisplayUtil.removeForParent(taskMc);
               _taskMc = null;
            }
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            CommonUI.removeYellowExcal(_map.topLevel);
            _map = null;
         }
      }
      
      private static function get isItemEnough() : Boolean
      {
         var _loc1_:String = null;
         for(_loc1_ in itemObj)
         {
            if(itemObj[_loc1_].count < itemObj[_loc1_].limit)
            {
               return false;
            }
         }
         return true;
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(PRE_TASK);
      }
      
      private static function set taskMc(param1:MovieClip) : void
      {
         _taskMc = param1;
      }
      
      private static function get taskMc() : MovieClip
      {
         return _taskMc;
      }
   }
}

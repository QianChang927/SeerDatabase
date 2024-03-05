package com.robot.app.mapProcess.active
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class MushRoomActive
   {
      
      private static var _b:BaseMapProcess;
      
      private static var _p:MovieClip;
      
      private static var timeStr:String = "1月29日-2月4日";
      
      private static var timeHourStr:String = "16:00-18:00";
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","16-17","29-31","1","*","2016"),new CronTimeVo("*","16-17","1-4","2","*","2016")]);
      
      private static var preFightBoss:Boolean = false;
       
      
      public function MushRoomActive()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _b = param1;
         _b.conLevel["activeStone"].addEventListener(MouseEvent.CLICK,onShowPanel);
         activeMC.addEventListener(MouseEvent.CLICK,onShowDialiog);
         activeMC.buttonMode = true;
         activeDoor.addEventListener(MouseEvent.CLICK,onShowBoss);
         activeDoor.buttonMode = true;
         activeMC.mouseChildren = false;
         checkState();
         if(TasksManager.getTaskStatus(1223) == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(_b.conLevel["adGuide"]);
         }
      }
      
      private static function checkState() : void
      {
         if(isOver)
         {
            if(_b.conLevel["adGuide"])
            {
               _b.conLevel["adGuide"].visible = false;
            }
            activeMC.visible = _b.conLevel["activeStone"].visible = false;
            activeDoor.mouseChildren = activeDoor.mouseEnabled = false;
            return;
         }
         if(isInActive)
         {
            activeMC.gotoAndStop(3);
         }
         else if(BufferRecordManager.getState(MainManager.actorInfo,923))
         {
            activeMC.gotoAndStop(3);
         }
         else
         {
            activeMC.gotoAndStop(1);
         }
      }
      
      private static function onShowBoss(param1:MouseEvent) : void
      {
         var onCheck:Function = null;
         var e:MouseEvent = param1;
         if(isInActive)
         {
            onCheck = function(param1:ItemEvent):void
            {
               var e:ItemEvent = param1;
               ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCheck);
               if(Boolean(ItemManager.getCollectionInfo(1200076)) && ItemManager.getCollectionInfo(1200076).itemNum > 4)
               {
                  KTool.hideMapAllPlayerAndMonster();
                  AnimateManager.playMcAnimate(activeMC,4,"mc",function():void
                  {
                     preFightBoss = true;
                     onShowDialiog(null);
                  });
               }
               else
               {
                  SimpleAlarm.show("蘑菇精华不足，快去与阿彩、彩色菇战斗吧！");
               }
            };
            ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCheck);
            ItemManager.upDateCollection(1200076);
         }
         else
         {
            SimpleAlarm.show("只有" + timeStr + "的 " + timeHourStr + "用蘑菇精华可以打开监狱的门");
         }
      }
      
      private static function onShowDialiog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(preFightBoss)
         {
            SocketConnection.sendWithCallback(CommandID.MUSH_ROOM_SHOW_BOSS,function():void
            {
               FightManager.fightWithBoss("芙拉萝儿");
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            });
         }
         else if(activeMC.currentFrame == 1)
         {
            KTool.hideMapPlayerAndMonster();
            AnimateManager.playMcAnimate(activeMC,2,"mc",function():void
            {
               NpcDialog.show(NPC.SEER,["你是谁？为什么一个人在这里哭？"],["我没用，救不了爸爸妈妈……"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["你爸爸妈妈怎么了？"],["他们被邪恶四灵抓起来了"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["岂有此理，又是邪恶四灵，这帮横行霸道的家伙！"],["你能帮我救救他们吗"],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["怎么才能救出你爸爸妈妈呢？"],["只有蘑菇精华才能开门"],[function():void
                        {
                           NpcDialog.show(NPC.HUOYANBEI,["打败阿彩、彩色菇可以得到蘑菇精华，每天" + timeHourStr + "用蘑菇精华可以打开荆棘之门，我的爸爸妈妈就被关在里面"],["你等着！我一定会来！"],[function():void
                           {
                              KTool.showMapAllPlayerAndMonster();
                              BufferRecordManager.setState(MainManager.actorInfo,563,true);
                              activeMC.gotoAndStop(3);
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            });
         }
         else if(isInActive)
         {
            NpcDialog.show(NPC.HUOYANBEI,["现在如果有足够的蘑菇精华就可以救我的爸爸妈妈啦，你能帮我打败阿彩、彩色菇吗？"],["你等着我的好消息！"],[function():void
            {
            }]);
         }
         else
         {
            NpcDialog.show(NPC.HUOYANBEI,["打败阿彩、彩色菇可以得到蘑菇精华，每天" + timeHourStr + "用蘑菇精华可以打开荆棘之门，我的爸爸妈妈就被关在里面"],["你等着！我一定会来！"],[function():void
            {
            }]);
         }
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         var info:FightOverInfo;
         var e:PetFightEvent = param1;
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
         info = e.dataObj as FightOverInfo;
         if(info.winnerID == MainManager.actorID)
         {
            KTool.hideMapAllPlayerAndMonster();
            activeMC.mouseEnabled = false;
            _b.conLevel["road"].mouseEnabled = false;
            AnimateManager.playMcAnimate(activeMC,5,"mc",function():void
            {
               if(MapManager.currentMap.id != 725)
               {
                  return;
               }
               activeMC.mouseEnabled = true;
               _b.conLevel["road"].mouseEnabled = true;
               KTool.showMapAllPlayerAndMonster();
               checkState();
            });
         }
      }
      
      private static function onShowPanel(param1:MouseEvent) : void
      {
         var onCheck:Function = null;
         var e:MouseEvent = param1;
         onCheck = function(param1:ItemEvent):void
         {
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,onCheck);
            if(ItemManager.getCollectionInfo(1200076))
            {
               _p["numText"].text = ItemManager.getCollectionInfo(1200076).itemNum;
            }
            else
            {
               _p["numText"].text = 0;
            }
         };
         if(TasksManager.getTaskStatus(1223) != TasksManager.COMPLETE)
         {
            TasksManager.accept(1223,function():void
            {
               TasksManager.complete(1223,0,function():void
               {
                  DisplayUtil.removeForParent(_b.conLevel["adGuide"]);
                  onShowPanel(null);
               });
            });
            return;
         }
         if(!_p)
         {
            _p = MapManager.currentMap.libManager.getMovieClip("adpanel");
            _p["txt_time"].text = "活动时间：" + timeStr + " " + timeHourStr;
            _p["closeBtn"].addEventListener(MouseEvent.CLICK,onClose);
         }
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,onCheck);
         ItemManager.upDateCollection(1200076);
         LevelManager.appLevel.addChild(_p);
         DisplayUtil.align(_p,null,AlignType.MIDDLE_CENTER);
         LevelManager.closeMouseEvent();
      }
      
      private static function onClose(param1:MouseEvent) : void
      {
         LevelManager.appLevel.removeChild(_p);
         LevelManager.openMouseEvent();
      }
      
      public static function destroy() : void
      {
         if(_p)
         {
            _p["closeBtn"].removeEventListener(MouseEvent.CLICK,onClose);
            _p = null;
         }
         preFightBoss = false;
         KTool.showMapAllPlayerAndMonster();
      }
      
      private static function get activeDoor() : MovieClip
      {
         return _b.conLevel["activeDoor"];
      }
      
      private static function get activeMC() : MovieClip
      {
         return _b.conLevel["activeMC"];
      }
      
      private static function get isInActive() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      private static function get isOver() : Boolean
      {
         return AC.isPast;
      }
      
      public static function get actID() : String
      {
         return "20120425_allenjiang_mushroom";
      }
   }
}

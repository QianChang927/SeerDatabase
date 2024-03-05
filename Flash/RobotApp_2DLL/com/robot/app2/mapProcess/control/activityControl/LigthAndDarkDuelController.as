package com.robot.app2.mapProcess.control.activityControl
{
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.ItemEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.userItem.SingleItemInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class LigthAndDarkDuelController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var flag1:uint;
      
      private static var flag2:uint;
       
      
      public function LigthAndDarkDuelController()
      {
         super();
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.LIGHT_AND_DRAK_MERITORIOUS,onGiveMeritorious);
      }
      
      private static function onGiveMeritorious(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         flag1 = _loc2_.readUnsignedInt();
         flag2 = _loc2_.readUnsignedInt();
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
      }
      
      public static function initForMap756(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(isAcitiveTime)
         {
            if(BufferRecordManager.getState(MainManager.actorInfo,517))
            {
               DisplayUtil.removeForParent(taskMC);
               (_map.conLevel["btn"] as SimpleButton).addEventListener(MouseEvent.CLICK,onClick);
            }
            else
            {
               (_map.conLevel["btn"] as SimpleButton).visible = false;
               taskMC.buttonMode = true;
               taskMC.addEventListener(MouseEvent.CLICK,taskPro);
            }
         }
         else
         {
            DisplayUtil.removeForParent(taskMC);
            DisplayUtil.removeForParent(_map.conLevel["btn"]);
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LigthAndDarkDuelPanel"));
      }
      
      private static function taskPro(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MapManager.currentMap.root.swapChildren(_map.topLevel,_map.conLevel);
         AnimateManager.playMcAnimate(taskMC,2,"mc2",function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130111_1"),function():void
            {
               AnimateManager.playMcAnimate(taskMC,3,"mc3",function():void
               {
                  AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20130111_2"),function():void
                  {
                     BufferRecordManager.setState(MainManager.actorInfo,517,true);
                     MapManager.currentMap.root.swapChildren(_map.conLevel,_map.topLevel);
                     (_map.conLevel["btn"] as SimpleButton).visible = true;
                     (_map.conLevel["btn"] as SimpleButton).addEventListener(MouseEvent.CLICK,onClick);
                     taskMC.removeEventListener(MouseEvent.CLICK,taskPro);
                     DisplayUtil.removeForParent(taskMC);
                     SocketConnection.send(1022,86053952);
                  });
               });
            });
         });
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["lightAndDrak"];
      }
      
      private static function onFightFinish(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         if(flag1 == 0)
         {
            if(flag2 == 0)
            {
               Alarm.show("恭喜你得到一点天使功勋");
            }
            else
            {
               checkValue();
            }
         }
         else if(flag2 == 0)
         {
            Alarm.show("恭喜你得到一点恶魔功勋");
         }
         else
         {
            checkValue();
         }
      }
      
      private static function checkValue() : void
      {
         ItemManager.addEventListener(ItemEvent.COLLECTION_LIST,function(param1:ItemEvent):void
         {
            ItemManager.removeEventListener(ItemEvent.COLLECTION_LIST,arguments.callee);
            var _loc3_:SingleItemInfo = ItemManager.getCollectionInfo(1200496 + flag1);
            if(_loc3_)
            {
               if(flag1 == 0)
               {
                  Alarm.show("很遗憾，由于你从战斗中逃跑，扣除了一点天使功勋！");
               }
               if(flag1 == 1)
               {
                  Alarm.show("很遗憾，由于你从战斗中逃跑，扣除了一点恶魔功勋！");
               }
            }
         });
         ItemManager.getCollection();
      }
      
      private static function get isAcitiveTime() : Boolean
      {
         return true;
      }
      
      public static function destroy() : void
      {
         if(taskMC)
         {
            taskMC.removeEventListener(MouseEvent.CLICK,onClick);
         }
         (_map.conLevel["btn"] as SimpleButton).removeEventListener(MouseEvent.CLICK,onClick);
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightFinish);
         _map = null;
      }
   }
}
